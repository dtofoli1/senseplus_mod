import React, { Component } from "react";
import Signs from "./signs.svg";
import Search from "./search.svg";
import "./nav.css";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";

class NavMenu extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: "NavMenu",
		};
	}
	render() {
		return (
			<div>
				<Nav className="pb-2 pt-3">
					<Nav.Link href="#logout" className="pl-2 col-4 p-0 m-0">
						<Link to="/">
							<Image src={Signs} className="float-left" fluid></Image>
						</Link>
					</Nav.Link>
					<Navbar.Brand className="col-4 p-0 mx-0 mb-1 text-center">
						{this.props.text}
					</Navbar.Brand>
					<Nav.Link href="#search" className="pr-2 col-4 p-0 m-0">
						<Image src={Search} className="float-right" fluid></Image>
					</Nav.Link>
				</Nav>
			</div>
			/* <Nav.Col>
					<Form inline>
						<FormControl type="text" placeholder="Search" className="mr-sm-2" />
						<Button variant="outline-success">Search</Button>
					</Form>
        </Nav.Col> */
		);
	}
}
export default NavMenu;
