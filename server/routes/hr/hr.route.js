import express from 'express'
import SignUpHr from '../../controller/hr/SignUp.hr.js';
import SignInHr from '../../controller/hr/SignIn.hr.js';
const HrRouter = express.Router();
// (1) Hr signup
HrRouter.post('/signup',SignUpHr);
// (2) Hr signup
HrRouter.post('/signin',SignInHr);

export default HrRouter;