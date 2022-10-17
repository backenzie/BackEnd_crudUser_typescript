import AppDataSource from "../data-source";
import { User } from "../entities/user.entity";
import { IUserUpdateRequest } from "../interfaces/users.interfaces";
import { hash } from "bcrypt";
import { AppError } from "../errors/appErrors";

export const updateUserService = async (
  { name, email, password }: IUserUpdateRequest,
  id: string
): Promise<User> => {
  const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOneBy({
    id,
  });

  if (!findUser) {
    throw new AppError("User not found", 404);
  }
  await userRepository.update(id, {
    name: name ? name : findUser.name,
    email: email ? email : findUser.email,
    password: password ? await hash(password, 10) : findUser.password,
  });

  const user = await userRepository.findOneBy({
    id,
  });

  return user!;
};
