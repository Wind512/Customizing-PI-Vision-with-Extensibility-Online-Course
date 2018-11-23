(function (PV) {
	"use strict";

	function symbolVis() { };
	PV.deriveVisualizationFromBase(symbolVis);

	var definition = { 
		typeName: "archivevalues",
		iconUrl: '/Scripts/app/editor/symbols/ext/Icons/archivevalues.png',
		visObjectType: symbolVis,
		datasourceBehavior: PV.Extensibility.Enums.DatasourceBehaviors.Multiple,
		getDefaultConfig: function(){ 
			return { 
				DataShape: 'Timeseries',
				Height: 150,
				Width: 150,
				BackgroundColor: '#ff5733',
				BorderRadius: 10,
				DisplayDigits: 2
			} 
		},
		configOptions: function(){
			return [
				{
					title: "Format Symbol",
					mode: "Format"
				}
			];
		}
	}
	
	symbolVis.prototype.init = function(scope, elem) { 
		this.onDataUpdate = dataUpdate;
		function dataUpdate(data){
			if(!data) return;
			var firstAttribute = data.Data[0];
			scope.Values = firstAttribute.Values;
			
			if(firstAttribute.Label){
			scope.Units = firstAttribute.Units;
			scope.Label = firstAttribute.Label;
			}
		}
		};

	PV.symbolCatalog.register(definition); 
})(window.PIVisualization); 
