import React from "react";
import {Nav, Navbar, NavbarBrand, NavLink} from "react-bootstrap";

export default class Header extends React.Component {

	render() {
		return (
			<div>
				<Navbar variant={"dark"} bg={"lead"} className={"px-5"}>
					<NavbarBrand><h1>ABC Training</h1></NavbarBrand>
				</Navbar>
			</div>
		);
	}

}