import React from "react";
import {Button, Row} from "react-bootstrap";

export default class CoursePreview extends React.Component {

	constructor(props) {
		super(props);

	}


	render() {
		return (
			<div>
				<h5>{this.props.title}</h5>
				<Row className={"pl-3"}>
					<p>{this.props.desc}</p>
					<Button variant={"primary"} className={"mx-3"}>Register</Button>
				</Row>
			</div>
		);
	}

}