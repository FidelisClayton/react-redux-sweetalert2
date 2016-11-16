'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.swal = exports.reducers = undefined;

var _SweetAlert = require('./SweetAlert');

var _SweetAlert2 = _interopRequireDefault(_SweetAlert);

var _reducers = require('./reducers');

var _reducers2 = _interopRequireDefault(_reducers);

var _actions = require('./actions');

var SwalActions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducers = exports.reducers = _reducers2.default;
var swal = exports.swal = SwalActions;

exports.default = _SweetAlert2.default;