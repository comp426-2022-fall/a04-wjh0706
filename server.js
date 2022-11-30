import { roll } from "./lib/roll.js"
import minimist from "minimist"
import express from "express"

const app = express()
const args = minimist(process.argv.slice(2))
var port =  args.port || 5000
app.use(express.urlencoded({extended: true}))
app.get('/app/',function (req, res) {
	res.status(200).send('200 OK');
})

app.get('/app/roll/', function(req, res) {
	res.status(200).send(roll(6, 2, 1))
})

app.post('/app/roll/', function(req, res) {
	res.status(200).send(roll(parseInt(req.params.sides)||6, parseInt(req.params.dice)||2, parseInt(req.params.rolls)||1))
})

app.get('/app/roll/:sides/', function(req, res) {
	res.status(200).send(roll(parseInt(req.params.sides), 2, 1))
})

app.get('/app/roll/:sides/:dice/', function(req, res) {
	res.status(200).send(roll(parseInt(req.params.sides), parseInt(req.params.dice), 1))
})

app.get('/app/roll/:sides/:dice/:rolls/', function(req, res) {
	res.status(200).send(roll(parseInt(req.params.sides), parseInt(req.params.dice), parseInt(req.params.rolls)))
})

app.get('*', function(req, res) {
	res.status(404).send("404 NOT FOUND")
})

app.listen(port)
