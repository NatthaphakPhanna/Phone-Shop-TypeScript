const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql");
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "phone-shop"
})

db.connect((err) => {
    if (!err) {
        console.log("Connected successfully")
    } else {
        console.error("message", err)
    }
})

app.listen(PORT, () => `Start server on port ${PORT}`)