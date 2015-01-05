var socket = io.connect('http://blockmaze.herokuapp.com');

//var host = location.origin.replace(/^http/, 'ws');
//var socket = io.connect(host);

var cubeSize = 50;
var playerNumber = 0;

//var characterCube = new THREE.Mesh(new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize), wood_floor);

var characterNumbers = [];
var characterCubes = [];

socket.on('initializeWorld', function(data){

	console.log("World Data: " + JSON.stringify(data));
	/*
	var index = characterNumbers.indexOf(data.id);
	//If character cube id already exists, then update position
	if (index > -1) {
 		updateCharacterCube(index, data.location);
	}
	//otherwise, create new character cube
	else{
		characterNumbers.push(data.id);
		createCharacterCube(data.location);
	}
	*/
}); 
     
socket.on('getUpdatedPlayerLocation', function(data){
	console.log("Data received: " + JSON.stringify(data));
	//createOtherPlayer(data.location.x, data.location.y, data.location.z);
	
	var index = characterNumbers.indexOf(data.id);
	//If character cube id already exists, then update position
	if (index > -1) {
 		updateCharacterCube(index, data.location);
	}
	//otherwise, create new character cube
	else{
		characterNumbers.push(data.id);
		createCharacterCube(data.location);
	}
});     

socket.on('playerDisconnected', function(data){
	var index = characterNumbers.indexOf(data);

	if (index > -1) {
 		characterNumbers.splice(index, 1);
 		//splice from character CUBES!!!!
 		scene.remove(characterCubes[index]);
 		characterCubes.splice(index, 1);
	}
});  
     
function updateCharacterCube(index, location){
	characterCubes[index].position.x = location.x;
	characterCubes[index].position.y = location.y;
	characterCubes[index].position.z = location.z-40;
}  	

function createCharacterCube(location){
	
	characterCubes.push(new THREE.Mesh(new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize), wood_floor));
	
	characterCubes[characterCubes.length-1].position.x = location.x;
	characterCubes[characterCubes.length-1].position.y = location.y;
	characterCubes[characterCubes.length-1].position.z = location.z-40;
	
	scene.add(characterCubes[characterCubes.length-1]);
}

/*
function getLowestNumber(){

	for(var i=0; i<characterNumbers.length; i++){
		if(characterNumbers.indexOf(i)<0){
			return i;	
		}	
	}
	
	return characterNumbers.length;
	
}
*/	
   /*
   function createOtherPlayer(x, y, z){
   	   
      characterCube.position.x = x;
      characterCube.position.y = y;
      characterCube.position.z = z-40;
      characterCube.overdraw = true;
      
      scene.add(characterCube);
			
		}
		
	function updateOtherPlayerLocation(playerNumber, x, y, z){
	
		characterCube.position.x = x;
		characterCube.position.y = y;
		characterCube.position.z = z-40;
		
	}
	*/