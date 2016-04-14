import React from "react";
import {ReactRouter, Router, Route} from "reactRouter";
import $ from "jquery";
import MainView from "/widget/main/components/main.jsx";

require("/static/lib/jquery.ui.js");

$.ajaxSetup({
	cache: false //关闭AJAX缓存
});

React.render((
	<Router>
		<Route path="/" component={MainView}>

		</Route>
	</Router>
), document.body);
