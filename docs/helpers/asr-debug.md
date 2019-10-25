# asr-debug

With the attribute asr-debug you'll enable the console reporter class in the plugin,
 
The following code will create a report for the component `<some-component />` in the console 


```vue{6}
    <some-component
      asr-bind-state="
                anotherMessage AS message IS v-model,
    			USER/first AS firstName,
    			USER/last AS lastName"
      asr-debug
    />
```

::: tip chrome and devtools
Asr-debug works best with chrome. It's also recommended to download the [vue.js devtools](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd).
:::

This example results in this console message:

![An image](/vuex-asr/asr-debug-screenshot.png)