import{_ as o}from"./index-1486a9a7.js";import{s as r}from"./Utils-eafc054a.js";class u{constructor(){this.quantity=2}load(t){if(!t)return;const e=t.quantity;e!==void 0&&(this.quantity=r(e))}}async function c(n,t=!0){await n.addInteractor("externalRemove",async e=>{const{Remover:a}=await o(()=>import("./Remover-b94ed58f.js"),["assets/Remover-b94ed58f.js","assets/ExternalInteractorBase-029fb1b6.js","assets/Utils-eafc054a.js","assets/index-1486a9a7.js","assets/index-d9442383.css"]);return new a(e)},t)}export{u as Remove,c as loadExternalRemoveInteraction};
