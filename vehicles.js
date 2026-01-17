function VehicleSystem(scene){
  const vehicle = BABYLON.MeshBuilder.CreateBox("car",{size:1.5},scene);
  vehicle.position.set(0,1,5);
  vehicle.checkCollisions = true;

  scene.onBeforeRenderObservable.add(()=>{
    if(typeof keyIsDown !== "function") return; // safety
    let dir=0;
    if(keyIsDown("arrowup")) dir+=0.1;
    if(keyIsDown("arrowdown")) dir-=0.1;
    vehicle.position.z += dir;
    if(keyIsDown("arrowleft")) vehicle.position.x -=0.1;
    if(keyIsDown("arrowright")) vehicle.position.x +=0.1;
  });
}
