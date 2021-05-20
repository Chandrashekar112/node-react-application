const express = require("express");
const {
  createUser,
  listUsers,
  getUserDetailsById,
  updateUser,
  deleteUser,
} = require("../controllers/userController");

const router = express.Router();

router.get("/", listUsers);

router.post("/", createUser);

router.get("/:id", getUserDetailsById);

router.put("/:id", updateUser);

router.delete("/:id", deleteUser);

module.exports = router;
