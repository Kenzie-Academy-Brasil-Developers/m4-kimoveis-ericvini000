import "reflect-metadata";
import "express-async-errors";
import express from "express";
import middlewares from "./middlewares";
import { sessionRouter, userRouter } from "./routers";

const app = express();
app.use(express.json());

app.use("/users", userRouter);

app.use("/login", sessionRouter);

app.use(middlewares.errorHandler);

export default app;
