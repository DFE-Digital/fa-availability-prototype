const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.get('/search-confirmation', (req, res) => {
      res.render('availability/search-confirmation')
  })

  router.get('/shortlist', (req, res) => {
    res.render('availability/shortlist')
})

router.get('/my-list', (req, res) => {
  res.render('availability/my-list')
})

router.get('/foster-parent-profile', (req, res) => {
  res.render('availability/foster-parent-profile')
})

router.get('/child-profile', (req, res) => {
  res.render('availability/child-profile')
})

module.exports = router
