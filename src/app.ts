import * as express from "express";
import { Application, Request, Response } from "express";
import * as cors from "cors";
import * as dotenv from "dotenv";

dotenv.config();

const app: Application = express();
app.use(
  cors({
    origin: "*",
  })
);

const port: number = Number(process.env.PORT) || 5000;

app.get("/api/user", (req: Request, res: Response) => {
  return res.status(200).json({
    slackUsername: "uzor nwachukwu",
    backend: true,
    age: 25,
    bio: "Self-taught fullstack developer, Manchester United fan and maths lover.",
  });
});

app.listen(port, () => {
  return console.log(`server is listening on ${port} 2`);
});
