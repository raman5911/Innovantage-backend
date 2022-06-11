const jwt = require("jsonwebtoken");

const createToken = (id, tokenType, expireTime, userType) => {
    
    let secretKey;

    if (tokenType === "admin") {
        secretKey = process.env.ADMIN_TOKEN_SECRET_KEY;
    }
    else if (tokenType === "client") {
        secretKey = process.env.CLIENT_TOKEN_SECRET_KEY;
    }
    else {
        return null;
    }
    
    const token = jwt.sign(
        { user_id: id, userType: userType },
        secretKey,
        {
            expiresIn: expireTime,
        }
    );

    return token;
}

module.exports = { createToken };