function VehicleSystem(scene){
  const vehicle = BABYLON.MeshBuilder.CreateBox("car",{size:1.5},scene);
  vehicle.position.set(0,1,5);


  scene.onBeforeRenderObservable.add(()=>{
    let dir=0;
    if(keyIsDown("ArrowUp")) dir+=0.1;
    if(keyIsDown("ArrowDown")) dir-=0.1;
    vehicle.position.z += dir;
    if(keyIsDown("ArrowLeft")) vehicle.position.x -=0.1;
    if(keyIsDown("ArrowRight")) vehicle.position.x +=0.1;
  });
}