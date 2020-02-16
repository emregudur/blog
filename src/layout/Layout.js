import React from 
'react';

import {
	Content,
	Footer,
	Header,
	NavBar,
} from './index'

export default class Layout extends React.Component {

	constructor(props){
		super(props);
	}


	render() {
		return (
			<div class="layout">
				<Header/>
				<NavBar/>
				<Content/>
				<Footer/>
			</div>
		);
	}
}