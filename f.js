function BlockSystem(scene){
  const blockSize = 1;
  const blocks = [];


  // simple grid
  for(let x=-10;x<=10;x++){
    for(let z=-10;z<=10;z++){
      const block = BABYLON.MeshBuilder.CreateBox("block",{size:blockSize},scene);
      block.position.set(x,0.5,z);
      block.checkCollisions = true;
      blocks.push(block);
    }
  }


  // place/remove blocks with mouse
  scene.onPointerObservable.add((pointerInfo)=>{
    if(pointerInfo.type===BABYLON.PointerEventTypes.POINTERDOWN){
      const pick = scene.pick(scene.pointerX, scene.pointerY);
      if(pick.hit){
        if(pointerInfo.event.button===0){ // left click = place
          const b = BABYLON.MeshBuilder.CreateBox("block",{size:blockSize},scene);
          b.position = pick.pickedPoint.add(pick.getNormal(true).scale(blockSize/2));
          b.checkCollisions=true;
          blocks.push(b);
        }
        if(pointerInfo.event.button===2){ // right click = remove
          if(pick.pickedMesh.name==="block") pick.pickedMesh.dispose();
        }
      }
    }
  });
}