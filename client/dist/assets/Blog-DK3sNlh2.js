import{u as y}from"./vue.65b7bcda-F64P0Vos.js";import{c as s,d as o,F as p,e as f,g as t,h as a,a as w,r as h,o as k,f as b,w as g,t as n,j as c,R as m,D as B,n as S}from"./index-wxM0BpvS.js";import{u as $,a as D,_ as E}from"./SmartImg-CaMM2MQa.js";import{f as F}from"./utility-D-uUhmTE.js";import{S as u}from"./Skeleton-GX0vh65m.js";const A={class:"container mt-6 grid grid-cols-1 items-center gap-10 px-3 lg:mt-10 lg:grid-cols-2 lg:gap-8 lg:px-12"},L={__name:"BlogSkeleton",setup(x){return(_,l)=>(s(),o("div",A,[(s(),o(p,null,f(4,i=>t("div",{key:i},[a(u,{class:"mb-3 h-8 w-36"}),a(u,{class:"w-4/4 mb-3 h-72 sm:h-80 md:h-96 lg:h-64 xl:h-80 2xl:h-96"}),a(u,{class:"h-16 w-72"})])),64))]))}},N={key:1,class:"container mt-6 grid grid-cols-1 items-center gap-10 px-3 lg:mt-10 lg:grid-cols-2 lg:gap-8 lg:px-12"},V={class:"text-xl font-semibold lg:text-2xl"},C={class:"mt-3 flex gap-2"},M={class:"text-primary underline hover:text-primary-600"},I={__name:"Blog",setup(x){y({title:"Blog | El Andariego",meta:[{name:"description",content:"Anything new in the life of El Andariego"}]});const{t:_}=w({useScope:"global"}),l=h([]),i=h(!0);return k(async()=>{try{const d=await $({url:"/api/posts"});l.value=d.data,l.value.sort((r,e)=>new Date(e.date)-new Date(r.date)),l.value.forEach(r=>{r.date=F(r.date)})}catch{D("Failed to fetch posts.",{type:"error"})}finally{i.value=!1}}),(d,r)=>i.value?(s(),b(L,{key:0})):(s(),o("div",N,[(s(!0),o(p,null,f(l.value,(e,v)=>(s(),o("div",{key:e._id},[a(c(m),{to:`/blog/${e._id}`,class:"inline-block cursor-pointer"},{default:g(()=>[t("h1",V,n(e.title),1)]),_:2},1032,["to"]),a(c(m),{to:`/blog/${e._id}`,class:"cursor-pointer hover:opacity-75"},{default:g(()=>[a(E,{src:e.images[0].url,alt:e.images[0].title,width:e.images[0].width,height:e.images[0].height},null,8,["src","alt","width","height"])]),_:2},1032,["to"]),t("div",{class:S(["flex flex-col items-start",{"order-lg-1":v%2===0}])},[t("div",C,[t("p",null,n(e.type),1),B(" · "),t("p",null,n(e.date),1)]),a(c(m),{to:`/blog/${e._id}`,class:"cursor-pointer"},{default:g(()=>[t("p",M,n(c(_)("blog.read_more")),1)]),_:2},1032,["to"])],2)]))),128))]))}};export{I as default};