var express = require('express');
var bodyParser = require('body-parser');
var routes = require('./controllers/burgers_controller.js')

var PORT = process.env.PORT || 8080;
var app = express();

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Handlebars
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(routes);

app.listen(PORT, function() {
	console.log('Listening on PORT:' + PORT);
});