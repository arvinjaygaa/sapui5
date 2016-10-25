sap.ui.define([
	 "sap/ui/core/mvc/Controller",
	 "sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {
	"use strict";

	return Controller.extend("sap.ui.bootcamp.controller.App", {

		onLoginPress: function() {
			var oPassword  = this.getView().byId("password");
			var oTextField = this.getView().byId("username");	
			
			if (oTextField.getValue() === "" | oPassword.getValue() === ""){
				sap.m.MessageToast.show("Please fill in all fields");
			} 
			else
			if (oTextField.getValue().length > 8 | oTextField.getValue().length < 6){
				sap.m.MessageToast.show("Username is below or above enough length");
			}
			else
			if (oPassword.getValue().length > 10 | oPassword.getValue().length < 7){
				sap.m.MessageToast.show("Password is below or above enough length");
			}
			else
			if (oTextField.getValue() === "arvinjay" & oPassword.getValue() === "password"){
				sap.m.MessageToast.show("Login success!");
			}
			else
			{
				sap.m.MessageToast.show("Login failed!");	
			}
			// sap.m.MessageToast.show("Hello World" + oTextField.getValue());                     
		},
		
		
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf sap.ui.bootcamp.view.App
		 */
			onInit: function() {
				var oData = { field : {	username : "User name" } };
				var oModel = new JSONModel(oData);
				this.getView().setModel(oModel);
			}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf sap.ui.bootcamp.view.App
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf sap.ui.bootcamp.view.App
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf sap.ui.bootcamp.view.App
		 */
		//	onExit: function() {
		//
		//	}

	});

});