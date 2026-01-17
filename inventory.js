function InventorySystem(scene){
  const backpack = [];

  window.addItem = (name)=>{ backpack.push(name); console.log("Added:",name); }
  window.removeItem = (name)=>{
    const i = backpack.indexOf(name);
    if(i>-1){ backpack.splice(i,1); console.log("Removed:",name); }
  }
  window.listItems = ()=>{ console.log("Backpack:",backpack); }
}
