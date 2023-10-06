import express  from "express";
import { authuser,registerUser,logoutUser,getUserProfile,updateUserProfile } from "../controller/userController.js";
import { protect } from "../middleware/authMiddleware.js";
const router=express.Router()

router.post('/', registerUser);
router.post('/auth', authuser);
router.post('/logout', logoutUser);
// router.route('/profile').get(protect,getUserProfile).put(protect,updateUserProfile);

export default router