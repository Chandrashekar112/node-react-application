const User = require("../modules/User");

//create the user
const createUser = async (req, res) => {
  const returnMessage = {
    isError: true,
    data: null,
    message: "Error occured",
  };

  try {
    const newUser = new User({ ...req.body });
    await newUser.save();
    returnMessage.isError = false;
    returnMessage.message = "New user created successfully";
    returnMessage.data = newUser.toObject();
    return res.json(returnMessage);
  } catch (error) {
    return res.status(400).json(returnMessage);
  }
};

//get all user list
const listUsers = async (req, res) => {
  const returnMessage = {
    isError: true,
    data: null,
    message: "Error occured!",
  };

  try {
    let foundedUsers = await User.find({});
    returnMessage.isError = false;
    if (foundedUsers.length === 0) {
      returnMessage.message = "No Records found";
    } else {
      returnMessage.message = "Records found";
      returnMessage.data = foundedUsers;
    }
    return res.json(returnMessage);
  } catch (error) {
    return res.status(400).json(returnMessage);
  }
};

// user id ti get the details
const getUserDetailsById = async (req, res) => {
  const returnMessage = {
    isError: true,
    data: null,
    message: "Error occured",
  };

  try {
    let founduser = await User.findById(req.params.id);
    returnMessage.isError = false;
    if (!founduser) {
      returnMessage.message =
        "There is no user with this id. Please create one!";
    } else {
      returnMessage.message = "Record found";
      returnMessage.data = founduser;
    }
    return res.json(returnMessage);
  } catch (error) {
    return res.status(400).json(returnMessage);
  }
};

//update the user
const updateUser = async (req, res) => {
  const returnMessage = {
    isError: true,
    data: null,
    message: "Error occured",
  };

  const userId = rea.params.id;
  try {
    const foundUser = await User.findOne({ _id: userId });
    if (!foundUser) {
      returnMessage.message =
        "There is no user with this id. Please create one!";
    } else {
      req.body.created = new Date();
      await User.updateOne({ _id: userId }, { $set: req.body });
      returnMessage.isError = false;
      returnMessage.message = "User has been updated successfully";
    }
    return res.json(returnMessage);
  } catch (error) {
    return res.status(400).json(returnMessage);
  }
};

const deleteUser = async (req, res) => {
  const returnMessage = {
    isError: true,
    data: null,
    message: "Error occured",
  };
  try {
    let foundUser = await User.findById(req.params.id);
    returnMessage.isError = false;
    if (!foundUser) {
      returnMessage.message = "There is no User this id. Please create one!";
    } else {
      await User.remove({ _id: req.params.id });
      returnMessage.isError = false;
      returnAMessage.message = "User deleted successfully!";
    }
  } catch (error) {
    return res.status(400).json(returnMessage);
  }
};

module.exports = {
  createUser,
  listUsers,
  getUserDetailsById,
  updateUser,
  deleteUser,
};
