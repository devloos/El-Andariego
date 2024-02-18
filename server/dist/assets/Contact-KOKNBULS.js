import{C,D as M,d as V,e as w,h as e,t as s,p as y,E as k,a as q,r as n,l as h,i as d,j as U,k as l,v as $,G as j,b as g}from"./index-DWReFIht.js";import{u as E}from"./vue.f36acd1f-B2KuI2sw.js";import{_ as O,u as A}from"./SmartImg-Dsuh6Quw.js";const B={class:"form-control"},D={class:"label"},T={class:"label-text"},N=["type"],v={__name:"SmartInput",props:C({label:{type:String,required:!0},type:{type:String,required:!0}},{modelValue:{type:[String,Number,Boolean],required:!0},modelModifiers:{}}),emits:["update:modelValue"],setup(r){const t=M(r,"modelValue");return(u,i)=>(V(),w("div",B,[e("label",D,[e("span",T,s(r.label),1)]),y(e("input",{"onUpdate:modelValue":i[0]||(i[0]=c=>t.value=c),class:"input input-bordered w-full",type:r.type,required:""},null,8,N),[[k,t.value]])]))}},I={class:"container"},F=e("h4",{class:"mb-8 mt-4 text-center text-xl font-bold text-primary"}," Contact El Andariego ",-1),G={class:"flex flex-col items-center justify-center gap-4 px-2 xl:flex-row xl:gap-8"},H={class:"form-control"},P={class:"label"},Y={class:"label-text"},z=["placeholder"],J={class:"form-control"},K={class:"label"},L={class:"label-text"},Q={disabled:"",value:""},R=e("option",null,"Catering",-1),W={type:"submit",class:"btn btn-primary btn-block"},te={__name:"Contact",setup(r){E({title:"Contact | El Andariego",meta:[{name:"description",content:"Contact El Andariego"}]});const{t}=q({useScope:"global"}),u=n(null),i=h("startOverlay"),c=h("stopOverlay"),m=n(""),p=n(""),f=n(""),_=n(""),b=n("");async function S(){try{i(),(await A({url:"/api/sendgrid/send-email",method:"POST",data:{name:m.value,email:p.value,phone:f.value,description:_.value,event_type:b.value}})).data.success===!0&&g("You will be contacted shortly thank you.")}catch{g("Failed to send information try again.",{type:"error"})}finally{u.value.reset(),c()}}return(x,o)=>(V(),w("div",I,[F,e("div",G,[d(O,{src:"/andariego/contact/card.jpg",class:"h-full w-full max-w-3xl",alt:"Contact Card",width:"1900",height:"1080"}),e("form",{ref_key:"form",ref:u,class:"grid w-full max-w-lg grow grid-cols-1 gap-4 px-2",onSubmit:U(S,["prevent"])},[d(v,{modelValue:m.value,"onUpdate:modelValue":o[0]||(o[0]=a=>m.value=a),label:l(t)("form.name"),type:"text"},null,8,["modelValue","label"]),d(v,{modelValue:p.value,"onUpdate:modelValue":o[1]||(o[1]=a=>p.value=a),label:l(t)("form.email"),type:"email"},null,8,["modelValue","label"]),d(v,{modelValue:f.value,"onUpdate:modelValue":o[2]||(o[2]=a=>f.value=a),label:l(t)("form.phone_number"),type:"tel"},null,8,["modelValue","label"]),e("div",H,[e("label",P,[e("span",Y,s(l(t)("form.message")),1)]),y(e("textarea",{"onUpdate:modelValue":o[3]||(o[3]=a=>_.value=a),class:"textarea textarea-bordered",type:"text",placeholder:l(t)("form.descriptive_message"),required:""},null,8,z),[[$,_.value]])]),e("div",J,[e("label",K,[e("span",L,s(l(t)("form.interested_in")),1)]),y(e("select",{"onUpdate:modelValue":o[4]||(o[4]=a=>b.value=a),class:"select select-bordered w-full",required:""},[e("option",Q,s(l(t)("form.select.selection")),1),e("option",null,s(l(t)("form.select.order")),1),R,e("option",null,s(l(t)("form.select.job")),1),e("option",null,s(l(t)("form.select.other")),1)],512),[[j,b.value]])]),e("button",W,s(l(t)("form.submit")),1)],544)])]))}};export{te as default};
