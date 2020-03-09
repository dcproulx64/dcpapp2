// comment
// 

var express = require('express');
var app = express();
var port = process.env.PORT || 5000;

app.set('port', port);
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
    response.send('Hello World!')
});

app.listen(port, '0.0.0.0', function() {
    console.log("Node app is running at:" + port);
});
