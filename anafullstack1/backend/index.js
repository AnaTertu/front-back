const express = require('express'),
    server = express(),
    cors = require('cors'),
    mysql = require('mysql');

const database = mysql.createConnection({
    "host": "localhost",
    "user": "root",
    "password": "",
    "database": "anaeletro" 
})

server.use(cors());
server.use(express.json());

server.get('/', (req, res) =>{
    res.end("<html>Hello world</html>")
})

server.get('/products', (req, res) => {
    const sql = "SELECT * FROM products JOIN categories ON products.id_category = categories.id_category";
    database.query(sql, (error, results) => {
        if(error){
            return error;
        } res.json(results)
    })
})

server.get('/people', (req, res) => {
    const sql = "SELECT * FROM people";
    database.query(sql, (error, results) => {
        if(error){
            return error;
        } res.json(results)
    })
})

server.get('/orders', (req, res) => {
    const sql = "SELECT * FROM products JOIN orders ON orders.pricesEnd = products.pricesEnd;";
    database.query(sql, (error, results) => {
        if(error){
            return error;
        } res.json(results);
    })
})

server.post('/people', (req, res)=> {
    const {nameC, email, phones, posts} = req.body
    const sql = `INSERT INTO people(nameC, email, phones, posts) VALUES ('${nameC}', '${email}', '${phones}', '${posts}')`;
    database.query(sql, (error, results) => {
        if(error){
            return error;
        } res.json(results);
    })
})

server.post('/orders', (req, res)=> {
    const {phonesC, addressC, amount} = req.body
    const sql = `INSERT INTO orders(phonesC, addressC, amount) VALUES ('${phonesC}', '${addressC}', '${amount}')`;
    database.query(sql, (error, results) => {
        if(error){
            return error;
        } res.json(results);
    })
})

server.listen(3008, ()=>{
    console.log("Server on")
})

