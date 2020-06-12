import React, { Component } from "react";
import Placeholder from "../../assets/img_placeholder.png";
import LinkButton from "../../components/LinkButton";
import "./styles.css";
import NavMenu from "../../components/nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Table from "react-bootstrap/Table";

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
								to="#"
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
					<Card>
						<Row>
							<Col className="mt-2 mb-2 col-md-3">
								<Image className="" src={Placeholder} fluid />
							</Col>
							<Col className="mt-2 mb-2">
								Nome do usuário
								<br /> CPF
								<br /> Setor
							</Col>
							<Col>
								<Row className="pr-3 d-flex align-items-end flex-column">
									<Button
										className="col-6 mt-auto p-2"
										size="lg"
										href="#category"
										style={{
											backgroundColor: "black",
											color: "white",
											fontSize: "0.85em",
											fontWeight: "599",
										}}
									>
										Usuários
									</Button>
									<Button
										className="col-6 mt-auto p-2"
										size="lg"
										href="#category"
										style={{
											backgroundColor: "red",
											color: "white",
											fontSize: "0.85em",
											fontWeight: "599",
										}}
										block
									>
										Usuários
									</Button>
								</Row>
							</Col>
						</Row>
						<Row>
							<Col>
								<Table>
									<thead id="tableHeaders">
										<tr>
											<th>ATIVIDADE</th>
											<th>TEMPO</th>
											<th>PONTOS</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>Lorem ipsum dolor sit amet</td>
											<td>30.03.2020</td>
											<td>3 pts</td>
										</tr>
										<tr>
											<td>Lorem ipsum dolor sit amet</td>
											<td>01.04.2020</td>
											<td>2 pts</td>
										</tr>
										<tr>
											<td>Lorem ipsum dolor sit amet</td>
											<td>02.04.2020</td>
											<td>1 pts</td>
										</tr>
									</tbody>
								</Table>
							</Col>
						</Row>
					</Card>
				</Container>
			</div>
		);
	}
}

export default AdmUsers;
