const Transport = require("../../models/transportSchema");

const sendMailToAdmin = require("../../utils/emailTemplates/sendMailToAdmin");
const sendMailToUser = require("../../utils/emailTemplates/sendMailToUser");

const supabaseConfig = require("../../config/supabaseConfig");
const supabase = supabaseConfig();

const transportForm = (id, req, res, sendMailOrNot) => {
    var fileName = "";
    var fileType = "";
    var filePreviewUrl = "";
    var fileDownloadUrl = "";

    if (req.file) {
        fileName = id + '-' + req.file.originalname;
        var filePath = 'transportation_management/' + fileName;

        supabase.storage
            .from('user-files')
            .upload(filePath, req.file.buffer)
            .then((value) => {
                if (value.error)
                    console.log(value.error)

                else
                    console.log(value.data)
            })

        const { publicURL } = supabase
            .storage
            .from('user-files')
            .getPublicUrl(filePath)

        console.log(publicURL)
        fileDownloadUrl = publicURL;

        fileType = req.file.mimetype.split("/")[0];
        console.log(fileType);

        if (fileType != "image") {
            filePreviewUrl = "https://docs.google.com/a/supabase.com/viewer?url=" + publicURL;
        }
        else {
            filePreviewUrl = publicURL;
        }
    }

    const transportUser = new Transport({
        _id: id,
        service: "Transportation Management",
        status: "Not Assigned",
        user_name: req.body.userName,
        user_address: req.body.userAddress,
        user_phone_number: req.body.userPhone,
        user_phone_number_formatted: req.body.userPhoneFormatted,
        user_email_address: req.body.userEmail,
        pickup_address: req.body.pickupAddress,
        destination_address: req.body.destAddress,
        vehicle_type: req.body.vehicleType,
        vehicle_size: req.body.vehicleSize,
        packing_type: req.body.packingType,
        other_specs: req.body.otherSpecs,
        package_per_unit: req.body.packagePerUnit,
        package_weight: req.body.packageWt,
        shipment_weight: req.body.shipmentWt,
        measurement_unit: req.body.measurementUnit,
        length: req.body.length,
        width: req.body.width,
        height: req.body.height,

        file_name: fileName,
        file_type: fileType,
        file_preview_url: filePreviewUrl,
        file_download_url: fileDownloadUrl,

        expected_delivery_date: "",
        current_shipment_phase: "Dispatching Soon"
    });

    transportUser.save(function (err, data) {
        if (err) {
            res.status(400).json({ message: data });
        }

        else {
            res.status(200).json(data);

            sendMailToAdmin(data);

            if (sendMailOrNot) {
                sendMailToUser(data);
            }
        }
    });
}

module.exports = transportForm;