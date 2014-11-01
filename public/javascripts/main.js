		//movement speed
		var speed = 30;
				
		//turn value
		var spinValue = 8;
		var cubeSize = 300;
		
		//degree of each spin integer		
		var degreeOfRotation = 22.5;

		//Starting Location of player
		var xStartingLocation = 10;
		var yStartingLocation = 8;
		
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
      camera.position.set(100+cubeSize*xStartingLocation, 100+cubeSize*yStartingLocation,275);
      
		var xLook = 300*Math.cos(degreeOfRotation*spinValue*Math.PI/180)+camera.position.x;
		var yLook = 300*Math.sin(degreeOfRotation*spinValue*Math.PI/180)+camera.position.y;		       
      
	   camera.up = new THREE.Vector3(0,0,1);
	   camera.lookAt(new THREE.Vector3(xLook, yLook, 210));
 
      // scene
      var scene = new THREE.Scene();       	
		
      // add subtle blue ambient lighting
      var ambientLight = new THREE.AmbientLight(0x000044);
      scene.add(ambientLight);
      
      // directional lighting
      var directionalLight = new THREE.DirectionalLight(0xffffff);
      directionalLight.position.set(300, 300, 400).normalize();
      scene.add(directionalLight);
 
		var light = new THREE.AmbientLight( 0x606060 ); // soft white light 
		scene.add( light ); 
 
      // start animation
      animate();     	

			