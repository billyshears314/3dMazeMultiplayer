	   var texture = THREE.ImageUtils.loadTexture( "images/wood_floor.jpg" );
       texture.wrapS = THREE.RepeatWrapping; 
       texture.wrapT = THREE.RepeatWrapping; 
       texture.repeat.set( 1, 1 );
       
       var wood_floor = new THREE.MeshLambertMaterial({
       	map: texture
       });	
       
       texture = THREE.ImageUtils.loadTexture( "images/stone_wall.jpg" );
       texture.wrapS = THREE.RepeatWrapping; 
       texture.wrapT = THREE.RepeatWrapping; 
       texture.repeat.set( 1, 1 );
       
       var stone_wall = new THREE.MeshLambertMaterial({
       	map: texture
       });	
       
      var dynamicTexture = new THREEx.DynamicTexture(300, 300);
		dynamicTexture.context.font	= "bolder 15px Verdana";
		dynamicTexture.drawText('Good Morning!', 10, 40, 'red');

      
      var writing_texture = new THREE.MeshBasicMaterial({
    		map : dynamicTexture.texture
		})