const router = require('express').Router()
const Blog = require('../models/blog')

router.get('/', async (req, res) => {
  const blogs = await Blog.findAll()
  res.json(blogs)
})

router.post('/', async (req, res) => {
  try {
    const blog = await Blog.create(req.body)
    return res.json(blog)
  } catch (error) {
    return res.status(400).json({ error })
  }
})

router.delete('/:id', async (req, res) => {
  const blog = await Blog.findByPk(req.params.id)
  if (blog) {
    await blog.destroy();
  } else {
    res.status(404).end()
  }
})

module.exports = router