import { Router } from 'express'
import * as choresCtrl from '../controllers/chores.js'


const router = Router()

router.get('/', choresCtrl.index)
router.get('/new', choresCtrl.new)
router.get('/:id', choresCtrl.show)
router.get('/:id', choresCtrl.show)

router.post('/', choresCtrl.create)

router.delete('/:id', choresCtrl.delete)



export {
  router,
}