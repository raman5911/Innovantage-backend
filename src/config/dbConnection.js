const mongoose = require("mongoose");

const createNewConnection = () => {
    const uri = process.env.MONGO_URI;

    mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
}

module.exports = {createNewConnection};