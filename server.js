import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'

dotenv.config()

const server = express()
const port = process.env.PORT || 8080;

server.use(cors({
    credentials : true,
    methods : ['GET', 'POST', 'DELETE', 'PUT'],
    name : 'http://localhost:3030',
}))

server.use(express.json({extended:true}))

server.get("/projects", (req, res)=>{
    res.send("WELCOME TO RAJSHRI'S PROJECTS")
})

server.get("/blogs", (req, res)=>{
    res.send("WELCOME TO RAJSHRI'S BLOGS")
})

server.get("/contacts", (req, res)=>{
    res.send("CONTACT ME")
})

server.get("/", (req, res)=>{
    res.send("WELCOME TO RAJSHRI'S PORTFOLIO")
})

server.listen(port, ()=>{
    console.log(`Server listening on port ${port}`);
})