// Converts from degrees to radians.
function toRadians(degrees) {
    return degrees * Math.PI / 180;
  };
   
  // Converts from radians to degrees.
  function toDegrees(radians) {
    return radians * 180 / Math.PI;
  }
  
  
  function bearing(startLat, startLng, destLat, destLng){
    startLat = toRadians(startLat);
    startLng = toRadians(startLng);
    destLat = toRadians(destLat);
    destLng = toRadians(destLng);
  
    y = Math.sin(destLng - startLng) * Math.cos(destLat);
    x = Math.cos(startLat) * Math.sin(destLat) -
          Math.sin(startLat) * Math.cos(destLat) * Math.cos(destLng - startLng);
    brng = Math.atan2(y, x);
    brng = toDegrees(brng);
    return (brng + 360) % 360;
  }

  window.onload = function(){
    var bearings;
    var net = require('net');
    var client = new net.Socket();
    client.connect(1337, '127.0.0.1', function() {
    client.write('Hello from client 2 ..');
    });
    // call backs to process events
    // -- when receiving data
    client.on('data', function(data) {
    try{
    console.log('Received: ' + data);
    bearings = bearing(data.str.latitude, data.str.longitude, data.des.latitude, data.des.longitude)
    } catch(err){
    console.log(err.message);
    }
    client.destroy(); // kill client after server's response
    });
    // -- when closing connection
    client.on('close', function() {
    console.log('Connection closed');
    });


    $(".container").css({'transform' : 'rotate('+ bearings +'deg)'});
  };