import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import Button from "react-bootstrap/Button";

const LinkButton = (props) => {
	const {
		name,
		history,
		location,
		match,
		staticContext,
		to,
		onClick,
		// ⬆ filtering out props that `button` doesn’t know what to do with.
		...rest
	} = props;
	return (
		<Button
			{...rest} // `children` is just another prop!
			onClick={(event) => {
				onClick && onClick(event);
				history.push(to);
			}}
			id="changeBtn"
			className="p-0 mt-1 ml-2 mr-2"
			size="lg"
			style={{
				backgroundColor: "#38B71B",
				color: "black",
				fontSize: "1em",
				fontWeight: "bold",
			}}
			block
		>
			{name}
		</Button>
	);
};

LinkButton.propTypes = {
	to: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
};

export default withRouter(LinkButton);
