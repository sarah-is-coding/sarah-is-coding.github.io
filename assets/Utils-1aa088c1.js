import{a as y}from"./Utils-eafc054a.js";const h=2,p=.5;function $(l){const{context:e,particle:t,radius:s,opacity:o}=l,n=t.shapeData;if(!n)return;const i=n.value;if(i===void 0)return;t.text===void 0&&(t.text=y(i,t.randomIndexData));const a=t.text,r=n.style??"",x=n.weight??"400",d=Math.round(s)*h,u=n.font??"Verdana",g=t.shapeFill,c=a==null?void 0:a.split(`
`);if(c){e.font=`${r} ${x} ${d}px "${u}"`,e.globalAlpha=o;for(let f=0;f<c.length;f++)m(e,c[f],s,o,f,g);e.globalAlpha=1}}function m(l,e,t,s,o,n){const i=e.length*t*p,a={x:-i,y:t*p},r=t*h;n?l.fillText(e,a.x,a.y+r*o):l.strokeText(e,a.x,a.y+r*o)}export{$ as drawText};
