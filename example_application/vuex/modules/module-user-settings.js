const ModuleUserSettings = {
  namespaced: true,

  state: {
    message: "This is a message in the user settings module for sure",
    anotherMessage:
      "This is another message in the user settings module for sure",
    messageConfig: [
      {
        namespace: "GENERAL",
        bind: "message",
        vModel: true
      },
      {
        namespace: "GENERAL",
        bind: "anotherMessage",
        vModel: true
      },
      {
        namespace: "USER/SETTINGS",
        bind: "message",
        as: "userSettingsMessage",
        vModel: true
      }
    ]
  }
};

export { ModuleUserSettings };
