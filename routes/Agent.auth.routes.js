import {
    SendMail,
    SendSmsOtp,
    CheckOtp,
    Register,
    Login,
    LoginVrfy
} from "../controllers/Agent/Agent.auth.controller.js"

import { Router } from "express"

const router = Router();

router.route('/sendSMS').post(SendSmsOtp);
router.route('/sendmail').post(SendMail)
router.route('/checkotp').post(CheckOtp);
router.route('/register').post(Register);
router.route('/login').post(Login);
router.route('/loginVrfy').post(LoginVrfy)

const AgentRoutes = router;
export default AgentRoutes