import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

type Cached = {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
};

declare global {
  var mongoose: Cached;
}

let cached: Cached = global.mongoose || { conn: null, promise: null };

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
