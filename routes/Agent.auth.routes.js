import {
    SendMail,
    SendSmsOtp,
    CheckOtp,
    Register,
    Login,
    LoginVrfy
} from "../controllers/Agent/agent.auth.controller.js"

import { Router } from "express"

const router = Router();

router.route('/sendSMS').post(SendSmsOtp);
router.route('sendMail').post(SendMail)
router.route('/CheckOtp').post(CheckOtp);
router.route('/Register').post(Register);
router.route('/Login').post(Login);
router.route('/LoginVrfy').post(LoginVrfy)

const AgentRoutes = router;
export default AgentRoutes