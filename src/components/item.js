import Placeholder from "./img_placeholder.png";
import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

class Item extends Component {
	render() {
		return (
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
		);
	}
}
