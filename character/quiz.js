import { OrbitControls } from "../threejs/OrbitControls.js";

//globals
var scene;
var camera;
var renderer;
var controls;

//colors
var red = 0xfd0001;
var brown = 0x814e19;
var yellow = 0xfbc33b;
var stats = initStats();
var cube;

var controls = new (function () {
  this.scale = 0.02;
})();

var gui = new dat.GUI();
gui.add(controls, "scale", 0, 5);

/*BEGINNING OF PAGE CONFIG*/
function init() {
  //create scene
  scene = new THREE.Scene();
  //create camera
  createCamera();
  //create renderer
  renderer = new THREE.WebGLRenderer({
    antialias: true,
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

  camera.position.set(0, 50, 60);

  camera.translateZ(50);
}

function renderLoop() {
  requestAnimationFrame(renderLoop);
  renderer.render(scene, camera);
  controls.update();
}

/*END OF PAGE CONFIG*/
function addCube(xaxis, zaxis, height, materialcolor) {
  var geometry = new THREE.BoxGeometry(6, 30, 6);

  //to show edges
  var material = new THREE.MeshBasicMaterial({
    color: materialcolor,
  });

  cube = new THREE.Mesh(geometry, material);

  cube.position.x += xaxis;
  cube.position.z += zaxis;

  cube.scale.y += height;

  if (materialcolor == red) {
    cube.name = "Red Cube";
  } else if (materialcolor == yellow) {
    cube.name = "Yellow Cube";
  } else if (materialcolor == brown) {
    cube.name = "Brown Cube";
  } else {
    cube.name = "Cube";
  }
  scene.add(cube);
}

function addPlane() {
  var geometry = new THREE.PlaneGeometry(150, 106, 1, 1);

  var material = new THREE.MeshBasicMaterial({
    color: "#fff",
  });
  var plane = new THREE.Mesh(geometry, material);
  plane.position.y -= 15;
  plane.rotation.x = 17.3;
  scene.add(plane);
}

//create lightpoint
function createLightPoint() {
  var lightPoint = new THREE.DirectionalLight(0x404040, 10);
  lightPoint.name = "DirectionalLight";
  lightPoint.position.y += 30;
  scene.add(lightPoint);
}

function initStats() {
  stats = new Stats();

  stats.setMode(0); // 0: fps, 1: ms

  // Align top-left
  stats.domElement.style.position = "absolute";
  stats.domElement.style.left = "0px";
  stats.domElement.style.top = "0px";

  document.getElementById("Stats-output").appendChild(stats.domElement);

  return stats;
}
function animate(time) {
  cube.scale.y = controls.scale;
  stats.update();
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

init();

//Mario by cubes

//first line
addCube(-2, 16, 3, red);
addCube(-2, 16, 1, red);
addCube(10, 16, 1, red);
addCube(17, 1, 0, red);
addCube(20, 40, 0, yellow);
addCube(40, 40, 0, yellow);
addCube(50, 50, 1, brown);
addCube(0, -50, 1, brown);
addCube(-50, 0, 1, brown);
addCube(0, 0, 1, brown);
addCube(-50, -50, 3, brown);
addCube(-20, -20, 3, yellow);

createLightPoint();

addPlane();
requestAnimationFrame(animate);
renderLoop();
