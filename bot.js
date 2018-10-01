var linebot = require('linebot');

// setup for linebot
var bot = linebot({
  channelId: '1608464162',
  channelSecret: '0892ebf2b065e59e00545dacf616d0ac',
  channelAccessToken: 'sLrxLV6NcQVnOMRl5/a2E9DotMaLmwW5+t243LOqn6QJc3Ve4bfzr1TjqONSFSw/66g9/JfDVwAEInR/OW2LEchWtqMIyQgo7/RKmK5zh6aEcqqkg6ru8daPoqiGfATqQzP4sNeKD4uFutftzTTzowdB04t89/1O/w1cDnyilFU='
});

bot.on('message', function(event) {
  console.log('=== receive ===')
  console.log(event); //把收到訊息的 event 印出來看看

  if (event.message.type = 'text') {
    var msg = event.message.text;
    event.reply(msg).then(function(data) {
      // success 
      console.log(msg);
    }).catch(function(error) {
      // error 
      console.log('error');
    });
  }

});


module.exports = bot;