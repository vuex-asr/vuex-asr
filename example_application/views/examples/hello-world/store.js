import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const Store = new Vuex.Store({
  state: {
    message: 'message in examples/hello-word/store.js',
    anotherMessage: 'another message in examples/hello-word/store.js',
  }
});

export {
  Store,
}
