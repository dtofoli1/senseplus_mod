import React, { Component } from "react";
import Placeholder from "../assets/img_placeholder.png";
//import LinkButton from "./LinkButton";
import "./styles.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

class AdmUserCard extends Component {
	render() {
		return (
			<Card>
				<Row>
					<Col xs={4} className="mt-2 mb-2 col-md-3">
						<Image className="" src={Placeholder} fluid />
					</Col>
					<Col className="mt-2 mb-2">
						Nome do usuário
						<br /> CPF
						<br /> Setor
					</Col>
				</Row>
			</Card>
		);
	}
}

export default AdmUserCard;
