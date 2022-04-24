const { customAlphabet } = require("nanoid");
const nanoid = customAlphabet('1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ', 9);

const getRandomId = (type) => {
    var randomId = nanoid();

    switch (type) {
        case "freight":
            randomId = 'F' + randomId;            
            break;

        case "custom":
            randomId = 'C' + randomId;            
            break;
            
        case "transport":
            randomId = 'T' + randomId;            
            break;
            
        case "warehouse":
            randomId = 'W' + randomId;            
            break;
            
        case "value":
            randomId = 'V' + randomId;            
            break;            
    
        default:
            break;
    }

    return randomId;
}

module.exports = getRandomId;