const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const port = process.env.PORT|| 3000


const app = express();

app.use(express.static(__dirname + '/public'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/temp', function(req, res) {
	res.render('template');
});

app.get('/team/15/Romar', function(req, res){
	res.render('member', {
		name: 'Romar Dizon',
		email: 'romardizon27@gmail.com',
		phone: '09213309976',
		imageurl: 'https://scontent.fmnl6-1.fna.fbcdn.net/v/t1.0-9/16265261_1344068092326897_2289372992494543464_n.jpg?_nc_cat=0&oh=a9e00222d6deffadff94c5b9245f247c&oe=5BCED5F9',
		hobbies: ['Playing Basketball', 'Playing Badminton', 'Playing Dota','Watching Movies', 'Dancing']
	});
});

app.get('/team/15/Danica', function(req, res){
	res.render('member', {
		name: 'Danica Dadia',
		email: 'danicadadia.dd@gmail.com',
		phone: '09297567752',
		imageurl:'https://scontent.fmnl6-1.fna.fbcdn.net/v/t1.0-9/26229420_2164092686964723_3022482758723077958_n.jpg?_nc_cat=0&oh=c06bc1dbc14b5d2d2abc99bfb092bea6&oe=5BD7AA8E',
		hobbies: ['Watching Movies', 'Dancing', 'Makeup']
	});
}); 

app.listen(port, function() {
	console.log('Server started at port 3000');
});