export default class ParseArgumentString {

    parse(argumentString, binderType) {
        // First prevent further execution if:

        if (
            argumentString === null ||
            argumentString === "" ||
            argumentString === undefined ||
            argumentString === false
        ) {
            // if there is no input string, return an empty array
            return (this.arrayOfStoreObjects = []);
        }

        // The bindertype will be used to include or exclude
        // procedures in this class

        this.binderType = binderType;

        return this.parseArgumentString(argumentString);
    }

    parseArgumentString(inputString) {
        // Split the comma separated string

        const inputArrayDirty = inputString.split(",");

        // remove whitespace around the array items

        let inputArray = inputArrayDirty.map(item => item.replace(/\s/g, ""));

        const parsedItems = [];

        // parse all the items and push them to the parsedItems array

        inputArray.forEach(item => {
            parsedItems.push(this.parseItemString(item));
        });

        // parse namespace for all items

        const namespacedItems = this.parseNameSpace(parsedItems);

        // Add binderType to the items

        namespacedItems.map((item) => item.binderType = this.binderType);

        return namespacedItems;
    }


    parseNameSpace(items) {

        // 'GENERAL|message, anotherMessage' assumes
        // that anotherMessage is within the same namespace.

        const namespacedItems = [];
        items.forEach(item => {
            let namespace = item.namespace ? item.namespace : null;
            item.namespace = namespace;
            namespacedItems.push(item);
        });
        return namespacedItems;
    }

    // Check if the argument contains a separator pipe '|', like 'GENERAL|message'

    parseItemString(inputStringItem) {
        let storeLocationObject = {};

        if (inputStringItem.includes("|")) {
            const argumentArray = inputStringItem.split("|");
            storeLocationObject.namespace = argumentArray[0];
            storeLocationObject.bind = argumentArray[1];
        } else {
            storeLocationObject.namespace = false;
            storeLocationObject.bind = inputStringItem;
        }

        storeLocationObject = this.parseModel(storeLocationObject);

        storeLocationObject = this.parseAlias(storeLocationObject);

        return storeLocationObject;
    }

    // Check if the bind needs to be a Model 'IS' in it,
    // like 'GENERAL|message IS v-model')
    // or 'GENERAL|message IS model')

    parseModel(storeLocationObject) {
        const bind = storeLocationObject.bind;
        if (bind.includes("IS")) {
            const argumentArray = bind.split("IS");
            const cleanArgumentArray = argumentArray.map(item =>
                item.replace(/\s/g, "")
            );
            storeLocationObject.bind = cleanArgumentArray[0];
            // Quick fix clean argument array, to remove eventual whitespace
            if (
                cleanArgumentArray[1] === "v-model" ||
                cleanArgumentArray[1] === "model"
            ) {
                storeLocationObject.isVModel = true;
            } else {
                storeLocationObject.isVModel = false;
            }
        } else {
            storeLocationObject.isVModel = null;
        }
        return storeLocationObject;
    }

    // Check if the bind has an alias 'AS' in it, like 'GENERAL|message AS someMessage')
    // In this case the alias will be the to-be-used key in the component it is set upon.

    parseAlias(storeLocationObject) {
        const bind = storeLocationObject.bind;
        if (bind.includes("AS")) {
            const argumentArray = bind.split("AS");
            storeLocationObject.bind = argumentArray[0];
            storeLocationObject.alias = argumentArray[1];
        } else {
            storeLocationObject.alias = null;
        }
        return storeLocationObject;
    }
}
