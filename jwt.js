const jwt = require("jsonwebtoken")
const secretKey = "efspco.ir/ebtaxiweb/secretkey"
const logger = require("./logger")
function CreateToken(inp) {
    if (Array.isArray(inp)) {
        return false 
    }
    let accessToken
    let info = {mobile: inp}
    accessToken = jwt.sign(info , secretKey, {
        expiresIn: "365d",   
    });
    const cookieOptions = {
        expires: new Date(Date.now() + 1 * 1000 * 60 * /* minute:*/ 60 * 24 * 365),
        httpOnly: true
    };
    return {cookiName: "loginCookie", cookieValue: accessToken, cookieOptions: cookieOptions }
}

function CheckToken(req, res, next) {
    const cookies = req?.cookies;
    const loginCookie = cookies?.loginCookie;
    if (loginCookie == undefined) {
        logger.warn({message: "loginCookie was undefined", label: "Authorization Failure"})
        return res.status(403).send("برای دسترسی، ابتدا وارد حساب کاربری خود شوید")
    }
    req.headers['authorization'] = "Bearer " + loginCookie;
    const authHeader = req.headers['authorization']
    const token  = authHeader && authHeader.split(" ")[1];
    if (token == null) {
        logger.warn({message: "token was null", label: "Authorization Failure"})
        return res.status(403).send("برای دسترسی، ابتدا وارد حساب کاربری خود شوید")
    }
    jwt.verify(token, secretKey, (error, decode) => {
        if (error ) {
            logger.warn({message: "token was tampered with", label: "Authorization Failure"})
            return res.status(403).send(error)
        }
        res.locals.container = decode;
        next();
    })
}




module.exports = {
    CreateToken: CreateToken,
    CheckToken: CheckToken
}
