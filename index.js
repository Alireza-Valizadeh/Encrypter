const cryptojs = require("crypto-js")
//////////////////////////////////////////
function Encrypter(str, key) {
      if (typeof(str) != 'string') {
            throw new Error("Str Should be a string")
      }
      if (typeof(key) != 'string') {
            throw new Error("Key Should be a string")
      }
      let hashedKey = cryptojs.SHA256(key).toString()
      let encryptedStr = cryptojs.AES.encrypt(str, hashedKey).toString()
      let decryptedStr = cryptojs.AES.decrypt(encryptedStr, hashedKey).toString(cryptojs.enc.Utf8)
      return {encryptedStr: encryptedStr, decryptedStr: decryptedStr}
}
