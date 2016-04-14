var connect = require('connect');
var serveStatic = require('serve-static');
var server = connect();
server.use(serveStatic('/output/index.html'));
server.listen(18080);