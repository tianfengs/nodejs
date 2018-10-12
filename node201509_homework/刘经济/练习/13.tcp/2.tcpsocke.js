var net = require('net')
var util = require('util')
var server = net.createServer({allowHalfOpen: false}, function(socket) {
    console.log(util.inspect(socket.address()))
    //�鿴��ǰ����������
    server.getConnections(function(err, count) {
        console.log(count);
    });

    socket.on('error', function(err) {
        console.log(err);
        socket.destroy();
    });
    socket.on('close', function (err) {
        console.log(err);
        socket.destroy();
    })
});
server.on('error', function(err) {
    console.log(err)
})
server.listen(8089, 'localhost', 511, function() {
    console.log(util.inspect(server.address()))
})