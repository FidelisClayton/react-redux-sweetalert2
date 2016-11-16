'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = SwalReducers;

var _constants = require('./constants');

var initialState = {
	show: false
};

function SwalReducers() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	var action = arguments[1];

	switch (action.type) {
		case _constants.SHOW_ALERT:
			return _extends({}, state, action.payload, {
				show: true
			});

		case _constants.HIDE_ALERT:
			return initialState;

		default:
			return state;
	}
}