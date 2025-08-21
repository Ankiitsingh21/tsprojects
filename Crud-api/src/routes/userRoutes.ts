import { Router } from "express";
import { getAll, getById, SignUp } from "../controllers/userController";

const router = Router(); 

router.post("/signUp",SignUp);
router.get("/get",getById);
router.get("/getAll",getAll);

export default router;