import React, { Component } from "react";
import LinkButton from "../../components/LinkButton";
import AdmItem from "../../components/admItem";
import AdmUserCard from "../../components/admUserCard";
import "./styles.css";
import NavMenu from "../../components/nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

class EditCourse extends Component {
	render() {
		return (
			<div>
				<div className="NavMenu">
					<NavMenu text={"Treinamentos"} />
				</div>
				<Container id="buttonsPanel" className="mt-3 col-md-8" fluid>
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
								to="/adm_add_users"
								name="Novo usuário"
								className="py-1"
								size="lg"
								style={{
									backgroundColor: "black",
									color: "white",
									fontSize: "0.86em",
									fontWeight: "599",
									textAlign: "center",
									textJustify: "none",
									whiteSpace: "pre",
								}}
								block
							></LinkButton>
						</Col>
						<Col xs={4} className="px-0">
							<LinkButton
								to="#"
								name="Treinamentos"
								className="py-1"
								size="lg"
								style={{
									backgroundColor: "#FFD522",
									color: "black",
									fontSize: "0.85em",
									fontWeight: "bold",
									textAlign: "center",
									textJustify: "none",
								}}
								block
							></LinkButton>
						</Col>
					</Row>
				</Container>
				<div className="ml-md-4 mt-2 mb-2">
					<AdmItem />
					<Col className="mt-2" style={{ fontSize: "0.90em" }}>
						<Row>
							<b>Objetivo da Aula</b>
							<br />
						</Row>
						<Row className="mt-2">
							Lorem ipsum dolr sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna alique. Ut
							enim ad minim veniam
						</Row>
						<Row>
							<span className="mt-2 mr-5">
								<b>Duração</b>
								<br />
								8 horas 15 min 42 sec
								<br />
							</span>
							<span className="mt-2 ml-5">
								<b>Pontuação</b>
								<br />
								568 pts
								<br />
							</span>
						</Row>
					</Col>
				</div>
				<div className="mt-3 ml-md-4">
					<b>Usuários cadastrados</b>
					<AdmUserCard />
				</div>
			</div>
		);
	}
}

export default EditCourse;
