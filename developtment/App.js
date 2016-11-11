import React, { Component } from 'react';

import SweetAlert from '../src';

export default class App extends Component {
	render() {
		return (
			<div>
				<SweetAlert 
					show={true} 
					title='Title!' 
					text='Description!'
					type='success'
					confirmAlert={{title: 'Oi', type: 'success'}}
					showLoaderOnConfirm={true}
				/>
			</div>
		);
	}
}
