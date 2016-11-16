import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { default as swal} from 'sweetalert2';

import * as actions from './actions';

import 'sweetalert2/dist/sweetalert2.css';

class SweetAlert extends Component { 
	constructor(props) {
		super(props);
	} 

	componentDidUpdate() {
		const {add, show} = this.props.swal;
	}

	render() {
		let { 
			show, 
			timerCallback,
			cancelCallback,
			confirmAlert,
			cancelAlert,
			showLoaderOnConfirm
		} = this.props.swal;

		const options = this.props.swal;

		if(show) {
			swal(options)
				.then(() => {
					console.log("dismiss");
					this.props.hideAlert();
					if(confirmAlert && showLoaderOnConfirm === false) {
						swal(confirmAlert);
					}

				}, (dismiss) => {

					switch(dismiss) {
						case 'timer':
							timerCallback();
							break;

						case 'cancel':
							swal(cancelAlert);
							cancelCallback();
							break;
					}
					if(dismiss === 'timer')
						timerCallback();	
				})
			;
		}

		return null;
	}
}

function mapStateToProps(store) {
	return {
		swal: store.swal ? store.swal : {},
		default: store.reducers
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SweetAlert);

SweetAlert.propTypes = {
	title: PropTypes.string,
	text: PropTypes.string,
	html: PropTypes.string,
	type: PropTypes.string,
	// input: PropTypes.tring,
	width: PropTypes.string,
	padding: PropTypes.number,
	background: PropTypes.string,
	customClass: PropTypes.string,
	timer: PropTypes.number,
	animation: PropTypes.bool,
	allowOutsideClick: PropTypes.bool,
	allowEscapeKey: PropTypes.bool,
	showConfirmButton: PropTypes.bool,
	showCancelButton: PropTypes.bool,
	confirmButtonText: PropTypes.string,
	cancelButtonText: PropTypes.string,
	confirmButtonColor: PropTypes.string,
	cancelButtonColor: PropTypes.string,
	confirmButtonClass: PropTypes.string,
	cancelButtonClass: PropTypes.string,
	buttonsStyling: PropTypes.bool,
	reverseButtons: PropTypes.bool,
	focusCancel: PropTypes.bool,
	showCloseButton: PropTypes.bool,
	showLoaderOnConfirm: PropTypes.bool,
	preConfirm: PropTypes.func,
	imageUrl: PropTypes.string,
	imageWidth: PropTypes.number,
	imageHeight: PropTypes.number,
	imageClass: PropTypes.string,
	inputPlaceholder: PropTypes.string,
	inputValue: PropTypes.string,
	// inputOptions: PropTypes.oneOfType([
	// 	PropTypes.object,
	// ]),
	inputAutoTrim: PropTypes.bool,
	// inputValidator: Promise,
	inputClass: PropTypes.string,
	progressSteps: PropTypes.array,
	currentProgressStep: PropTypes.number,
	progressStepsDistance: PropTypes.string,
	onOpen: PropTypes.func,
	onClose: PropTypes.func,

	timerCallback: PropTypes.func,
	cancelCallback: PropTypes.func,
	confirmAlert: PropTypes.object,
};

SweetAlert.defaultProps = {
	cancelCallback: function() {},
	timerCallback: function() {},
	showLoaderOnConfirm: false,
};