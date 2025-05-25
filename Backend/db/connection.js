import mongoose from "mongoose";

const url =
  "mongodb+srv://gautamkhosla75:PBy1oVeSMzyRlYIY@cluster0.svsda.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// ! PBy1oVeSMzyRlYIY
export const connectDB = async () => {
  try {
    const connect = await mongoose.connect(url);

    console.log(`Database Connected":${connect.connection.host}`);
  } catch (error) {
    console.log("Error Connection to MongoDB:", error.message);
    process.exit(1);
  }
};
