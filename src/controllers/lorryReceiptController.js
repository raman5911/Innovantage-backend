const LorryReceipt = require("../models/lorryReceiptSchema");
const html_to_pdf = require("html-pdf-node");
const { getLRTemplate } = require("../utils/lr_template");

function fetchLR(res) {
    LorryReceipt.find().then((response) => {
        res.status(200).json({ data: response });
    }).catch((err) => {
        res.status(500).json({ message: `Error : ${err}` });
    })
}

function createNewLR(data, res) {
    const newLR = LorryReceipt({
        lr_number: data.lrNumber,
        date: data.date,
        vehicle_number: data.vehicleNumber,
        vehicle_type: data.vehicleType,
        driver_mobile: data.driverMobile,
        consignor_name: data.consignorName,
        consignor_building_no: data.consignorBuildingNum,
        consignor_street: data.consignorStreet,
        consignor_city: data.consignorCity,
        consignor_pincode: data.consignorPincode,
        consignee_name: data.consigneeName,
        consignee_building_no: data.consigneeBuildingNum,
        consignee_street: data.consigneeStreet,
        consignee_city: data.consignee_city,
        consignee_pincode: data.consigneePincode,
        way_bill: data.wayBill,
        gst_number: data.gstNumber,
        special_instructions: data.specialInstructions,
        contact_person: data.contactPerson,
        vehicle_reporting_date: data.vehicleReportingDate,
        vehicle_reporting_time: data.vehicleReportingTime,
        vehicle_departure_date: data.vehicleDepartureDate,
        vehicle_departure_time: data.vehicleDepartureTime,
        driver_name: data.driverName,
        driver_license_number: data.driverLicenseNumber,
        num_of_packages: data.numOfPackages,
        goods_descriptiion: data.goodsDescription,
        actual_weight: data.actualWeight,
        amount_in_figures: data.amountInFigures,
        amount_in_words: data.amountInWords,
        document_number: data.documentNumber,
        document_date: data.documentDate
    });

    newLR.save((err, data) => {
        if(err) {
            res.status(500).json({ message: `Error : ${err}` })
        }
        else {
            res.status(201).json({ data: data, message: "LR Data Submitted Successfully!" });
        }
    })
}

function editLR(data, res) {
    const id = data.id;
    const newData = data.value;

    LorryReceipt.findOne({
        _id: id
    },
    (err, lrData) => {
        if(err) {
            throw new Error(err);
        }
        else if(lrData) {
            lrData.lr_number = newData.lrNumber;
            lrData.date = newData.date;
            lrData.vehicle_number = newData.vehicleNumber;
            lrData.vehicle_type = newData.vehicleType;
            lrData.driver_mobile = newData.driverMobile;
            lrData.consignor_name = newData.consignorName;
            lrData.consignor_building_no = newData.consignorBuildingNum;
            lrData.consignor_street = newData.consignorStreet;
            lrData.consignor_city = newData.consignorCity;
            lrData.consignor_pincode = newData.consignorPincode;
            lrData.consignee_name = newData.consigneeName;
            lrData.consignee_building_no = newData.consigneeBuildingNum;
            lrData.consignee_street = newData.consigneeStreet;
            lrData.consignee_city = newData.consigneeCity;
            lrData.consignee_pincode = newData.consigneePincode;
            lrData.way_bill = newData.wayBill;
            lrData.gst_number = newData.gstNumber;
            lrData.special_instructions = newData.specialInstructions;
            lrData.contact_person = newData.contactPerson;
            lrData.vehicle_reporting_date = newData.vehicleReportingDate;
            lrData.vehicle_reporting_time = newData.vehicleReportingTime;
            lrData.vehicle_departure_date = newData.vehicleDepartureDate;
            lrData.vehicle_departure_time = newData.vehicleDepartureTime;
            lrData.driver_name = newData.driverName;
            lrData.driver_license_number = newData.driverLicenseNumber;
            lrData.num_of_packages = newData.numOfPackages;
            lrData.goods_descriptiion = newData.goodsDescription;
            lrData.actual_weight = newData.actualWeight;
            lrData.amount_in_figures = newData.amountInFigures;
            lrData.amount_in_words = newData.amountInWords;
            lrData.document_number = newData.documentNumber;
            lrData.document_date = newData.documentDate;

            lrData.save((err, result) => {
                if(err) {
                    res.status(500).json({ message: `Error : ${err}` });
                }
                else if (result) {
                    res.status(200).json({ data: result, message: "LR Data Updated Successfully!" })
                }
            })
        }
    })
}

function deleteLR(data, res) {
    const id = data.id;

    LorryReceipt.findByIdAndDelete(id, (err) => {
        if(err) {
            res.status(500).json({ message: `Error : ${err}` });
        }
        else {
            res.status(200).json({message: "LR Data Deleted Successfully!"});
        }
    })
}

function downloadLR(data, res) {
    // console.log(data.currentLR);
    let options = { format: 'A4' };
    let file = { content: getLRTemplate(data.currentLR) }

    html_to_pdf.generatePdf(file, options).then(buffer => {
        console.log(buffer);
        res.status(200).json({ buffer: buffer })
    })

}

module.exports = { fetchLR, createNewLR, editLR, deleteLR, downloadLR };