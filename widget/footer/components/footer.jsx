/**
 * @require ../footer.less
 */
import React from "react";
import FriendLink from "/widget/friendlink/components/friendlink.jsx";
var Footer = React.createClass({
	getInitialState: function () {
		return {};
	},

	componentDidMount: function () {

	},
	componentWillUnmount: function () {

	},
	render: function () {
		return (
			<div className="m-footer">
				<FriendLink />
				<div className="center">Copyright © 2014 - 2016 coderoom1401. All Rights Reserved</div>
			</div>
		);
	}
});

export default Footer;