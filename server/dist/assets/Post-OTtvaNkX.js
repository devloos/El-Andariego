import{u as p,_ as x}from"./SmartImg-1Qrtg3Yd.js";import{d as c,e as d,i as s,r as u,a as h,o as _,H as f,b as g,g as v,h as t,t as a,I as w,k as y}from"./index-SR-EE4_m.js";import{S as o}from"./Skeleton-B1b72Hhg.js";const k={class:"mt-3 flex flex-col items-center"},b={__name:"DetailSkeleton",setup(r){return(i,e)=>(c(),d("div",k,[s(o,{class:"mb-5 h-8 w-1/2 max-w-xs md:h-10 md:w-1/3"}),s(o,{class:"mb-5 h-72 w-full max-w-5xl md:h-96 md:w-11/12 lg:h-[500px]"}),s(o,{class:"h-28 w-2/3 max-w-2xl md:h-32 lg:h-36 lg:w-1/2"})]))}},S={key:1,class:"container flex flex-col items-center px-3"},B={class:"my-5 text-center text-2xl font-bold text-primary"},$={class:"mb-3 flex gap-2 text-sm text-gray-500"},D={class:"my-5 max-w-2xl text-center lg:text-xl"},T={__name:"Post",props:{id:{type:String,required:!0}},setup(r){const i=r,e=u(null),n=u(!0),{locale:m}=h({useScope:"global"});return _(async()=>{try{const l=await p({url:`/api/blog/${i.id}`});e.value=l.data.data,e.value.date=f(e.value.date)}catch{g("Failed to fetch post details.",{type:"error"})}finally{n.value=!1}}),(l,N)=>n.value?(c(),v(b,{key:0})):(c(),d("div",S,[t("h2",B,a(e.value.title),1),t("div",null,[t("div",$,[t("p",null,a(e.value.type),1),w(" · "),t("p",null,a(e.value.date),1)]),s(x,{src:e.value.images[0].url,alt:e.value.images[0].title,width:e.value.images[0].width,height:e.value.images[0].height},null,8,["src","alt","width","height"])]),t("p",D,a(e.value.description[y(m)]),1)]))}};export{T as default};
