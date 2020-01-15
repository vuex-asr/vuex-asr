import Router from "./lib/asr-router";
import RemoveOldBindings from "./lib/asr-remove-old-bindings";

const VuexAsr = {
  install: function(Vue) {
    Vue.mixin({
      /*
                  Props

                  The 'props' array below translates into the directives of this plugin.
            */

      props: {
        asrBindState: {
          type: String,
          default: null
        },
        asrBindGetters: {
          type: String,
          default: null
        },
        asrBindMutations: {
          type: String,
          default: null
        },
        asrBindActions: {
          type: String,
          default: null
        },
        asrBindConfig: {
          type: String,
          default: null
        },
        asrPass: {
          type: String,
          default: null
        },
        asrDebug: {
          type: Boolean,
          default: false
        }
      },

      // Add computed to make sure there is a computed property on each component

      computed: {},

      /*
                  beforeCreate()

                  The plugin injects a Vue instance's store dependencies during the
                  beforeCreate lifecycle of it. In this lifecycle the component is not yet
                  instantiated and has no access to it's local data.
             */

      beforeCreate() {
        // A lot of vue instances don't have $options set
        // In that case we can escape execution of this plugin here.

        if (this.hasOwnProperty("$options") === false) {
          return;
        }

        // Once a component with bindings has been instantiated
        // the new instance will 'inherit' those bindings.
        // So if so we'll first remove them.

        new RemoveOldBindings(this);

        // Now the router will proceed further execution of the plugin

        new Router(this);
      },

      // BELOW CANDIDATE TO REMOVE FROM REPOSITORY, too specific

      /*
                  Methods

                  A global helper method '$instance' allows you to point to
                  component attributes from within a template with the use of a string.
                  This comes in handy when you need to render actual data attributes and bind
                  them to the available data endpoints of the instance.

                      <example-component v-model="$instance('nameOfAvailableDataAttribute')">

                  this will create an active v-model, for 'this.nameOfAvailableDataAttribute'
                  which could be a local data attribute or a store bound one of course.
            */

      methods: {
        $instance(stringValue) {
          return this[stringValue];
        }
      }
    });
  }
};

export default VuexAsr;
