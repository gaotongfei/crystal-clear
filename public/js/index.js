document.addEventListener("DOMContentLoaded", function(e) {
  var ws = new WebSocket("ws://localhost:3000/ws");
  var chatbox = document.getElementById("chatbox");
  chatbox.addEventListener("keyup", function(e) {
    var msg = chatbox.value;
    if (event.keyCode == 13) {
      var msg = chatbox.value

      ws.onopen = onOpen(msg);

      ws.onmessage = function(event) {
        onMessage(event);
      }

      ws.onclose = onClose
    }
  })

  function onOpen(msg) {
    ws.send(msg);
    console.log("Message is sent...");
  }

  function onMessage(event) {
    var received_msg = event.data;
    console.log(received_msg);
  }
  function onClose() {
    console.log('closed')
  }
})
