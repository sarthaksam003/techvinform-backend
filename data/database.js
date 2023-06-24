import mongoose from "mongoose";

export const connectDatabase = () => {
  mongoose
    .connect(process.env.MONGO_URL, { dbName: "techvinform" })
    .then((c) => console.log("Database connected"))
    .catch((e) => console.log(e));
};
