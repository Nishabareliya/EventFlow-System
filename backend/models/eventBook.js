// const mongoose = require("mongoose");

// const bookSchema = new mongoose.Schema({
//     fullname: {
//         type: String,
//         required: true,
//     },
//     eventtype: {
//         type: String,
//         required: true,
//     },
//     venue: {
//         type: String,
//         required: true,
//     },
//     guestnumber: {
//         type: String,
//         required: true,
//     },
//     startdate: {
//         type: Date,  // Assuming startdate is a date. Adjust the type as per your needs.
//         required: true,
//     },
//     enddate: {
//         type: Date,  // Assuming enddate is a date. Adjust the type as per your needs.
//         required: true,
//     },
   
// }, {
// });

// module.exports = mongoose.model("event", bookSchema);



const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
    },
    eventtype: {
        type: String,
        required: true,
    },
    venue: {
        type: String,
        required: true,
    },
    place:{
        type: String,
        required: true,
    },
    guestnumber: {
        type: Number,
        required: true,
    },
    startdate: {
        type: Date, 
        required: true,
    },
    enddate: {
        type: Date, 
        required: true,
    },

     decoration:{
        type: String,
        required: true,
       
     },
     additional:{
        
        type: String,
        required: true,
     },



   
}, {
    timestamps: true,
});

module.exports = mongoose.model("event", userSchema);

