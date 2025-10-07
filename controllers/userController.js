// const mongoose = require("mongoose");
const User = require("../models/user");

// get all users
async function getUsers(req, res) {
  try {
    const users = await User.find();
    res.status(200).json({
      message: "all users found",
      users: users,
    });
  } catch (error) {
    console.error(error);
  }
}

// find one specific user
async function getOneUser(req, res) {
  const id = req.params.id;
  const user = await User.findById(id);
  if (!user) {
    res.status(400).json({ message: "user not found" });
  }
  res.status(200).json({
    message: "user found succesfully",
    user: user,
  });
}

async function createUser(req, res) {
  const { fullname, email, password, role } = req.body;

  try {
    const createdUser = await User.create({ fullname, email, password, role });

    // const userObj = createdUser.toObject();
    res.status(201).json({
      message: "user created successfully",
      user: createdUser,
    });
  } catch (error) {
    res.status(400).json({
      message: "error while creating user",
    });
  }
}

async function deleteUser(req, res) {
  try {
    const user = User.findById();
    await User.deleteOne(user);
    res.status(200).json("user deleted successfully");
  } catch (error) {
    throw error;
  }
}

module.exports = { getUsers, getOneUser, createUser, deleteUser };
