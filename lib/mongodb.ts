import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

type Cached = {
  conn: mongoose.Mongoose | null;
  promise: Promise<mongoose.Mongoose> | null;
};

let cached: any= global.mongoose || { conn: null, promise: null };

const connectMongoDB = async () => {
  try {
    if (cached.conn) return cached.conn;
    if (!MONGODB_URI) throw new Error("MONGODB_URI is missing");
    cached.conn = await mongoose.connect(`${MONGODB_URI}`);
    global.mongoose = cached;
    return cached.conn;
  } catch (error) {
    console.log(error);
  }
};

export default connectMongoDB;
