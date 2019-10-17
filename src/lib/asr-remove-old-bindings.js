export default class RemoveOldBindings {
  /*
        Once a component is set with bindings all new instances of this component
        will have those bindings too.

        To keep track of what bindings are set by this plugin we use a register.

        We assume this instance has new bindings, so in this class we deregister
        all bindings that were previously set by this plugin.
     */

  constructor(vueInstance) {
    const computed = vueInstance.$options.computed;
    const methods = vueInstance.$options.methods;

    if (computed) {
      const computedKeys = this.getComputedKeys(computed);
      this.unSetAsrComputed(vueInstance, computedKeys);
    }

    if (methods) {
      const methodKeys = this.getMethodKeys(methods);
      this.unSetAsrMethods(vueInstance, methodKeys);
    }
  }

  getComputedKeys(computed) {
    return computed ? Object.getOwnPropertyNames(computed) : null;
  }

  getMethodKeys(methodKeys) {
    return methodKeys ? Object.getOwnPropertyNames(methodKeys) : null;
  }

  unSetAsrComputed(vueInstance, computedKeys) {
    if (computedKeys.length > 0 && computedKeys.includes("asrRegisterStart")) {
      // We are dependent on the order of the array!!

      let deregister = false;

      computedKeys.forEach(item => {
        if (item === "asrRegisterStart") {
          deregister = true;
        }

        if (deregister) {
          delete vueInstance.$options.computed[item];
        }

        if (item === "asrRegisterEnd") {
          deregister = false;
        }
      });
    }
  }

  unSetAsrMethods(vueInstance, methodKeys) {
    if (methodKeys.length > 0 && methodKeys.includes("asrRegisterStart")) {
      // We are dependent on the order of the array!!

      let deregister = false;

      methodKeys.forEach(item => {
        if (item === "asrRegisterStart") {
          deregister = true;
        }

        if (deregister) {
          delete vueInstance.$options.methods[item];
        }

        if (item === "asrRegisterEnd") {
          deregister = false;
        }
      });
    }
  }
}
