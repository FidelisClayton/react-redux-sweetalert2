# react-redux-sweetalert2
React and Redux sweetalert2 wrapper

## Basic usage
``` javascript
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import App from './App';
import SweetAlert, { reducers as swalReducers } from '../src';

const store = createStore(combineReducers({
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
```
App.js

```javascript
import React, { Component } from 'react';
import { connect } from 'react-redux';

import SweetAlert, { swal } from '../src';

class App extends Component {
	handleShowButtonClick() {
		let swalOptions = {
			title: 'Title',
			text: 'Description',
			type: 'success'
		};
		this.props.showAlert(swalOptions);
	}

	handleHideButtonClick() {
		this.props.hideAlert();
	}

	render() {
		return (
			<div>
				<h1>Hello!</h1>
				<button onClick={() => this.handleShowButtonClick() } >Show Alert!</button>
				<button onClick={() => this.handleHideButtonClick() } >Hide Alert!</button>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return state;
}

export default connect(mapStateToProps, {...swal})(App);
```

## TODO

- [ ] Publish on NPM
