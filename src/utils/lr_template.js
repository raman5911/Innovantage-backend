const { format_date, get_time_from_date } = require("./date");

function getLRTemplate(data) {
    const { lr_number, date, vehicle_number, vehicle_type, driver_mobile, consignor_name, consignee_name, consignor_building_no, consignee_building_no, consignee_street, consignor_street, consignor_city, consignee_city, consignor_pincode, consignee_pincode, way_bill, gst_number, special_instructions, contact_person, vehicle_reporting_date, vehicle_departure_date, driver_name, driver_license_number, vehicle_reporting_time, vehicle_departure_time, num_of_packages, goods_descriptiion, amount_in_words, document_number, document_date, amount_in_figures,  } = data;

    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Template</title>

        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300&family=Open+Sans:wght@300;400&display=swap" rel="stylesheet">

        <style>
            * {
                font-family: 'Open Sans', sans-serif;
            }
            
            h2 {
                font-family: 'Merriweather', serif;
            }

            table {
                border-spacing: 0px;
            }

            table tr td {
                padding: 0.3rem;
                /* font-weight: 600; */
            }
        </style>

    </head>
    <body>
        <table border="1" align="center">
            <tr>
                <td rowspan="5" style="text-align: center;">
                    <img src="https://jwoywksjlwqfbifosfqj.supabase.co/storage/v1/object/public/server-files/logo.svg" height="150" width="150" />
                </td>
                <td colspan="4"><h2>Innovantage Solutions Private Limited</h2></td>
                <td colspan="3" style="color: blue; font-weight: 600;">"Integrating Supply Chain Solutions......."</td>
            </tr>
            <tr>
                <td colspan="8">Regd.Office: G-1, Ground Floor, Shahpuri's Tirath Tower,Plot No.58 Block C-3, </td>
            </tr>
            <tr>
                <td colspan="8">Near DDA Community Centre Market, Janakpuri, New Delhi-110058</td>
            </tr>
            <tr>
                <td colspan="5">
                    <b>Phone:</b> +91-011-45131696/9711996245, <b>Email:</b> (1) Corporate@innovantage.in (2) sales@innovantage.in; <b>Website:</b> www.innovantage.in
                </td>
                <td colspan="3">
                    LR No. : <span style="color: blue; font-weight: 600;">ISPL/${lr_number !== undefined ? lr_number : ""}</span>
                </td>
            </tr>
            <tr>
                <td colspan="5">
                    <b>PAN No :</b> 07AAECI7031G, <b>GST NO :</b> 07AAECI7031G1ZR, <b>CIN No :</b> U74999DL2017PTC326977
                </td>
                <td colspan="3">
                    Date : <span style="color: blue; font-weight: 600;">${date !== undefined ? format_date(date, "Asia/Kolkata", "dd-MMMM-yyyy") : ""}</span>
                </td>
            </tr>
            <tr>
                <td colspan="4">
                    Vehicle No. : <span style="color: blue; font-weight: 600;">${vehicle_number !== undefined ? vehicle_number : ""}</span>
                </td>
                <td>
                    Vehicle Type : <span style="color: blue; font-weight: 600;">${vehicle_type !== undefined ? vehicle_type : ""}</span>
                </td>
                <td colspan="3">
                    Driver's Mobile :  <span style="color: blue; font-weight: 600;">${driver_mobile !== undefined ? driver_mobile : ""}</span>
                </td>
            </tr>
            <tr>
                <td>CONSIGNOR</td>
                <td>Name</td>
                <td colspan="2" style="color: blue; font-weight: 600;">${consignor_name !== undefined ? consignor_name : ""}</td>
                <td>CONSIGNEE</td>
                <td>Name</td>
                <td colspan="2" style="color: blue; font-weight: 600;">${consignee_name !== undefined ? consignee_name : ""}</td>
            </tr>
            <tr>
                <td rowspan="4">FROM</td>
                <td>Building No.</td>
                <td colspan="2" style="color: blue; font-weight: 600;">${consignor_building_no !== undefined ? consignor_building_no : ""}</td>
                <td rowspan="4">TO</td>
                <td>Building No.</td>
                <td colspan="2" style="color: blue; font-weight: 600;">${consignee_building_no !== undefined ? consignee_building_no : ""}</td>
            </tr>
            <tr>
                <td>Street</td>
                <td colspan="2" style="color: blue; font-weight: 600;">${consignor_street !== undefined ? consignor_street : ""}</td>
                <td>Street</td>
                <td colspan="2" style="color: blue; font-weight: 600;">${consignee_street !== undefined ? consignee_street : ""}</td>
            </tr>
            <tr>
                <td>City</td>
                <td colspan="2" style="color: blue; font-weight: 600;">${consignor_city !== undefined ? consignor_city : ""}</td>
                <td>City</td>
                <td colspan="2" style="color: blue; font-weight: 600;">${consignee_city !== undefined ? consignee_city : ""}</td>
            </tr>
            <tr>
                <td>Pincode</td>
                <td colspan="2" style="color: blue; font-weight: 600;">${consignor_pincode !== undefined ? consignor_pincode : ""}</td>
                <td>Pincode</td>
                <td colspan="2" style="color: blue; font-weight: 600;">${consignee_pincode !== undefined ? consignee_pincode : ""}</td>
            </tr>
            <tr>
                <td colspan="2">WAY BILL / PERMIT No.</td>
                <td colspan="2" style="color: blue; font-weight: 600;">${way_bill !== undefined ? way_bill : ""}</td>
                <td>GST No.</td>
                <td colspan="3" style="color: blue; font-weight: 600;">${gst_number !== undefined ? gst_number : ""}</td>
            </tr>
            <tr>
                <td colspan="2">SPECIAL INSTRUCTIONS</td>
                <td colspan="2">${special_instructions !== undefined ? special_instructions : ""}</td>
                <td>Contact Person / Mobile No.</td>
                <td colspan="3" style="color: blue; font-weight: 600;">${contact_person !== undefined ? contact_person : ""}</td>
            </tr>
            <tr>
                <td rowspan="2">Vehicle Reporting Date / Time</td>
                <td style="color: blue; font-weight: 600;">${vehicle_reporting_date !== undefined ? format_date(vehicle_reporting_date, "Asia/Kolkata", "dd-MMMM-yyyy") : ""}</td>
                <td rowspan="2">Vehicle Departure Date / Time</td>
                <td style="color: blue; font-weight: 600;">${vehicle_departure_date !== undefined ? format_date(vehicle_departure_date, "Asia/Kolkata", "dd-MMMM-yyyy") : ""}</td>
                <td>Driver's Name</td>
                <td>${driver_name !== undefined ? driver_name : ""}</td>
                <td rowspan="2"></td>
            </tr>
            <tr>
                <td style="color: blue; font-weight: 600;">${vehicle_reporting_time !== undefined ? get_time_from_date(vehicle_reporting_time) + "Hrs." : ""}</td>
                <td style="color: blue; font-weight: 600;">${vehicle_departure_time !== undefined ? get_time_from_date(vehicle_departure_time) + "Hrs." : ""}</td>
                <td>Driver's License No.</td>
                <td>${driver_license_number !== undefined ? driver_license_number : ""}</td>
            </tr>
            <tr>
                <td>Loading Remarks</td>
                <td colspan="2">Halting:</td>
                <td colspan="2">Cargo Status:</td>
                <td style="width: 250px;">General Remarks:</td>
                <td style="text-align: center;">Driver's Signature</td>
            </tr>
            <tr>
                <td>No. of Packages</td>
                <td colspan="2" style="text-align: center;">Description of Goods (Said to Contain)</td>
                <td style="text-align: center;">Actual Weight (Kg.)</td>
                <td style="text-align: center;">Rate (Rs.)</td>
                <td style="text-align: center;" colspan="2">
                    Freight (Rs.)
                    TO PAY / PAID / <span style="color: blue; font-weight: 600;">TO BE BILLED</span>
                </td>
            </tr>
            <tr>
                <td rowspan="10" style="color: blue; font-weight: 600; text-align: center;">${num_of_packages !== undefined ? num_of_packages : ""}</td>
                <td colspan="2" style="color: blue; font-weight: 600;">${goods_descriptiion !== undefined ? goods_descriptiion : ""}</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2" style="color: blue; font-weight: 600;"></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2" style="color: blue; font-weight: 600;"></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2" style="color: blue; font-weight: 600;"></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2" style="color: blue; font-weight: 600;"></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2" style="color: blue; font-weight: 600;"></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2" style="color: blue; font-weight: 600;"></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2" style="color: blue; font-weight: 600;"></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2" style="color: blue; font-weight: 600;"></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2" style="color: blue; font-weight: 600;"></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td colspan="1">AMOUNT IN WORDS : </td>
                <td colspan="7" style="color: blue; font-weight: 600;">${amount_in_words !== undefined ? amount_in_words : ""}</td>
            </tr>
            
            <br /><br />
            
            <tr>
                <td>DOCUMENT / INVOICE / CHALLAN NO.</td>
                <td style="text-align: center;">DOCUMENT DATE</td>
                <td style="text-align: center;">VALUE (Rs.)</td>
                <td colspan="6" style="text-align: center;">INVOICE VALUE IN WORDS</td>
            </tr>
            <tr>
                <td style="color: blue; font-weight: 600;">${document_number !== undefined ? "Doc. No." + document_number : ""}</td>
                <td style="color: blue; font-weight: 600; text-align: center;">${document_date !== undefined ? format_date(document_date, "Asia/Kolkata", "dd-MMMM-yyyy") : ""}</td>
                <td style="color: blue; font-weight: 600; text-align: center;">${amount_in_figures !== undefined ? "Rs." + amount_in_figures : ""}</td>
                <td colspan="6" rowspan="3" style="color: blue; font-weight: 600; text-align: center;">${amount_in_words !== undefined ? amount_in_words : ""}</td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td colspan="4">GOODS ARE BEING CARRIED AT OWNER's RISK. WE ARE NOT RESPONSIBLE FOR BREAKAGES & LEAKAGES</td>
                <td colspan="4">GOODS INSURANCE COVERED BY CONSIGNOR / CONSIGNEE /NOT INSURED</td>
            </tr>
            <tr>
                <td colspan="4">We have dispatched the above said consignement & its related transit documents on "SAID TO CONTAIN" basis. We agree to pay all transporter relevant charges as applicable. Terms & Conditions mentioned overleaf have been read and accepted by the consignor.</td>
                <td colspan="4">GST would be paid by CONSIGNOR / CONSIGNEE / Innovantage Solutions Pvt.Ltd. </td>        
            </tr>
            <tr>
                <td>DATE</td>
                <td rowspan="3" colspan="3" style="text-align: right; padding-top: 5rem">Authorised Signatory of Consignor</td>
                <td rowspan="3" colspan="3" style="text-align: center;">
                    <img src="https://jwoywksjlwqfbifosfqj.supabase.co/storage/v1/object/public/server-files/sign.png" alt="sign" height="150" width="200">
                </td>
            </tr>
            <tr>
                <td></td>
            </tr>
            <tr>
                <td>TIME</td>
            </tr>
            <tr>
                <td colspan="8">All payments for transportation would be made by Cheque / DD in favour of <b>Innovantage Solutions Pvt.Ltd.</b></td>
            </tr>
            <tr>
                <td colspan="8" style="font-weight: 600;">Acknowledgement of Goods Receipt by the Consignee</td>
            </tr>
            <tr>
                <td rowspan="2">Vehicle Reporting Date / Time</td>
                <td></td>
                <td rowspan="2">Unload Vehicle Gate Out Date / Time</td>
                <td colspan="4" rowspan="4">
                    <p style="font-weight: 600; position: relative; top: -18px">POD Remarks</p>
                    <p style="font-weight: 600; position: relative; top: 20px; text-align: right;">Authorised Signatory of Consignee</p>
                </td>
            </tr>
            <tr>
                
                <td></td>
            </tr>
            <tr>
                <td colspan="3">Reason for Vehicle Detention:</td>
            </tr>
            <tr>
                <td colspan="3">Nature & Amount Paid by Transporter as Incidental Expenses :</td>
            </tr>
        </table>    
    </body>
    </html>`
}

module.exports = { getLRTemplate };