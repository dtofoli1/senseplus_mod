import React, { Component } from "react";
import Placeholder from "../../components/img_placeholder.png";
import UploadIcon from "./upload_icon.png";
//import { Link } from "react-router-dom";
import NavMenu from "../../components/nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
//import Row from "react-bootstrap/Row";
//import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";

//IMPORTANTE - TROCAR FORM DE ENVIO!

class AddCourse extends Component {
	render() {
		return (
			<div>
				<div className="NavMenu">
					<NavMenu text={"Novo Treinamento"} />
				</div>
				<Container className="col-11 col-md-8 mt-4" fluid>
					<Form>
						<Form.Control size="sm" as="select">
							<option>Categoria 1</option>
							<option>Categoria 2</option>
							<option>Categoria 3</option>
							<option>Categoria 4</option>
							<option>Categoria 5</option>
						</Form.Control>
						<Image className="mt-2" src={Placeholder} fluid />
						<Form.Group className="mt-2" controldId="newCourseName">
							<Form.Control type="text" placeholder="Nome do treinamento" />
						</Form.Group>
						<Form.Group controlId="newCatDescription">
							<Form.Control
								as="textarea"
								rows="7"
								type="text"
								placeholder="Descrição"
							/>
						</Form.Group>
						<Form.Group>
							<Form.File isValid>
								<Image className="mr-3" src={UploadIcon} />
								<Button
									className="col-10 col-md-11 ml-3"
									style={{
										backgroundColor: "black",
										color: "white",
										fontWeight: "bold",
										fontSize: "1em",
									}}
								>
									Upload
								</Button>
							</Form.File>
						</Form.Group>
						<Button
							style={{
								backgroundColor: "#38B71B",
								color: "black",
								fontWeight: "bold",
								fontSize: "1em",
							}}
							className="col-12 pb-2 border-light"
						>
							SALVAR
						</Button>
					</Form>
				</Container>
			</div>
		);
	}
}

export default AddCourse;
