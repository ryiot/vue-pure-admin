import{_ as F,y as O,L as d,P as $,$ as z,cx as j,I as a,o as A,p as L,q as g,H as t,S as n,a1 as M,a2 as P,C as p,J as _,G as T,a0 as q,B as G,a5 as H,a6 as J,Z as U}from"./index.4a448694.js";import{g as Z}from"./system.ebb700b7.js";import{u as x}from"./hooks.8ead3459.js";const K=u=>(H("data-v-31dd65f0"),u=u(),J(),u),Q={class:"max-w-260px h-full min-h-780px bg-white"},W={class:"flex items-center h-34px"},X=K(()=>g("p",{class:"flex-1 ml-2 font-bold text-base truncate",title:"\u90E8\u95E8\u5217\u8868"}," \u90E8\u95E8\u5217\u8868 ",-1)),Y=_(" \u5C55\u5F00\u5168\u90E8 "),ee=_(" \u6298\u53E0\u5168\u90E8 "),te=_(" \u91CD\u7F6E\u72B6\u6001 "),ne=O({setup(u){const E={children:"children",label:"name"},v=d([]),s=d(""),{proxy:C}=U(),y=d();let i=d({});const I=(o,e)=>o?e.name.includes(o):!0;function k(o){var l;const e=o.$treeNodeId;i.value[e]=(l=i.value[e])!=null&&l.highlight?Object.assign({id:e},i.value[e],{highlight:!1}):Object.assign({id:e},i.value[e],{highlight:!0}),Object.values(i.value).forEach(c=>{c.id!==e&&(c.highlight=!1)})}function f(o){let e=C.$refs.treeRef.store._getAllNodes();for(var l=0;l<e.length;l++)e[l].expanded=o}function N(){i.value={},s.value="",f(!0)}return $(s,o=>{y.value.filter(o)}),z(async()=>{let{data:o}=await Z();v.value=j(o)}),(o,e)=>{const l=a("IconifyIconOffline"),c=a("el-icon"),S=a("el-input"),h=a("el-button"),m=a("el-dropdown-item"),V=a("el-dropdown-menu"),B=a("el-dropdown"),D=a("el-divider"),R=a("el-tree");return A(),L("div",Q,[g("div",W,[X,t(S,{style:{flex:"2"},size:"small",modelValue:s.value,"onUpdate:modelValue":e[0]||(e[0]=r=>s.value=r),placeholder:"\u8BF7\u8F93\u5165\u90E8\u95E8\u540D\u79F0",clearable:""},{suffix:n(()=>[t(c,{class:"el-input__icon"},{default:n(()=>[M(t(l,{icon:"search"},null,512),[[P,s.value.length===0]])]),_:1})]),_:1},8,["modelValue"]),t(B,null,{dropdown:n(()=>[t(V,null,{default:n(()=>[t(m,null,{default:n(()=>[t(h,{class:"reset-margin !h-20px !text-gray-500",type:"text",icon:p(x)("expand"),onClick:e[1]||(e[1]=r=>f(!0))},{default:n(()=>[Y]),_:1},8,["icon"])]),_:1}),t(m,null,{default:n(()=>[t(h,{class:"reset-margin !h-20px !text-gray-500",type:"text",icon:p(x)("unExpand"),onClick:e[2]||(e[2]=r=>f(!1))},{default:n(()=>[ee]),_:1},8,["icon"])]),_:1}),t(m,null,{default:n(()=>[t(h,{class:"reset-margin !h-20px !text-gray-500",type:"text",icon:p(x)("reset"),onClick:N},{default:n(()=>[te]),_:1},8,["icon"])]),_:1})]),_:1})]),default:n(()=>[t(l,{class:"w-28px cursor-pointer",width:"18px",icon:"more-vertical"})]),_:1})]),t(D),t(R,{ref_key:"treeRef",ref:y,data:v.value,"node-key":"id",size:"small",props:E,"default-expand-all":"","expand-on-click-node":!1,"filter-node-method":I,onNodeClick:k},{default:n(({node:r,data:w})=>{var b;return[g("span",{class:q(["pl-1","pr-1","rounded","flex","items-center","select-none",s.value.trim().length>0&&r.label.includes(s.value)&&"text-red-500"]),style:G({background:(b=p(i)[r.id])!=null&&b.highlight?"var(--el-color-primary-light-7)":"transparent"})},[t(l,{icon:w.type===1?"office-building":w.type===2?"location-company":"dept"},null,8,["icon"]),_(" "+T(r.label),1)],6)]}),_:1},8,["data"])])}}});var se=F(ne,[["__scopeId","data-v-31dd65f0"]]);export{se as default};
