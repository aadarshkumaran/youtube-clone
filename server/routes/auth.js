import express from "express"
import { googleAuth, signin, signup } from "../controllers/auth.js";

const router = express.Router()

//Create User
router.post("/signup", signup)
//sign in
router.post("/signin", signin)

//Google authentication
router.post("/google", googleAuth)

export default router;