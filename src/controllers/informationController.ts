import { Request, Response } from "express";

export const sendInformation = (req: Request, res: Response) => {
  return res.status(200).json({
    slackUsername: "uzor nwachukwu",
    backend: true,
    age: 25,
    bio: "Self-taught fullstack developer, Manchester United fan and maths lover.",
  });
};
