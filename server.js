import { connectDatabase } from "./data/database.js";
import { app } from "./app.js";

//this method connects the app to the mongo database storing form data
connectDatabase();

//this method runs the app
app.listen(process.env.PORT, () => {
  console.log(`App running on port 4000`);
});
