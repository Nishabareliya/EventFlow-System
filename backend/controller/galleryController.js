const userModel = require('../models/galleryModel')

const getUser = async(req, res) => {
    try {
        const user = await userModel.find();

        res
            .status(200)
            .json({ sucess: true, message: "user get successfully", user });
    } catch (error) {
        console.error(error);
        res
            .status(500)
            .json({
                sucess: false,
                message: "error getting user",
                error: error.message,
            });
    }
};
module.exports = {getUser };