import React, { Component } from "react";
import NavMenu from "../../components/nav.js";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import LinkButton from "../../components/LinkButton";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class AddUser extends Component {
	render() {
		return (
			<div>
				<div className="NavMenu">
					<NavMenu text={"Novo Usuário"} />
				</div>
				<Container
					id="buttonsPanel"
					className="mt-3 col-md-8 text-center"
					fluid
				>
					<Row>
						<Col xs={4} className="px-0">
							<LinkButton
								to="/adm_users"
								name="Usuários"
								className="py-1"
								size="lg"
								style={{
									backgroundColor: "black",
									color: "white",
									fontSize: "0.85em",
									fontWeight: "599",
								}}
								block
							></LinkButton>
						</Col>
						<Col xs={4} className="px-0">
							<LinkButton
								to="#"
								name="Novo usuário"
								className="py-1"
								size="lg"
								style={{
									backgroundColor: "#FFD522",
									color: "black",
									fontSize: "0.86em",
									fontWeight: "bold",
									textAlign: "center",
									textJustify: "none",
									whiteSpace: "pre",
								}}
								block
							></LinkButton>
						</Col>
						<Col xs={4} className="px-0">
							<LinkButton
								to="/adm_courses"
								name="Treinamentos"
								className="py-1"
								size="lg"
								style={{
									backgroundColor: "black",
									color: "white",
									fontSize: "0.85em",
									fontWeight: "599",
									textAlign: "center",
									textJustify: "none",
								}}
								block
							></LinkButton>
						</Col>
					</Row>
				</Container>
				<Container className="col-11 col-md-8 mt-4" fluid>
					<Form className="mt-3">
						<Form.Group>
							<Form.Control type="text" placeholder="Nome" />
						</Form.Group>
						<Form.Group>
							<Form.Control type="text" pattern="[0-9]*" placeholder="CPF" />
						</Form.Group>
						<Form.Group>
							<Form.Control as="select" type="text" placeholder="Setor">
								<option>Setor 1</option>
								<option>Setor 2</option>
								<option>Setor 3</option>
								<option>Setor 4</option>
								<option>Setor 5</option>
							</Form.Control>
						</Form.Group>
						<Form.Group>
							<Form.Control as="select" type="text" placeholder="Categoria">
								<option>Categoria 1</option>
								<option>Categoria 2</option>
								<option>Categoria 3</option>
								<option>Categoria 4</option>
								<option>Categoria 5</option>
							</Form.Control>
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

export default AddUser;
