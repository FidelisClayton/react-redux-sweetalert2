import React, { Component, PropTypes } from 'react';

import { default as swal} from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

export default class SweetAlert extends Component { 
	constructor(props) {
		super(props);
	} 

	render() {
		let { 
			show, 
			timerCallback,
			cancelCallback,
			confirmAlert,
			cancelAlert,
			showLoaderOnConfirm
		} = this.props;

		const options = this.props;

		if(show) {
			swal(options)
				.then(() => {
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
	showLoaderOnConfirm: false
};