import { roll } from "./lib/roll.js"
import minimist from "minimist"
import express from "express"

const app = express()
const args = minimist(process.argv.slice(2))
var port =  args.port || 5000

app.get('/app/',function (req, res) {
	res.status(200).send('200 OK');
})

app.get('*', function(req, res) {
	res.status(404).send("404 NOT FOUND")
})

app.post('/app/roll/', function(req, res) {
	const sides = Number(req.body.sides)||6
	const dice = Number(req.body.dice)||2
	const rolls = Number(req.body.rolls)||1
	res.send(roll(sides, dice, rolls))
})

app.get('/app/roll/:sides/', function(req, res) {
	const sides = Number(req.params.sides)	
	res.status(200).send(roll(sides, 2, 1))
})

app.get('/app/roll/:sides/:dice/', function(req, res) {
	const sides = Number(req.params.sides)
	const dice = Number(req.params.dice)	
	res.status(200).send(roll(sides, dice, 1))
})

app.get('/app/roll/:sides/:dice/:rolls/', function(req, res) {
	const sides = Number(req.params.sides)
	const dice = Number(req.params.dice)
	const rolls = Number(req.params.rolls)
	res.status(200).send(roll(sides, dice, rolls))
})

app.listen(port)
