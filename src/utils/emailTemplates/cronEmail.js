var nodemailer = require('nodemailer');
require('dotenv').config();

function htmlTemplate(data) {
    return `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
            </head>
            <body>
                <div>
                    <h1>Cron for Supabase - Innovantage Project Runned</h1>
                    <p>Upload value :- ${JSON.stringify(data.uploadValue)} </p>
                    <p>Upload time :- ${data.uploadTime} </p>
                    <p>Delete value :- ${JSON.stringify(data.deleteValue)} </p>
                    <p>Delete time :- ${data.deleteTime} </p>
                </div>
            </body>
        </html>`;
}

module.exports = function cronEmail(data) {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    });

    const mailOptions = {
        from: 'Team Innovantage <' + process.env.EMAIL + '>', // sender address
        to: process.env.DEV_EMAIL, // list of receivers
        subject: 'Cron for Supabase - Innovantage Project Runned', // Subject line
        html: htmlTemplate(data)// html
    };

    transporter.sendMail(mailOptions, function (err, info) {
        if (err)
            console.log(err)
        else
            console.log(info);
    });
}