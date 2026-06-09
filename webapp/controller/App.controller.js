sap.ui.define(["sap/ui/core/mvc/Controller"], (Controller) => {
  "use strict";
  return Controller.extend("ui5.walkthrough.Controller.App", {
    onShowHello() {
      alert("Hello World");
    },
  });
});
