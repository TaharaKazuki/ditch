import { Router } from 'express'
const router = Router()

import { signup } from '../controllers/user'

router.post('/signup', signup)

export default router
