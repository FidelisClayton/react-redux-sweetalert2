'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.showAlert = showAlert;
exports.hideAlert = hideAlert;

var _constants = require('./constants');

function showAlert(options) {
	return {
		type: _constants.SHOW_ALERT,
		payload: options
	};
}

function hideAlert() {
	return {
		type: _constants.HIDE_ALERT
	};
}