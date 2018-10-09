const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.json());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// get index
app.get('/', (req, res) => {
	res.render('index');
})

const port = 3000;
app.listen(port, () => {
	console.log(`App running on port ${port}`);
})

module.exports = app;
