const userModel = require('../model/feedbackModel')

const createUser = async(req, res) => {
    try {
        const { name, email, message} = req.body;

        // create User

        const user= await userModel.create({
            name,
            email,
            message
        });

        if(user){
            console.log("Add successfully");
            res.status(200).json({ message: "message sent successfully"});
        }else{
            console.log("NOt added successfully");
            res.status(404).json({ message: " message sending fail"});
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({
            sucess: false,
            message: "error sending message",
            error: error.message,
        });
    }
};



module.exports = {createUser};