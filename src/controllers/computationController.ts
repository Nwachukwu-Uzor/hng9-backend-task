import { Request, Response } from "express";
import { operation } from "../utils";

export const compute = (req: Request, res: Response) => {
  try {
    const { x, y, operation_type } = req.body;
    console.log(req.body);
    const result = operation(x, y, operation_type);
    if (result == null) {
      return res.status(400).json({
        error: `${operation_type} is not a valid operation type the allowed operation types are addition, subtraction, multiplication and division`,
      });
    }

    return res.status(200).json({
      slackUsername: "uzor nwachukwu",
      result,
      operation_type,
    });
  } catch (error) {
    return res.status(400).json({ error: error?.message });
  }
};
