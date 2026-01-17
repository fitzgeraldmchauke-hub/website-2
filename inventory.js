function InventorySystem(){
  const backpack = [];
  window.Inventory = {
    addItem: (name) => { backpack.push(name); console.log("Added:", name); },
    removeItem: (name) => {
      const i = backpack.indexOf(name);
      if(i > -1){ backpack.splice(i, 1); console.log("Removed:", name); }
    },
    listItems: () => { console.log("Backpack:", backpack); }
  }
}
