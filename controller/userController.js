const User = require('../model/userModel.js');
const create = async (req, res) => {
  try {
    const userData = new User(req.body);
    const { email } = userData;

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({
        message: 'User already exists',
      });
    }
    const savedUser = await userData.save();
    res.status(200).json(savedUser);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server error' });
  }
};
const fetch = async (req, res) => {
  try {
    const users = await User.find();
    if (users.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(users);
  } catch {
    res.status(500).json({ error: 'Internal Server error' });
  }
};
const update = async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await User.findOne({ _id: id });
    if (!userExist) {
      res.status(404).json({ message: 'User not found' });
    }
    const updateUser = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(201).json({ updateUser });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await User.findOne({ _id: id });
    if (!userExist) {
      res.status(404).json({ message: 'User not found' });
    }
    await User.findByIdAndDelete(id);
    res.status(201).json({ message: 'User deleted Successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
module.exports = { fetch, create, update, deleteUser };
