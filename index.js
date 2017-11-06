// index.js
require ('./app/index.js')

const_ = require('lodash')
// _.assign({ 'a': 1 }, { 'b': 2 }, { 'c': 3 });

//HTTP servers
const http = require('http') //uses http module
const port = 3000 //binds to port 3000 to listen on

const requestHandler = (request, resposne) => { console.log(request.url)
response.end('Hello Node.js Server!')     } //request handler invoked everytime a request hits a server 
const server = http.createServer(requestHandler)

server.listen(port, (err) => {
	if (err){
		return console.log('something bad happened', err) //error handling if port is already taken
	}
	console.log(`server is litening on ${port}`)
})

//Express
// const express = require('express')
const app = express()
const port = 3000

app.get('/', (request, response) => {
	response.send('Hello from Express!')
})
app.listen(port,(err) => {
	if (err){
		return console.log('something bad happened', err)
	}
	console.log(`server is listening on ${port}`)
})
app.[stuff] rather than request url stuff

//Express Middlewares
//app.use is how to define middlewares
const express = require('express')
const app = express()
app.use((request, response, next) => { //next signals express to go to next middleware
  console.log(request.headers)
  console.log('here')
  next()
})

app.use((request, response, next) => {
  request.chance = Math.random()
  next()
})

app.get('/', (request, response) => {
  response.json({
    chance: request.chance
  })
})

app.listen(3000)

//Express Error Handling
const express = require('express')
const app = express()

app.get('/', (request, response) => {
  throw new Error('oops')
})

app.use((err, request, response, next) => {
  // log the error, for now just console.log
  console.log(err)
  response.status(500).send('Something broke!')
})









