const res = require("express/lib/response");
const careerJobSchema = require("../models/careerJobSchema");

function fetchAllJobs(res) {
    careerJobSchema.find().then((response) => {
        res.status(200).json({ data: response });
    }).catch((err) => {
        res.status(500).json({ message: "Some error occurred while fetching details!" });
    })
}

function createNewJob(data, res) {

    const newJob = new careerJobSchema({
        position: data.position,
        location: data.location,
        experience_min: data.experience_min,
        experience_max: data.experience_max,
        post_link: data.post_link,
        created_on: data.created_on,
        application_deadline: data.deadline
    });

    newJob.save((err, data) => {
        if(err) {
            res.status(500).json({ message: "There was some error! Please try again later." })
        }
        else {
            res.status(200).json({ data: data, message: "Job Created Successfully!" });
        }
    })

    console.log('new job created!');
}

module.exports = { fetchAllJobs, createNewJob };