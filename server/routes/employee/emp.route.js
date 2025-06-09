import { Router } from "express";
import empSignUp from "../../controller/employee/emp.signup.js";
import empSignIn from "../../controller/employee/emp.signin.js";

const empRouter = Router();

empRouter.post("/signup", empSignUp);
empRouter.post("/signIn", empSignIn);