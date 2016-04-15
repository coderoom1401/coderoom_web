import React from "react";
import {ReactRouter, Router, Route} from "reactRouter";
import $ from "jquery";
import MainView from "/widget/main/components/main.jsx";
import About from "/widget/about/components/about.jsx";
import Home from "/widget/home/components/home.jsx";
require("/static/lib/jquery.ui.js");

$.ajaxSetup({
	cache: false //关闭AJAX缓存
});
if (!location.hash) {
	location.replace("#/home");
}

React.render((
	<Router>
		<Route path="/" component={MainView}>
			<Route name="home" path="/home" component={Home}/>
			<Route name="about" path="/about" component={About}/>
		</Route>
	</Router>
), document.body);
