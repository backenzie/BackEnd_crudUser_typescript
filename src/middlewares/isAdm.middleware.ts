import { Request, Response, NextFunction } from "express";

export const isAdmMW = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.user.isAdm) {
    return res.status(403).json({
      message: "User is not admin",
    });
  }

  return next();
};
