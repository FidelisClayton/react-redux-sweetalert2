[![npm](https://img.shields.io/npm/l/express.svg?style=flat-square)]() [![npm](https://img.shields.io/badge/npm-v0.0.2-blue.svg?style=flat-square)](https://www.npmjs.com/package/react-redux-sweetalert2)

# react-redux-sweetalert2
React and Redux sweetalert2 wrapper

## Install
```sh
npm i -S react-redux-sweetalert2
```
You'll also need css-loader on your webpack config to import the sweetalert styles.

## Basic usage
``` javascript
// index.js

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import App from './App';
import SweetAlert, { reducers as swalReducers } from 'react-redux-sweetalert2';

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

```javascript
// App.js

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { swal } from 'react-redux-sweetalert2';

class App extends Component {
	handleShowButtonClick() {
		let swalOptions = {
			title: 'Hello!',
			text: 'How you doin?',
			type: 'success'
		};
		this.props.showAlert(swalOptions);
	}

	render() {
		return (
			<div>
				<h1>Hello!</h1>
				<button onClick={() => this.handleShowButtonClick() } >Show Alert!</button>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return state;
}

export default connect(mapStateToProps, {...swal})(App);
```

## Props

#### `title`: PropTypes.string
The `title` property is used to set the alert title.

#### `text`: PropTypes.string
The `text` property is used to set the alert text.

#### `html`: PropTypes.string
The `html` property is used to set the alert content with html.

#### `width`: PropTypes.string
The `width`property is used to set the alert width in pixels. Ex.: `width: '100px'`.

#### `timer`: PropTypes.number
The `timer` property is used to close the alert automatically.

#### `animation`: PropTypes.bool
The `animation` property is used to enable/disable the icon animation.

#### `showConfirmButton`: PropTypes.bool
The `showConfirmButton` property is used to show/hide the confirm button.

#### `showCancelButton`: PropTypes.bool
The `showCancelButton` property is used to show/hide the cancel button.

#### `confirmButtonClass`: PropTypes.string
The `confirmButtonClass` property is used to add a custom class to the confirm button..

#### `cancelButtonClass`: PropTypes.string
The `cancelButtonClass` property is used to add a custom class to the cancel button.

#### `cancelCallback`: PropTypes.func
The `cancelCallback` property is used to run a function when the user click on cancel button.

#### `timerCallback`: PropTypes.func
The `timerCallback` property is a function who is called when the alert is closed by timber.

#### `confirmAlert`: PropTypes.object
The `confirmAlert` property is a object containing the options of a alert who will be called when the user click on confirm button.

#### `confirmButtonText`: PropTypes.string
The `confirmButtonText` property is used to set the confirm button text.

#### `cancelButtonText`: PropTypes.string
The `cancelButtonText` property is used to set the cancel button text.

# Licence

The MIT License (MIT)
Copyright (c) 2016 Clayton Fidelis

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
