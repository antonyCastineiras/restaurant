const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded( { extended: true } ))

app.set('view engine', 'ejs')

// import routes
require('./config/routes')(app)

app.listen(port, () => {
	console.log("server running on port " + port)
})