const app = require("express")();
const generateFormId = require("../utils/generateFormId");

const freightForm = require("./submitForm/submitFreightForm");
const customForm = require("./submitForm/submitCustomForm");
const transportForm = require("./submitForm/submitTransportForm");
const warehouseForm = require("./submitForm/submitWarehouseForm");
const valueAddedForm = require("./submitForm/submitValueAddedForm");

const createForm = (type, req, res) => {
    const id = generateFormId(type);
    
    switch (type) {
        case "freight":
            freightForm(id, req, res, true);            
            break;

        case "custom":
            customForm(id, req, res, true);           
            break;
            
        case "transport":
            transportForm(id, req, res, true);           
            break;
            
        case "warehouse":
            warehouseForm(id, req, res, true);            
            break;
            
        case "value":
            valueAddedForm(id, req, res, true);           
            break;            
    
        default:
            break;
    }    
}

module.exports = createForm;