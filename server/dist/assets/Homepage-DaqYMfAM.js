import{u as O}from"./vue.f36acd1f-CASkXa2p.js";import{r as x,u as C,a as j,o as D,b as v,c as E,d,e as _,F as w,f as y,g as T,w as q,h as e,i as m,j as S,n as P,t as n,k as l,l as L,m as A,p as z,v as M,q as F,s as R}from"./index-CwvQId_o.js";import{u as $,_ as f}from"./SmartImg-BDcg98L_.js";const B={class:"flex gap-3 overflow-x-scroll p-3 xl:container"},I={class:"relative"},N=["onClick"],V={class:"card-body"},Y={class:"card-title"},H={class:"flex items-center gap-3"},J=e("i",{class:"fa-solid fa-money-bill text-primary"},null,-1),G={class:"font-semibold"},U={class:"flex items-center gap-3"},K=e("i",{class:"fa-solid fa-heart text-alternate"},null,-1),Q={class:"font-semibold"},W="platillos-liked",X={__name:"-PlatilloSection",setup(g){const t=x([]),i=C(W,[]),{locale:p}=j({useScope:"global"});D(async()=>{try{const a=await $({url:"/api/categories/get/Platillos",params:{include_items:!0}});t.value=a.data.data.items}catch(a){v(a.response.data.message,{type:"error"})}});function r(a){return i.value.includes(a)}async function h(a){const u=t.value[a],o=r(u._id);o?i.value=i.value.filter(s=>s!==u._id):i.value.push(u._id),u.likes+=o?-1:1;try{const s=await $({url:"/api/items/update-likes",method:"POST",data:{_id:u._id,likes:u.likes}});t.value[a]=s.data.data}catch{v("Failed to update platillo.",{type:"error"})}}return(a,u)=>{const o=E("RouterLink");return d(),_("div",B,[(d(!0),_(w,null,y(t.value,(s,c)=>(d(),T(o,{key:s._id,class:"card card-compact bg-base-100 shadow-md",to:`/menu/#${s._id}`},{default:q(()=>[e("div",I,[m(f,{src:s.images[0].url,class:"max-w-[300px]",alt:s.images[0].title,width:s.images[0].width,height:s.images[0].height},null,8,["src","alt","width","height"]),e("button",{class:"btn absolute right-2 top-2",onClick:S(k=>h(c),["prevent"])},[e("i",{class:P(["fa-solid fa-heart",r(s._id)?"text-alternate":"text-coal"])},null,2)],8,N)]),e("div",V,[e("p",Y,n(`${s.priority}. ${s.name[l(p)]}`),1),e("div",H,[J,e("p",G,n("$"+s.base_price),1)]),e("div",U,[K,e("p",Q,n(s.likes),1)])])]),_:2},1032,["to"]))),128))])}}},Z={class:"mx-auto flex max-w-7xl gap-3 overflow-x-scroll rounded-t p-3"},ee={class:"rounded-b border-t p-5 text-center font-bold"},te={__name:"-CategorySection",setup(g){const t=["Platillos","Burritos","Tacos","Tortas","Sopes","Quesadillas"],i=x([]);return D(async()=>{try{const p=await $({url:"/api/categories/list"});i.value=p.data.data.filter(r=>t.includes(r.name)),i.value.sort((r,h)=>r.priority-h.priority)}catch{v("Failed to fetch categories",{type:"error"})}}),(p,r)=>{const h=E("RouterLink");return d(),_("div",Z,[(d(!0),_(w,null,y(i.value,a=>(d(),T(h,{key:a._id,to:`/menu/#${a._id}`,class:"cursor-pointer rounded shadow transition-all hover:scale-[1.01]"},{default:q(()=>[m(f,{src:a.images[0].url,class:"max-w-xs rounded-t sm:max-w-sm",alt:a.images[0].title,width:a.images[0].width,height:a.images[0].height},null,8,["src","alt","width","height"]),e("p",ee,n(a.name),1)]),_:2},1032,["to"]))),128))])}}},se={class:"flex justify-center px-2"},ae={class:"mex-gradient flex flex-col items-center justify-between gap-8 rounded p-10 px-3 text-center shadow-lg sm:flex-row md:max-w-3xl md:px-6 lg:px-10 xl:max-w-4xl"},oe={class:"text-center sm:w-1/2"},le={class:"mb-4"},ne={class:"mb-2 text-xl font-bold"},ie={class:"mb-4"},re={class:"mb-2 text-xl font-bold"},ce=e("p",null,"31345 Los Rios St, San Juan Capistrano, CA 92675",-1),de={class:"mb-2 text-xl font-bold"},ue=e("p",null,"elandariegomex@gmail.com",-1),me={class:"sm:w-1/2"},pe={class:"mb-4 text-2xl font-bold xl:text-3xl"},_e={class:"mb-6 xl:text-lg"},he=["placeholder"],ge={class:"btn btn-secondary join-item"},fe={__name:"-CallToAction",setup(g){const{t}=j({useScope:"global"}),i=x(""),p=x(null),r=L("startOverlay"),h=L("stopOverlay");async function a(){try{if(!i.value)throw Error("No email field provided.");r(),(await $({url:"/api/sendgrid/subscribe",method:"POST",data:{email:i.value}})).data.success===!0&&v("Successfully subscribed to El Andariego",{type:"success"})}catch{v("Error subscribing to El Andariego.",{type:"error"})}finally{p.value.reset(),h()}}return(u,o)=>(d(),_("div",se,[e("div",ae,[e("div",oe,[e("div",le,[e("h3",ne,n(l(t)("cta.contact.open_hours")),1),e("p",null,n(l(t)("cta.contact.hours")),1)]),e("div",ie,[e("h3",re,n(l(t)("cta.contact.location")),1),ce]),e("div",null,[e("h3",de,n(l(t)("cta.contact.contact")),1),e("p",{class:"cursor-pointer transition-all hover:font-semibold",onClick:o[0]||(o[0]=S((...s)=>l(A)&&l(A)(...s),["prevent"]))}," (949) 806-0123 "),ue])]),e("div",me,[e("h4",pe,n(l(t)("cta.hook")),1),e("p",_e,n(l(t)("cta.info")),1),e("form",{ref_key:"form",ref:p,class:"join",onSubmit:S(a,["prevent"])},[z(e("input",{"onUpdate:modelValue":o[1]||(o[1]=s=>i.value=s),type:"email",placeholder:l(t)("form.email"),class:"input join-item input-bordered w-full max-w-xs",required:""},null,8,he),[[M,i.value]]),e("button",ge,n(l(t)("form.sign_up")),1)],544)])])]))}},xe={class:"mb-8 mt-14 text-center"},ve=e("hr",{class:"m-2 mx-auto w-20 border border-neutral-400"},null,-1),be={class:"text-sm font-semibold uppercase"},b={__name:"StyledDivider",props:{name:{type:String,required:!0}},setup(g){return(t,i)=>(d(),_("div",xe,[ve,e("p",be,n(g.name),1)]))}},we=[{image:"/andariego/home/testimonials/julie-perez.png",quote:"Excelente comida, linda gente y la mejor salsa verde!",name:"Julie Perez"},{image:"/andariego/home/testimonials/francisco-serrano.png",quote:"Aqui puedes disfrutar unos sabrosos tacos🌮 .de diferantes carnes.",name:"Francisco Serrano"},{image:"/andariego/home/testimonials/delfino-martinez.png",quote:"Muy rica la comida excelente atención de la jovencita que atiende 👍👍👍",name:"Delfino Martinez"},{image:"/andariego/home/testimonials/lorenzo-diaz.png",quote:"Food: 5, Service: 5, Atmosphere: 5",name:"Lorenzo Diaz"}],ye=["/andariego/home/gallery/gallery-1689472440679.jpg","/andariego/home/gallery/gallery-1689472440680.jpg","/andariego/home/gallery/gallery-1689560307316.jpg","/andariego/home/gallery/gallery-1689472440681.jpg","/andariego/home/gallery/gallery-1689472440682.jpg","/andariego/home/gallery/gallery-1689920206721.jpg"],$e={class:"pt-6 xl:px-10"},ke={class:"grid grid-cols-1 items-center gap-2 lg:grid-cols-2"},Se={class:"mb-2 px-4 pt-6 text-center"},je={class:"flex flex-col items-center gap-2"},Le={class:"text-4xl font-bold sm:w-10/12 md:w-2/3 lg:w-11/12 lg:text-5xl xl:w-4/5"},Ae={class:"my-2 font-semibold xl:text-lg"},Ce={class:"mb-8 w-auto sm:w-10/12 md:w-3/4 lg:w-11/12 xl:w-4/5 xl:text-lg"},De=R('<div class="my-2 flex justify-center gap-4 text-2xl lg:my-4"><a href="https://www.facebook.com/profile.php?id=100082710796984" target="_blank"><i class="fa-brands fa-facebook fa-sm"></i></a><a href="https://instagram.com/el_andariegotruck" target="_blank"><i class="fa-brands fa-instagram fa-sm"></i></a><a href="https://g.page/r/CY53oo_JlDb8EAI/review" target="_blank"><i class="fa-brands fa-google fa-xs"></i></a></div>',1),Ee={class:"flex flex-col items-center justify-center"},Te=["src"],qe={class:"mex-gradient mt-14 pb-4 pt-2 xl:px-10"},Pe={class:"flex flex-col justify-center lg:flex-row xl:gap-10"},Oe={class:"my-3 grid grid-cols-1 justify-items-center gap-8 px-5 sm:grid-cols-2 lg:items-center"},ze={class:"font-medium"},Me={class:"text-sm text-primary"},Fe={class:"my-5 grid grid-cols-2 gap-2 rounded px-3 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3"},Ne={__name:"Homepage",setup(g){O({title:"El Andariego",meta:[{name:"description",content:"Authentic Mexican Food Truck"}]});const{t,locale:i}=j({useScope:"global"}),p=C("locale","en"),r=x(p.value==="es");function h(){const o=new Date().getHours()*60+new Date().getMinutes(),s=16*60+30,c=23*60+30;return s<=o&&o<=c}const a=F(()=>{const o=new Date().getDay(),s=1,c=6;if(o===s)return t("hours.closed");const k=o===c?"Village":"Capistrano";return h()?t("hours.open",{location:k}):t("hours.opening",{location:k})});function u(){r.value=!r.value;const o=r.value?"es":"en";i.value=o,p.value=o}return(o,s)=>(d(),_("div",null,[e("div",$e,[e("div",ke,[e("div",Se,[e("div",je,[e("h4",Le,n(l(t)("home.hook")),1),e("p",Ae,n(a.value),1),e("p",Ce,n(l(t)("home.intro")),1)]),e("button",{class:"btn btn-primary px-8",onClick:s[0]||(s[0]=c=>o.$router.push("/menu"))},n(l(t)("home.view_menu")),1),De,e("div",Ee,[e("button",{class:"mx-3 flex h-9 w-[68px] items-center rounded-full bg-coal-100 px-1",onClick:u},[e("img",{src:r.value?"/mexico.png":"/usa.png",class:P(["h-7 w-7 transform rounded-full bg-white uppercase shadow-md transition-all",{"translate-x-8":r.value}]),width:"256",height:"256"},null,10,Te)])])]),m(f,{src:"/andariego/home/hero.webp",alt:"hero",width:"1200",height:"1200",loading:"eager","is-transparent":""})])]),m(b,{name:l(t)("dividers.platillo")},null,8,["name"]),m(X),e("div",qe,[m(b,{name:l(t)("dividers.testimonial"),class:"mt-8"},null,8,["name"]),e("div",Pe,[e("div",Oe,[(d(!0),_(w,null,y(l(we),c=>(d(),_("figure",{key:c,class:"flex w-full max-w-sm flex-col gap-3"},[m(f,{src:c.image,class:"max-w-[60px]",alt:c.name,"is-transparent":!0,width:"120",height:"120"},null,8,["src","alt"]),e("blockquote",ze,n(c.quote),1),e("p",Me,"- "+n(c.name),1)]))),128))]),e("div",Fe,[(d(!0),_(w,null,y(l(ye),c=>(d(),_("div",{key:c,class:"overflow-hidden"},[m(f,{class:"w-full max-w-[350px] rounded transition-all hover:scale-125",src:c,alt:"Gallery Image",width:"800",height:"800"},null,8,["src"])]))),128))])])]),m(b,{name:l(t)("dividers.categories")},null,8,["name"]),m(te),m(b,{name:l(t)("dividers.cta")},null,8,["name"]),m(fe)]))}};export{Ne as default};
