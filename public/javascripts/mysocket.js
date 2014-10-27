var socket = io.connect('http://localhost:8080');
var cubeSize = 50;

var characterCube = new THREE.Mesh(new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize), wood_floor);


	socket.on('updateCharacterLocation', function (data) {
		console.log('x: ' + data.x + ', y: ' + data.y + ', z: ' + data.z);
		updateOtherPlayerLocation(data.x, data.y, data.z);			
	});
     
   socket.on('joinWorld', function(data){
   	
		createOtherPlayer(data.x, data.y, data.z);	 	
   	console.log('player added');
   });
   
   
   
   function createOtherPlayer(x, y, z){
   	   
      characterCube.position.x = x;
      characterCube.position.y = y;
      characterCube.position.z = z-40;
      characterCube.overdraw = true;
      
      scene.add(characterCube);
			
		}
		
	function updateOtherPlayerLocation(x, y, z){
	
		characterCube.position.x = x;
		characterCube.position.y = y;
		characterCube.position.z = z-40;
		
	}