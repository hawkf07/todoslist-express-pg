const pg = require('pg')
const ruteApiTodos = require('./src/router')
const express = require('express')
const app = express()
const cors = require('cors')
const router = express.Router()
const PORT = 4300
const pool = new pg.Pool({
  database: "postgres",
  host: "localhost",
  port: "5432",
  password: "aoi",
  user: "postgres",
})

app.use(express.urlencoded())
app.use(express.json())
app.use(cors())
app.use("/todos/", ruteApiTodos)
app.listen(PORT, console.log("running on port", PORT))
