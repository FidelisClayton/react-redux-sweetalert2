import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import App from './App';
import SweetAlert, { reducers as swalReducers } from '../src';

import reducers from './reducers';

const store = createStore(combineReducers({
	reducers,
	swal: swalReducers
}));

render(
	<Provider store={store}>
		<div>
			<App />
			<SweetAlert />
		</div>	
	</Provider>
	
	, document.getElementById("app")
);