import{_ as r}from"./index-e7819eac.js";import{s}from"./Utils-eafc054a.js";class a{constructor(){this.default=!0,this.groups=[],this.quantity=4}load(t){if(!t)return;t.default!==void 0&&(this.default=t.default),t.groups!==void 0&&(this.groups=t.groups.map(u=>u)),this.groups.length||(this.default=!0);const e=t.quantity;e!==void 0&&(this.quantity=s(e))}}async function f(i,t=!0){await i.addInteractor("externalPush",async e=>{const{Pusher:u}=await r(()=>import("./Pusher-71836143.js"),["assets/Pusher-71836143.js","assets/ExternalInteractorBase-029fb1b6.js","assets/Utils-eafc054a.js","assets/index-e7819eac.js","assets/index-d9442383.css"]);return new u(e)},t)}export{a as Push,f as loadExternalPushInteraction};
