import express, { Application } from "express";
import cors from "cors";
import { userRoutes } from "./app/modules/user/user.routes";

const app: Application = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send({
    message: "Health Care Server is running",
  });
});

// All routes
app.use("/api/v1/user", userRoutes);

export default app;
