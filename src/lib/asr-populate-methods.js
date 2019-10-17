import {mapMutations} from "vuex";
import {mapActions} from "vuex";

export default class PopulateMethods {
    constructor(Router) {
        // Initialize dependencies

        this.vueInstance = Router.vueInstance;
        this.Report = Router.Report;
    }

    createMappings(methodsArray) {
        /*
        We need to create mappings for both Mutations as well as Actions
         */

        // Here we terminate the inserted items with a start and end registration.
        // The next (!!) instance that is rendered needs to delete the bindings
        // that are going to be set below.
        // See './asr-remove-old-bindings.js' (method: unSetAsrComputed)

        this.setEmptyMethod("asrRegisterStart", "Here the register starts");
        this.createMappingsFromMethodsArray(methodsArray);
        this.setEmptyMethod("asrRegisterEnd", "Here the register end");
    }

    // Helper method for register termination

    setEmptyMethod(registerName, registerMessage) {
        const mapMutationsObject = {
            ...mapMutations({
                [registerName]: () => registerMessage
            })
        };
        this.vueInstance.$options.methods[registerName] =
            mapMutationsObject[registerName];
    }

    // ...

    createMappingsFromMethodsArray(methodsArray) {
        methodsArray.forEach(item => {
            let mappingObject = {};
            const noNamespace = item.namespace === null;
            const noAlias = item.alias === null;
            const hasAlias = item.alias !== null;

            // We split the (pseudo) switch to keep for sanity

            if (noNamespace) {
                this.mapNotNamespaced(
                    item,
                    mappingObject,
                    hasAlias,
                    noAlias,
                );
            } else {
                this.mapNamespaced(
                    item,
                    mappingObject,
                    hasAlias,
                    noAlias,
                );
            }
        });
    }

    // ...

    mapNotNamespaced(
        item,
        mappingObject,
        hasAlias,
        noAlias,
    ) {
        // NO alias && binderType 'mutation'

        if (noAlias && item.binderType === 'mutations') {
            mappingObject = {
                ...mapMutations([item.bind])
            };
            this.vueInstance.$options.methods[item.bind] =
                mappingObject[item.bind];
            this.reportMapping(
                "noNamespace && noAlias",
                mappingObject,
                item
            );
        }

        // NO alias && binderType 'action'

        else if (noAlias && item.binderType === 'actions') {
            mappingObject = {
                ...mapActions([item.bind])
            };
            this.vueInstance.$options.methods[item.bind] =
                mappingObject[item.bind];
            this.reportMapping(
                "noNamespace && noAlias",
                mappingObject,
                item
            );
        }

        // WITH alias && binderType 'mutation'

        else if (hasAlias && item.binderType === 'mutations') {
            mappingObject = {
                ...mapMutations({
                    [item.alias]: item.bind
                })
            };

            this.vueInstance.$options.methods[item.alias] =
                mappingObject[item.alias];
            this.reportMapping(
                "noNamespace && hasAlias",
                mappingObject,
                item
            );
        }

        // WITH alias && binderType 'action'

        else if (hasAlias && item.binderType === 'actions') {
            mappingObject = {
                ...mapActions({
                    [item.alias]: item.bind
                })
            };
            this.vueInstance.$options.methods[item.alias] =
                mappingObject[item.alias];
            this.reportMapping(
                "noNamespace && hasAlias",
                mappingObject,
                item
            );
        }

    }

    // ...

    mapNamespaced(
        item,
        mappingObject,
        hasAlias,
        noAlias,
    ) {

        const namespacedBinding = item.namespace + '/' + item.bind;

        // NO alias && binderType 'mutation'

        if (noAlias && item.binderType === 'mutations') {

            mappingObject = {
                ...mapMutations(item.namespace, [item.bind])
            };

            this.vueInstance.$options.methods[item.bind] =
                mappingObject[item.bind];
            this.reportMapping(
                "hasNamespace && noAlias",
                mappingObject,
                item
            );
        }

        // WITH alias && binderType 'mutation'

        else if (hasAlias && item.binderType === 'mutations') {

            mappingObject = {
                ...mapMutations({
                    [item.alias]: namespacedBinding,
                })
            };

            this.vueInstance.$options.methods[item.alias] =
                mappingObject[item.alias];



            this.reportMapping(
                "hasNamespace && hasAlias",
                mappingObject,
                item
            );
        }

        // NO alias && binderType 'action'

        else if (noAlias && item.binderType === 'actions') {

            mappingObject = {
                ...mapActions(item.namespace, [item.bind])
            };

            this.vueInstance.$options.methods[item.bind] =
                mappingObject[item.bind];
            this.reportMapping(
                "hasNamespace && noAlias",
                mappingObject,
                item
            );
        }


        // WITH alias && binderType 'action'

        else if (hasAlias && item.binderType === 'actions') {
            mappingObject = {
                ...mapActions({
                    [item.alias]: namespacedBinding,
                })
            };
            this.vueInstance.$options.methods[item.alias] =
                mappingObject[item.alias];
            this.reportMapping(
                "hasNamespace && hasAlias",
                mappingObject,
                item
            );
        }
    }

    // Helper method to report the mapping to the Report bus

    reportMapping(mappingSwitch, mappingObject, item) {
        const data = {};
        data.item = item;
        const itemRoute = item.namespace
            ? `${item.namespace}/${item.bind}`
            : item.bind;

        this.Report.pushMessage(
            `Mapping done for ${item.binderType}: "${itemRoute}" with directives: ${mappingSwitch}`,
            item,
            "array",
            "PopulateMethods (class procedure)"
        );
    }
}
