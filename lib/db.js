import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_CONNECTION_STRING;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

let cachedConnection = null;

export async function dbConnect() {
  if (cachedConnection) {
    return cachedConnection;
  }

  const connection = await mongoose.connect(
    process.env.MONGODB_CONNECTION_STRING
  );
  console.log("db connected");

  cachedConnection = connection;
  return connection;
}

export default dbConnect;
