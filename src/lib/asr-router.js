import Resolve from "./asr-resolve";
import Report from "./asr-report";

export default class Router {
  /*
        In this class we check what properties an instance of the component
        was set with and initialize those.
     */

  constructor(vueInstance) {
    this.vueInstance = vueInstance;

    // Stop further execution of the plugin in case the component
    // could not be bootstrapped for further processing;

    if (this.hasPropsData(this.vueInstance) === false) {
      return;
    }

    // We should only proceed if the component
    // has bindings or passes. (Prevent overload)

    if (this.hasNoBindings(vueInstance)) {
      return;
    }

    // Initialize routing props

    this.routingProps = this.getRoutingProps(this.vueInstance);

    // The Report will contain a message-bus for the plugin
    // and is available as 'this.Report' in all the classes.

    this.Report = new Report(this.vueInstance);

    // To prevent overload we instantiate Resolve not until here.
    // We pass this Router class to give access to it's attributes.

    this.Resolve = new Resolve(this);

    // Content for a report has been set throughout this plugin
    // and if 'asr-debug' has been set on the component the
    // report will be published in the console.

    this.handleReport(this.vueInstance);
  }

  // ...

  hasNoBindings(vueInstance) {
    return (
      this.hasComputed(vueInstance) === false &&
      this.hasMethods(vueInstance) == false &&
      this.hasPasses(vueInstance) === false &&
      this.hasConfiguration(vueInstance) === false
    );
  }

  // ...

  hasPropsData(vueInstance) {
    return vueInstance.$options["propsData"] !== undefined;
  }

  // ...

  hasComputed(vueInstance) {
    return (
      vueInstance.$options.propsData["asrBindState"] !== undefined ||
      vueInstance.$options.propsData["asrBindGetters"] !== undefined
    );
  }

  // Methods in ASR might contain mutations and or actions

  hasMethods(vueInstance) {
    return (
      vueInstance.$options.propsData["asrBindMutations"] !== undefined ||
      vueInstance.$options.propsData["asrBindActions"] !== undefined
    );
  }

  // ...

  hasPasses(vueInstance) {
    return vueInstance.$options.propsData["asrPass"] !== undefined;
  }

  // ...

  hasConfiguration(vueInstance) {
    return vueInstance.$options.propsData["asrBindConfig"] !== undefined;
  }

  // Get the (string) data that has been set in the plugin's props

  getRoutingProps(vueInstance) {
    const props = {};
    const computed = vueInstance.$options.computed;
    props.computed =
      computed !== undefined && typeof computed == "object" ? computed : false;
    props.asr =
      vueInstance.$options.propsData["asr"] !== undefined
        ? vueInstance.$options.propsData["asr"]
        : false;
    props.asrBindState =
      vueInstance.$options.propsData["asrBindState"] !== undefined
        ? vueInstance.$options.propsData["asrBindState"]
        : false;
    props.asrBindGetters =
      vueInstance.$options.propsData["asrBindGetters"] !== undefined
        ? vueInstance.$options.propsData["asrBindGetters"]
        : false;
    props.asrBindMutations =
      vueInstance.$options.propsData["asrBindMutations"] !== undefined
        ? vueInstance.$options.propsData["asrBindMutations"]
        : false;
    props.asrBindActions =
      vueInstance.$options.propsData["asrBindActions"] !== undefined
        ? vueInstance.$options.propsData["asrBindActions"]
        : false;
    props.asrBindConfig =
      vueInstance.$options.propsData["asrBindConfig"] !== undefined
        ? vueInstance.$options.propsData["asrBindConfig"]
        : false;
    props.asrPass =
      vueInstance.$options.propsData["asrPass"] !== undefined
        ? vueInstance.$options.propsData["asrPass"]
        : false;
    props.asrDebug =
      vueInstance.$options.propsData["asrDebug"] !== false
        ? vueInstance.$options.propsData["asrDebug"]
        : false;
    return props;
  }

  // ...

  handleReport(vueInstance) {
    // Report actual state of 'vueInstance.$options.computed'

    this.Report.pushMessage(
      "Computed after resolving: ",
      vueInstance.$options.computed,
      "object",
      "Router.constructor"
    );

    // Report actual state of 'vueInstance.$options.methods'

    this.Report.pushMessage(
      "Methods after resolving: ",
      vueInstance.$options.methods,
      "object",
      "Router.constructor"
    );

    // Generate a report only if the directive asrDebug is set
    // on the instance e.g.
    //   <example-component asr-debug>...</example-comp ....>

    if (this.routingProps.asrDebug) {
      this.Report.generateReport();
    }
  }
}
