const ModulePhotos = {
  namespaced: true,

  state: {
    photos: [],
    message: "this is the message property in photos"
  },
  mutations: {
    addToPhotos(state, newValue) {
      state.photos.push(newValue);
    }
  },
  actions: {
    fetchPhotos({ commit, dispatch }) {

      // push simple examples photo urls to photos array

    }
  }
};

export { ModulePhotos };
