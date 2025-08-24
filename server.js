try {
   process.loadEnvFile() 
} catch (error) {
    
    console.log("there is no .env file, using defautl env variables")
}


const jsonServer = require ('json-server')

const server = jsonServer.create() //Creating the server object

//configuration of the server
const middlewares = jsonServer.defaults() //Set all the main configurations a server should have
server.use(middlewares)

//create all of the access routes
const router = jsonServer.router("db.json") //This createes all of the CRUD routes for all of the collections we have in our json database
server.use(router)

const PORT = process.env.PORT // 5005 // 3000, 8000, 5000

server.listen(PORT, ()=> {
    console.log(`JSON server is running at port ${PORT}`)
    console.log(`Local access at http://localhost:${PORT}`)
}) // to check if the server is running properly