const userModel = require('../models/eventBook')
const Booking = require('../models/eventUpdate')

const createUser = async(req, res) => {
    try {
        const { fullname,eventtype,venue,place,guestnumber,startdate, enddate, decoration,additional} = req.body;

        // create User

        const user= await userModel.create({
            fullname,
            eventtype,
            venue, 
            place,
            guestnumber,
            startdate,
            enddate,
            decoration,
            additional,
        });

        if(user){
            console.log("Add successfully");
            res.status(200).json({ message: "event Booked successfully"});
        }else{
            console.log("NOt added successfully");
            res.status(404).json({ message: "event Booking fail"});
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({
            sucess: false,
            message: "error Booking event",
            error: error.message,
        });
    }
};


const getUser = async(req, res) => {
    try {
        Booking.find()
        .then(event => res.json(event))
        .catch(err => res.json(err))

    } catch(error){
        console.error(error);

    }

};



module.exports = {createUser, getUser};