const ValueAdded = require("../../models/valueAddedSchema");

const sendMailToAdmin = require("../../utils/emailTemplates/sendMailToAdmin");
const sendMailToUser = require("../../utils/emailTemplates/sendMailToUser");

const supabaseConfig = require("../../config/supabaseConfig");
const supabase = supabaseConfig();

const ValueAddedForm = (id, req, res, sendMailOrNot) => {
    var fileName = "";
    var fileType = "";
    var filePreviewUrl = "";
    var fileDownloadUrl = "";

    if (req.file) {
      fileName = id + '-' + req.file.originalname;
      var filePath = 'value_added_services/' + fileName;
  
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
  
    const valueAddedUser = new ValueAdded({
      _id: id,
      service: "Value Added Services",
      status: "Not Assigned",
      user_name: req.body.userName,
      user_address: req.body.userAddress,
      user_phone_number: req.body.userPhone,
      user_phone_number_formatted: req.body.userPhoneFormatted,
      user_email_address: req.body.userEmail,
      service_type: req.body.serviceType,
  
      file_name: fileName,
      file_type: fileType,
      file_preview_url: filePreviewUrl,
      file_download_url: fileDownloadUrl
    });

    valueAddedUser.save(function (err, data) {
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

module.exports = ValueAddedForm;