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
				<p>{this.props.desc}</p>
				<Button variant={"primary"} href={`/courses/${this.props.id}`}>View Course</Button>
			</div>
		);
	}

}