import{_ as e}from"./index-e7819eac.js";import{O as s}from"./OptionsColor-6893f21d.js";import"./Utils-eafc054a.js";class r{constructor(){this.blink=!1,this.consent=!1,this.opacity=1}load(i){i&&(i.blink!==void 0&&(this.blink=i.blink),i.color!==void 0&&(this.color=s.create(this.color,i.color)),i.consent!==void 0&&(this.consent=i.consent),i.opacity!==void 0&&(this.opacity=i.opacity))}}class a{constructor(){this.distance=100,this.links=new r}load(i){i&&(i.distance!==void 0&&(this.distance=i.distance),this.links.load(i.links))}}async function u(n,i=!0){await n.addInteractor("externalGrab",async o=>{const{Grabber:t}=await e(()=>import("./Grabber-1094b647.js"),["assets/Grabber-1094b647.js","assets/CanvasUtils-4ebe1c7d.js","assets/ColorUtils-22ba7e62.js","assets/Utils-eafc054a.js","assets/ExternalInteractorBase-029fb1b6.js","assets/index-e7819eac.js","assets/index-d9442383.css","assets/OptionsColor-6893f21d.js"]);return new t(o)},i)}export{a as Grab,r as GrabLinks,u as loadExternalGrabInteraction};
