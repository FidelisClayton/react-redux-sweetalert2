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
				<h1>Oi</h1>
				<button onClick={() => this.handleShowButtonClick() } >Show Alert!</button>
				<button onClick={() => this.handleHideButtonClick() } > Hide Alert!</button>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return state;
}

export default connect(mapStateToProps, {...swal})(App);