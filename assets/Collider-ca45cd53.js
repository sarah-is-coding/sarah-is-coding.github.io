import{_ as a}from"./index-e7819eac.js";import{P as b}from"./ParticlesInteractorBase-7b2895e9.js";import{E as m}from"./Utils-eafc054a.js";async function f(s,o,n,e){switch(s.options.collisions.mode){case"absorb":{const{absorb:t}=await a(()=>import("./Absorb-b21dfc06.js"),["assets/Absorb-b21dfc06.js","assets/Utils-eafc054a.js"]);t(s,o,n,e);break}case"bounce":{const{bounce:t}=await a(()=>import("./Bounce-26a9403c.js"),["assets/Bounce-26a9403c.js","assets/Utils-eafc054a.js"]);t(s,o);break}case"destroy":{const{destroy:t}=await a(()=>import("./Destroy-8ad1fe02.js"),["assets/Destroy-8ad1fe02.js","assets/Bounce-26a9403c.js","assets/Utils-eafc054a.js"]);t(s,o);break}}}const p=2;class g extends b{constructor(o){super(o)}clear(){}init(){}async interact(o,n){if(o.destroyed||o.spawning)return;const e=this.container,t=o.getPosition(),r=o.getRadius(),l=e.particles.quadTree.queryCircle(t,r*p);for(const i of l){if(o===i||!i.options.collisions.enable||o.options.collisions.mode!==i.options.collisions.mode||i.destroyed||i.spawning)continue;const c=i.getPosition(),d=i.getRadius();if(Math.abs(Math.round(t.z)-Math.round(c.z))>r+d)continue;const u=m(t,c),_=r+d;u>_||await f(o,i,n,e.retina.pixelRatio)}}isEnabled(o){return o.options.collisions.enable}reset(){}}export{g as Collider};
