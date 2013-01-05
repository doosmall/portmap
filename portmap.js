
var net = require("net");
var toPort = 33933;
var toHost = "127.0.0.1";

var server = net.createServer(function(sock){
	c = net.createConnection(toPort, toHost);
	sock.pipe(c);
	c.pipe(sock);
});

server.listen(33833);