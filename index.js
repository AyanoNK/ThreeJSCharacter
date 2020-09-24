import {OrbitControls} from "../threejs/OrbitControls.js";

//globals
var scene;
var camera;
var renderer;
var controls;


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
        100 //far
    );
    camera.position.z = 10;
}

function renderLoop() {
    requestAnimationFrame(renderLoop);
    renderer.render(scene, camera);
    controls.update();
}

/*END OF PAGE CONFIG*/


//create lightpoint
function createLightPoint(){
    var lightPoint = new THREE.DirectionalLight(0x404040, 10);
    lightPoint.name = "DirectionalLight";
    lightPoint.position.y += 30;
    scene.add(lightPoint);
    
}


function addCube(){
    var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    var material = new THREE.MeshPhongMaterial({
        color: 0xFFFFFF
    });
    var cube = new THREE.Mesh( geometry, material );
    cube.name = "cubo";
    scene.add( cube );
}

function addTorus() {
    var geometry = new THREE.TorusGeometry( 1, 0.2, 160, 500, 6);
    var material = new THREE.MeshPhongMaterial({
        color: 0xffff00
    });
    var torus = new THREE.Mesh( geometry, material );
    scene.add( torus );
    torus.rotation.x += 3;
    torus.position.x += 3;
    torus.position.y +=1;
    torus.position.z +=1;
}

function addCilinder() {
    var geometry = new THREE.CylinderGeometry( 1, 1, 2, 32, 32 );
    var material = new THREE.MeshPhongMaterial({
        color: 0xff3f32
    });
    var cylinder = new THREE.Mesh( geometry, material );
    scene.add( cylinder );
    cylinder.position.x-=3;
}

function addCone() {
    var geometry = new THREE.ConeGeometry( 1, 1, 32 );
    var material = new THREE.MeshPhongMaterial( {color: 0x00ff00} );
    var cone = new THREE.Mesh( geometry, material );
    scene.add( cone );
    cone.position.y -= 3
}

//inits
init();
createLightPoint();
addCube();
addTorus();
addCilinder();
renderLoop();
addCone();