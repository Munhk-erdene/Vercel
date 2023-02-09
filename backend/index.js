import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import router from "./router/data.js";
import routerTwo from "./router/link.js";
dotenv.config();
const uri = process.env.MONGO_URI || "";
const port = process.env.PORT || 8000;
const app = express();
const corsOption = {
  origin: "http://localhost:3000",
  optionSuccesStatus: 200,
};
app.use(cors(corsOption));
app.use(express.json());
app.use("/Data", router);
app.use("/Link", routerTwo);

const connect = () => {
  mongoose
    .connect(uri, {})
    .then(() => {
      console.log("connected to DB");
    })
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
};

app.listen(port, async () => {
  console.log(`app running ${port}`);
  connect();
});
