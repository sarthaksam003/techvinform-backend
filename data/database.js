import mongoose from "mongoose";

//this function connects the app to the mongo database
export const connectDatabase = () => {
  mongoose
    .connect(process.env.MONGO_URL, { dbName: "techvinform" })
    .then((c) => console.log("Database connected"))
    .catch((e) => console.log(e));
};
