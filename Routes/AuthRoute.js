import { Signup } from "../Controller/AuthController.js";
import { Router } from "express";

const router = Router();

router.post("/signup", Signup);

export default router;
