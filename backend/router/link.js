import express from "express";
import {
  getAllLinks,
  createLink,
  link,
  updateLink,
  deleteLink,
} from "../controller/link.js";
import { checkToken } from "../middleware/middleware.js";
import { checkRole } from "../middleware/role.js";
import Link from "../model/Link.js";
import { paginationFunction } from "../pagination/pagination.js";
const routerTwo = express.Router();

routerTwo.route("/").get(getAllLinks).post(checkToken, createLink);
routerTwo
  .route("/:id")
  .delete(checkRole, deleteLink)
  .get(paginationFunction(Link));

export default routerTwo;
