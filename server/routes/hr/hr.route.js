import express from 'express'
import SignUpHr from '../../controller/hr/SignUp.hr';
const HrRouter = express.Router();

HrRouter.patch('/create',SignUpHr);

export default HrRouter;