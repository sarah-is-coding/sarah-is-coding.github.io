import{_ as r}from"./index-68bffc97.js";async function o(t,a=!0){await t.addParticleUpdater("size",async()=>{const{SizeUpdater:e}=await r(()=>import("./SizeUpdater-f90c3ed7.js"),["assets/SizeUpdater-f90c3ed7.js","assets/Utils-eafc054a.js"]);return new e},a)}export{o as loadSizeUpdater};