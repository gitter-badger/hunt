var socket = io.connect('', {
  'connect timeout': 1000
});

socket.on('broadcast', function (data) {
  document.getElementById('clock').innerHTML=data;
});