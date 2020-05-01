import React from "react";
import Page from "../Page";

// TODO: create actual error page system
export default class Error500 extends React.Component {

	constructor(props) {
		super(props);

	}


	render() {
		return (
			<div>
				<Page>
					<h1>Error 500</h1>
					<h4>Gadzooks!</h4>
					<p>Something went wrong</p>
				</Page>
			</div>
		);
	}

}
