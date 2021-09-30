const profileModel = require("../models/profileSchema");
module.exports = {
  name: "daily",
  aliases: ['claim', 'collect'],
  cooldown: 86400,
  permissions: [],

  description: "daily coins",
  async execute(message, args, cmd, client, discord, profileData) {
    const response = await profileModel.findOneAndUpdate(
      {
        userID: message.author.id,
      },
      {
        $inc: {
          coins: 1000,
        },
      }
    );
    return message.channel.send(`${message.author.username}, you received 1000 won **coins** come back in 24 hours`);
  },
};