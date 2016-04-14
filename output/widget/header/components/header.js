define('widget/header/components/header.jsx', function(require, exports, module) {

  /**
   * @require widget/header/header.less
   */
  
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
  	value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
  
  var _react = require("react");
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRouter = require("reactRouter");
  
  var Header = _react2["default"].createClass({
  	displayName: "Header",
  
  	mixins: [_reactRouter.History],
  
  	getInitialState: function getInitialState() {
  		return {};
  	},
  
  	componentDidMount: function componentDidMount() {},
  
  	componentWillUnmount: function componentWillUnmount() {},
  
  	render: function render() {
  		return _react2["default"].createElement(
  			"div",
  			{ className: "m-header" },
  			_react2["default"].createElement(
  				"div",
  				{ className: "inner rel" },
  				_react2["default"].createElement(
  					"h1",
  					null,
  					"程序员之家"
  				)
  			)
  		);
  	}
  });
  
  exports["default"] = Header;
  module.exports = exports["default"];

});
