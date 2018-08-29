let secrets = require("./secrets.json");
let fs = require("fs");

const SERVICE_ACCT_ID = secrets.service_acct_id;
const KEYPATH = secrets.service_acct_keypath;
const TIMEZONE = 'UTC+08:00';
const CALENDAR_ID = {
	'primary': 'lmpatator@gmail.com',
	'calendar-1': 'bp9e0i2aeu9hs9lroh2mije6ng@group.calendar.google.com@group.calendar.google.com',
};

let json = fs.readFileSync(KEYPATH, "utf8");
let key = JSON.parse(json).private_key;

module.exports.key = key;
module.exports.serviceAcctId = SERVICE_ACCT_ID;
module.exports.timezone = TIMEZONE;
module.exports.calendarId = CALENDAR_ID;

