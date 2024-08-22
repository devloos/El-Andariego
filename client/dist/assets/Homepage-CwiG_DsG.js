import{u as D}from"./vue.f36acd1f-CMr6ak2N.js";import{r as f,u as E,a as $,o as S,b as j,c as u,d as _,F as v,e as y,f as A,w as L,g as e,h as c,i as C,n as q,t as n,j as o,k,l as z,v as O,m as P,S as M,_ as F}from"./index-PiuKnE2M.js";import{u as w,a as g,_ as h}from"./SmartImg-DeWqYeUh.js";import{_ as x}from"./StyledDivider-C_Qo8EXp.js";const R={class:"carousel carousel-center flex gap-3 overflow-x-scroll p-3 xl:container"},B={class:"relative"},H=["onClick"],I={class:"card-body"},N={class:"card-title"},V={class:"flex items-center gap-3"},Y=e("i",{class:"fa-solid fa-money-bill text-primary"},null,-1),G={class:"font-semibold"},J={class:"flex items-center gap-3"},U=e("i",{class:"fa-solid fa-heart text-alternate"},null,-1),K={class:"font-semibold"},Q="platillos-liked",W={__name:"-PlatilloSection",setup(b){const s=f([]),r=E(Q,[]),{locale:m}=$({useScope:"global"});S(async()=>{var t;try{const l=await w({url:"/api/categories",params:{match:{name:"Platillos"},include:{items:!0}}});s.value=((t=l.data.data)==null?void 0:t[0].items)||[]}catch(l){g(l.response.data.message,{type:"error"})}});function i(t){return r.value.includes(t)}async function d(t){const l=s.value[t],p=i(l._id);p?r.value=r.value.filter(a=>a!==l._id):r.value.push(l._id),l.likes+=p?-1:1;try{const a=await w({url:`/api/items/${l._id}`,method:"PATCH",data:{likes:l.likes}});s.value[t]=a.data.data}catch{g("Failed to update platillo.",{type:"error"})}}return(t,l)=>{const p=j("RouterLink");return u(),_("div",R,[(u(!0),_(v,null,y(s.value,(a,T)=>(u(),A(p,{key:a._id,class:"card carousel-item card-compact rounded bg-base-100 shadow-md",to:`/menu/#${a._id}`},{default:L(()=>[e("figure",B,[c(h,{src:a.images[0].url,class:"max-w-[300px]",alt:a.images[0].title,width:a.images[0].width,height:a.images[0].height},null,8,["src","alt","width","height"]),e("button",{class:"btn absolute right-2 top-2",onClick:C(ze=>d(T),["prevent"])},[e("i",{class:q(["fa-solid fa-heart",i(a._id)?"text-alternate":"text-coal"])},null,2)],8,H)]),e("div",I,[e("p",N,n(`${a.priority}. ${a.name[o(m)]}`),1),e("div",V,[Y,e("p",G,n("$"+a.base_price),1)]),e("div",J,[U,e("p",K,n(a.likes),1)])])]),_:2},1032,["to"]))),128))])}}},X={class:"mx-auto flex max-w-7xl gap-3 overflow-x-scroll rounded-t p-3"},Z={class:"rounded-b border-t p-5 text-center font-bold"},ee={__name:"-CategorySection",setup(b){const s=["Platillos","Burritos","Tacos","Tortas","Sopes","Quesadillas"],r=f([]);return S(async()=>{try{const m=await w({url:"/api/categories"});r.value=m.data.data.filter(i=>s.includes(i.name)),r.value.sort((i,d)=>i.priority-d.priority)}catch{g("Failed to fetch categories",{type:"error"})}}),(m,i)=>{const d=j("RouterLink");return u(),_("div",X,[(u(!0),_(v,null,y(r.value,t=>(u(),A(d,{key:t._id,to:`/menu/#${t._id}`,class:"cursor-pointer rounded shadow transition-all hover:scale-[1.01]"},{default:L(()=>[c(h,{src:t.images[0].url,class:"max-w-xs rounded-t sm:max-w-sm",alt:t.images[0].title,width:t.images[0].width,height:t.images[0].height},null,8,["src","alt","width","height"]),e("p",Z,n(t.name),1)]),_:2},1032,["to"]))),128))])}}},te={class:"flex justify-center px-2"},se={class:"mex-gradient flex flex-col items-center justify-between gap-8 rounded p-10 px-3 text-center shadow-lg sm:flex-row md:max-w-3xl md:px-6 lg:px-10 xl:max-w-4xl"},ae={class:"text-center sm:w-1/2"},oe={class:"mb-4"},le={class:"mb-2 text-xl font-bold"},ne={class:"mb-4"},ie={class:"mb-2 text-xl font-bold"},re=e("p",null,"31345 Los Rios St, San Juan Capistrano, CA 92675",-1),ce={class:"mb-2 text-xl font-bold"},de=e("a",{href:"tel:9498060123",class:"cursor-pointer transition-all hover:font-semibold"}," (949) 806-0123 ",-1),ue=e("p",null,"elandariegomex@gmail.com",-1),me={class:"sm:w-1/2"},_e={class:"mb-4 text-2xl font-bold xl:text-3xl"},pe={class:"mb-6 xl:text-lg"},he=["placeholder"],ge={class:"btn btn-secondary join-item"},xe={__name:"-CallToAction",setup(b){const{t:s}=$({useScope:"global"}),r=f(""),m=f(null),i=k("startOverlay"),d=k("stopOverlay");async function t(){try{if(!r.value)throw Error("No email field provided.");i(),(await w({url:"/api/sendgrid/subscribe",method:"POST",data:{email:r.value}})).data.success===!0&&g("Successfully subscribed to El Andariego",{type:"success"})}catch{g("Error subscribing to El Andariego.",{type:"error"})}finally{m.value.reset(),d()}}return(l,p)=>(u(),_("div",te,[e("div",se,[e("div",ae,[e("div",oe,[e("h3",le,n(o(s)("cta.contact.open_hours")),1),e("p",null,n(o(s)("cta.contact.hours")),1)]),e("div",ne,[e("h3",ie,n(o(s)("cta.contact.location")),1),re]),e("div",null,[e("h3",ce,n(o(s)("cta.contact.contact")),1),de,ue])]),e("div",me,[e("h4",_e,n(o(s)("cta.hook")),1),e("p",pe,n(o(s)("cta.info")),1),e("form",{ref_key:"form",ref:m,class:"join",onSubmit:C(t,["prevent"])},[z(e("input",{"onUpdate:modelValue":p[0]||(p[0]=a=>r.value=a),type:"email",placeholder:o(s)("form.email"),class:"input join-item input-bordered w-full max-w-xs",required:""},null,8,he),[[O,r.value]]),e("button",ge,n(o(s)("form.sign_up")),1)],544)])])]))}},fe=[{image:"/andariego/home/testimonials/julie-perez.png",quote:"Excelente comida, linda gente y la mejor salsa verde!",name:"Julie Perez"},{image:"/andariego/home/testimonials/francisco-serrano.png",quote:"Aqui puedes disfrutar unos sabrosos tacos🌮 .de diferantes carnes.",name:"Francisco Serrano"},{image:"/andariego/home/testimonials/delfino-martinez.png",quote:"Muy rica la comida excelente atención de la jovencita que atiende 👍👍👍",name:"Delfino Martinez"},{image:"/andariego/home/testimonials/lorenzo-diaz.png",quote:"Food: 5, Service: 5, Atmosphere: 5",name:"Lorenzo Diaz"}],ve=["/andariego/home/gallery/gallery-1689472440679.jpg","/andariego/home/gallery/gallery-1689472440680.jpg","/andariego/home/gallery/gallery-1689560307316.jpg","/andariego/home/gallery/gallery-1689472440681.jpg","/andariego/home/gallery/gallery-1689472440682.jpg","/andariego/home/gallery/gallery-1689920206721.jpg"],ye={class:"pt-6 xl:px-10"},we={class:"grid grid-cols-1 items-center gap-2 lg:grid-cols-2"},be={class:"mb-2 px-4 pt-6 text-center"},$e={class:"flex flex-col items-center gap-2"},ke={class:"text-4xl font-bold sm:w-10/12 md:w-2/3 lg:w-11/12 lg:text-5xl xl:w-4/5"},Se={class:"my-2 font-semibold xl:text-lg"},je={class:"mb-8 w-auto sm:w-10/12 md:w-3/4 lg:w-11/12 xl:w-4/5 xl:text-lg"},Ae={class:"btn btn-primary px-8 uppercase",href:"https://order.elandariegotruck.com/"},Le={class:"mt-14 pb-4 pt-2 xl:px-10"},Ce={class:"flex flex-col justify-center lg:flex-row xl:gap-10"},Te={class:"my-3 grid grid-cols-1 justify-items-center gap-8 px-5 sm:grid-cols-2 lg:items-center"},De={class:"font-medium"},Ee={class:"text-sm text-primary"},qe={class:"my-5 grid grid-cols-2 gap-2 rounded px-3 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3"},Re={__name:"Homepage",setup(b){D({title:"El Andariego",meta:[{name:"description",content:"Authentic Mexican Food Truck"}]});const{t:s}=$({useScope:"global"});function r(){const i=new Date().getHours()*60+new Date().getMinutes(),d=15*60,t=23*60+30;return d<=i&&i<=t}const m=P(()=>{const i=new Date().getDay(),d=1,t=6;if(i===d)return s("hours.closed");const l=i===t?"Village":"Capistrano";return r()?s("hours.open",{location:l}):s("hours.opening",{location:l})});return(i,d)=>(u(),_("div",null,[e("div",ye,[e("div",we,[e("div",be,[e("div",$e,[e("h4",ke,n(o(s)("home.hook")),1),e("p",Se,n(m.value),1),e("p",je,n(o(s)("home.intro")),1)]),e("a",Ae,n(o(s)("home.order_now")),1),c(M,{class:"my-7 flex justify-center gap-6 text-2xl"}),c(F,{class:"-ms-1 mb-10"})]),c(h,{src:"/andariego/home/hero.webp",alt:"hero",width:"1200",height:"1200",loading:"eager","is-transparent":""})])]),c(x,{name:o(s)("dividers.platillo")},null,8,["name"]),c(W),e("div",Le,[c(x,{name:o(s)("dividers.testimonial"),class:"mt-8"},null,8,["name"]),e("div",Ce,[e("div",Te,[(u(!0),_(v,null,y(o(fe),t=>(u(),_("figure",{key:t,class:"flex w-full max-w-sm flex-col gap-3"},[c(h,{src:t.image,class:"max-w-[60px]",alt:t.name,"is-transparent":!0,width:"120",height:"120"},null,8,["src","alt"]),e("blockquote",De,n(t.quote),1),e("p",Ee,"- "+n(t.name),1)]))),128))]),e("div",qe,[(u(!0),_(v,null,y(o(ve),t=>(u(),_("div",{key:t,class:"overflow-hidden"},[c(h,{class:"w-full max-w-[350px] rounded transition-all hover:scale-125",src:t,alt:"Gallery Image",width:"800",height:"800"},null,8,["src"])]))),128))])])]),c(x,{name:o(s)("dividers.categories")},null,8,["name"]),c(ee),c(x,{name:o(s)("dividers.cta")},null,8,["name"]),c(xe)]))}};export{Re as default};
