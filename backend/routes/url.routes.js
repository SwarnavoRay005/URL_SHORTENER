import { getUrl, urlShorten } from "../controllers/url.controller.js";
import express from "express";

const router = express.Router();

router.post("/shorten", urlShorten);

export default router;
