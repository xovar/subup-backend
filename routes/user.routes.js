import { Router } from "express";

const userRouter = Router();

userRouter.get("/", (req, res) => res.send({ message: "Get all users" }));

userRouter.get("/:id", (req, res) => res.send({ message: "Get user details" }));

userRouter.post("/", (req, res) => res.send({ message: "Create nes user" }));

userRouter.put("/:id", (req, res) => res.send({ message: "Update user" }));

userRouter.delete("/:id", (req, res) => res.json({ message: "Delete user" }));


export default userRouter;