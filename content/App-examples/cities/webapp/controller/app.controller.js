sap.ui.define(['sap/ui/core/mvc/Controller',
			   'sap/ui/model/json/JSONModel'],
	function(Controller, JSONModel) {
	"use strict";

	var PageController = Controller.extend("cities.controller.app", {

		onInit: function() {
			let oModel = new JSONModel();
			oModel.loadData('./model/cities.json', undefined, false); // synchronous loading!
			let data = oModel.getData();
			
			data.cities.forEach(city => {
				city.description = "latitude: " + city.lat + " | longitude: " + city.lng;
			});

			this.getView().setModel(oModel);
		}
	});

	return PageController;

});
