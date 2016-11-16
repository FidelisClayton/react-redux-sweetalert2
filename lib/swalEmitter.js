'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.swalEmitter = exports.EE = undefined;

var _eventemitter = require('eventemitter3');

var _eventemitter2 = _interopRequireDefault(_eventemitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var emitter = new _eventemitter2.default();

var actions = {};

actions.show = function () {
  return emitter.emit('show');
};
actions.hide = function () {
  return emitter.emit('hide');
};

var EE = exports.EE = emitter;
var swalEmitter = exports.swalEmitter = actions;