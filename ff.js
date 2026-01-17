function PlayerSystem(scene){
  const camera = new BABYLON.UniversalCamera("playerCam", new BABYLON.Vector3(0,5,-10), scene);
  camera.attachControl(canvas, true);
  camera.applyGravity = true;
  camera.checkCollisions = true;
  camera.ellipsoid = new BABYLON.Vector3(1,1,1);


  const speed = 0.5;
  const flySpeed = 0.7;
  const jumpHeight = 0.8;


  window.addEventListener("keydown", e=>{
    if(e.key===" " && camera.isGrounded) camera.cameraDirection.y += jumpHeight;
  });


  scene.onBeforeRenderObservable.add(()=>{
    let dir = new BABYLON.Vector3(0,0,0);
    if(keyIsDown("w")) dir.z += 1;
    if(keyIsDown("s")) dir.z -=1;
    if(keyIsDown("a")) dir.x -=1;
    if(keyIsDown("d")) dir.x +=1;
    if(keyIsDown("Shift")) dir.y += flySpeed;
    dir = dir.normalize().scale(speed);
    camera.position.addInPlace(dir);
  });
}


const keysDown = {};
window.addEventListener("keydown", e=>keysDown[e.key.toLowerCase()]=true);
window.addEventListener("keyup", e=>keysDown[e.key.toLowerCase()]=false);
function keyIsDown(k){ return keysDown[k.toLowerCase()]||false; }