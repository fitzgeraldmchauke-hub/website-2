function NPCSystem(scene){
  const npcs=[];
  for(let i=0;i<5;i++){
    const npc = BABYLON.MeshBuilder.CreateBox("npc",{size:1},scene);
    npc.position.set(Math.random()*20-10,0.5,Math.random()*20-10);
    npc.speed = 0.02;
    npc.dir = Math.random()*Math.PI*2;
    npcs.push(npc);
  }

  scene.onBeforeRenderObservable.add(()=>{
    npcs.forEach(n=>{
      n.position.x += Math.cos(n.dir)*n.speed;
      n.position.z += Math.sin(n.dir)*n.speed;
      if(Math.random()<0.01) n.dir = Math.random()*Math.PI*2;
    });
  });
}
