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




export {
  index,
  newChore as new,
}