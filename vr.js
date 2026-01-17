function VRSystem(scene){
  scene.createDefaultXRExperienceAsync({floorMeshes:scene.meshes})
    .then(helper => console.log("VR ready"))
    .catch(err => console.warn("VR not supported:", err));
}
