const express = require('express');
const path = require('path')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config({ path: './.env' })

const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'))
})


app.listen(process.env.PORT || 8000, () => {
    console.log(`Server listening on ${process.env.PORT}`)
})