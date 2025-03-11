const express = require("express");
const User = require("../models/User");
const router = express.Router();

// Add a new user
router.post("/add", async (req, res) => {
  const { name, surname, mobile, address } = req.body;
  if (!name || !surname || !mobile || !address) {
    return res.status(400).json({ error: "All fields are required" });
  }
  try {
    const user = new User({ name, surname, mobile, address });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: "Failed to add user" });
  }
});

// Get users with pagination
router.get("/", async (req, res) => {
  const { page = 1, limit = 5 } = req.query;
  try {
    const users = await User.find()
      .limit(limit * 1)
      .skip((page - 1) * limit);
    const count = await User.countDocuments();
    res.json({ users, totalPages: Math.ceil(count / limit) });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

// Delete user
router.delete("/:id", async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete user" });
  }
});

module.exports = router;
