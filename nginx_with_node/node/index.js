const express = require('express')
const app = express()
const port = 3000

const name = ['Miguel', 'Arthur', 'Heitor', 'Helena', 'Alice', 'Laura']
const lastName = ['Silva', 'Santos', 'Oliveira', 'Ferreira', 'Souza', 'Alves']

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

const mysql = require('mysql')

app.get('/', (req, res) => {
    let fullName = generateFullName()
    saveNewPerson(fullName)
    res.send(`<h1>FullCycle</h1><br><ul><li>${fullName}</li><ul/>`)
})

app.listen(port, () => {
    console.log(`Rondando na porta ${port}`);
})

function generateFullName() {
    return `${name[Math.floor(Math.random() * name.length)]} ${lastName[Math.floor(Math.random() * lastName.length)]}`
}

function saveNewPerson(fullName) {
    const connection = mysql.createConnection(config)

    const sql = `INSERT INTO people(name) values('${fullName}')`

    connection.query(sql)
    connection.end()
}