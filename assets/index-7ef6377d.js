import{_ as e}from"./index-9be566e2.js";async function i(r,o=!0){await r.addParticleUpdater("strokeColor",async t=>{const{StrokeColorUpdater:a}=await e(()=>import("./StrokeColorUpdater-68a553ed.js"),["assets/StrokeColorUpdater-68a553ed.js","assets/ColorUtils-22ba7e62.js","assets/Utils-eafc054a.js"]);return new a(t)},o)}export{i as loadStrokeColorUpdater};