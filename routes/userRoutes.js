import express from "express";

import {
    getUsers,
    getUserByNIK,
    addUser,
    updateUser,
    deleteUser
} from "../controllers/user.js";

const router = express.Router();

router.get('/users', getUsers);
router.get('/users/:nik', getUserByNIK);
router.post('/users', addUser);
router.put('/users/:nik', updateUser);
router.delete('/users/:nik', deleteUser);

export default router;