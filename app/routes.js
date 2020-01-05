const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

const fosterParents = require('./data/foster-parents')
let myList = []

const initialiseFosterParentList = () => {
  return fosterParents.map(parent => {
    return myList.indexOf(parent.id) >= 0 ? { ...parent, selected: true } : parent
  })
}

const addToMyList = (add) => {

  if (!add) return false

  if (myList.indexOf(add) === -1) {
    myList.push(add)
  }
}

const removeFromMyList = (remove) => {
  if (!remove) return false

  const index = myList.indexOf(remove);
  if (index > -1) {
    myList.splice(index, 1);
  }
}

router.get('/search-confirmation', (req, res) => {
  myList = []
  res.render('availability/search-confirmation')
})

router.get('/shortlist', (req, res) => {

  res.render('availability/shortlist', {
    fosterParents: req.query.type ? initialiseFosterParentList().filter(parent => parent.type == req.query.type) : initialiseFosterParentList(),
    selected: req.query.type
  })
})

router.post('/shortlist', (req, res) => {

  addToMyList(parseInt(req.body.add))
  removeFromMyList(parseInt(req.body.remove))

  res.render('availability/shortlist', {
    fosterParents: req.query.type ? initialiseFosterParentList().filter(parent => parent.type == req.query.type) : initialiseFosterParentList(),
    selected: req.query.type
  })
})

router.get('/my-list', (req, res) => {
  res.render('availability/my-list', {
    fosterParents: fosterParents.filter(parent => myList.indexOf(parent.id) >= 0)
  })
})

router.get('/foster-parent-profile', (req, res) => {
  res.render('availability/foster-parent-profile', {
    parent: fosterParents.find(parent => parent.id == req.query.id)
  })
})

router.get('/child-profile', (req, res) => {
  res.render('availability/child-profile')
})

module.exports = router
