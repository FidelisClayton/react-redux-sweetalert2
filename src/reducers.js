import { SHOW_ALERT, HIDE_ALERT } from './constants';

const initialState = {
	show: false,
};

export default function SwalReducers(state = {}, action) {
	switch(action.type) {
		case SHOW_ALERT:
			return {
				...state,
				...action.payload,
				show: true
			};

		case HIDE_ALERT:
			return initialState;

		default:
			return state
	}
}