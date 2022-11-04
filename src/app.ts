import * as express from "express";
import { Application, Request, Response } from "express";
import * as cors from "cors";
import * as dotenv from "dotenv";

import computationRoute from "./routes/computationRoute";
import informationRoute from "./routes/informationRoute";

dotenv.config();

const app: Application = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: "*",
  })
);

const port: number = Number(process.env.PORT) || 5000;

app.use("/api/user", informationRoute);
app.use("/api/compute", computationRoute);
app.use("*", (req: Request, res: Response) => {
  return res.status(404).json({
    error: "Invalid request",
  });
});

app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});
