import{_ as e}from"./index-e7819eac.js";class a{constructor(){this.factor=3,this.radius=200}load(r){r&&(r.factor!==void 0&&(this.factor=r.factor),r.radius!==void 0&&(this.radius=r.radius))}}async function s(t,r=!0){await t.addInteractor("externalSlow",async o=>{const{Slower:i}=await e(()=>import("./Slower-2fa0bb5a.js"),["assets/Slower-2fa0bb5a.js","assets/ExternalInteractorBase-029fb1b6.js","assets/Utils-eafc054a.js","assets/index-e7819eac.js","assets/index-d9442383.css"]);return new i(o)},r)}export{a as Slow,s as loadExternalSlowInteraction};
