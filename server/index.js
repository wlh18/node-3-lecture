const express = require('express')
const massive = require('massive')
const tankCtrl = require('./controllers/tankController')
require('dotenv').config()

const app = express()

app.use(express.json())

const { SERVER_PORT, CONNECTION_STRING } = process.env

app.get('/api/tanks', tankCtrl.getAllTanks)
app.post('/api/tanks', tankCtrl.createTank)
app.put('/api/tanks/:id', tankCtrl.updateTank)
app.delete('/api/tanks/:id', tankCtrl.deleteTank)

massive({
  connectionString: CONNECTION_STRING,
  ssl: {
    rejectUnauthorized: false,
  },
}).then(dbInstance => {
  console.log('DB Connected')
  app.set('db', dbInstance)
  app.listen(SERVER_PORT, () =>
    console.log(`The tanks are rolling in on port ${SERVER_PORT}`)
  )
})
