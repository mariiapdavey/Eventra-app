import express from 'express'
import { authUser, getUserProfile, updateUserProfile, registerUser } from '../controllers/userController.js'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router()

//@desc Authenticate user and generate token
//@route POST /api/users/login
//@access public

router.post('/login', authUser)

//@desc Register a new user
//@route POST /api/users
//@access public
router.route('/').post(registerUser)

//@desc Get user profile
//@route GET /api/users/profile
//@access private
router.route('/profile')
.get(protect, getUserProfile)
.put(protect, updateUserProfile) //fixed bug, changed from .get to .put

export default router