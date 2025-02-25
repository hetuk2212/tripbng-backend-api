import express from 'express';
import  {
    LoginAdmin,
    CreateSubAdmin,
    CreateSuperAdmin,
    ChangePassword,
    AdminLogout,
    ChangeForgetPassword,
    ForgetPassword,
    veryfyOTPLogin,
    GetAllUser,
    GetAllAgents,
    GetAllCp,
    GiveAgentAprove
} from '../controllers/Admin/admin.controller.js'; 
import { GetBalance } from '../controllers/Admin/admin.pyment.controller.js';
import {UserVerify} from "../middlewares/Uservrfy.js"

const router = express.Router();

router.route('/testCreate').post(CreateSuperAdmin)
router.route('/login').post(LoginAdmin)
router.route('/vfyOTPLogin').post(veryfyOTPLogin)
router.route('/createSubAdmin').post(UserVerify , CreateSubAdmin)
router.route('/changePass').post(UserVerify , ChangePassword)
router.route('/forgetPass').post(UserVerify ,ForgetPassword)
router.route('/ChangeForgetPass').post(UserVerify ,ChangeForgetPassword)
router.route('/getalluser').get(UserVerify ,GetAllUser)
router.route('/logout').post(UserVerify , AdminLogout)
router.route('/getallagent').get(UserVerify , GetAllAgents)
router.route('/getallcp').get(UserVerify , GetAllCp)
router.route('/Aprove').post(UserVerify,GiveAgentAprove)


router.route('/getbalance').post(GetBalance);
export default router;