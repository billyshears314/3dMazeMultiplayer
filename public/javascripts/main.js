   // revolutions per second
      var angularSpeed = 0.1; 
      var lastTime = 0;
		var scaleState = 1; 
		var speed = 30;
		
		var spinValue = 0;
				
		var currentColorCode = 'aaa';
				
		
      // this function is executed on each animation frame
      function animate(){
        // render
        renderer.render(scene, camera);
 
        // request new frame
        requestAnimationFrame(function(){
            animate();
        });

      }
 
      // renderer
      var renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      document.body.appendChild(renderer.domElement);
		renderer.setClearColor( 0x7ec0ee, 1); 
 
      // camera
      var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 6000);
      camera.position.set(100,100,275);
	   camera.up = new THREE.Vector3(0,0,1);
	   camera.lookAt(new THREE.Vector3(400, 100,210));
 
      // scene
      var scene = new THREE.Scene();
	        
	   var texture = THREE.ImageUtils.loadTexture( "images/wood_floor.jpg" );
       texture.wrapS = THREE.RepeatWrapping; 
       texture.wrapT = THREE.RepeatWrapping; 
       texture.repeat.set( 1, 1 );
       
       var wood_floor = new THREE.MeshLambertMaterial({
       	map: texture
       });	
       	
		
      // add subtle blue ambient lighting
      var ambientLight = new THREE.AmbientLight(0x000044);
      scene.add(ambientLight);
      
      // directional lighting
      var directionalLight = new THREE.DirectionalLight(0xffffff);
      directionalLight.position.set(300, 300, 400).normalize();
      scene.add(directionalLight);
 
		var light = new THREE.AmbientLight( 0x606060 ); // soft white light 
		scene.add( light ); 
 
 		var board = [1, 1, 1, 1, 1, 
 						 1, 1, 1, 1, 1, 
 						 1, 1, 1, 1, 1,
 						 1, 1, 1, 1, 1,
 						 1, 1, 1, 1, 1];	
		createMap(board, 0);
				
			 board = [0, 0, 0, 0, 1,
			 			 0, 0, 0, 0, 1,
			 			 0, 0, 0, 0, 1,
			 			 0, 0, 0, 0, 1,
			 			 0, 1, 1, 0, 1];
		
		createMap(board, 1);
 
      // start animation
      animate();     
      
      KeyboardJS.on('a', function(){
		
				spinValue = spinValue+1;		
		
				var xLook = 300*Math.cos(30*spinValue*Math.PI/180)+100;
				var yLook = 300*Math.sin(30*spinValue*Math.PI/180)+100;		
				
      		camera.lookAt(new THREE.Vector3(xLook, yLook, 210));      		
      		
      	//	camera.position.y = camera.position.y + speed;
      	//	socket.emit('updateCharacterLocation', {x: camera.position.x, y: camera.position.y, z: camera.position.z });
      	}, 
      	function(){
      
      	});
      	
      	KeyboardJS.on('s', function(){
      		
				var xMove = speed*Math.cos(30*spinValue*Math.PI/180);
				var yMove = speed*Math.sin(30*spinValue*Math.PI/180);
      		
     			camera.position.x = camera.position.x - xMove;
				camera.position.y = camera.position.y - yMove;          		
      		
      		socket.emit('updateCharacterLocation', {x: camera.position.x, y: camera.position.y, z: camera.position.z });
      	}, 
      	function(){
     		
      	});
      	
      	KeyboardJS.on('w', function(){
      		
      		var xMove = speed*Math.cos(30*spinValue*Math.PI/180);
				var yMove = speed*Math.sin(30*spinValue*Math.PI/180);
      		
     			camera.position.x = camera.position.x + xMove;
				camera.position.y = camera.position.y + yMove;     			
     			
     			socket.emit('updateCharacterLocation', {x: camera.position.x, y: camera.position.y, z: camera.position.z });
      	}, 
      	function(){
     		
      	});
      	
      	KeyboardJS.on('d', function(){

				spinValue = spinValue-1;		
		
				var xLook = 300*Math.cos(30*spinValue*Math.PI/180)+100;
				var yLook = 300*Math.sin(30*spinValue*Math.PI/180)+100;					
				
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
	
			function render(){
				renderer.render(scene, camera);	
			}
			
			function createMap(bitboard, z){
			
				var boardWidth = 5;
				var boardHeight = 5;			
				
				for(var i=0; i<boardHeight; i++){
					
					for(var j=0; j<boardWidth; j++){
					
						if(bitboard[i*boardWidth+j]){

							createNewCube(i, j, z);						
							
						}					
						
					}					
					
				}	
				
			}
			
			function createNewCube(i, j, z){
				
		var cubeSize = 200;
			
    	 var newCube = new THREE.Mesh(new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize), 
    	// new THREE.MeshLambertMaterial({
   //	     color: '#' + currentColorCode
   //	   }));
   		wood_floor);
   	   
      newCube.position.x = i*cubeSize;
      newCube.position.y = j*cubeSize;
      newCube.position.z = z*cubeSize;
      newCube.overdraw = true;
      
      scene.add(newCube);
				
			}
			

			