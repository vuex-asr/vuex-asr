# cheatsheet

## asr-bind-state
bind one or more state items to a component
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
    <example-component asr-bind-state="PHOTOS/recentlyPosted"/>
    
    // Bind multiple items from different namespaces
    <example-component 
      asr-bind-state="PHOTOS/recentlyPosted,
    			USER/firstname"
    />
    
    // And mix and match
    <example-component 
      asr-bind-state="anotherMessage AS message IS v-model,
    			      PHOTOS/recentlyPosted AS photos,
    			      USER/firstname"
    />
```

## asr-bind-getters 
bind one or more getters items to a component
```vue
    // bind one item
    <example-component asr-bind-getters="messageCapitalized"/>
    
    // bind multiple items
    <example-component asr-bind-getters="messageCapitalized, getAnotherMessage"/>
    
    // use an alias to use generic names in components
    <example-component asr-bind-getters="messageCapitalized AS message"/>
    
    // Bind items from within a store namespace
    <example-component asr-bind-getters="PHOTOS/recentlyPosted"/>
    
    // Bind multiple items from different namespaces
    <example-component 
      asr-bind-getters="PHOTOS/recentlyPosted,
    			        USER/firstNameCapitalized"
    />
```

## asr-bind-mutations 
bind one or more mutations items to a component
```vue
    // bind one item
    <example-component asr-bind-mutations="setMessage"/>
    
    // bind multiple items
    <example-component asr-bind-mutations="setMessage, setAnotherMessage"/>
    
    // use an alias to use generic names in components
    <example-component asr-bind-mutations="setAnotherMessage AS setMessage"/>
    
    // Bind items from within a store namespace
    <example-component asr-bind-mutations="PHOTOS/addPhoto"/>
    
    // Bind multiple items from different namespaces
    <example-component 
      asr-bind-mutations="PHOTOS/addPhoto,
    			          USER/setUserName"
    />
```

## asr-bind-actions 
bind one or more actions items to a component
```vue
    // bind one item
    <example-component asr-bind-actions="addNewMessage"/>
    
    // bind multiple items
    <example-component asr-bind-actions="addNewMessage, deleteMessage"/>
    
    // use an alias to use generic names in components
    <example-component asr-bind-actions="addNewMessage AS addMessage"/>
    
    // Bind items from within a store namespace
    <example-component asr-bind-actions="PHOTOS/addNewPhoto"/>
    
    // Bind multiple items from different namespaces
    <example-component 
      asr-bind-actions="PHOTOS/addNewPhoto,
    			        USER/addAvatar"
    />
```

## asr-pass 
pass a store model to a child component
```vue{2,9,17,18,25,26,32}
    // 1. bind a state item as a v-model
    <example-component-with-passer asr-bind-state="message AS v-model"/>
    
    // 2. Now the v-model message is available in ExampleComponentWithPasser:
    // And we pass it to a child with 'asr-pass'
    
    <template>
    
      <example-component-with-input asr-pass="message"/>
    
    </template>
    
    // 3. Now the v-model is available in the child component ExampleComponentWithInput:
    // And could be used as a v-model
    
    <template>
        <p>{{ message }}</p>
        <input v-model="message" />
      </div>
    </template>

    // 3a. If the example component had a different variable name:
    
    <template>
        <p>{{ note }}</p>
        <input v-model="note" />
      </div>
    </template>
    
    
    // 3b. We could use an alias to use generic names in components
    <example-component asr-pass="message AS note"/>
    
```

## asr-debug
Add debug to a component and get a report of the binders
```vue{6}
    <some-component
      asr-bind-state="
                anotherMessage AS message IS v-model,
    			USER/first AS firstName,
    			USER/last AS lastName"
      asr-debug
    />
```