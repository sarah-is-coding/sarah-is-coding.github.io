import{_ as r}from"./index-e7819eac.js";import{e as o}from"./Utils-eafc054a.js";class t{constructor(){this.distance=200,this.duration=.4,this.factor=100,this.speed=1,this.maxSpeed=50,this.easing="ease-out-quad"}load(e){e&&(e.distance!==void 0&&(this.distance=e.distance),e.duration!==void 0&&(this.duration=e.duration),e.easing!==void 0&&(this.easing=e.easing),e.factor!==void 0&&(this.factor=e.factor),e.speed!==void 0&&(this.speed=e.speed),e.maxSpeed!==void 0&&(this.maxSpeed=e.maxSpeed))}}class u extends t{constructor(){super(),this.selectors=[]}load(e){super.load(e),e&&e.selectors!==void 0&&(this.selectors=e.selectors)}}class l extends t{load(e){super.load(e),e&&(this.divs=o(e.divs,n=>{const i=new u;return i.load(n),i}))}}async function f(s,e=!0){await s.addInteractor("externalRepulse",async n=>{const{Repulser:i}=await r(()=>import("./Repulser-92de689f.js"),["assets/Repulser-92de689f.js","assets/Utils-eafc054a.js","assets/ExternalInteractorBase-029fb1b6.js","assets/Circle-5dff518c.js","assets/index-e7819eac.js","assets/index-d9442383.css"]);return new i(s,n)},e)}export{l as Repulse,t as RepulseBase,u as RepulseDiv,f as loadExternalRepulseInteraction};
