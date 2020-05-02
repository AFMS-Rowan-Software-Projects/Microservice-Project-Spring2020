import React from "react";
import Page from "../../components/Page";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import FormGroup from "react-bootstrap/FormGroup";
import FormLabel from "react-bootstrap/FormLabel";
import {Button, Col} from "react-bootstrap";
import {API_URL} from "../_App";

export default class CreateCourse extends React.Component {

	constructor(props) {
		super(props);

	}


	render() {
		return (
			<div>
				<Page>
					<h1>Create Course</h1>
					<Col xl={8} lg={8} xs={12}>
						<Form onSubmit={this.submit}>
							<FormGroup>
								<FormLabel htmlFor={"courseName"}>Course name</FormLabel>
								<FormControl type={"text"} id={"courseName"} placeholder={"Enter course name"} required={true}/>
							</FormGroup>
							<FormGroup>
								<FormLabel htmlFor={"courseDesc"}>Course description</FormLabel>
								<FormControl as={"textarea"} id={"courseDesc"} placeholder={"Enter course description"} rows={5}/>
							</FormGroup>
							<Form.Row>
								<FormGroup className={"col-sm-3 col-12"}>
									<FormLabel htmlFor={"courseTuition"}>Course tuition</FormLabel>
									<FormControl type={"number"} id={"courseTuition"} placeholder={"0.00"} required={true}/>
								</FormGroup>
								<FormGroup className={"col-sm-3 col-12"}>
									<FormLabel htmlFor={"courseFee"}>Course fee</FormLabel>
									<FormControl type={"number"} id={"courseFee"} placeholder={"0.00"} required={true}/>
								</FormGroup>
							</Form.Row>
							<FormGroup>
								<Button type={"submit"} variant={"primary"}>Create course</Button>
							</FormGroup>
						</Form>
					</Col>
				</Page>
			</div>
		);
	}

	async submit(e) {

		e.preventDefault();
		const name = document.getElementById("courseName").value;
		const desc = document.getElementById("courseDesc").value;
		const tuition = parseFloat(document.getElementById("courseTuition").value);
		const fee = parseFloat(document.getElementById("courseFee").value);


		const data = {
			"CourseName": name,
			"CourseDesc": desc,
			"Tuition": tuition,
			"Fees": fee,
			"FeeDesc": "Fee",
			"Active": 1,
			"CategoryId": 2
		};

		console.log(data);
		console.log(JSON.stringify(data));

		// TODO: error handling
		const res = await fetch(API_URL + "/courses", {
			"method": "POST",
			"mode": "no-cors",
			"headers": {
				"Content-Type": "application/json",
				"Accept": "*/*",
				"Accept-Encoding": "gzip, deflate, br"
			},
			"body": data
		});

		console.log(res);
		if (res.body) {
			document.location = "/courses/" + res.body.Id;
		}

	}

}