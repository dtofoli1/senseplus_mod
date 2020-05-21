import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import logo from "./Logo2x.png";

class loginScreen extends Component {
	componentWillMount() {
		document.body.style = "background: black;";
	}

	render() {
		return (
			<div className="col-6 mx-auto my-auto">
				<Row className="justify-content-center mt-5 pt-5">
					<Image src={logo} alt="" className="align-middle" fluid />
				</Row>
				<Row className="justify-content-center">
					<Form className="mt-5">
						<Form.Group controlId="formBasicEmail">
							<Form.Control type="email" placeholder="Usuário" />
						</Form.Group>
						<Form.Group controlId="formBasicPassword">
							<Form.Control type="password" placeholder="Senha" />
						</Form.Group>
						<Link to="/categoria">
							<Button variant="warning" type="submit" className="mr-auto">
								Login
							</Button>
						</Link>
					</Form>
				</Row>
			</div>
		);
	}
}

export default loginScreen;
