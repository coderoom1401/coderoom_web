define('static/entry.jsx', function(require, exports, module) {

  "use strict";
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
  
  var _react = require("react");
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRouter = require("reactRouter");
  
  var _jquery = require("jquery");
  
  var _jquery2 = _interopRequireDefault(_jquery);
  
  var _widgetMainComponentsMainJsx = require("widget/main/components/main.jsx");
  
  var _widgetMainComponentsMainJsx2 = _interopRequireDefault(_widgetMainComponentsMainJsx);
  
  require("static/lib/jquery.ui");
  
  _jquery2["default"].ajaxSetup({
  	cache: false //关闭AJAX缓存
  });
  
  _react2["default"].render(_react2["default"].createElement(
  	_reactRouter.Router,
  	null,
  	_react2["default"].createElement(_reactRouter.Route, { path: "/", component: _widgetMainComponentsMainJsx2["default"] })
  ), document.body);

});
