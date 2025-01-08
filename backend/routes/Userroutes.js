import express from "express";
import { createUser, deleteUsers, getUsers, getUsersById, updateUser } from "../controllers/Users.js";
//import { verifyUser , adminOnly } from "../middleware/authuser.js";

const router = express.Router();

router.get('/users',getUsers);
router.get('/users/:id',getUsersById);
router.post('/users',createUser);
router.patch('/users/:id',updateUser);
router.delete('/users/:id',deleteUsers);


export default router;