import { Router } from 'express'
import * as choresCtrl from '../controllers/chores.js'


const router = Router()

router.get('/', choresCtrl.index)
router.get('/new', choresCtrl.new)



export {
  router,
}