export default class Report {

    constructor(vueInstance) {

        // Initialize dependencies

        this.vueInstance = vueInstance;
        this.propsData = vueInstance.$options.propsData;
        this.componentNameKebabCase = this.vueInstance.$options._componentTag;
        this.componentVnodeTag = this.vueInstance._self.$vnode.tag;

        // Set an empty array for the messages that are going
        // to be pushed to the (Bus) instance of this class.

        this.messages = [];
    }

    // A message will be pushed to the messages array

    pushMessage(messageText, messageData = null, dataType = "object", messageFrom = "generic") {

        // Deep clone the send data

        let clonedData = null;

        switch (dataType) {
            case "object":
            case "{}":
                clonedData = Object.assign({}, messageData);
                break;
            case "array":
            case "[]":
                clonedData = Object.assign([], messageData);
                break;
            case "string":
                clonedData = messageData;
                break;
        }

        const messageObject = {
            messageText,
            messageFrom,
            clonedData
        };
        this.messages.push(messageObject);
    }

    // Procedure for generating the report

    generateReport() {
        this.htmlTag = this.createHTMLTag(this.componentNameKebabCase, this.propsData);
        this.createConsoleLogHeader(this.vueInstance, this.htmlTag, this.componentVnodeTag, this.propsData);
        this.consoleGrouper(this.messages, false);
    }

    // Helper function to group messages

    consoleGrouper(messages = []) {
        console.group('Report Messages:');
        messages.forEach((message) => {
            console.groupCollapsed(message.messageText);
            this.renderMessage(message);
            console.groupEnd();
        });
        console.groupEnd();
    }

    // In the header we create a html tag string
    // for console UI purposes.

    createHTMLTag(componentTag, propsData) {
        const asrBindStateString = (propsData.asrBindState) ?
            `\nasr-bind-state="${propsData.asrBindState}"` : '';

        const asrBindGettersString = (propsData.asrBindGetters) ?
            `\nasr-bind-getters="${propsData.asrBindGetters}"` : '';

        const asrBindMutationsString = (propsData.asrBindMutations) ?
            `\nasr-bind-mutations="${propsData.asrBindMutations}"` : '';

        const asrBindActionsString = (propsData.asrBindActions) ?
            `\nasr-bind-actions="${propsData.asrBindActions}"` : '';

        const asrBindConfigString = (propsData.asrBindConfig) ?
            `\nasr-bind-config="${propsData.asrBindConfig}"` : '';

        const string = `<${componentTag} ` +
            `${asrBindStateString} ` +
            `${asrBindGettersString} ` +
            `${asrBindMutationsString} ` +
            `${asrBindActionsString} ` +
            `${asrBindConfigString}` +
            `/>`;
        // +
        //                 `</${componentTag}>`;
        return string;
    }

    // Create a header for the report

    createConsoleLogHeader(vueInstance, htmlTag, instanceName, propsData) {

        const asrBindState = propsData.asrBindState;
        const asrBindConfig = propsData.asrBindConfig;


        console.log(
            `%cVUEX - ASR debug\n%c${htmlTag}`,
            "color: green; font-size: 16px; padding: 8px 0px",
            "color: green; font-size: 12px; padding: 6px 6px");

    }

    // Helper for rendering a message and it's data

    renderMessage(message) {
        // console.log(`%cMessage: ${message.messageText}`);
        if (message.messageFrom) {
            console.log(`from: ${message.messageFrom}`);
        }
        if (message.clonedData) {
            console.log(message.clonedData);
        }
    }

    // Helper to dump a deep clone to the console

    messageCloneData(message, messageData, messageFrom = 'generic') {
        console.group(`Cloned Data for: ${message}`);
        console.log(`from: ${messageFrom}`);
        messageData,
            console.log(clonedData);
        console.groupEnd();
    }


};

