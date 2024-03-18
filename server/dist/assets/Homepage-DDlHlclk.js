import{u as P}from"./vue.f36acd1f-DejoM1OW.js";import{r as f,u as L,a as S,o as A,b as C,c as m,d as p,F as b,e as w,f as E,w as T,g as e,h as u,i as D,n as O,t as n,j as l,k as j,l as q,v as z,m as M,p as F}from"./index-D6hSMMWw.js";import{u as y,a as x,_ as g}from"./SmartImg-DF7uc9XM.js";import{_ as v}from"./StyledDivider-B6IgPJMV.js";const R={class:"carousel carousel-center flex gap-3 overflow-x-scroll p-3 xl:container"},B={class:"relative"},I=["onClick"],N={class:"card-body"},V={class:"card-title"},Y={class:"flex items-center gap-3"},H=e("i",{class:"fa-solid fa-money-bill text-primary"},null,-1),J={class:"font-semibold"},G={class:"flex items-center gap-3"},U=e("i",{class:"fa-solid fa-heart text-alternate"},null,-1),K={class:"font-semibold"},Q="platillos-liked",W={__name:"-PlatilloSection",setup($){const t=f([]),i=L(Q,[]),{locale:_}=S({useScope:"global"});A(async()=>{try{const a=await y({url:"/api/categories/get/Platillos",params:{include_items:!0}});t.value=a.data.data.items}catch(a){x(a.response.data.message,{type:"error"})}});function r(a){return i.value.includes(a)}async function h(a){const d=t.value[a],o=r(d._id);o?i.value=i.value.filter(s=>s!==d._id):i.value.push(d._id),d.likes+=o?-1:1;try{const s=await y({url:"/api/items/update-likes",method:"POST",data:{_id:d._id,likes:d.likes}});t.value[a]=s.data.data}catch{x("Failed to update platillo.",{type:"error"})}}return(a,d)=>{const o=C("RouterLink");return m(),p("div",R,[(m(!0),p(b,null,w(t.value,(s,c)=>(m(),E(o,{key:s._id,class:"card carousel-item card-compact rounded bg-base-100 shadow-md",to:`/menu/#${s._id}`},{default:T(()=>[e("figure",B,[u(g,{src:s.images[0].url,class:"max-w-[300px]",alt:s.images[0].title,width:s.images[0].width,height:s.images[0].height},null,8,["src","alt","width","height"]),e("button",{class:"btn absolute right-2 top-2",onClick:D(k=>h(c),["prevent"])},[e("i",{class:O(["fa-solid fa-heart",r(s._id)?"text-alternate":"text-coal"])},null,2)],8,I)]),e("div",N,[e("p",V,n(`${s.priority}. ${s.name[l(_)]}`),1),e("div",Y,[H,e("p",J,n("$"+s.base_price),1)]),e("div",G,[U,e("p",K,n(s.likes),1)])])]),_:2},1032,["to"]))),128))])}}},X={class:"mx-auto flex max-w-7xl gap-3 overflow-x-scroll rounded-t p-3"},Z={class:"rounded-b border-t p-5 text-center font-bold"},ee={__name:"-CategorySection",setup($){const t=["Platillos","Burritos","Tacos","Tortas","Sopes","Quesadillas"],i=f([]);return A(async()=>{try{const _=await y({url:"/api/categories/list"});i.value=_.data.data.filter(r=>t.includes(r.name)),i.value.sort((r,h)=>r.priority-h.priority)}catch{x("Failed to fetch categories",{type:"error"})}}),(_,r)=>{const h=C("RouterLink");return m(),p("div",X,[(m(!0),p(b,null,w(i.value,a=>(m(),E(h,{key:a._id,to:`/menu/#${a._id}`,class:"cursor-pointer rounded shadow transition-all hover:scale-[1.01]"},{default:T(()=>[u(g,{src:a.images[0].url,class:"max-w-xs rounded-t sm:max-w-sm",alt:a.images[0].title,width:a.images[0].width,height:a.images[0].height},null,8,["src","alt","width","height"]),e("p",Z,n(a.name),1)]),_:2},1032,["to"]))),128))])}}},te={class:"flex justify-center px-2"},se={class:"mex-gradient flex flex-col items-center justify-between gap-8 rounded p-10 px-3 text-center shadow-lg sm:flex-row md:max-w-3xl md:px-6 lg:px-10 xl:max-w-4xl"},ae={class:"text-center sm:w-1/2"},oe={class:"mb-4"},le={class:"mb-2 text-xl font-bold"},ne={class:"mb-4"},ie={class:"mb-2 text-xl font-bold"},re=e("p",null,"31345 Los Rios St, San Juan Capistrano, CA 92675",-1),ce={class:"mb-2 text-xl font-bold"},de=e("a",{href:"tel:9498060124",class:"cursor-pointer transition-all hover:font-semibold"}," (949) 806-0123 ",-1),ue=e("p",null,"elandariegomex@gmail.com",-1),me={class:"sm:w-1/2"},_e={class:"mb-4 text-2xl font-bold xl:text-3xl"},pe={class:"mb-6 xl:text-lg"},he=["placeholder"],ge={class:"btn btn-secondary join-item"},fe={__name:"-CallToAction",setup($){const{t}=S({useScope:"global"}),i=f(""),_=f(null),r=j("startOverlay"),h=j("stopOverlay");async function a(){try{if(!i.value)throw Error("No email field provided.");r(),(await y({url:"/api/sendgrid/subscribe",method:"POST",data:{email:i.value}})).data.success===!0&&x("Successfully subscribed to El Andariego",{type:"success"})}catch{x("Error subscribing to El Andariego.",{type:"error"})}finally{_.value.reset(),h()}}return(d,o)=>(m(),p("div",te,[e("div",se,[e("div",ae,[e("div",oe,[e("h3",le,n(l(t)("cta.contact.open_hours")),1),e("p",null,n(l(t)("cta.contact.hours")),1)]),e("div",ne,[e("h3",ie,n(l(t)("cta.contact.location")),1),re]),e("div",null,[e("h3",ce,n(l(t)("cta.contact.contact")),1),de,ue])]),e("div",me,[e("h4",_e,n(l(t)("cta.hook")),1),e("p",pe,n(l(t)("cta.info")),1),e("form",{ref_key:"form",ref:_,class:"join",onSubmit:D(a,["prevent"])},[q(e("input",{"onUpdate:modelValue":o[0]||(o[0]=s=>i.value=s),type:"email",placeholder:l(t)("form.email"),class:"input join-item input-bordered w-full max-w-xs",required:""},null,8,he),[[z,i.value]]),e("button",ge,n(l(t)("form.sign_up")),1)],544)])])]))}},xe=[{image:"/andariego/home/testimonials/julie-perez.png",quote:"Excelente comida, linda gente y la mejor salsa verde!",name:"Julie Perez"},{image:"/andariego/home/testimonials/francisco-serrano.png",quote:"Aqui puedes disfrutar unos sabrosos tacos🌮 .de diferantes carnes.",name:"Francisco Serrano"},{image:"/andariego/home/testimonials/delfino-martinez.png",quote:"Muy rica la comida excelente atención de la jovencita que atiende 👍👍👍",name:"Delfino Martinez"},{image:"/andariego/home/testimonials/lorenzo-diaz.png",quote:"Food: 5, Service: 5, Atmosphere: 5",name:"Lorenzo Diaz"}],ve=["/andariego/home/gallery/gallery-1689472440679.jpg","/andariego/home/gallery/gallery-1689472440680.jpg","/andariego/home/gallery/gallery-1689560307316.jpg","/andariego/home/gallery/gallery-1689472440681.jpg","/andariego/home/gallery/gallery-1689472440682.jpg","/andariego/home/gallery/gallery-1689920206721.jpg"],be={class:"pt-6 xl:px-10"},we={class:"grid grid-cols-1 items-center gap-2 lg:grid-cols-2"},ye={class:"mb-2 px-4 pt-6 text-center"},$e={class:"flex flex-col items-center gap-2"},ke={class:"text-4xl font-bold sm:w-10/12 md:w-2/3 lg:w-11/12 lg:text-5xl xl:w-4/5"},Se={class:"my-2 font-semibold xl:text-lg"},je={class:"mb-8 w-auto sm:w-10/12 md:w-3/4 lg:w-11/12 xl:w-4/5 xl:text-lg"},Le=F('<div class="my-2 flex justify-center gap-4 text-2xl lg:my-4"><a href="https://www.facebook.com/profile.php?id=100082710796984" target="_blank"><i class="fa-brands fa-facebook fa-sm"></i></a><a href="https://instagram.com/el_andariegotruck" target="_blank"><i class="fa-brands fa-instagram fa-sm"></i></a><a href="https://g.page/r/CY53oo_JlDb8EAI/review" target="_blank"><i class="fa-brands fa-google fa-xs"></i></a></div>',1),Ae={class:"flex flex-col items-center justify-center"},Ce=["src"],Ee={class:"mex-gradient mt-14 pb-4 pt-2 xl:px-10"},Te={class:"flex flex-col justify-center lg:flex-row xl:gap-10"},De={class:"my-3 grid grid-cols-1 justify-items-center gap-8 px-5 sm:grid-cols-2 lg:items-center"},Oe={class:"font-medium"},Pe={class:"text-sm text-primary"},qe={class:"my-5 grid grid-cols-2 gap-2 rounded px-3 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3"},Be={__name:"Homepage",setup($){P({title:"El Andariego",meta:[{name:"description",content:"Authentic Mexican Food Truck"}]});const{t,locale:i}=S({useScope:"global"}),_=L("locale","en"),r=f(_.value==="es");function h(){const o=new Date().getHours()*60+new Date().getMinutes(),s=15*60,c=23*60+30;return s<=o&&o<=c}const a=M(()=>{const o=new Date().getDay(),s=1,c=6;if(o===s)return t("hours.closed");const k=o===c?"Village":"Capistrano";return h()?t("hours.open",{location:k}):t("hours.opening",{location:k})});function d(){r.value=!r.value;const o=r.value?"es":"en";i.value=o,_.value=o}return(o,s)=>(m(),p("div",null,[e("div",be,[e("div",we,[e("div",ye,[e("div",$e,[e("h4",ke,n(l(t)("home.hook")),1),e("p",Se,n(a.value),1),e("p",je,n(l(t)("home.intro")),1)]),e("button",{class:"btn btn-primary px-8",onClick:s[0]||(s[0]=c=>o.$router.push("/menu"))},n(l(t)("home.view_menu")),1),Le,e("div",Ae,[e("button",{class:"mx-3 flex h-9 w-[68px] items-center rounded-full bg-coal-100 px-1",onClick:d},[e("img",{src:r.value?"/mexico.png":"/usa.png",class:O(["h-7 w-7 transform rounded-full bg-white uppercase shadow-md transition-all",{"translate-x-8":r.value}]),width:"256",height:"256"},null,10,Ce)])])]),u(g,{src:"/andariego/home/hero.webp",alt:"hero",width:"1200",height:"1200",loading:"eager","is-transparent":""})])]),u(v,{name:l(t)("dividers.platillo")},null,8,["name"]),u(W),e("div",Ee,[u(v,{name:l(t)("dividers.testimonial"),class:"mt-8"},null,8,["name"]),e("div",Te,[e("div",De,[(m(!0),p(b,null,w(l(xe),c=>(m(),p("figure",{key:c,class:"flex w-full max-w-sm flex-col gap-3"},[u(g,{src:c.image,class:"max-w-[60px]",alt:c.name,"is-transparent":!0,width:"120",height:"120"},null,8,["src","alt"]),e("blockquote",Oe,n(c.quote),1),e("p",Pe,"- "+n(c.name),1)]))),128))]),e("div",qe,[(m(!0),p(b,null,w(l(ve),c=>(m(),p("div",{key:c,class:"overflow-hidden"},[u(g,{class:"w-full max-w-[350px] rounded transition-all hover:scale-125",src:c,alt:"Gallery Image",width:"800",height:"800"},null,8,["src"])]))),128))])])]),u(v,{name:l(t)("dividers.categories")},null,8,["name"]),u(ee),u(v,{name:l(t)("dividers.cta")},null,8,["name"]),u(fe)]))}};export{Be as default};