const MasterData = require("../models/masterDataSchema");

function fetchAllMasterData(res) {
    MasterData.find().then((response) => {
        res.status(200).json({ data: response });
    }).catch((err) => {
        res.status(500).json({ message: `Error : ${err}` });
    })
}

function createNewMasterData(data, res) {
    const newMasterData = MasterData({
        name: data.name,
        building_no: data.buildingNum,
        street: data.street,
        city: data.city,
        pincode: data.pincode
    });

    newMasterData.save((err, data) => {
        if(err) {
            res.status(500).json({ message: `Error : ${err}` })
        }
        else {
            res.status(201).json({ data: data, message: "Data Submitted Successfully!" });
        }
    })
}

function editMasterData(data, res) {
    const id = data.id;
    const newData = data.value;

    // console.log(data);

    MasterData.findOne({
        _id: id
    },
    (err, masterData) => {
        if(err) {
            throw new Error(err);
        }
        else if(masterData) {

            // console.log(masterData);

            masterData.name = newData.name;
            masterData.building_no = newData.buildingNum;
            masterData.street = newData.street;
            masterData.city = newData.city;
            masterData.pincode = newData.pincode;

            masterData.save((err, result) => {
                if(err) {
                    // console.log(err);
                    res.status(500).json({ message: `Error : ${err}` });
                }
                else if (result) {
                    // console.log(result);
                    res.status(200).json({ data: result, message: "Master Data Updated Successfully!" })
                }
            })
        }
    })
}

function deleteMasterData(data, res) {
    const id = data.id;

    MasterData.findByIdAndDelete(id, (err) => {
        if(err) {
            res.status(500).json({ message: `Error : ${err}` });
        }
        else {
            res.status(200).json({message: "Master Data Deleted Successfully!"});
        }
    })
}

function getOptions(res) {
    MasterData.find().then((response) => {
        
        let names = [], namesToAddressMapping = {};
        
        response.map((obj, index) => {
            names.push(obj.name);

            namesToAddressMapping[`${obj.name}`] = {
                    building_num: obj.building_no || obj._doc.building_no,
                    street: obj.street,
                    city: obj.city,
                    pincode: obj.pincode
                }            
        });

        res.status(200).json({ names: names, namesToAddressMapping: namesToAddressMapping });
    }).catch((err) => {
        res.status(500).json({ message: `Error : ${err}` });
    })
}

module.exports = { fetchAllMasterData, createNewMasterData, editMasterData, deleteMasterData, getOptions };