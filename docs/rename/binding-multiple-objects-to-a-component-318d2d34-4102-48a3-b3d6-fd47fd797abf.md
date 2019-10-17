# binding multiple objects to a component

In the [hello world example](https://www.notion.so/hello-world-example-f301739ea9f743959fd6f741d14d3a47) we saw that we can bind a variable from the store to the component with asr-bind-state-state. In the [hello world of 2 way binding example](https://www.notion.so/hello-world-of-2-way-binding-0745851653ab4ac8b07e42d088961689) we saw we can bind a model that can mutate a store object. We also learned we could make use of aliases in the [aliasing example](https://www.notion.so/aliasing-1221d6b07fa1480198d8284b0743c521) function to make components reusable. And in the [namespacing](https://www.notion.so/namespacing-1c0724cae0ab45bf9aa8009df2b25fca) tutorial we saw how we could create our own code organisation with namespaces.

Since VUEXasr is intended to make building large scale applications more easy let's see how we could bind multiple objects to a component.

For a quick overview go to the sandbox environment to follow along:

[](https://codesandbox.io/s/manual-binding-multiple-objects-to-a-component-1pitc)

## message board

As I like to keep the examples as simple as possible let's reuse the previous example but now let's delegate multiple message objects into one component the MessageBoard 🤘

First let's make a message board:

    // src/components/MessageBoard.vue
    
    <template>
    <div>
      <h1>A message from the root of the store</h1>
      <p>{{ message }}</p>
      <h1>Another message from the root of the store</h1>
      <p>{{ anotherMessage }}</p>
      <h1>A message from the User Module</h1>
      <p>{{ messageUser }}</p>
    </div>
    </template>

notice that this component takes 3 variables:

- message
- anotherMessage
- messageUser

Now let's see how we could bind objects to these variables:

    // src/App.vue
    
    <template>
      <div id="app">
    		<message-board
    	      asr-bind-state="message, 
    	                anotherMessage, 
    	                USER|message AS messageUser"
    	  ></message-board>
        <text-input asr-bind-state="message IS v-model"/>
        <text-input asr-bind-state="anotherMessage IS v-model"/>
        <text-input asr-bind-state="USER|message AS messageUser IS v-model"/>
      </div>
    </template>
    
    <script>
    import MessageBoard from "./components/MessageBoard";
    import TextInput from "./components/TextInput";
    
    export default {
      name: "App",
      components: {
        MessageBoard,
    		TextInput
      }
    };
    </script>

Notice, the comma separated notation which is split into multiple lines for convenience and readability.

## namespacing pipe convention

There is an important convention for the namespace pipe syntax and it is as follows:

All variables declared after a pipe must be in the same namespace (module), up until a new namespace is declared. Before a namespace has been declared VUEXasr assumes the variables live in the global (root) namespace, so therefor these MUST be declared first. 

    <some-component
    	      asr-bind-state="message, 
    	                anotherMessage, 
    	                USER|messageUser AS message,
    									userObject,
    									PHOTOS|recentPhotos,
    									likedPhotos"
    ></some-component>

In the example above these variables live in the global (root) namespace:

- message
- anotherMessage

These live in the USER namespace:

- messageUser (aliassed to 'message')
- userObject

These live in the PHOTOS namespace:

- recentPhotos
- likedPhotos

Well isn't that convenient? There is even another slick way to achieve the same functionality and even more with the asr-bind-state-config property coming up next 💪