import React, { Component } from "react";
import LinkButton from "../../components/LinkButton";
import UserCard from "../../components/UserCard";
import "./styles.css";
import NavMenu from "../../components/nav";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class AdmUsers extends Component {
	componentDidMount() {
		document.body.style = "background: white;";
	}
	render() {
		return (
			<div>
				<div className="NavMenu">
					<NavMenu text={"Usuário"} />
				</div>
				<Container id="buttonsPanel" className="mt-3 col-md-8" fluid>
					<Row>
						<Col xs={4} className="px-0">
							<LinkButton
								to="#"
								name="Usuários"
								className="py-1"
								size="lg"
								style={{
									backgroundColor: "#FFD522",
									color: "black",
									fontSize: "0.85em",
									fontWeight: "bold",
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
				<Container id="contentPanel" className="mt-4 col-md-8" fluid>
					<UserCard />
				</Container>
			</div>
		);
	}
}

export default AdmUsers;
