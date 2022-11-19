sap.ui.define(['sap/m/MessageToast',
                'sap/ui/core/mvc/Controller'],
	function(MessageToast, Controller) {
	"use strict";

	var PageController = Controller.extend("hello_world.controller.say", {

		onHello: function (evt) {
            let name = this.getView().byId("name").getValue();

            let message = ""
            if (name === "")
                message = "Hello World!"
            else
                message = "Hello " + name + "!"

			MessageToast.show(message);
		}
	});

	return PageController;

});
