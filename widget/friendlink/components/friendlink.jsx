/**
 * require ../friendlink.less
 */
import React from "react";
var FriendLink = React.createClass({
	getInitialState: function () {
		return {};
	},
	componentDidMount: function () {

	},
	componentWillUnmount: function () {

	},
	render: function () {
		return (
			<div className="m-friendlink">
				<span>友情链接:</span>
				<a className="ml10" href="http://www.androidblog.cn" target="_blank">android周报</a>
			</div>
		);
	}
});

export default FriendLink;