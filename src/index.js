import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginScreen from "./pages/login";
import Category from "./pages/category";
import Course from "./pages/course";
import AddCourse from "./pages/course/add";
import AddCategory from "./pages/category/add";
import AdmUsers from "./pages/admUsers/";
import AddUsers from "./pages/admUsers/add";
import AdmCourse from "./pages/admCourses";
import EditCourse from "./pages/admCourses/edit";

ReactDOM.render(
	<BrowserRouter>
		<Switch>
			<Route path="/" exact component={LoginScreen} />
			<Route path="/category" component={Category} />
			<Route path="/course" component={Course} />
			<Route path="/add" component={AddCourse} />
			<Route path="/add2" component={AddCategory} />
			<Route path="/adm_users" component={AdmUsers} />
			<Route path="/adm_add_users" component={AddUsers} />
			<Route path="/adm_courses" component={AdmCourse} />
			<Route path="/adm_edit_course" component={EditCourse} />
		</Switch>
	</BrowserRouter>,
	document.getElementById("root")
);
