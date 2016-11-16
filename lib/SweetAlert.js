'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _sweetalert = require('sweetalert2');

var _sweetalert2 = _interopRequireDefault(_sweetalert);

var _actions = require('./actions');

var actions = _interopRequireWildcard(_actions);

require('sweetalert2/dist/sweetalert2.css');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SweetAlert = function (_Component) {
	_inherits(SweetAlert, _Component);

	function SweetAlert(props) {
		_classCallCheck(this, SweetAlert);

		return _possibleConstructorReturn(this, (SweetAlert.__proto__ || Object.getPrototypeOf(SweetAlert)).call(this, props));
	}

	_createClass(SweetAlert, [{
		key: 'componentDidUpdate',
		value: function componentDidUpdate() {
			var _props$swal = this.props.swal,
			    add = _props$swal.add,
			    show = _props$swal.show;
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var _props$swal2 = this.props.swal,
			    show = _props$swal2.show,
			    timerCallback = _props$swal2.timerCallback,
			    cancelCallback = _props$swal2.cancelCallback,
			    confirmAlert = _props$swal2.confirmAlert,
			    cancelAlert = _props$swal2.cancelAlert,
			    showLoaderOnConfirm = _props$swal2.showLoaderOnConfirm;


			var options = this.props.swal;

			if (show) {
				(0, _sweetalert2.default)(options).then(function () {
					console.log("dismiss");
					_this2.props.hideAlert();
					if (confirmAlert && showLoaderOnConfirm === false) {
						(0, _sweetalert2.default)(confirmAlert);
					}
				}, function (dismiss) {

					switch (dismiss) {
						case 'timer':
							timerCallback();
							break;

						case 'cancel':
							(0, _sweetalert2.default)(cancelAlert);
							cancelCallback();
							break;
					}
					if (dismiss === 'timer') timerCallback();
				});
			}

			return null;
		}
	}]);

	return SweetAlert;
}(_react.Component);

function mapStateToProps(store) {
	return {
		swal: store.swal ? store.swal : {},
		default: store.reducers
	};
}

function mapDispatchToProps(dispatch) {
	return (0, _redux.bindActionCreators)(actions, dispatch);
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(SweetAlert);


SweetAlert.propTypes = {
	title: _react.PropTypes.string,
	text: _react.PropTypes.string,
	html: _react.PropTypes.string,
	type: _react.PropTypes.string,
	// input: PropTypes.tring,
	width: _react.PropTypes.string,
	padding: _react.PropTypes.number,
	background: _react.PropTypes.string,
	customClass: _react.PropTypes.string,
	timer: _react.PropTypes.number,
	animation: _react.PropTypes.bool,
	allowOutsideClick: _react.PropTypes.bool,
	allowEscapeKey: _react.PropTypes.bool,
	showConfirmButton: _react.PropTypes.bool,
	showCancelButton: _react.PropTypes.bool,
	confirmButtonText: _react.PropTypes.string,
	cancelButtonText: _react.PropTypes.string,
	confirmButtonColor: _react.PropTypes.string,
	cancelButtonColor: _react.PropTypes.string,
	confirmButtonClass: _react.PropTypes.string,
	cancelButtonClass: _react.PropTypes.string,
	buttonsStyling: _react.PropTypes.bool,
	reverseButtons: _react.PropTypes.bool,
	focusCancel: _react.PropTypes.bool,
	showCloseButton: _react.PropTypes.bool,
	showLoaderOnConfirm: _react.PropTypes.bool,
	preConfirm: _react.PropTypes.func,
	imageUrl: _react.PropTypes.string,
	imageWidth: _react.PropTypes.number,
	imageHeight: _react.PropTypes.number,
	imageClass: _react.PropTypes.string,
	inputPlaceholder: _react.PropTypes.string,
	inputValue: _react.PropTypes.string,
	// inputOptions: PropTypes.oneOfType([
	// 	PropTypes.object,
	// ]),
	inputAutoTrim: _react.PropTypes.bool,
	// inputValidator: Promise,
	inputClass: _react.PropTypes.string,
	progressSteps: _react.PropTypes.array,
	currentProgressStep: _react.PropTypes.number,
	progressStepsDistance: _react.PropTypes.string,
	onOpen: _react.PropTypes.func,
	onClose: _react.PropTypes.func,

	timerCallback: _react.PropTypes.func,
	cancelCallback: _react.PropTypes.func,
	confirmAlert: _react.PropTypes.object
};

SweetAlert.defaultProps = {
	cancelCallback: function cancelCallback() {},
	timerCallback: function timerCallback() {},
	showLoaderOnConfirm: false
};