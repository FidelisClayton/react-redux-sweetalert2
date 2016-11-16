import { SHOW_ALERT, HIDE_ALERT } from './constants';

export function showAlert(options) {
	return {
		type: SHOW_ALERT,
		payload: options
	};
}

export function hideAlert() {
	return {
		type: HIDE_ALERT
	};
}