const { redirect } = require("next/dist/server/api-utils");
const { i18n } = require("./next-i18next.config");

// let airT = 'https://hooks.airtable.com/workflows/v1/genericWebhook/appIbqQDdN5r8Ubiz/wflN4MKI7kBl3ULGj/wtrEbvMzNzmGeWXle'

module.exports = {
  reactStrictMode: false,
  i18n,
}
