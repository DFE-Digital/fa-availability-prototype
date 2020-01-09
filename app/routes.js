const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

const fosterParents = require('./data/foster-parents')
let myList = []

/**
 * initialse the foster parent data to add the selected flag if the parent
 * is in myList, so this flag can be used to show the my list button as
 * add to my list or remove from my list.
 */
const initialiseFosterParentList = () => {
  return fosterParents.map(parent => {
    return myList.indexOf(parent.id) >= 0 ? { ...parent, selected: true } : parent
  })
}

/**
 * if mylist doesnt contain id then add it to myList array.
 * @param {number} id 
 */
const addToMyList = id => {

  if (!id) return false

  if (myList.indexOf(id) === -1) {
    myList.push(id)
  }
}

/**
 * if mylist contains id then remove it from myList array.
 * @param {number} id 
 */
const removeFromMyList = id => {
  if (!id) return false

  const index = myList.indexOf(id);
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
    fosterParents: req.body.type ? initialiseFosterParentList().filter(parent => parent.type == req.body.type) : initialiseFosterParentList(),
    selected: req.body.type
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
