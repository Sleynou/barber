const express = require('express')
const bodyParser = require('body-parser')
// const bcrypt = require('bcryptjs')
// const jwt = require('jsonwebtoken')
const db = require('./db') // à être faite
const app = express()
const port = 3000
// const secretKey = 'your-secret-key'
app.use(bodyParser.json())

// à mettre les routes








app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
  })