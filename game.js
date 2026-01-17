const canvas = document.getElementById("game");
const engine = new BABYLON.Engine(canvas, true);


const createScene = () => {
  const scene = new BABYLON.Scene(engine);
  scene.gravity = new BABYLON.Vector3(0, -0.9, 0);
  scene.collisionsEnabled = true;


  const camera = new BABYLON.UniversalCamera(
    "playerCam",
    new BABYLON.Vector3(0, 5, -10),
    scene
  );
  camera.attachControl(canvas, true);
  camera.applyGravity = true;
  camera.checkCollisions = true;
  camera.ellipsoid = new BABYLON.Vector3(1, 1, 1);


  const light = new BABYLON.HemisphericLight(
    "light",
    new BABYLON.Vector3(0, 1, 0),
    scene
  );


  // Ground
  const ground = BABYLON.MeshBuilder.CreateGround(
    "ground",
    { width: 100, height: 100 },
    scene
  );
  ground.checkCollisions = true;


  // Blocks
  for (let x = -10; x <= 10; x++) {
    for (let z = -10; z <= 10; z++) {
      const block = BABYLON.MeshBuilder.CreateBox(
        "block",
        { size: 1 },
        scene
      );
      block.position.set(x, 0.5, z);
      block.checkCollisions = true;
    }
  }


  return scene;
};


const scene = createScene();


engine.runRenderLoop(() => {
  scene.render();
});


window.addEventListener("resize", () => {
  engine.resize();
});