import Placeholder from "../assets/img_placeholder.png";
import Warning from "../assets/warning.png";
import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";

class Item extends Component {
	constructor(props) {
		super(props);
		this.state = { show: false, id: "test" };
	}
	handleShow(e) {
		e.preventDefault();
		console.log(e.target.id);
		this.setState({ show: true });
	}
	handleClose() {
		this.setState({ show: false });
	}
	render() {
		return (
			<div>
				<Card className="mt-2">
					<Row className="mt-2">
						<Col className="col-4">
							<Image src={Placeholder} fluid></Image>
						</Col>
						<Col>
							Titulo em até duas linhas...
							<Row>
								<Button
									id={this.state.id}
									onClick={this.handleShow.bind(this)}
									className="ml-3 mt-3"
									style={{ backgroundColor: "#FF0000" }}
								>
									Excluir
								</Button>
							</Row>
						</Col>
					</Row>
				</Card>
				<Modal show={this.state.show} onHide={this.handleClose.bind(this)}>
					<Modal.Body>
						<Container fluid>
							<Row className="justify-content-center">
								<Col md={3} className="m-0 p-0">
									<Image src={Warning} fluid />
								</Col>
							</Row>
							<Row className="justify-content-center mt-1">
								TEM CERTEZA QUE DESEJA EXCLUIR ?
							</Row>
							<Row className="justify-content-center mt-1">
								<Button
									id="cancel"
									style={{ backgroundColor: "black", color: "white" }}
									className="ml-0 mb-1"
									onClick={this.handleClose.bind(this)}
								>
									CANCELAR
								</Button>
								<Button
									id="confirm"
									style={{ backgroundColor: "#FF0000", color: "white" }}
									className="ml-1 mb-1"
									onClick={this.handleClose.bind(this)}
								>
									EXCLUIR
								</Button>
							</Row>
						</Container>
					</Modal.Body>
				</Modal>
			</div>
		);
	}
}

export default Item;
