// **********************************************************************************************
// ** static web server
// **********************************************************************************************
var express = require('express');
var path = require('path');
var app = express();

var port = 8088;

var router = express.Router();

app.use(express.static(path.join(__dirname, './app')));
app.get('/', function(req, res) {
  res.sendfile(__dirname + './app/index.html');
});

router.get('/', function (req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});

app.use('/api', router);

app.listen(port);
console.log('Test Angular static web server ' + port);
