import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import logo from "./Logo2x.png";

class loginScreen extends Component {
	render() {
		return (
			<Container fluid>
				<Row className="justify-content-center">
					<img src={logo} />
				</Row>
				<Row className="justify-content-center">
					<Button>Botão 1</Button>
				</Row>
			</Container>
		);
	}
}

export default loginScreen;
