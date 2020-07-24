/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"pc/my/heroku_test/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});