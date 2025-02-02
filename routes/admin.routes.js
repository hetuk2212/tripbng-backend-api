import express from 'express';
import  {
    LoginAdmin,
    CreateSubAdmin,
    CreateSuperAdmin,
    ChangePassword,
    AdminLogout,
    ChangeForgetPassword,
    ForgetPassword,
    veryfyOTPLogin
} from '../controllers/Admin.controller.js'; 
import {AdminVerify} from "../middlewares/AdminVrfy.js"

const router = express.Router();

router.route('/testCreate').post(CreateSuperAdmin)
router.route('/login').post(LoginAdmin)
router.route('/vfyOTPLogin').post(veryfyOTPLogin)
router.route('/createSubAdmin').post(AdminVerify , CreateSubAdmin)
router.route('/changePass').post(AdminVerify , ChangePassword)
router.route('/forgetPass').post(AdminVerify ,ForgetPassword)
router.route('/ChangeForgetPass').post(AdminVerify ,ChangeForgetPassword)
router.route('/logout').post(AdminVerify , AdminLogout)
export default router;