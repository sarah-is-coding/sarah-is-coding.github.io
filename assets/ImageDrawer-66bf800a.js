import{_ as f}from"./index-e7819eac.js";import{z as c}from"./Utils-eafc054a.js";const p=2,_=1,u=12,w=1;class y{constructor(o){this.loadImageShape=async e=>{if(!this._engine.loadImage)throw new Error(`${c} image shape not initialized`);await this._engine.loadImage({gif:e.gif,name:e.name,replaceColor:e.replaceColor??!1,src:e.src})},this._engine=o}addImage(o){this._engine.images||(this._engine.images=[]),this._engine.images.push(o)}async draw(o){const{context:e,radius:s,particle:i,opacity:n}=o,a=i.image,r=a==null?void 0:a.element;if(a){if(e.globalAlpha=n,a.gif&&a.gifData){const{drawGif:t}=await f(()=>import("./Utils-26ae727c.js"),["assets/Utils-26ae727c.js","assets/index-e7819eac.js","assets/index-d9442383.css"]);t(o)}else if(r){const t=a.ratio,g={x:-s,y:-s},l=s*p;e.drawImage(r,g.x,g.y,l,l/t)}e.globalAlpha=_}}getSidesCount(){return u}async init(o){const e=o.actualOptions;if(!(!e.preload||!this._engine.loadImage))for(const s of e.preload)await this._engine.loadImage(s)}async loadShape(o){if(o.shape!=="image"&&o.shape!=="images")return;this._engine.images||(this._engine.images=[]);const e=o.shapeData;if(!e)return;this._engine.images.find(i=>i.name===e.name||i.source===e.src)||(await this.loadImageShape(e),await this.loadShape(o))}async particleInit(o,e){if(e.shape!=="image"&&e.shape!=="images")return;this._engine.images||(this._engine.images=[]);const s=this._engine.images,i=e.shapeData;if(!i)return;const n=e.getFillColor(),a=s.find(m=>m.name===i.name||m.source===i.src);if(!a)return;const r=i.replaceColor??a.replaceColor;if(a.loading){setTimeout(()=>{this.particleInit(o,e)});return}let t;if(a.svgData&&n){const{replaceImageColor:m}=await f(()=>import("./index-e08202bb.js").then(d=>d.U),["assets/index-e08202bb.js","assets/index-e7819eac.js","assets/index-d9442383.css","assets/Utils-eafc054a.js","assets/ColorUtils-22ba7e62.js"]);t=await m(a,i,n,e)}else t={color:n,data:a,element:a.element,gif:a.gif,gifData:a.gifData,gifLoopCount:a.gifLoopCount,loaded:!0,ratio:i.width&&i.height?i.width/i.height:a.ratio??w,replaceColor:r,source:i.src};t.ratio||(t.ratio=1);const g=i.fill??e.shapeFill,l=i.close??e.shapeClose,h={image:t,fill:g,close:l};e.image=h.image,e.shapeFill=h.fill,e.shapeClose=h.close}}export{y as ImageDrawer};
