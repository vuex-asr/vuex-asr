export default class ResolveConfigBinders {
  parseBindersConfig(vueInstance, bindersConfig) {
    // make sure the resolving stops when there is no input

    if (
      bindersConfig === null ||
      bindersConfig.length === 0 ||
      bindersConfig === undefined ||
      bindersConfig === false
    ) {
      return null;
    }

    // each of the bindersConfigs needs to be resolved first
    // This means the address of the config, to also make the
    // config itself available to the component.
    // This offers the ability to iterate over the configuration
    // data inside your component, in the Learn by Example section
    // there are some examples of what this feature has to offer.

    let storeConfigItems = [];

    bindersConfig.forEach(binderItem => {
      let storeLocationObject = {};

      if (
        binderItem.namespace === null ||
        bindersConfig === undefined ||
        bindersConfig === false
      ) {
        storeConfigItems.push(vueInstance.$store.state[binderItem.bind]);
      } else {
        const namespace = this.resolveNamespace(
          vueInstance.$store.state,
          binderItem.namespace
        );
        storeConfigItems.push(namespace[binderItem.bind]);
      }
    });

    // now that we have all of the bindersConfigs bound for the component
    // we need to iterate over them to create an array of storeLocationObjects
    // to bind the binders contained in it.

    let storeLocationObjects = [];

    storeConfigItems.forEach(storeConfigItem => {
      storeConfigItem = storeConfigItem !== undefined ? storeConfigItem : [];
      storeConfigItem.forEach(item => {
        let storeLocationObject = {};
        storeLocationObject.namespace = item.namespace ? item.namespace : null;
        storeLocationObject.bind = item.bind;
        storeLocationObject.alias = item.alias ? item.alias : null;
        storeLocationObject.binderType = item.binderType
          ? item.binderType
          : false;
        storeLocationObject.isVModel = item.vModel ? item.vModel : false;
        storeLocationObjects.push(storeLocationObject);
      });
    });

    return storeLocationObjects;
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
}
