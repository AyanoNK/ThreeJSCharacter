import {OrbitControls} from "../threejs/OrbitControls.js";

//globals
var scene;
var camera;
var renderer;
var controls;

//colors
var red = 0xFD0001;
var brown = 0x814E19;
var yellow = 0xFBC33B;


/*BEGINNING OF PAGE CONFIG*/
function init() {
    //create scene
    scene = new THREE.Scene();
    //create camera
    createCamera();
    //create renderer
    renderer = new THREE.WebGLRenderer({
        antialias: true
    });
    //set renderer size
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    
    scene.background = new THREE.Color(0x353839);
    //scene.background = new THREE.Color(0xFFFFFF);
    controls = new OrbitControls(camera, renderer.domElement);

}

function createCamera() {
    camera = new THREE.PerspectiveCamera(
        90, //fov
        window.innerWidth / window.innerHeight, //aspect
        0.1, //near
        2000 //far
    );
    
    camera.position.set(0,0,60);
    
   
    camera.translateZ(50);
}

function renderLoop() {
    requestAnimationFrame(renderLoop);
    renderer.render(scene, camera);
    controls.update();
}

/*END OF PAGE CONFIG*/
function addCube(xaxis,yaxis, materialcolor){
    
    var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    
    //to show edges
    var edges = new THREE.EdgesGeometry( geometry );
    var line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial({
        color: 0x000000
    }));
    line.name = "Cube Edges";
    

    var material = new THREE.MeshBasicMaterial({
        color: materialcolor
    });

    var cube = new THREE.Mesh(geometry, material );
    
    
    cube.position.x+=xaxis
    cube.position.y+=yaxis

    line.position.x+=xaxis
    line.position.y+=yaxis


    if (materialcolor == red){
        cube.name = "Red Cube";
    }

    else if (materialcolor == yellow){
        cube.name = "Yellow Cube";
    }
    
    else if (materialcolor == brown){
        cube.name = "Brown Cube";
    } else {
        cube.name = "Cube";
    }
    scene.add( line );
    scene.add( cube );
}

function addLight () {
    var light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.setScalar(10);
    scene.add(light);
}

function addPlane () {
    var geometry = new THREE.PlaneGeometry( 150, 106, 1, 1 );
    

    
    //create texture
    var texture = new THREE.TextureLoader().load('./img/background.jpg');

    var material = new THREE.MeshBasicMaterial({
        map: texture
    });
    var plane = new THREE.Mesh( geometry, material );
    plane.position.set(13, 42, -0.53);
    scene.add( plane );
}

function addBigSphere () {
    var geometry = new THREE.SphereGeometry( 4, 32, 32);
    var material = new THREE.MeshBasicMaterial( {color: 0xff0000} );
    var sphere = new THREE.Mesh( geometry, material );
    sphere.position.set(32, 40, 5);
    sphere.scale.set(1, 0.7, 1);
    scene.add( sphere );
}

function addSmallSphere() {
    var geometry = new THREE.SphereGeometry( 2.4, 32, 32);
    var material = new THREE.MeshBasicMaterial( {color: 0xdbc377} );
    var sphere = new THREE.Mesh( geometry, material );
    sphere.position.set(32, 38, 5);
    sphere.scale.set(1, 1, 1);
    scene.add( sphere );
}

init();

//Mario by cubes

//first line
addCube(-2,16, red);
addCube(-1,16, red);
addCube(0,16, red);
addCube(1,16, red);
addCube(2,16, red);

//second line
addCube(-3,15, red);
addCube(-2,15, red);
addCube(-1,15, red);
addCube(0,15, red);
addCube(1,15, red);
addCube(2,15, red);
addCube(3,15, red);
addCube(4,15, red);
addCube(5,15, red);

//third line
addCube(-3,14, brown);
addCube(-2,14, brown);
addCube(-1,14, brown);
addCube(0,14, yellow);
addCube(1,14, yellow);
addCube(2,14, brown);
addCube(3,14, yellow);

//fourth line
addCube(-4,13, brown);
addCube(-3,13, yellow);
addCube(-2,13, brown);
addCube(-1,13, yellow);
addCube(0,13, yellow);
addCube(1,13, yellow);
addCube(2,13, brown);
addCube(3,13, yellow);
addCube(4,13, yellow);
addCube(5,13, yellow);

//fifth line ─ nose
addCube(-4,12, brown);
addCube(-3,12, yellow);
addCube(-2,12, brown);
addCube(-1,12, brown);
addCube(0,12, yellow);
addCube(1,12, yellow);
addCube(2,12, yellow);
addCube(3,12, brown);
addCube(4,12, yellow);
addCube(5,12, yellow);
addCube(6,12, yellow);

//sixth line
addCube(-4,11, brown);
addCube(-3,11, brown);
addCube(-2,11, yellow);
addCube(-1,11, yellow);
addCube(0,11, yellow);
addCube(1,11, yellow);
addCube(2,11, brown);
addCube(3,11, brown);
addCube(4,11, brown);
addCube(5,11, brown);

//seventh line ─ yellow line
addCube(4,10, yellow);
addCube(3,10, yellow);
addCube(2,10, yellow);
addCube(1,10, yellow);
addCube(0,10, yellow);
addCube(-1,10, yellow);
addCube(-2,10, yellow);

//eighth line
addCube(-3,9, brown);
addCube(-2,9, brown);
addCube(-1,9, red);
addCube(0,9, brown);
addCube(1,9, brown);
addCube(2,9, brown);

//ninth line
addCube(-4,8, brown);
addCube(-3,8, brown);
addCube(-2,8, brown);
addCube(-1,8, red);
addCube(0,8, brown);
addCube(1,8, brown);
addCube(2,8, red);
addCube(3,8, brown);
addCube(4,8, brown);
addCube(5,8, brown);

//tenth line
addCube(-5,7, brown);
addCube(-4,7, brown);
addCube(-3,7, brown);
addCube(-2,7, brown);
addCube(-1,7, red);
addCube(0,7, red);
addCube(1,7, red);
addCube(2,7, red);
addCube(3,7, brown);
addCube(4,7, brown);
addCube(5,7, brown);
addCube(6,7, brown);

//eleventh line
addCube(-5,6, yellow);
addCube(-4,6, yellow);
addCube(-3,6, brown);
addCube(-2,6, red);
addCube(-1,6, yellow);
addCube(0,6, red);
addCube(1,6, red);
addCube(2,6, yellow);
addCube(3,6, red);
addCube(4,6, brown);
addCube(5,6, yellow);
addCube(6,6, yellow);

//twelfth line
addCube(-5,5, yellow);
addCube(-4,5, yellow);
addCube(-3,5, yellow);
addCube(-2,5, red);
addCube(-1,5, red);
addCube(0,5, red);
addCube(1,5, red);
addCube(2,5, red);
addCube(3,5, red);
addCube(4,5, yellow);
addCube(5,5, yellow);
addCube(6,5, yellow);

//thirteenth line
addCube(-5,4, yellow);
addCube(-4,4, yellow);
addCube(-3,4, red);
addCube(-2,4, red);
addCube(-1,4, red);
addCube(0,4, red);
addCube(1,4, red);
addCube(2,4, red);
addCube(3,4, red);
addCube(4,4, red);
addCube(5,4, yellow);
addCube(6,4, yellow);

//fourteenth line
addCube(-3,3, red);
addCube(-2,3, red);
addCube(-1,3, red);
addCube(2,3, red);
addCube(3,3, red);
addCube(4,3, red);

//fiftteenth line
addCube(-4,2, brown);
addCube(-3,2, brown);
addCube(-2,2, brown);
addCube(3,2, brown);
addCube(4,2, brown);
addCube(5,2, brown);

//sixteenth line
addCube(-5,1, brown);
addCube(-4,1, brown);
addCube(-3,1, brown);
addCube(-2,1, brown);
addCube(3,1, brown);
addCube(4,1, brown);
addCube(5,1, brown);
addCube(6,1, brown);

addPlane();
addBigSphere();
addSmallSphere();
renderLoop();