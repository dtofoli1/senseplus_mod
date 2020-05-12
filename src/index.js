import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginScreen from "./pages/login";
import Category from "./pages/category";

ReactDOM.render(
	<BrowserRouter>
		<Switch>
			<Route path="/" exact={true} component={LoginScreen} />
			<Route path="/categoria" exact={true} component={Category} />
		</Switch>
	</BrowserRouter>,
	document.getElementById("root")
);
