const cron = require("node-cron");
require('dotenv').config();

const cronEmail = require("../emailTemplates/cronEmail");

const createClient = require('@supabase/supabase-js').createClient;

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

function cronJob() {
    
    // for running job on thursday 12 AM every week - "0 0 * * */thu"
    // for running job every minute - "*/1 * * * *"

    let uploadValue, uploadTime, deleteValue, deleteTime, data;

    const job1 = cron.schedule("0 0 * * */thu", function () {
        
        console.log("running a cron job every 1 week");

        supabase.storage
            .from('user-files')
            .upload('dummy/logo.png', '../../../logo.png')
            .then((value) => {
                uploadValue = value;
                uploadTime = new Date();

                if (value.error)
                    console.log(value.error);

                else {
                    console.log(value.data)

                    supabase
                        .storage
                        .from('user-files')
                        .remove(['dummy/logo.png'])
                        .then((value) => {
                            console.log(value);
                            deleteValue = value;
                            deleteTime = new Date();

                            data = {
                                uploadValue: uploadValue,
                                uploadTime: uploadTime,
                                deleteValue: deleteValue,
                                deleteTime: deleteTime
                            };
                
                            // console.log(data);                            
                            cronEmail(data);
                        });
                }    
            });
    }, {
        scheduled: true
    });

    job1.start();
}

module.exports = cronJob;