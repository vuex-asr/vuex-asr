import { mapGetters, mapState } from "vuex";

export default class PopulateComputed {
  constructor(Router) {
    // Initialize dependencies

    this.vueInstance = Router.vueInstance;
    this.Report = Router.Report;
    this.RemoveOldBindings = Router.RemoveOldBindings;
    this.Resolve = Router.Resolve;
    this.routingProps = Router.routingProps;
  }

  createMappings(bindersArray, passesArray) {
    // Here we terminate the inserted items with a start and end registration.
    // The next (!!) instance that is rendered needs to delete the bindings
    // that are going to be set below.
    // See './asr-remove-old-bindings.js' (method: unSetAsrComputed)

    this.setEmptyComputedMethod("asrRegisterStart", "Here the register starts");
    this.unsetLocalVariables(bindersArray);
    this.createMappingsFromBindersArray(bindersArray);
    this.createMappingsFromPassesArray(passesArray);
    this.setEmptyComputedMethod("asrRegisterEnd", "Here the register end");
  }

  // Helper method for register termination

  setEmptyComputedMethod(registerName, registerMessage) {
    const mapStateObject = {
      ...mapState({
        [registerName]: () => registerMessage
      })
    };
    this.vueInstance.$options.computed[registerName] =
      mapStateObject[registerName];
  }

  // Unset local variables in data() object to overwrite them with store bindings

  unsetLocalVariables(bindersArray) {
    const clone = {...this.vueInstance};
    const dataFunction = clone.$options.data;
    const dataFunctionDataBefore = dataFunction();
    let dataFunctionDataAfter = {...dataFunctionDataBefore};

    bindersArray.forEach(item => {
      const bindName = (item.alias.length > 0) ? item.alias:item.bind;

      if(dataFunctionDataBefore.hasOwnProperty(bindName)) {
        console.log("bindName", bindName);
        delete dataFunctionDataAfter[bindName];
      }
    });

    const newDataFunctionForVueInstance = function(){
      return dataFunctionDataAfter;
    };

    this.vueInstance.$options.data = newDataFunctionForVueInstance;

    const messageObject = {
      before: dataFunctionDataBefore,
      after: dataFunctionDataAfter
    };

    this.Report.pushMessage(
        `Local Data has been overwritten by store items:`,
        messageObject,
    );
  }



  // In this method we iterate over the bindersArray

  createMappingsFromBindersArray(bindersArray) {
    bindersArray.forEach(item => {
      let mapStateObject = {};

      // Verbosity below is intentionally, to try and keep an overview of the options

      const noNamespace = item.namespace === null;
      const state = this.vueInstance.$store.state;
      const noAlias = item.alias === null;
      const hasAlias = item.alias !== null;
      const isVModel = item.isVModel === true;
      const notAVModel = item.isVModel === false || item.isVModel === null;

      // We split the the mapping into notNamespaced and namespaced for sanity

      if (noNamespace) {
        this.mapNotNamespaced(
          item,
          state,
          mapStateObject,
          hasAlias,
          noAlias,
          isVModel,
          notAVModel
        );
      } else {
        this.mapNamespaced(
          item,
          state,
          mapStateObject,
          hasAlias,
          noAlias,
          isVModel,
          notAVModel
        );
      }
    });
  }

  // Map passes

  createMappingsFromPassesArray(passesArray) {
    passesArray.forEach(item => {
      const hasAlias = item.alias !== null;

      if (hasAlias) {
        this.vueInstance.$options.computed[item.alias] = {
          get() {
            return this.$parent[item.bind];
          },
          set(value) {
            this.$parent[item.bind] = value;
          }
        };
      } else {
        this.vueInstance.$options.computed[item.bind] = {
          get() {
            return this.$parent[item.bind];
          },
          set(value) {
            this.$parent[item.bind] = value;
          }
        };
      }
    });
  }

  // ...

  mapNotNamespaced(
    item,
    state,
    mapStateObject,
    hasAlias,
    noAlias,
    isVModel,
    notAVModel
  ) {
    // NO alias NOT a v-model

    if (noAlias && notAVModel) {
      if (item.binderType === "getters") {
        mapStateObject = {
          ...mapGetters([item.bind])
        };
      } else {
        mapStateObject = {
          ...mapState([item.bind])
        };
      }
      this.vueInstance.$options.computed[item.bind] = mapStateObject[item.bind];
      this.reportMapping(
        "noNamespace && noAlias && notAVModel",
        mapStateObject,
        item
      );
    }

    // NO alias IS v-model
    else if (noAlias && isVModel) {
      mapStateObject = {
        [item.bind]: {
          get() {
            return state[item.bind];
          },
          set(value) {
            state[item.bind] = value;
          }
        }
      };
      this.vueInstance.$options.computed[item.bind] = mapStateObject[item.bind];
      this.reportMapping(
        "noNamespace && noAlias && isVModel",
        mapStateObject,
        item
      );
    }

    // WITH alias NOT a v-model
    else if (hasAlias && notAVModel) {
      if (item.binderType === "getters") {
        mapStateObject = {
          ...mapGetters({
            [item.alias]: item.bind
          })
        };
      } else {
        mapStateObject = {
          ...mapState({
            [item.alias]: state => state[item.bind]
          })
        };
      }
      this.vueInstance.$options.computed[item.alias] =
        mapStateObject[item.alias];
      this.reportMapping(
        "noNamespace && hasAlias && notAVModel",
        mapStateObject,
        item
      );
    }

    // WITH alias IS v-model
    else if (hasAlias && isVModel) {
      mapStateObject = {
        [item.alias]: {
          get() {
            return state[item.bind];
          },
          set(value) {
            state[item.bind] = value;
          }
        }
      };
      this.vueInstance.$options.computed[item.alias] =
        mapStateObject[item.alias];
      this.reportMapping(
        "noNamespace && hasAlias && isVModel",
        mapStateObject,
        item
      );
    }
  }

  // ...

  mapNamespaced(
    item,
    state,
    mapStateObject,
    hasAlias,
    noAlias,
    isVModel,
    notAVModel
  ) {
    const namespace = this.resolveNamespace(state, item.namespace);
    const namespacedBinding = item.namespace + "/" + item.bind;

    // NO alias NOT a v-model

    if (noAlias && notAVModel) {
      if (item.binderType === "getters") {
        mapStateObject = {
          ...mapGetters({
            [item.bind]: namespacedBinding
          })
        };
      } else {
        mapStateObject = {
          ...mapState(item.namespace, [item.bind])
        };
      }
      this.vueInstance.$options.computed[item.bind] = mapStateObject[item.bind];
      this.reportMapping(
        "hasNamespace && noAlias && notAVModel",
        mapStateObject,
        item
      );
    }

    // NO alias IS v-model
    else if (noAlias && isVModel) {
      mapStateObject = {
        [item.bind]: {
          get() {
            return namespace[item.bind];
          },
          set(value) {
            namespace[item.bind] = value;
          }
        }
      };
      this.vueInstance.$options.computed[item.bind] = mapStateObject[item.bind];
      this.reportMapping(
        "hasNamespace && noAlias && isVModel",
        mapStateObject,
        item
      );
    }

    // WITH alias NOT a v-model
    else if (hasAlias && notAVModel) {
      if (item.binderType === "getters") {
        mapStateObject = {
          ...mapGetters({
            [item.alias]: namespacedBinding
          })
        };
      } else {
        mapStateObject = {
          ...mapState({
            [item.alias]: () => namespace[item.bind]
          })
        };
      }
      this.vueInstance.$options.computed[item.alias] =
        mapStateObject[item.alias];
      this.reportMapping(
        "hasNamespace && hasAlias && notAVModel",
        mapStateObject,
        item
      );
    }

    // WITH alias IS a v-model
    else if (hasAlias && isVModel) {
      mapStateObject = {
        [item.alias]: {
          get() {
            return namespace[item.bind];
          },
          set(value) {
            namespace[item.bind] = value;
          }
        }
      };
      this.vueInstance.$options.computed[item.alias] =
        mapStateObject[item.alias];
      this.reportMapping(
        "hasNamespace && hasAlias && isVModel",
        mapStateObject,
        item
      );
    }
  }

  // Return a namespace in the state

  resolveNamespace(state, namespaceString) {
    // first create array of namespace items
    const namespaceArray = namespaceString.split("/");

    let resolvedState = state;

    namespaceArray.forEach(nameSpaceSegment => {
      resolvedState = resolvedState[nameSpaceSegment];
    });

    return resolvedState;
  }

  // Helper method to report the mapping to the Report bus

  reportMapping(mappingSwitch, mapStateObject, item) {
    const data = {};
    data.item = item;
    const itemRoute = item.namespace
      ? `${item.namespace}/${item.bind}`
      : item.bind;

    this.Report.pushMessage(
      `Mapping done for state bin "${itemRoute}" with directives: ${mappingSwitch}`,
      item,
      "array",
      "PopulateComputed (class procedure)"
    );
  }
}
