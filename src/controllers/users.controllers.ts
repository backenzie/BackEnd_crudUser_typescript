import { Request, Response } from "express";
import { createUsService } from "../services/users/createUs.services";
import { getUsersService } from "../services/users/getUsers.services";
import { IUserResponse } from "../interfaces/users.interfaces";
import {
  IUserUpdateRequest,
  IUserRequest,
} from "../interfaces/users.interfaces";
import deleteUserService from "../services/users/delUser.services";
import { updateUserService } from "../services/updtUser.services";

export const createUserController = async (req: Request, res: Response) => {
  const user: IUserRequest = req.body;
  const createdUser = await createUsService(user);
  const userResp: IUserResponse = createdUser;
  return res.json(userResp);
};

export const getUsersController = async (req: Request, res: Response) => {
  const users = await getUsersService();

  return res.json(users);
};

export const delUserController = async (req: Request, res: Response) => {
  const id = req.params.id;
  await deleteUserService(id);
  return res.status(204).send();
};

export const updateUserController = async (req: Request, res: Response) => {
  const user: IUserUpdateRequest = req.body;
  const id: string = req.params.id;
  const updatedUser = await updateUserService(user, id);
  return res.json(updatedUser);
};
