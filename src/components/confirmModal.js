import React, { Component } from "react";
import Warning from "../assets/warning.png";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

class ConfirmModal extends Component {
	constructor(props) {
		const [show, setShow] = useState(false);
		const handleClose = () => setShow(false);
		const handleShow = () => setShow(true);
		const handleClick = (e, data) => {
			console.log(e.target);
		};
		super(props);
		this.state = {
			text: "Tem certeza que deseja excluir ?",
			item: null,
		};
	}
	render() {
		return (
			<Modal show={this.props.show} onHide={this.props.handleClose}>
				<Modal.Body className="text-center">
					<Image src={Warning} fluid />
					{this.props.text}
					<Row>
						<Button
							id="cancel"
							styles={{ backgroundColor: "black", color: "white" }}
							className="p-1 m-0"
							onClick={this.props.handleClose}
						>
							CANCELAR
						</Button>
						<Button
							id="confirm"
							styles={{ backgroundColor: "#FF0000", color: "white" }}
							className="p-1 m-0"
							onClick={this.props.handleClose}
						>
							EXCLUIR
						</Button>
					</Row>
				</Modal.Body>
			</Modal>
		);
	}
}

export default ConfirmModal;
