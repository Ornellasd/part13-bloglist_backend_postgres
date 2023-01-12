require('dotenv').config()
const { Sequelize, QueryTypes } = require('sequelize')

const sequelize = new Sequelize(process.env.DATABASE_URL);

const fetchBlogs = async () => {
  const blogs = await sequelize.query('SELECT * FROM blogs', { type: QueryTypes.SELECT });
  console.log(blogs)
}

fetchBlogs()