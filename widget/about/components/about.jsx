/**
 * @require "../about.less"
 */
import React from "react"
var About = React.createClass({
	getInitialState: function () {
		return {};
	},
	componentDidMount: function () {

	},
	componentWillUnmount: function () {

	},
	render: function () {
		var bgURL = __uri("/static/image/about.jpeg");
		return (<div className="m-content m-about rel">
				<img className="m-background" src={bgURL}/>
			</div>
		);
	}
});
export default About;