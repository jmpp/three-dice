'use strict';

// Create the scene
var scene = new THREE.Scene();

// Create the camera and configure it
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 5;

// Create the WebGL renderer
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

/************/

function makeDice(nx, ny, nz, px, py, pz) {
    // Load the 6 dice textures
    var textureLoader = new THREE.TextureLoader();
    
    var diceMaterials = [
        new THREE.MeshBasicMaterial({ map: textureLoader.load( 'textures/dice/nx.png' ) }),
        new THREE.MeshBasicMaterial({ map: textureLoader.load( 'textures/dice/ny.png' ) }),
        new THREE.MeshBasicMaterial({ map: textureLoader.load( 'textures/dice/nz.png' ) }),
        new THREE.MeshBasicMaterial({ map: textureLoader.load( 'textures/dice/px.png' ) }),
        new THREE.MeshBasicMaterial({ map: textureLoader.load( 'textures/dice/py.png' ) }),
        new THREE.MeshBasicMaterial({ map: textureLoader.load( 'textures/dice/pz.png' ) })
    ];
    
    // Add the dice geometry and its 6 materials for each face
    var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    var dice = new THREE.Mesh( geometry, diceMaterials );

    return dice;
}

var dice1 = makeDice();
var dice2 = makeDice();

// Set dices positions
dice1.position.x = -3;
dice2.position.x = 3;

// Add the dice to the Three scene
scene.add( dice1 );
scene.add( dice2 );

// Rendering the scene
function animate() {
    requestAnimationFrame( animate );
    
    // Animating the two dices
    dice1.rotation.x += 0.01;
    dice1.rotation.y += 0.01;

    dice2.rotation.x += 0.01;
    dice2.rotation.y += 0.01;

	renderer.render( scene, camera );
}

// Run!
animate();
