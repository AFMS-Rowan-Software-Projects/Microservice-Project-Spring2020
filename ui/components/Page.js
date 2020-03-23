import React from "react";
import Header from "./Header";
import Container from "react-bootstrap/Container";

export default class Page extends React.Component {

	render() {
		return (
			<div className={"wrapper"}>
				<Header/>
				<Container fluid={true} className={"content"}>
					{this.props.children}
				</Container>
			</div>
		);
	}

}