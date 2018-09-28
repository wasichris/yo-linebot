// setup for linebot
var bot = linebot({
  channelId: '1608464162',
  channelSecret: '0892ebf2b065e59e00545dacf616d0ac',
  channelAccessToken: 'eI59B9rz4Hov7e2AcfzIxRPprE+JeBWR95eGN9KzEhDOfo9I3KOM+7DErclefGn866g9/JfDVwAEInR/OW2LEchWtqMIyQgo7/RKmK5zh6Z4N1hYUR7WXFNJzlAKdJYZ3/+Epnz3W0JIdiZA65zGEAdB04t89/1O/w1cDnyilFU='
});

bot.on('message', function(event) {
  console.log('=== receive ===')
  console.log(event); //把收到訊息的 event 印出來看看
});


module.exports = bot;