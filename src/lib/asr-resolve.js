import ParseArgumentString from "./asr-parse-argument-string";
import Populate from "./asr-populate";
import ResolveConfigBinders from "./asr-resolve-config-binders";

export default class Resolve {
  /* DevNote: Since this class is very procedural with lots of variables
    to set I choose to set those as class variables throughout all class methods,
    instead of passing them through. I know this is often considered as an anti-pattern,
    but here it's done intentionally to keep the code concise.
    * */

  constructor(Router) {
    // Bind helper classes

    this.ParseArgumentString = new ParseArgumentString();
    this.ResolveConfigBinders = new ResolveConfigBinders();

    // Parse the bindings as set in the Router

    this.parseBindingsForComputed(Router, this.ParseArgumentString);
    this.parseBindingsForMethods(Router, this.ParseArgumentString);

    // Parse the binding configuration

    this.parseBindersConfig(Router, this.ResolveConfigBinders);

    // Merge all parsed bindings

    this.mergeBindersArraysForComputed(Router);
    this.mergeBindersArraysForMethods(Router);

    // Populate the instance with the parsed binders

    new Populate(Router, this);
  }

  parseBindingsForComputed(Router, ParseArgumentString) {
    this.bindersState = ParseArgumentString.parse(
      Router.routingProps.asrBindState,
      "state"
    );

    this.bindersGetters = ParseArgumentString.parse(
      Router.routingProps.asrBindGetters,
      "getters"
    );

    this.bindersConfig = ParseArgumentString.parse(
      Router.routingProps.asrBindConfig,
      "config"
    );

    this.bindersPasses = ParseArgumentString.parse(
      Router.routingProps.asrPass,
      "pass"
    );
  }

  parseBindingsForMethods(Router, ParseArgumentString) {
    this.bindersMutations = ParseArgumentString.parse(
      Router.routingProps.asrBindMutations,
      "mutations"
    );

    this.bindersActions = ParseArgumentString.parse(
      Router.routingProps.asrBindActions,
      "actions"
    );

    this.bindersMutations.map(item => {
      delete item.isVModel;
      return item;
    });

    this.bindersActions.map(item => {
      delete item.isVModel;
      return item;
    });
  }

  parseBindersConfig(Router, ResolveConfigBinders) {
    // Since asrbindconfig should contain an array of binding objects
    // these bindings are resolved here.

    this.resolvedConfigBinders = ResolveConfigBinders.parseBindersConfig(
      Router.vueInstance,
      this.bindersConfig
    );

    if (!this.resolvedConfigBinders) {
      return;
    }

    // Now we split the resolved configbinders into an array for resolving into the
    // computed property and one for resolving the methods property of the component.

    this.configBindersForComputed = this.resolvedConfigBinders.filter(item => {
      return (
        item.binderType === "state" ||
        item.binderType === "getters" ||
        item.binderType === false ||
        item.binderType === null
      );
    });

    this.configBindersForMethods = this.resolvedConfigBinders.filter(item => {
      return item.binderType === "mutations" || item.binderType === "actions";
    });

    // Report all the resolved config bindings

    const cloneResolvedConfigBinders = Object.assign(
      [],
      this.resolvedConfigBinders
    );

    Router.Report.pushMessage(
      "Config Binders where resolved",
      cloneResolvedConfigBinders,
      "array",
      "Resolve.parseBindersConfig"
    );
  }

  mergeBindersArraysForComputed(Router) {
    // (Re)initialize binders

    this.bindersState = this.bindersState !== null ? this.bindersState : [];
    this.bindersGetters =
      this.bindersGetters !== null ? this.bindersGetters : [];
    this.bindersConfig = this.bindersConfig !== null ? this.bindersConfig : [];
    this.configBindersForComputed =
      this.configBindersForComputed !== undefined
        ? this.configBindersForComputed
        : [];

    // Merge the arrays into one

    this.bindersArrayForComputed = [
      ...this.bindersState,
      ...this.bindersGetters,
      ...this.bindersConfig,
      ...this.configBindersForComputed
    ];

    // Report

    const cloneBindersArray = Object.assign([], this.bindersArrayForComputed);

    Router.Report.pushMessage(
      "BindersArray for Computed has been set:",
      cloneBindersArray,
      "array",
      "Resolve.mergeBindersArraysForComputed"
    );
  }

  mergeBindersArraysForMethods(Router) {
    // (Re)initialize binders

    this.bindersMutations =
      this.bindersMutations !== null ? this.bindersMutations : [];
    this.bindersActions =
      this.bindersActions !== null ? this.bindersActions : [];
    this.configBindersForMethods =
      this.configBindersForMethods !== undefined
        ? this.configBindersForMethods
        : [];

    // Merge the arrays into one

    this.bindersArrayForMethods = [
      ...this.bindersMutations,
      ...this.bindersActions,
      ...this.configBindersForMethods
    ];

    // Report

    const cloneBindersArray = Object.assign([], this.bindersArrayForMethods);

    Router.Report.pushMessage(
      "BindersArray for Methods has been set:",
      cloneBindersArray,
      "array",
      "Resolve.mergeBindersArraysForMethods"
    );
  }
}
