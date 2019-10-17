# cheatsheet

`asr-bind-state`: bind one or more store items to a component
```vue
    // bind one item
    <example-component asr-bind-state="message"/>
    
    // bind multiple items
    <example-component asr-bind-state="message, anotherMessage"/>
    
    // bind an item as model 
    // (store item message is now mutable from within the component)
    <example-component asr-bind-state="message IS v-model"/>
    
    // use an alias to use generic names in components
    <example-component asr-bind-state="anotherMessage AS message"/>
    
    // Bind items from within a store namespace
    <example-component asr-bind-state="PHOTOS|recentlyPosted"/>
    
    // Bind multiple items from different namespaces
    <example-component 
      asr-bind-state="PHOTOS|recentlyPosted,
    			USER|firstname, lastname"
    />
    
    // And mix and match
    <example-component 
      asr-bind-state="anotherMessage AS message IS v-model,
    			PHOTOS|recentlyPosted AS photos,
    			USER|firstname, lastname"
    />
```