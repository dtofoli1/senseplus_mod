import React, { Component } from "react";
import Placeholder from "../assets/img_placeholder.png";
//import LinkButton from "./LinkButton";
import "./styles.css";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Table from "react-bootstrap/Table";

class UserCard extends Component {
	render() {
		return (
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
					<Col className="d-flex align-items-end">
						<Row className="">
							<Button
								style={{
									backgroundColor: "black",
									color: "white",
									fontSize: "0.72em",
									fontWeight: "599",
								}}
							>
								Editar
							</Button>
							<Button
								style={{
									backgroundColor: "red",
									color: "white",
									fontSize: "0.72em",
									fontWeight: "599",
								}}
							>
								Excluir
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
							</tbody>
						</Table>
					</Col>
				</Row>
			</Card>
		);
	}
}

export default UserCard;
