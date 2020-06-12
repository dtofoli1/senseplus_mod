import React, { Component } from "react";
import Placeholder from "../../assets/img_placeholder.png";
//import UploadIcon from "./upload_icon.png";
import NavMenu from "../../components/nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";

class AddCourse extends Component {
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
					<NavMenu text={"Novo Treinamento"} />
				</div>
				<Container className="col-11 col-md-8 mt-4" fluid>
					<Form>
						<Form.Control size="sm" as="select">
							<option>Categoria 1</option>
							<option>Categoria 2</option>
							<option>Categoria 3</option>
							<option>Categoria 4</option>
							<option>Categoria 5</option>
						</Form.Control>
						<div className="text-center">
							<Form.Group>
								<label htmlFor="uploadImage">
									<Image
										className="mt-2"
										style={{
											width: "45%",
											height: "75%",
										}}
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
							</Form.Group>
						</div>
						<Form.Group className="mt-2" controldid="newCourseName">
							<Form.Control type="text" placeholder="Nome do treinamento" />
						</Form.Group>
						<Form.Group controlid="newCatDescription">
							<Form.Control
								as="textarea"
								rows="7"
								type="text"
								placeholder="Descrição"
							/>
						</Form.Group>
						<Form.Group>
							<Form.File label="Upload do modelo" data-browse="Procurar" custom>
								{/* <Image className="mr-1 mr-lg-3 mr-md-0" src={UploadIcon} /> */}
								{/* <Button
										className="col-10 col-lg-11 col-md-11"
										style={{
											backgroundColor: "black",
											color: "white",
											fontWeight: "590",
											fontSize: "1em",
										}}
									>
										Upload
									</Button> */}
							</Form.File>
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

export default AddCourse;
