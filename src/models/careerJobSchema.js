const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const careerJobSchema = new Schema({
    position: {
        type: String
    },
    location: {
        type: String
    },
    experience_min: {
        type: String        
    },
    experience_max: {
        type: String        
    },
    post_link: {
        type: String
    },
    created_on: {
        type: Date
    },
    application_deadline: {
        type: Date
    }
});

const CareerJobs = mongoose.model('Career Jobs', careerJobSchema, 'jobs');

module.exports = CareerJobs;