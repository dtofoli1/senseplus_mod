import React, { Component } from "react";
import "./styles.css";
import NavMenu from "../../components/nav";
import Placeholder from "./img_placeholder.png";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
/* import Image from "react-bootstrap/Image"; */

class Category extends Component {
	componentWillMount() {
		document.body.style = "background: white;";
	}
	render() {
		return (
			<div>
				<div className="NavMenu">
					<NavMenu />
				</div>
				<div className="Buttons">
					<Container className="mt-3" fluid>
						<Row>
							<Col xs={6} className="pl-2">
								<Button
									className="p-0"
									size="lg"
									href="#category"
									style={{
										backgroundColor: "#FFD522",
										color: "black",
										fontSize: "1em",
									}}
									block
								>
									Categoria
								</Button>
							</Col>
							<Col xs={6} className="pr-2">
								<Button
									className="p-0"
									size="lg"
									href="#Treinamentos"
									style={{
										backgroundColor: "black",
										color: "white",
										fontSize: "1em",
									}}
									block
								>
									Treinamentos
								</Button>
							</Col>
						</Row>
						<Row>
							<Button
								className="p-0 mt-1 ml-2 mr-2"
								size="lg"
								href="#NovoTreinamento"
								style={{
									backgroundColor: "#38B71B",
									color: "black",
									fontSize: "1em",
								}}
								block
							>
								Nova Categoria
							</Button>
						</Row>
					</Container>
				</div>
				<div className="Content">
					<Container className="mt-4" fluid>
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
					</Container>
				</div>
			</div>
		);
	}
}

export default Category;
