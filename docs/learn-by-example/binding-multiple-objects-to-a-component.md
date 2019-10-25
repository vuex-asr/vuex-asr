# binding multiple objects to a component

In the [hello world example](./hello-world-example.html) we saw that we can bind a variable from the store to the component with asr-bind-state. In the [hello world of 2 way binding example](./hello-world-of-2-way-binding.html) we saw we can bind a model that can mutate a store object And we also learned we could make use of the [alias](./aliasing.html) function to make components reusable. And in the [namespacing](./namespacing.html) tutorial we saw how we could create our own code organisation with namespaces.

Since VUEXasr is intended to make building large scale applications more easy let's see how we could bind multiple objects to a component.

::: tip codesandbox
[binding multiple objects in a component example](https://codesandbox.io/s/manual-binding-multiple-objects-to-a-component-gulsx)
:::

## binding multiple items convention for all binders

The examples in this chapter illustrate how you could implement binding multiple store items with `asr-bind-state`, but the convention is the same for all of the binders:
- asr-bind-state
- asr-bind-getters
- asr-bind-mutations
- asr-bind-actions
- asr-bind-config

## message board

As I like to keep the examples as simple as possible let's reuse the previous example but now let's delegate multiple message objects into one component the MessageBoard

First let's make a message board:
```vue
    // src/components/MessageBoard.vue
    
    <template>
    <div>
      <p>A message from the root of the store</p>
      <p>{{ message }}</p>
      <p>Another message from the root of the store</p>
      <p>{{ anotherMessage }}</p>
      <p>A message from the User Module</p>
      <p>{{ messageUser }}</p>
    </div>
    </template>
```
notice that this component takes 3 variables:

- message
- anotherMessage
- messageUser

Now let's see how we could bind objects to these variables:
```vue{6-9}
    // src/App.vue
    
    <template>
      <div id="app">
    		<message-board
    	      asr-bind-state="
    	                message, 
    	                anotherMessage, 
    	                USER/message AS messageUser"
    	  ></message-board>
        <text-input asr-bind-state="message IS v-model"/>
        <text-input asr-bind-state="anotherMessage IS v-model"/>
        <text-input asr-bind-state="USER/message AS messageUser IS v-model"/>
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
```
Notice, the comma separated notation which is split into multiple lines for convenience and readability.

## namespacing syntax convention

You could organise your bindings by separating them by a comma `,`

```vue 
    <some-component
      asr-bind-state="
                message, 
                anotherMessage, 
                USER/messageUser,
                USER/userObject AS user,
                PHOTOS/recentPhotos
                PHOTOS/likedPhotos"
    ></some-component>
```
In the example above these variables live in the global (root) namespace:

- message
- anotherMessage

These live in the USER namespace:

- messageUser
- userObject (aliased to 'user')

These live in the PHOTOS namespace:

- recentPhotos
- likedPhotos

Well isn't that convenient? There is even another slick way to achieve the same functionality and even more with the asr-bind-config property coming up next 💪