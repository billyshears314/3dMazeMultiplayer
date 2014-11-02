      KeyboardJS.on('a', function(){
		
				spinValue = spinValue+1;		
		
				var xLook = 300*Math.cos(degreeOfRotation*spinValue*Math.PI/180)+camera.position.x;
				var yLook = 300*Math.sin(degreeOfRotation*spinValue*Math.PI/180)+camera.position.y;		
				
      		camera.lookAt(new THREE.Vector3(xLook, yLook, 210));      		
      		
      	//	camera.position.y = camera.position.y + speed;
      	//	socket.emit('updateCharacterLocation', {x: camera.position.x, y: camera.position.y, z: camera.position.z });
      	}, 
      	function(){
      
      	});
      	
      	KeyboardJS.on('s', function(){
      		
				var xMove = speed*Math.cos(degreeOfRotation*spinValue*Math.PI/180);
				var yMove = speed*Math.sin(degreeOfRotation*spinValue*Math.PI/180);
   
   			if(isOpenSpace(camera.position.x-xMove, camera.position.y-yMove)){   		
     				camera.position.x = camera.position.x - xMove;
					camera.position.y = camera.position.y - yMove;     
				}     		
				     		
				     	
      		console.log("x: " + camera.position.x);
      		console.log("y: " + camera.position.y);
      		
      		socket.emit('updateCharacterLocation', {x: camera.position.x, y: camera.position.y, z: camera.position.z });
      	}, 
      	function(){
     		
      	});
      	
      	KeyboardJS.on('w', function(){
      		
      		var xMove = speed*Math.cos(degreeOfRotation*spinValue*Math.PI/180);
				var yMove = speed*Math.sin(degreeOfRotation*spinValue*Math.PI/180);
      		
   			if(isOpenSpace(camera.position.x+xMove, camera.position.y+yMove)){   		
     				camera.position.x = camera.position.x + xMove;
					camera.position.y = camera.position.y + yMove;     
				}     				
				
				console.log("x: " + camera.position.x);
      		console.log("y: " + camera.position.y);     			     			
     			
     			socket.emit('updateCharacterLocation', {x: camera.position.x, y: camera.position.y, z: camera.position.z });
      	}, 
      	function(){
     		
      	});
      	
      	KeyboardJS.on('d', function(){

				spinValue = spinValue-1;		
		
				var xLook = 300*Math.cos(degreeOfRotation*spinValue*Math.PI/180)+camera.position.x;
				var yLook = 300*Math.sin(degreeOfRotation*spinValue*Math.PI/180)+camera.position.y;					
				
      		camera.lookAt(new THREE.Vector3(xLook, yLook, 210));        		
      		
 				//camera.position.y = camera.position.y - speed;
 				//socket.emit('updateCharacterLocation', {x: camera.position.x, y: camera.position.y, z: camera.position.z });
      	}, 
      	function(){
     		
      	});
      	
      	KeyboardJS.on('j', function(){
      		socket.emit('joinWorld', {x: camera.position.x, y: camera.position.y, z: camera.position.z });
      	}, 
      	function(){
     		
      	});
      	
      	//Determine whether the the position contains a block or not
      	function isOpenSpace(x, y){
      	
				a = Math.ceil((x-150)/300);	      	
      		b = Math.ceil((y-150)/300);
      		
				console.log("a: " + a);
				console.log("b: " + b);      		
      		
				if(board2[b+15*a]===1){
					return false;					
				}
				return true;
      	}