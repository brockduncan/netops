const dotenv = require('dotenv')
dotenv.config()

module.exports = {
  publicKey: process.env.MJ_APIKEY_PUBLIC,
  privateKey: process.env.MJ_APIKEY_PRIVATE,
}
