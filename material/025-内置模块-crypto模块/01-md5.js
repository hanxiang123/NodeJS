
const crypto = require("crypto")

// const hash = crypto.createHash("sha1")
const hash = crypto.createHash("md5")

hash.update("123456")
hash.update("adwadwadwa")

console.log(hash.digest("hex"))