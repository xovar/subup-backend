import mongoose from "mongoose"
import { MONGODB_URI } from "../config/env.js"

const connectToDataBase = async () => {
    try {
       await mongoose.connect(MONGODB_URI);

       console.log(`Database connected`);
    } catch (error) {
        console.log(error);
        process.exitCode(1);
    }
}

export default connectToDataBase;