import React, { Component } from "react";
import Item from "../../components/item";
import "./styles.css";
import { Link } from "react-router-dom";
import NavMenu from "../../components/nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Category extends Component {
	componentWillMount() {
		document.body.style = "background: white;";
	}
	render() {
		return (
			<div>
				<div className="NavMenu">
					<NavMenu text={"Categoria"} />
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
								<Link to="/course">
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
								</Link>
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
						<Item />
						<Item />
						<Item />
					</Container>
				</div>
			</div>
		);
	}
}

export default Category;
