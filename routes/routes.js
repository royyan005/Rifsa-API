import express from "express";
import { getToken, getUsers, Register, Login, Logout } from "../controller/users.js";
import { verifyToken } from "../middleware/verifyToken.js";
import { articlePost, findArticles, updateArticle } from "../controller/article.js";
import { refreshToken } from "../controller/refreshToken.js";



const router = express.Router();


router.get("/users", verifyToken, getUsers);
router.post("/register", Register);
router.post("/login", Login);
router.get("/token", refreshToken);
router.delete("/logout", Logout);
router.post("/article", articlePost);
router.patch("/article/:id", updateArticle);
router.get("/article", findArticles);


export default router;