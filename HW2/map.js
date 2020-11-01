

    //loadMap('mapid');

    window.onload = function() {

        var map;
        var dir;
        var str, des;
    
        map = L.map('map', {
          layers: MQ.mapLayer(),
          center: [ 25.204849, 55.270782 ],
          zoom: 15
        });
        dir = MQ.routing.directions();
        var des = prompt("Enter coordinates", "25.199514, 55.277397")
        map.locate({setView: true, watch: true}) /* This will return map so you can do chaining */
            .on('locationfound', function(e){
                var marker = L.marker([e.latitude, e.longitude]).bindPopup('Your are here :)');
                /*var circle = L.circle([e.latitude, e.longitude], e.accuracy/2, {
                    weight: 1,
                    color: 'blue',
                    fillColor: '#cacaca',
                    fillOpacity: 0.2
                });*/
                map.addLayer(marker);
                //map.addLayer(circle);

    
                dir.route({
                locations: [
                    {latLng: {lat: e.latitude, lng: e.longitude}},
                    des
                ]
                });
    
                map.addLayer(MQ.routing.routeLayer({
                directions: dir,
                fitBounds: true
                }));
                var cord ={
                    start: str.latLng,
                    dest: des.latlng,
               }; 
               $.ajax({
                type: 'POST',
                url: data.txt,
                data: cord,
                sucess: function(){
                    console.log("Success!")
                }

                
            });
               var net = require('net');
                var client = new net.Socket();
                client.connect(1337, '127.0.0.1', function() {
                client.write('Hello from client 1 ..');
                });
                // call backs to process events
                // -- when receiving data
                client.on('data', function(data) {
                try{
                console.log('Received: ' + data);
                } catch(err){
                console.log(err.message);
                }
                client.destroy(); // kill client after server's response
                });
                // -- when closing connection
                client.on('close', function() {
                console.log('Connection closed');
                });
                
            })
           .on('locationerror', function(e){
                console.log(e);
                alert("Location access denied.");
            });
           
                var cord ={
                    start: str.latLng,
                    dest: des.latlng,
               };
               var net = require('net');
                var client = new net.Socket();
                client.connect(1337, '127.0.0.1', function() {
                client.write('Hello from the the other side ..');
                });
                // call backs to process events
                // -- when receiving data
                client.on('data', function(data) {
                try{
                console.log('Received: ' + data);
                } catch(err){
                console.log(err.message);
                }
                client.destroy(); // kill client after server's response
                });
                // -- when closing connection
                client.on('close', function() {
                console.log('Connection closed');
                });
                
            $.ajax({
                type: 'POST',
                url: data.txt,
                data: cord,
                sucess: function(){
                    console.log("Success!")
                }

                
            });


            
           /* dir.route({
                locations: [
                    {latLng: {lat: str.latitude, lng: str.longitude}},
                    {latLng: {lat: des.latitude, lng: des.latitude}
                ]
                });
    
                map.addLayer(MQ.routing.routeLayer({
                directions: dir,
                fitBounds: true
                }));*/

    
    
    }