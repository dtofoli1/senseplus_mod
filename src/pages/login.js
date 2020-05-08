import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import logo from "./Logo2x.png";

class loginScreen extends Component {
	render() {
		return (
			<div
				className="col-4 mx-auto my-auto"
				styles={{ backgroundColor: "black" }}
			>
				<Row className="justify-content-center mt-5">
					<Image src={logo} alt="" className="align-middle" fluid />
				</Row>
				<Row className="justify-content-center">
					<Form className="mt-5">
						<Form.Group controlId="formBasicEmail">
							<Form.Label>Email address</Form.Label>
							<Form.Control type="email" placeholder="Enter email" />
							<Form.Text className="text-muted">
								We'll never share your email with anyone else.
							</Form.Text>
						</Form.Group>
						<Form.Group controlId="formBasicPassword">
							<Form.Label>Password</Form.Label>
							<Form.Control type="password" placeholder="Password" />
						</Form.Group>
						<Button variant="warning" type="submit" className="mr-auto">
							Login
						</Button>
					</Form>
				</Row>
			</div>
		);
	}
}

export default loginScreen;
