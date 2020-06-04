import React, { Component } from "react";
import LinkButton from "../../components/LinkButton";
import Item from "../../components/item";
import "./styles.css";
import { Link } from "react-router-dom";
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
						<Col xs={6} className="pl-2">
							<Link to="/category">
								<Button
									className="p-0"
									size="lg"
									href="#category"
									style={{
										backgroundColor: "#FFD522",
										color: "black",
										fontSize: "1em",
										fontWeight: "bold",
									}}
									block
								>
									Categoria
								</Button>
							</Link>
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
									fontWeight: "599",
								}}
								block
							>
								Treinamentos
							</Button>
						</Col>
					</Row>
					<Row>
						<LinkButton to="/add" name="Novo Treinamento" />
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
