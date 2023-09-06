import { Router } from 'express';
import { createUser, deleteUser, getAllUsers, getUser, updateUser } from '../Controller/userController';

const userRoute = () => {
  const router = Router();

  router.post('/users/create', createUser);

  router.get('/users/get', getAllUsers);

  router.get('/single/users/:id', getUser);

  router.patch('/update/users/:id', updateUser);

  router.delete('/delete/users/:id', deleteUser);

  return router;
};

export { userRoute };