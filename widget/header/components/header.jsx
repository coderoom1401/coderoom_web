/**
 * @require ../header.less
 */

import React from "react";
import {History} from "reactRouter";

var Header = React.createClass({

	mixins: [History],

	getInitialState: function () {
		return {}
	},

	componentDidMount: function () {
	},

	componentWillUnmount: function () {
	},
	onAboutClick: function () {
		this.history.pushState("", "/about");
	},
	onLogoClick: function () {
		this.history.pushState("", "/home");
	},

	render: function () {
		return (
			<div className="m-header">
				<div className="inner">
					<h1 onClick={this.onLogoClick}>程序员之家</h1>
					<a href="https://github.com/coderoom1401" target="_blank">GitHub</a>
					<a className="mr10" onClick={this.onAboutClick}>关于我们</a>
					<a className="mr10">点滴生活</a>
				</div>
			</div>
		);
	}
});

export default Header;