import{_ as n}from"./index-e7819eac.js";async function e(a,o=!0){const{PolygonDrawer:t}=await n(()=>import("./PolygonDrawer-9d5ee047.js"),["assets/PolygonDrawer-9d5ee047.js","assets/PolygonDrawerBase-0e85a61f.js","assets/index-e7819eac.js","assets/index-d9442383.css","assets/Utils-eafc054a.js"]);await a.addShape("polygon",new t,o)}async function i(a,o=!0){const{TriangleDrawer:t}=await n(()=>import("./TriangleDrawer-5cacee06.js"),["assets/TriangleDrawer-5cacee06.js","assets/PolygonDrawerBase-0e85a61f.js","assets/index-e7819eac.js","assets/index-d9442383.css","assets/Utils-eafc054a.js"]);await a.addShape("triangle",new t,o)}async function _(a,o=!0){await e(a,o),await i(a,o)}export{e as loadGenericPolygonShape,_ as loadPolygonShape,i as loadTriangleShape};
