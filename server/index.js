require('dotenv').config()
const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;
const PORT = process.env.PORT;
const express = require('express')
const app = express()




app.use('/', (req, res) => {
    res.send("Primeira pagina!")
})

app.listen(PORT, () => {
    console.log("Server is running on PORT " + PORT )
})