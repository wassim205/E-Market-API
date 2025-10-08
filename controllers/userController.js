const User = require("../models/user");

// get all users
async function getUsers(req, res, next) {
  try {
    const users = await User.find();
    res.status(200).json({
      message: "all users found",
      users: users,
    });
  } catch (error) {
    // console.error(error);
    next(error);
  }
}

// find one specific user
async function getOneUser(req, res, next) {
  try {
    const id = req.params.id;
    const user = await User.findById(id);
    if (!user) {
      res.status(400).json({ message: "user not found" });
    }
    res.status(200).json({
      message: "user found succesfully",
      user: user,
    });
  } catch (error) {
    next(error);
  }
}

async function createUser(req, res, next) {
  
  try {
    const { fullname, email, password, role } = req.body;
    const createdUser = await User.create({ fullname, email, password, role });

    // const userObj = createdUser.toObject();
    res.status(201).json({
      message: "user created successfully",
      user: createdUser,
    });
  } catch (error) {
    // res.status(400).json({
    //   message: "error while creating user",
    // });
    next(error);
  }
}

async function deleteUser(req, res, next) {
  try {
    const user = User.findById();
    await User.deleteOne(user);
    res.status(200).json("user deleted successfully");
  } catch (error) {
    // throw error;
    next(error);
  }
}

module.exports = { getUsers, getOneUser, createUser, deleteUser };
