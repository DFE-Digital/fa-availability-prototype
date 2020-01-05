const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

const fosterParents = require('./data/foster-parents')

router.get('/search-confirmation', (req, res) => {
      res.render('availability/search-confirmation')
  })

  router.get('/shortlist', (req, res) => {
    res.render('availability/shortlist', {
      fosterParents: fosterParents.filter(parent => parent.type == req.query.type),
      selected: req.query.type
    })
})

router.get('/my-list', (req, res) => {
  res.render('availability/my-list', { fosterParents })
})

router.get('/foster-parent-profile', (req, res) => {
  res.render('availability/foster-parent-profile', { parent: fosterParents.find(parent => parent.id == req.query.id)})
})

router.get('/child-profile', (req, res) => {
  res.render('availability/child-profile')
})

module.exports = router
