import { Router } from "express";

const authRoutes = Router();

authRoutes.post("/login", login);
export default authRoutes;
