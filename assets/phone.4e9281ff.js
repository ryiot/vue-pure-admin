import{M as d}from"./motion.a036cfe8.js";import{u as c,p as x}from"./verifyCode.ec263d9b.js";import{T as B}from"./index.4fddcf38.js";import{y as F,L as v,ac as g,I as i,o as h,D as w,S as l,H as o,C as e,q as D,J as _,G as R,cn as T}from"./index.4a448694.js";import{u as E}from"./hooks.8ead3459.js";const N={class:"w-full flex justify-between"},S=_(" \u767B\u9646 "),U=_(" \u8FD4\u56DE "),M=F({setup(z){const n=v(!1),a=g({phone:"",verifyCode:""}),f=v(),{isDisabled:y,text:C}=c(),V=async p=>{n.value=!0,p&&await p.validate((t,s)=>{if(t)setTimeout(()=>{B.success("\u767B\u9646\u6210\u529F"),n.value=!1},2e3);else return n.value=!1,s})};function b(){c().end(),T().SET_CURRENTPAGE(0)}return(p,t)=>{const s=i("el-input"),r=i("el-form-item"),m=i("el-button"),k=i("el-form");return h(),w(k,{ref_key:"ruleFormRef",ref:f,model:e(a),rules:e(x),size:"large"},{default:l(()=>[o(e(d),null,{default:l(()=>[o(r,{prop:"phone"},{default:l(()=>[o(s,{clearable:"",modelValue:e(a).phone,"onUpdate:modelValue":t[0]||(t[0]=u=>e(a).phone=u),placeholder:"\u624B\u673A\u53F7\u7801","prefix-icon":e(E)("iphone")},null,8,["modelValue","prefix-icon"])]),_:1})]),_:1}),o(e(d),{delay:100},{default:l(()=>[o(r,{prop:"verifyCode"},{default:l(()=>[D("div",N,[o(s,{clearable:"",modelValue:e(a).verifyCode,"onUpdate:modelValue":t[1]||(t[1]=u=>e(a).verifyCode=u),placeholder:"\u77ED\u4FE1\u9A8C\u8BC1\u7801"},null,8,["modelValue"]),o(m,{disabled:e(y),class:"ml-2",onClick:t[2]||(t[2]=u=>e(c)().start(f.value,"phone"))},{default:l(()=>[_(R(e(C)),1)]),_:1},8,["disabled"])])]),_:1})]),_:1}),o(e(d),{delay:150},{default:l(()=>[o(r,null,{default:l(()=>[o(m,{class:"w-full",size:"default",type:"primary",loading:n.value,onClick:t[3]||(t[3]=u=>V(f.value))},{default:l(()=>[S]),_:1},8,["loading"])]),_:1})]),_:1}),o(e(d),{delay:200},{default:l(()=>[o(r,null,{default:l(()=>[o(m,{class:"w-full",size:"default",onClick:b},{default:l(()=>[U]),_:1})]),_:1})]),_:1})]),_:1},8,["model","rules"])}}});export{M as default};
