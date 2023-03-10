const router = require('express').Router()
const { Blog } = require('../models')

const blogFinder = async (req, res, next) => {
  req.blog = await Blog.findByPk(req.params.id)
  next()
}

router.get('/', async (req, res) => {
  const blogs = await Blog.findAll()
  res.json(blogs)
})

router.post('/', async (req, res, next) => {
  try {
    const blog = await Blog.create(req.body)
    return res.json(blog)
  } catch (error) {
    next(error)
  }
})

router.get('/:id', blogFinder, async (req, res) => {
  if (req.blog) {
    res.json(req.blog)
  } else {
    res.status(404).end()
  }
});

router.put('/:id', blogFinder, async (req, res, next) => {
  try {
    if (req.blog) {
      req.blog.likes = req.body.likes
      await req.blog.save()
      res.status(200).end()
    } else {
      res.status(404).end()
    }
  } catch (error) {
    next(error)
  }
})

router.delete('/:id', blogFinder, async (req, res, next) => {
  if (req.blog) {
    await req.blog.destroy();
    res.status(200).end()
  } else {
    res.status(404).end()
  }
})

module.exports = router