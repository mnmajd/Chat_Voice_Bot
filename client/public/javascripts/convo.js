var botui = new BotUI('api-bot');
var socket = io.connect('http://localhost:8010');

botui.message.add({
  content: 'Lets Start Talking...',
  delay: 1500,
}).then(function () {
  botui.action.text({
    action: {
      placeholder: 'Say Hello', }
  }
).then(function (res) {

  socket.emit('fromClient', { client : res.value });
 
  // sends the message typed to server
  }).then(function () {
    socket.on('fromServer', function (data) { // recieveing a reply from server.
     console.log(data.server);
      if (IsJsonString(data.server)) {
        newMultipleMessage(data.server);

      }else if(IsJsonString(data.server) && data.server.playload){
        newMessage(data.server);

        newMultipleMessage(data.server);

      }
      else{
        
        newMessage(data.server);
        addAction();

      }

  })
});
})
function IsJsonString(str) {
  try {
      JSON.parse(str);
  } catch (e) {
      return false;
  }
  return true;
}
//IsJsonString(response)
function newMessage (response) {
      botui.message.add({
        content: response,
        delay: 0,
      })
   }


function AddButtonAction(){
  botui.action.button({ // let user do something
    delay: 1000,
    action: [
      {
        text: 'Good',
        value: 'hello'
      },
      {
        text: 'register',
        value: 'register'
      }
    ]
  }).then(function (res) {
    socket.emit('fromClient', { client : res.value });
  })
}



function newMultipleMessage (response) {
  test = [];

  JSON.parse(response).forEach(function(lol) {
    var tableName = lol.res;
    test.push({text:tableName,value:tableName})
    
});
console.log(test);
return botui.action.button({ // let user do something
  delay: 1000,
  action: test
}).then(function (res) {
  socket.emit('fromClient', { client : res.value });
})
  }


function addAction () {
  botui.action.text({
    action: {
      placeholder: 'enter response...', 
    }
  }).then(function (res) {
    socket.emit('fromClient', { client : res.value });
  })
}

