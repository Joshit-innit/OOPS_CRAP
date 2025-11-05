const express = require("express");
const router = express.Router();
const { getUsers, addUser } = require("../controllers/userController"); // Changed addUser to createUser

router.get("/", getUsers);
router.post("/", addUser); // Changed addUser to createUser

module.exports = router;