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
				<AdmItem />
				<div className="ml-2 mt-2 mb-2">Usuários cadastrados</div>
				<AdmUserCard />
			</div>
		);
	}
}

export default EditCourse;
