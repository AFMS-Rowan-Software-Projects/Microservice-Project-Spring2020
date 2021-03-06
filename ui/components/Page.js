import React from "react";
import Header from "./Header";
import Container from "react-bootstrap/Container";
import {Collapse, Nav, Navbar, NavLink, Row} from "react-bootstrap";
import CoursePreview from "./CoursePreview";
import Head from "next/head";

export default class Page extends React.Component {

	render() {
		return (
			<div className={"wrapper"}>
				<Head>
					<title>ABC Training</title>
				</Head>
				<Header/>
				<Container fluid={true} className={"content"}>
					<Row className={"h-100"}>
						<div className={"sidebar pt-3 col-12 col-sm-7 col-md-4 col-lg-3 d-none d-md-block"}>
							<div>
								<Navbar variant={"dark"}>
									<Nav className={"flex-column"}>
										<NavLink>Registration</NavLink>
										<div className={"ml-5"}>
											<NavLink active={false}>New students</NavLink>
											<NavLink active={false}>Current students</NavLink>
										</div>
										<NavLink active={false}>Tuition</NavLink>
										<div className={"ml-5"}>
											<NavLink active={false}>Payment options</NavLink>
											<NavLink active={false}>Reduced rates</NavLink>
										</div>
										<NavLink active={false} href={"/admin"}>Admin</NavLink>
										<div className={"ml-5"}>
											<NavLink active={false} href={"/admin/create"}>Create course</NavLink>
										</div>
										<NavLink active={false}>Information sessions</NavLink>
										<NavLink active={false}>Contact</NavLink>
									</Nav>
								</Navbar>
							</div>
						</div>
						<div className={"col px-4 pt-3"}>
							{this.props.children}
						</div>
					</Row>
				</Container>
			</div>
		);
	}

}