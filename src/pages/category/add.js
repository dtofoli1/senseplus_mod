import React, { Component } from "react";
import Placeholder from "../../components/img_placeholder.png";
//import { Link } from "react-router-dom";
import NavMenu from "../../components/nav.js";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
//import Row from "react-bootstrap/Row";
//import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";

class AddCategory extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedFile: null,
		};
	}

	fileSelectedHandler = (event) => {
		console.log(event.target.files[0]);
		this.setState(
			{
				selectedFile: event.target.files[0],
			},
			() => this.fileUploadHandler()
		);
	};

	fileUploadHandler = () => {
		/* file upload triggered */
		console.log("file upload triggered");
	};

	render() {
		return (
			<div>
				<div className="NavMenu">
					<NavMenu text={"Nova Categoria"} />
				</div>
				<Container className="col-11 col-md-8 mt-4" fluid>
					<div className="text-center">
						<label htmlFor="uploadImage">
							<Image
								style={{ width: "40%", height: "75%" }}
								src={Placeholder}
								fluid
							/>
						</label>
						<input
							id="uploadImage"
							style={{ display: "none" }}
							type={"file"}
							onChange={this.fileSelectedHandler}
						/>
					</div>
					<Form className="mt-3">
						<Form.Group controldid="newCatName">
							<Form.Control
								className="rounded"
								type="text"
								placeholder="Nome da categoria"
							/>
						</Form.Group>
						<Form.Group controldid="newCatDescription">
							<Form.Control
								className="mt-3"
								as="textarea"
								rows="7"
								type="text"
								placeholder="Descrição"
							/>
						</Form.Group>
						<Button
							style={{
								backgroundColor: "#38B71B",
								color: "black",
								fontWeight: "bold",
								fontSize: "1em",
							}}
							className="col-12 pb-2 border-light"
						>
							SALVAR
						</Button>
					</Form>
				</Container>
			</div>
		);
	}
}

export default AddCategory;
