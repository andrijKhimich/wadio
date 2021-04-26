let container, camera, renderer, scene, phone;

function init() {
  // create GUI Setings
  const gui = new dat.GUI();

  // create scene
  container = document.querySelector('.scene');
  scene = new THREE.Scene();

  // camera
  // camera arguments
  const fov = 35;
  const aspect = container.clientWidth / container.clientHeight;
  const near = 1;
  const far = 20000;

  // create camera
  camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

  //camera position
  // camera.position.set(0, 0, 2500);
  // camera.position.x = 100;
  // camera.position.y = 100;
  // camera.position.z = 2500;

  // camera gui settings
  let cameraController = new function () {
    this.positionX = 0;
    this.positionY = 0;
    this.positionZ = 650;
  }();

  let view = gui.addFolder('Camera');
  view.add(cameraController, 'positionX', 0, 100, 1).onChange(function () {
    camera.position.x = (cameraController.positionX);
  });
  view.add(cameraController, 'positionY', 0, 100, 1).onChange(function () {
    camera.position.y = (cameraController.positionY);
  });
  view.add(cameraController, 'positionZ', 0, 2500, 10).onChange(function () {
    camera.position.z = (cameraController.positionZ);
  });



  // light
  const ambientLight = new THREE.AmbientLight(0xffffff, 1);
  scene.add(ambientLight);

  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(10, 10, 1);
  scene.add(light);

  // renderer
  renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true
  });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  container.appendChild(renderer.domElement);



  // model
  let loader = new THREE.GLTFLoader();

  // load model
  loader.load('../3d/phone/scene.gltf', function (gltf) {
    scene.add(gltf.scene);
    phone = gltf.scene.children[0];
    // phone.position.set(200, 600, 0);
    // phone.position.x = 200;
    // phone.position.y = 600;
    // phone.position.z = 0;
    animate();
  });

  // phone gui settings
  var phoneController = new function () {
    this.positionX = 0;
    this.positionY = 0;
    // this.positionZ = 0;

    // this.scaleX = 1;
    // this.scaleY = 1;
    // this.scaleZ = 1;

    // this.rotationX = 0;
    // this.rotationY = 90;
    this.rotationZ = 0;
    // this.boxColor = color;
    // this.castShadow = true;
    this.phoneOpacity = 1;
  }();

  // phone dat gui
  let phone = gui.addFolder('Phone');
  phone.add(phoneController, 'positionX', 0, 200).onChange(function () {
    phone.position.x = (phoneController.positionX);
  });
  phone.add(phoneController, 'positionY', 0, 600).onChange(function () {
    phone.position.y = (phoneController.positionY);
  });
  // phone.add(phoneController, 'positionZ', 0, 200).onChange(function () {
  //   phone.position.z = (phoneController.positionZ);
  // });
  // phone.add(phoneController, 'rotationX', -100, 100, 1).onChange(function () {
  //   phone.rotation.x = (phoneController.rotationX);
  // });
  // phone.add(phoneController, 'rotationY', -100, 100, 1).onChange(function () {
  //   phone.rotation.y = (phoneController.rotationY);
  // });
  phone.add(phoneController, 'rotationZ', -6.4, 6.4, 0.2).onChange(function () {
    phone.rotation.z = (phoneController.rotationZ);
  });
  phone.add(phoneController, 'phoneOpacity', 0, 1, 0.1).onChange(function () {
    phone.opacity = (phoneController.phoneOpacity);
  });
}

function animate() {
  requestAnimationFrame(animate);
  // phone.rotation.z += 0.005;
  renderer.render(scene, camera);
}

init();

function onWindowResize() {
  camera.aspect = container.clientWidth / container.clientHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(container.clientWidth, container.clientHeight);
}

window.addEventListener("resize", onWindowResize);

let scrollPos = 0;

function scrollDetect() {
  // detects new state and compares it with the new one
  if ((document.body.getBoundingClientRect()).top > scrollPos)
    console.log('UP');
  else {
    console.log('DOWN')
    scrollPos = (document.body.getBoundingClientRect()).top;
  }
}


// adding scroll event
window.addEventListener('scroll', function () {
  scrollDetect();
});