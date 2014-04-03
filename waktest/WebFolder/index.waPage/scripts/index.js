
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var buttonName = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	buttonName.click = function buttonName_click (event)// @startlock
	{// @endlock
		// Add your code here
		var name = $$("textFieldName").getValue();
		$$("richTextNameAusgeben").setValue(name);
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("buttonName", "click", buttonName.click, "WAF");
// @endregion
};// @endlock
