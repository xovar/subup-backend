import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'User Name Is Required'],
        trim: true,
        minLength: 5,
        maxLenght: 50,
    },
    email:{
        type: String,
        required: [true,'User email is required'],
        unique: true,
        trim: true,
        lowercase: true,
        match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please fill a valid email address']
    },
    password:{
        type: String,
        required: [true,'User password is required'],
        minLength: 6
    }
},{timestamps: true})

const User = mongoose.model("User", userSchema);

export default User;