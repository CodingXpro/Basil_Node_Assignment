import { Request, Response } from 'express';


import { User, UserInput } from '../Models/userModel';

const createUser = async (req: Request, res: Response) => {
  const { id, title, completed, image } = req.body;

  if (!id || !title || !completed || !image) {
    return res.status(422).json({ message: 'The fields id, title, completed and image are required' });
  }

  const userInput: UserInput = {
    id,
    title,
    completed,
    image
    
  };

  const userCreated = await User.create(userInput);

  return res.status(201).json({ data: userCreated });
};

const getAllUsers = async (req: Request, res: Response) => {
  const users = await User.find().sort('-createdAt').exec();

  return res.status(200).json({ data: users });
};

const getUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  const user = await User.findOne({ id: id });

  if (!user) {
    return res.status(404).json({ message: `User with id "${id}" not found.` });
  }

  return res.status(200).json({ data: user });
};

const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, completed, image } = req.body;

  const user = await User.findOne({ _id: id });

  if (!user) {
    return res.status(404).json({ message: `User with id "${id}" not found.` });
  }

  if (!title || !completed) {
    return res.status(422).json({ message: 'The fields title and completed are required' });
  }

  await User.updateOne({ _id: id }, { title, completed, image });

  const userUpdated = await User.findById(id);

  return res.status(200).json({ data: userUpdated });
};

const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  await User.findByIdAndDelete(id);

  return res.status(200).json({ message: 'User deleted successfully.' });
};

export { createUser, deleteUser, getAllUsers, getUser, updateUser };