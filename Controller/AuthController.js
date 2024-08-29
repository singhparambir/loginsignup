import User from "../Model/UserModal.js"
import { createSecretToken } from "../Util/SecretToken.js";
import bcrypt from "bcrypt";

// module.exports.Signup = async (req, res, next) => {
//     try {
//         const { email, password, username, createdAt } = req.body;
//         const existingUser = awai User.findOne({ email });
//         if(existingUser) {


//     }
// }


export const Signup = async (req, res, next) => {
    try {
        // return res.json({ "data": req.body });

        const { email, password, username } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.json({ message: "User already exists" });
        }
        const user = await User.create({ email, password, username });
        const token = createSecretToken(user._id);
        res.cookie("token", token, {
            withCredentials: true,
            httpOnly: false,
        });

        return res.status(200)
            .json({ message: "User added", success: true, user });

    } catch (error) {
        console.log(error)
    }
};