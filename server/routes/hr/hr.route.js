import express from "express";
import SignUpHr from "../../controller/hr/SignUp.hr.js";
import SignInHr from "../../controller/hr/SignIn.hr.js";
import HrForgetPass from "../../controller/hr/forgetPass.hr.js";
import HrcreateProfile from "../../controller/hr/createProfile.hr.js";

import LogoutHr from "../../controller/hr/logout.hr.js";
import getAllHr from "../../controller/hr/getAll.hr.js";
const HrRouter = express.Router();
// (1) Hr signup
HrRouter.post("/signup", SignUpHr);
// (2) Hr login
HrRouter.post("/signin", SignInHr);
// (3) Hr forget Password
HrRouter.patch("/forgetPass", HrForgetPass);
// (4) Hr profile create and update
HrRouter.patch("/createProfile", HrcreateProfile);
// (5)  Get all Hr
HrRouter.get("/allhr", getAllHr);
// (6) Hr Logout
HrRouter.get("/hrlogout", LogoutHr);

export default HrRouter;
