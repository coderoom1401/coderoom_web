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

	render: function () {
		return (
			<div className="m-header">
				<div className="inner rel">
					<h1>程序员之家</h1>
				</div>
			</div>
		);
	}
});

export default Header;