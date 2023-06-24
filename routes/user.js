import express from "express";
import { postFormData, getFormData } from "../controllers/user.js";

const router = express.Router();

//the router defines all the methods that a URL can accept along with what action is to be performed when the URL is visited
router.get("/", getFormData).post("/", postFormData);

export default router;
