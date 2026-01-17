function VRSystem(scene){
  const xrHelper = scene.createDefaultXRExperienceAsync({floorMeshes:scene.meshes});
  xrHelper.then(helper=>console.log("VR ready"));
}