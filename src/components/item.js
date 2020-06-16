import Placeholder from "../assets/img_placeholder.png";
//import Warning from "../assets/warning.png";
import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
//import Modal from "react-bootstrap/Modal";

class Item extends Component {
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
									className="ml-3 mt-3"
									style={{ backgroundColor: "#FF0000" }}
								>
									Excluir
								</Button>
							</Row>
						</Col>
					</Row>
				</Card>
				{/* <Modal show={show} onHide={this.handleClose}>
					<Modal.Body className="text-center">
						<Image src={Warning} fluid />
						{this.props.text}
						<Row>
							<Button
								id="cancel"
								styles={{ backgroundColor: "black", color: "white" }}
								className="p-1 m-0"
								onClick={handleClose}
							>
								CANCELAR
							</Button>
							<Button
								id="confirm"
								styles={{ backgroundColor: "#FF0000", color: "white" }}
								className="p-1 m-0"
								onClick={this.handleClose}
							>
								EXCLUIR
							</Button>
						</Row>
					</Modal.Body>
				</Modal> */}
			</div>
		);
	}
}

export default Item;
