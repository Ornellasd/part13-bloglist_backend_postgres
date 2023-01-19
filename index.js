const { Sequelize, Model, DataTypes } = require('sequelize')
const express = require('express')
const app = express()

const { PORT } = require('./util/config')

const blogsRouter = require('./controllers/blogs')

app.use(express.json())

app.use('/api/blogs', blogsRouter)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})