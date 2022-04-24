const Warehouse = require("../../models/warehouseSchema");

const sendMailToAdmin = require("../../utils/emailTemplates/sendMailToAdmin");
const sendMailToUser = require("../../utils/emailTemplates/sendMailToUser");

const supabaseConfig = require("../../config/supabaseConfig");
const supabase = supabaseConfig();

const warehouseForm = (id, req, res, sendMailOrNot) => {
    var fileName = "";
    var fileType = "";
    var filePreviewUrl = "";
    var fileDownloadUrl = "";

    if (req.file) {
        fileName = id + '-' + req.file.originalname;
        var filePath = 'warehouse_management/' + fileName;

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

    const warehouseUser = new Warehouse({
        _id: id,
        service: "Warehouse Management",
        status: "Not Assigned",
        user_name: req.body.userName,
        user_address: req.body.userAddress,
        user_phone_number: req.body.userPhone,
        user_phone_number_formatted: req.body.userPhoneFormatted,
        user_email_address: req.body.userEmail,
        warehouse_city: req.body.warehouseCity,
        specific_location: req.body.specificLocation,
        covered_area: req.body.coveredArea,
        open_area: req.body.openArea,
        commodity_storage: req.body.commodityStorage,
        infrastructure_options: req.body.infraOptions,
        manpower_options: req.body.manpowOptions,
        security_options: req.body.securityOptions,
        other_requirements: req.body.otherReq,
        work_scope: req.body.workScope,

        file_name: fileName,
        file_type: fileType,
        file_preview_url: filePreviewUrl,
        file_download_url: fileDownloadUrl
    });

    warehouseUser.save(function (err, data) {
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

module.exports = warehouseForm;