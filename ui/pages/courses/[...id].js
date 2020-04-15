import React from "react";
import {useRouter} from "next/router";
import Page from "../../components/Page";
import fetch from "node-fetch";
import {Button} from "react-bootstrap";
import {API_URL} from "../_App";

const Course = props => {

	const router = useRouter();

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

	const query = context.query.id[0];
	const props = {};

	await fetch(`${API_URL}/courses/${query}`)
		.then(res => res.json())
		.then((data => {props.course = data}));

	return props;

};

export default Course;