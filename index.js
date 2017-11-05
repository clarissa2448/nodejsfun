// index.js
require ('./app/index.js')

const_ = require('lodash')
// _.assign({ 'a': 1 }, { 'b': 2 }, { 'c': 3 });

//HTTP servers
const http = require('http') //uses http module
const port = 3000 //binds to port 3000 to listen on

const requestHandler = (request, resposne) => {
	console.log(request.url)
	response.end('Hello Node.js Server!')
	}
const server = http.createServer(requestHandler)

server.listen(port, (err) => {
	if (err){
		return console.log('something bad happened', err)
	}
	console.log(`server is litening on ${port}`)
})