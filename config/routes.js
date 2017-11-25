const http = require('http')

module.exports = (app) => {

	app.get('/', (req, res) => {
		res.render("index")
	})

	app.post('/restaurants', (req, res) => {
		data = { lat: req.body.lat, lng: req.body.lng }
		res.render("restaurants", data)
	})
}