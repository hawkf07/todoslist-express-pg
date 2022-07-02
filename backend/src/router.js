const express = require('express')
const app = express()
const router = express.Router()
const pg = require('pg')
const pool = new pg.Pool({
  host: "localhost",
  database: "postgres",
  user: "postgres",
  port: 5432,
  password: "aoi"
})
// get todosList
router.get("/getTodos", (req, res, next) => {
  const data = pool.query("select * from todoslist;")
  data.then(item => res.send(item.rows))
    .catch(error => res.send(error))
})

router.post("/addTodos", (req, res, next) => {
  const { name, description } = req.query
  const data = pool.query("INSERT INTO todoslist(name,description) VALUES ($1,$2)", [name, description]);
  data.then(item => res.send(item.rows))
    .catch(error => res.send(error))
})

// delete todos 

router.delete("/deleteTodos", (req, res, next) => {
  const { id } = req.query
  const data = pool.query('DELETE FROM todoslist WHERE id=$1', [id])
  data
    .then(item => res.send(item.rows))
    .catch(error => res.send(error))

})


module.exports = router
