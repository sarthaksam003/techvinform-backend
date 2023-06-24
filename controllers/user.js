import { User } from "../models/user.js";

//method to get all the users who used the form to register
export const getFormData = async (req, res) => {
  try {
    //user.find() fetches all the documents saved in the user collection in the mongoDb database
    const users = await User.find();

    //if the data is found and everything goes well send a status code of 200 meaning success along with all the documents stored in users collection in the mongoDb database
    res.status(200).json(users);
  } catch (error) {
    //if something goes wrong send status code 500 meaning internal server error and the error message indicating what went wrong
    res.status(500).json({ message: error.message });
  }
};

export const postFormData = async (req, res) => {
  try {
    //parse the request body for name, email and password
    const { name, email, password } = req.body;

    //create user
    const user = await User.create({ name, email, password });

    //if the data is saved in the database collection successfully send a status code of 201 meaning created along with what data is stored
    res.status(201).json(user);
  } catch (error) {
    //if something goes wrong send status code 500 meaning internal server error and the error message indicating what went wrong
    res.status(500).json({ message: error.message });
  }
};
