const careerJobSchema = require("../models/careerJobSchema");

function fetchAllJobs(req, res) {
    careerJobSchema.find().then((response) => {
        res.status(200).json({ data: response });
    }).catch((err) => {
        res.status(500).json({ message: `Error : ${err}` });
    })
}

function createNewJob(data, req, res) {

    // console.log(req.cookies, req.signedCookies);

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
            res.status(500).json({ message: `Error : ${err}` })
        }
        else {
            res.status(201).json({ data: data, message: "Job Created Successfully!" });
        }
    })

    console.log('new job created!');
}

function editJob(data, res) {
    const id = data.id;
    const newData = data.value;

    careerJobSchema.findOne({
        _id: id
    },
    (err, jobData) => {
        if (err) {
            throw new Error(err);
        }
        else if (jobData) {
            jobData.position = newData.position;
            jobData.location = newData.location;
            jobData.experience_min = newData.experience_min;
            jobData.experience_max = newData.experience_max;
            jobData.post_link = newData.post_link;
            jobData.created_on =  newData.created_on;
            jobData.application_deadline = newData.deadline;
        
            jobData.save((err, result) => {
                if(err) {
                    res.status(500).json({ message: `Error : ${err}` });
                }
                else if (result) {
                    res.status(200).json({ data: result, message: "Job Data Updated Successfully!" })
                }
            })
        }
    });
}

function deleteJob(data, res) {
    const id = data.id;
    // console.log(id);
    careerJobSchema.findByIdAndDelete(id, (err) => {
        if(err) {
            res.status(500).json({ message: `Error : ${err}` });
        }
        else {
            res.status(200).json({message: "Job Post Deleted Successfully!"});
        }
    })
}

module.exports = { fetchAllJobs, createNewJob, editJob, deleteJob };