import { connect } from "mongoose";
import { config } from "dotenv";
import app from "./app.js";

config({ path: "./config.env" });

connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Connection to DB successful!");
});

const port = process.env.PORT || 8000;

const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
