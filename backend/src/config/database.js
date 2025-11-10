import mongoose from "mongoose";

const connectToDatabase = async () => {
  await mongoose.connect(process.env.DB_CONNECTION_STRING);
};

export default connectToDatabase;
