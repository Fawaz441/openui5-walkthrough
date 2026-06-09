sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
  ],
  (Controller, MessageToast, JSONModel) => {
    "use strict";
    return Controller.extend("ui.walkthrough.controller.App", {
      onInit() {
        const oData = {
          recipient: {
            name: "Fawaz",
          },
        };
        const newModel = new JSONModel(oData);
        this.getView().setModel(newModel);
      },
      onShowHello() {
        MessageToast.show("Hello World");
      },
    });
  },
);
