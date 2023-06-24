import express from "express";
import { postFormData, getFormData } from "../controllers/user.js";

const router = express.Router();

router.get("/", getFormData).post("/", postFormData);

export default router;
