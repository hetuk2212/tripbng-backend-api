import crypto  from "crypto"

const generateOTP = () => {
    return crypto.randomInt(100000, 999999).toString();
};

// console.log(generateOTP());

// module.exports = generateOTP;
export {generateOTP};