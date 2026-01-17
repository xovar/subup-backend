import { Router } from "express";
import { getAllUsers, getUser } from "../controllers/users.controller.js";
import authorize from "../middlewares/auth.middlewares.js";

const userRouter = Router();

userRouter.get("/", getAllUsers);

userRouter.get("/:id", authorize, getUser);

userRouter.post("/", (req, res) => res.send({ message: "Create nes user" }));

userRouter.put("/:id", (req, res) => res.send({ message: "Update user" }));

userRouter.delete("/:id", (req, res) => res.json({ message: "Delete user" }));

export default userRouter;
