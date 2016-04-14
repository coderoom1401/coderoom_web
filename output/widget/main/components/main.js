define('widget/main/components/main.jsx', function(require, exports, module) {

  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
  	value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
  
  var _react = require("react");
  
  var _react2 = _interopRequireDefault(_react);
  
  var _widgetHeaderComponentsHeaderJsx = require("widget/header/components/header.jsx");
  
  var _widgetHeaderComponentsHeaderJsx2 = _interopRequireDefault(_widgetHeaderComponentsHeaderJsx);
  
  var _reactRouter = require("reactRouter");
  
  var MainView = _react2["default"].createClass({
  	displayName: "MainView",
  
  	mixins: [_reactRouter.History],
  
  	getInitialState: function getInitialState() {
  		return {};
  	},
  
  	componentDidMount: function componentDidMount() {
  		// this.unSubscribe = BaseStore.listen(this.onStateChange.bind(this));
  	},
  
  	componentWillUnmount: function componentWillUnmount() {
  		// this.unSubscribe();
  	},
  
  	renderChildren: function renderChildren() {
  		return _react2["default"].Children.map(this.props.children, (function (child) {
  			return _react2["default"].cloneElement(child, this.state);
  		}).bind(this));
  	},
  	render: function render() {
  		return _react2["default"].createElement(
  			"div",
  			{ className: "__runtime__" },
  			_react2["default"].createElement(_widgetHeaderComponentsHeaderJsx2["default"], null),
  			_react2["default"].createElement(
  				"div",
  				{ className: "m-main" },
  				this.renderChildren()
  			)
  		);
  	}
  });
  
  exports["default"] = MainView;
  module.exports = exports["default"];

});
