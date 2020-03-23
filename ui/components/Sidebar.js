import * as React from "react";
import {Nav, Navbar, NavLink} from "react-bootstrap";

// TODO: Use this
export default class Sidebar extends React.Component {

	render() {
		return (
			<div>
				<div className={"sidebar pt-3"}>
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
								<NavLink active={false}>Information sessions</NavLink>
								<NavLink active={false}>Contact</NavLink>
							</Nav>
						</Navbar>
					</div>
				</div>
			</div>
		)
	}

}