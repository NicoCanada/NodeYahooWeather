// Require node-oauth package: npm install oauth
require('dotenv').config();

var OAuth = require('oauth');
var header = {
    "Yahoo-App-Id": process.env.yahoo_app_id,
};
var request = new OAuth.OAuth(
    null,
    null,
    process.env.consumer_key,
    process.env.consumer_secret,
    '1.0',
    null,
    'HMAC-SHA1',
    null,
    header
);
// console.log(process.env.consumer_key);
request.get(
    'https://weather-ydn-yql.media.yahoo.com/forecastrss?location=Winnipeg,ca&u=c',
    null,
    null,
    function (err, data, result) {
        if (err) {
            console.log(err);
        } else {
            console.log(data);
        }
    }
);
