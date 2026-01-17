import User from "../models/user.model.js";

export const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();

    if (!users.length) {
      return res.status(404).json({ message: "No users found" });
    }

    res.status(200).json({
      Users: users,
    });
  } catch (error) {
    next(error);
  }
};

export const getUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id).select("-password");

        if (!user) {
          return res.status(404).json({
            success: false,
            message: "User Not Found",
          });
        }
      
        res.status(200).json({
          User: user
        })
    } catch (error) {
        next(error)
    }
};
