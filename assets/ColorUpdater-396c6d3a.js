import{r as a,h as t,u as r}from"./ColorUtils-22ba7e62.js";import"./Utils-eafc054a.js";class m{constructor(n){this.container=n}async init(n){const e=a(n.options.color,n.id,n.options.reduceDuplicates);e&&(n.color=t(e,n.options.color.animation,this.container.retina.reduceFactor)),await Promise.resolve()}isEnabled(n){const{h:e,s,l:i}=n.options.color.animation,{color:o}=n;return!n.destroyed&&!n.spawning&&((o==null?void 0:o.h.value)!==void 0&&e.enable||(o==null?void 0:o.s.value)!==void 0&&s.enable||(o==null?void 0:o.l.value)!==void 0&&i.enable)}async update(n,e){r(n.color,e),await Promise.resolve()}}export{m as ColorUpdater};
