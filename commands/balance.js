module.exports = {
    name: "balance",
    aliases: ["bal", "bl"],
    permissions: [],
    description: "Check the user balance",
    execute(message, args, cmd, client, discord, profileData) {
      message.channel.send(`Your balance is ₩${profileData.coins} and your bank balance is ₩${profileData.bank}`);
    },
  };