const Custom = require("../../models/customSchema");

const sendMailToAdmin = require("../../utils/emailTemplates/sendMailToAdmin");
const sendMailToUser = require("../../utils/emailTemplates/sendMailToUser");

const supabaseConfig = require("../../config/supabaseConfig");
const supabase = supabaseConfig();

const customForm = (id, req, res, sendMailOrNot) => {
    var fileName = "";
    var fileType = "";
    var filePreviewUrl = "";
    var fileDownloadUrl = "";

    if (req.file) {
        fileName = id + '-' + req.file.originalname;
        var filePath = 'custom_clearance/' + fileName;

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

    const customUser = new Custom({
        _id: id,
        service: "Custom Clearance",
        status: "Not Assigned",
        shipment_type: req.body.shipmentType,
        user_name: req.body.userName,
        user_address: req.body.userAddress,
        user_phone_number: req.body.userPhone,
        user_phone_number_formatted: req.body.userPhoneFormatted,
        user_email_address: req.body.userEmail,
        shipment_address: req.body.pickupAddress,
        area_code: req.body.areaCode,
        shipment_phone_number: req.body.pickupPhone,
        shipment_phone_number_formatted: req.body.pickupPhoneFormatted,
        shipment_from_country_code: req.body.pickupFromCountryCode,
        shipment_from_country_name: req.body.pickupFromCountryName,
        origin_port: req.body.originPort,
        shipment_to_country_code: req.body.dropToCountryCode,
        shipment_to_country_name: req.body.dropToCountryName,
        destination_port: req.body.destinationPort,
        shipment_mode: req.body.shipmentMode,
        commodity_name: req.body.commodityName,
        container_type: req.body.containerType,
        gross_weight: req.body.grossWeight,
        number_of_packages: req.body.numOfPkg,
        total_volume: req.body.totalVolume,
        shipment_per_month: req.body.numOfShip,

        file_name: fileName,
        file_type: fileType,
        file_preview_url: filePreviewUrl,
        file_download_url: fileDownloadUrl,

        expected_delivery_date: "",
        current_shipment_phase: "Dispatching Soon"
    });

    customUser.save(function (err, data) {
        if (err) {
            res.status(400).json({ message: err });
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

module.exports = customForm;