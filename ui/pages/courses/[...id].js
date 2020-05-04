import React from "react";
import {useRouter} from "next/router";
import Page from "../../components/Page";
import fetch from "node-fetch";
import {Button} from "react-bootstrap";
import {API_URL} from "../_App";
import Error500 from "../../components/error/Error500";

const Course = props => {

	const router = useRouter();

	// if there's an error, display an error page instead of the course info
	// TODO: display the actual error instead of just a 500
	if (props.err) {
		return (
			<div>
				<Error500/>
			</div>
		)
	}

	return (
		<div>
			<Page>

				<div>

					<h1>{props.course.CourseName}</h1>
					<p>{props.course.CourseDesc}</p>
					<p>Fees: {props.course.Fees}</p>
					<p>Tuition: {props.course.Tuition}</p>
					<Button variant={"primary"}>Register</Button>

				</div>

			</Page>
		</div>
	)

};

Course.getInitialProps = async context => {

	const query = context.query.id[0]; // this is the part of the url after the /courses/
	const props = {};

	try {
		// get the specified course
		await fetch(`${API_URL}/courses/${query}`)
			.then(res => res.json())
			.then((data => {props.course = data}));
	} catch (e) {
		props.err = e; // store any potential error
	}

	return props;

};

export default Course;