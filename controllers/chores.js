import { Chore } from '../models/chore.js'


function index(req, res) {
  Chore.find({})
  .then(chores => {
    res.render('chores/index', {
      chores: chores
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}

function newChore(req, res) {
  res.render('chores/new')
}

function create(req, res) {
  console.log(req.body);
  Chore.create(req.body)
  .then(chore => {
    res.redirect('/chores')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}

function show(req, res) {
  Chore.findById(req.params.id)
  .then(chore => {
    res.render('chores/show', {
      chore: chore
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}




export {
  index,
  newChore as new,
  create,
  show,
}