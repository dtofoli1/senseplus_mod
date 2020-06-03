import React, { Component } from "react";
import Placeholder from "../../components/img_placeholder.png";
//import { Link } from "react-router-dom";
import NavMenu from "../../components/nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
//import Row from "react-bootstrap/Row";
//import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";

//IMPORTANTE - TROCAR FORM DE ENVIO!

class addCategory extends Component {
	render() {
		return (
			<div>
				<div>
					<NavMenu text={"Novo Treinamento"} />
				</div>
				<Container fluid>
					<Image className=" col-sm-7 col-md-6 mt-2" src={Placeholder} fluid />
					<Form className="mt-5">
						<Form.Group controldId="newCatName">
							<Form.Control type="text" placeholder="Nome da categoria" />
						</Form.Group>
						<Form.Group controlId="newCatDescription">
							<Form.Control
								as="textarea"
								rows="5"
								type="text"
								placeholder="Descrição"
							/>
						</Form.Group>
						<Button variant="success" className="mr-auto">
							SALVAR
						</Button>
					</Form>
				</Container>
			</div>
		);
	}
}
