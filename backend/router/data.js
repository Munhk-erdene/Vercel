import express from "express";
import {
  getAllDatas,
  createData,
  data,
  updateData,
  getUser,
  deleteData,
  getMail,
} from "../controller/data.js";
import { paginationFunction } from "../pagination/pagination.js";
const router = express.Router();
router.route("/").get(getAllDatas, paginationFunction).post(getMail);
router.post("/Post", createData);
router.route("/:id").get(getUser).put(updateData).delete(deleteData);

export default router;
