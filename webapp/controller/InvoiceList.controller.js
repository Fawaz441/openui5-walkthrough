sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel"],
  (Controller, JSONModel) => {
    "use strict";
    Controller.extend("ui5.walkthrough.controller.InvoiceList", {
      onInit() {
        const oModel = new JSONModel({
          currency: "EUR",
        });
        this.getView().setModel(oModel, "view");
      },
    });
  },
);
