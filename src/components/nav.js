import React, { Component } from "react";
import "./nav.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

class NavMenu extends Component {
	render() {
		return (
			<Nav className="justify-content-center">
				<Nav.Link href="#logout">LogOut</Nav.Link>
				<Navbar.Brand>Sense+ Moderador</Navbar.Brand>
				<Nav.Link href="#search">Buscar</Nav.Link>
			</Nav>
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
