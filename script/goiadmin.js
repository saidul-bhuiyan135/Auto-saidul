module.exports.config = {
  name: "goiadmin",
  version: "1.0.0-beta-fixbyDungUwU",
  hasPermssion: 0,
  credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭",
  description: "Bot will rep ng tag admin or rep ng tagbot ",
  commandCategory: "Other",
  usages: "",
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "61555887493470","61555887493470") {
    var aid = ["61555887493470","61555887493470"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = [ "আমার বস সাইদুলকে  আর একবার মেনশন দিলে তোমার নাকের মধ্যে ঘুষি মারমু😡", "বস সাইদুলকে  আর একবার মেনশন দিলে খবর আছে তোমার, তোমাকে কিন্তু ঘুষি মারমু সাইদুলকে মেনশন দিবা না😠","বস সাইদুল এখন অনেক বিজি তাকে মেনশন দিয়ে ডিস্টার্ব কইরো না 😏"," বস, সাইদুল এখন অনেক বিজি তাকে মেনশন দিবা না😡😡😡"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
}
