import React from "react";
import Header from "/widget/header/components/header.jsx";
import Footer from "/widget/footer/components/footer.jsx"
import {History} from "reactRouter";

var MainView = React.createClass({

	mixins: [History],

	getInitialState: function () {
		return {}
	},

	componentDidMount: function () {
		// this.unSubscribe = BaseStore.listen(this.onStateChange.bind(this));
	},

	componentWillUnmount: function () {
		// this.unSubscribe();
	},

	renderChildren: function () {
		return React.Children.map(this.props.children, function (child) {
			return React.cloneElement(child, this.state);
		}.bind(this));
	},
	render: function () {
		return (
			<div className="__runtime__">
				<Header />
				<div className="m-main">
					{this.renderChildren()}
				</div>
				<Footer/>
			</div>);
	}
});

export default MainView;