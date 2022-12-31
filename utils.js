const log = require(`./utils/connect.js`);
const msg = require(`./client/msg.js`);
const config = require(`./utils/config.js`);
const reddit = require(`./utils/getRedditInfo.js`);
const collector = require(`./utils/collector.js`);
module.exports={
log,
msg,
config,
reddit,
collector,
}