import mongoose from "mongoose";

export default function connect() {
  try {
    mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("connected to mongoDB");
    });
    connection.on("error", (err) => {
      console.log(
        "MongoDB connection error. Please  make sure you have started the MongoDB server. " +
          err
      );
      process.exit();
    });
  } catch (error) {
    console.log("something went wrong !");
    console.log(error);
  }
}
