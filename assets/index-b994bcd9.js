import{_ as r}from"./index-e7819eac.js";import{d as s}from"./Utils-eafc054a.js";class l{constructor(){this.delay=1,this.pauseOnStop=!1,this.quantity=1}load(e){e&&(e.delay!==void 0&&(this.delay=e.delay),e.quantity!==void 0&&(this.quantity=e.quantity),e.particles!==void 0&&(this.particles=s({},e.particles)),e.pauseOnStop!==void 0&&(this.pauseOnStop=e.pauseOnStop))}}async function u(i,e=!0){await i.addInteractor("externalTrail",async t=>{const{TrailMaker:n}=await r(()=>import("./TrailMaker-4137a735.js"),["assets/TrailMaker-4137a735.js","assets/ExternalInteractorBase-029fb1b6.js","assets/Utils-eafc054a.js","assets/index-e7819eac.js","assets/index-d9442383.css"]);return new n(t)},e)}export{l as Trail,u as loadExternalTrailInteraction};
