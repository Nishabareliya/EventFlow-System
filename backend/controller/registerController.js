const userModel = require('../model/registerModel')
const bcrypt = require('bcrypt')

const createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = await userModel.create({
            name,
            email,
            password: hashedPassword
        });

        if (user) {
            console.log("Added successfully");
            res.status(200).json({ message: "User posted successfully", user });
        } else {
            console.log("Not added successfully");
            res.status(404).json({ message: "User posted fail" });
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Error registering user",
            error: error.message,
        });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await userModel.findOne({
            email: email
        });

        if (!user) {
            console.log("user not found")
            return res.status(404).json({ message: "Email not found" });
        }else{
            console.log(user);
            const check= await bcrypt.compare(password, user.password);

            if(check){
                res.status(200).json({msg: "Login successfully"});
            }else{
                res.status(400).json({msg: "Login fail"});
            }
        }


    } catch (error) {
        console.error(error);
        res.status(400).json({
            success: false,
            message: "Error logging in user",
            error: error.message,
        });
    }
};

module.exports = { createUser, login };