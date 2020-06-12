import React, { Component } from "react";
import LinkButton from "../../components/LinkButton";
import Item from "../../components/item";
import "./styles.css";
import NavMenu from "../../components/nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Course extends Component {
	componentDidMount() {
		document.body.style = "background: white;";
	}
	render() {
		return (
			<div>
				<div className="NavMenu">
					<NavMenu text={"Treinamentos"} />
				</div>
				<Container className="mt-3 col-md-8" fluid>
					<Row>
						<Col xs={6} className="pl-0 pr-0">
							<LinkButton
								to="/category"
								name="Categoria"
								className="pt-1 pb-1"
								size="lg"
								href="#category"
								style={{
									backgroundColor: "black",
									color: "white",
									fontSize: "0.85em",
									fontWeight: "599",
								}}
								block
							></LinkButton>
						</Col>
						<Col xs={6} className="pl-0 pr-0">
							<Button
								className="pt-1 pb-1"
								size="lg"
								href="#Treinamentos"
								style={{
									backgroundColor: "#FFD522",
									color: "black",
									fontSize: "0.85em",
									fontWeight: "bold",
								}}
								block
							>
								Treinamentos
							</Button>
						</Col>
					</Row>
					<Row>
						<LinkButton
							id="changeBtn"
							className="p-0 mt-1"
							size="lg"
							style={{
								backgroundColor: "#38B71B",
								color: "black",
								fontSize: "1em",
								fontWeight: "bold",
							}}
							block
							to="/add"
							name="Novo Treinamento"
						/>
					</Row>
				</Container>
				<Container className="mt-4 col-md-8" fluid>
					<Item />
					<Item />
					<Item />
				</Container>
			</div>
		);
	}
}

export default Course;
