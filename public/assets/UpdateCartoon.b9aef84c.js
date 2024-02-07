import{_ as H,f as $,h as y,i as J,z as Q,B as W,j as X,o as n,c as g,a as o,e as C,w as E,T as U,t as s,m as d,v as c,n as w,p as k,F as N,r as D,u as f,g as S,k as F,l as P,q as Y,x as Z,y as x,C as ee}from"./index.360080b6.js";import{a as h,u as te}from"./all-genre-type.d915d15e.js";import{u as ae}from"./CartoonStore.43857039.js";import"./firebase-config.2a97ce7f.js";const T=p=>(Z("data-v-95aa298d"),p=p(),x(),p),le=["onSubmit"],oe={class:"add-ctn-container"},se={class:"form-input"},re=["placeholder"],ne=["placeholder"],ie=["placeholder","onKeyup"],ue={class:"tip"},de=T(()=>o("b",null,"Alt",-1)),ce=T(()=>o("b",null,",",-1)),pe=T(()=>o("br",null,null,-1)),me=["placeholder"],ve=["onClick"],ge=T(()=>o("br",null,null,-1)),fe=["placeholder"],_e=["placeholder"],ye={class:"form-img-submit"},he={class:"choose-img"},Te={class:"btn-submit-form-ctn"},be={__name:"UpdateCartoon",props:{id:String},setup(p){const I=p,q=$(()=>S(()=>import("./Preloader.26bb55c6.js"),["assets/Preloader.26bb55c6.js","assets/index.360080b6.js","assets/index.9ab57275.css","assets/Preloader.4031abe0.css"])),A=$(()=>S(()=>import("./ToastNotification.1c1360fe.js"),["assets/ToastNotification.1c1360fe.js","assets/index.360080b6.js","assets/index.9ab57275.css","assets/ToastNotification.4d78b82b.css"])),M=$(()=>S(()=>import("./PreviewImage.8ef1db8e.js"),["assets/PreviewImage.8ef1db8e.js","assets/index.360080b6.js","assets/index.9ab57275.css","assets/PreviewImage.3c45af48.css"])),i=y(""),m=y(!1),L=y(!1),u=J({fileName:"",imageBase64:""}),b=ae();b.fetchCartoonsFB(I.id).then(e=>{e=="loaded"&&O()});const{cartoonDetail:r,isLoading:_,updateMsg:V}=Q(b),t=y({title:"",year:"",creatorList:[],rating:"",genreType:"",runtime:"",episode:"",image:""});W(()=>{t.value.title=r.value.title,t.value.year=r.value.year,t.value.creatorList=r.value.creator,t.value.rating=r.value.rating,t.value.genreType=r.value.genre,t.value.runtime=r.value.runtime_in_minutes,t.value.episode=r.value.episodes,t.value.image=r.value.image}),X(()=>{const e=h.value,a=t.value.genreType;a==null||a.map(l=>e.find(v=>v.name==l).isSelect=!1)});const O=()=>{const e=h.value,a=t.value.genreType;return a==null?void 0:a.map(l=>e.find(v=>v.name==l).isSelect=!0)},R=e=>{e.key===","&&i.value&&(t.value.creatorList.includes(i.value)||t.value.creatorList.push(i.value),i.value="")},G=e=>{t.value.creatorList.splice(e,1),console.log(t.value.creatorList)},j=e=>{t.value.genreType.includes(e)?t.value.genreType.forEach((a,l)=>{a==e&&(t.value.genreType.splice(l,1),B(e))}):(t.value.genreType.push(e),B(e)),console.log(t.value.genreType)},B=e=>{h.value.forEach(a=>{a.name==e&&(a.isSelect=!a.isSelect)})},z=e=>{u.fileName=e.fileName,u.imageBase64=e.imageBase64,console.log(u)},K=async()=>{_.value=!0;const e=t.value;u.fileName!==""&&u.imageBase64!==""&&await te(u).then(l=>{e.image=l});const a={title:e.title,year:e.year,creator:e.creatorList,rating:e.rating,genre:e.genreType,runtime:e.runtime,episode:e.episode,image:e.image,isFav:r.value.isFav};b.updateCartoonFB(I.id,a).then(l=>{console.log("updateMsg:  "+V.value),V.value==="success"?(L.value=!0,m.value=!0,_.value=!1,setTimeout(()=>m.value=!1,550),setTimeout(()=>ee.go(-1),600)):(_.value=!1,m.value=!0,setTimeout(()=>m.value=!1,550))})};return(e,a)=>(n(),g("form",{onSubmit:w(K,["prevent"])},[o("div",oe,[C(U,{name:"preloader"},{default:E(()=>[f(_)?(n(),F(f(q),{key:0})):P("",!0)]),_:1}),o("div",se,[o("label",null,s(e.$t("create.title"))+":",1),d(o("input",{type:"text",placeholder:e.$t("create.title"),required:"","onUpdate:modelValue":a[0]||(a[0]=l=>t.value.title=l)},null,8,re),[[c,t.value.title]]),o("label",null,s(e.$t("create.year"))+":",1),d(o("input",{type:"number",min:"0",placeholder:e.$t("create.year"),required:"","onUpdate:modelValue":a[1]||(a[1]=l=>t.value.year=l)},null,8,ne),[[c,t.value.year]]),o("label",null,s(e.$t("create.creator"))+":",1),d(o("input",{type:"text",placeholder:e.$t("create.creator"),"onUpdate:modelValue":a[2]||(a[2]=l=>i.value=l),onKeyup:w(R,["alt"])},null,40,ie),[[c,i.value]]),o("div",ue,[o("p",null,[k(s(e.$t("create.add-click"))+" ",1),de,k(" + "),ce,k(" "+s(e.$t("create.and-remove-click-value")),1)])]),(n(!0),g(N,null,D(t.value.creatorList,l=>(n(),g("div",{key:l,class:"creator",onClick:a[3]||(a[3]=v=>G(e.i))},s(l),1))),128)),pe,o("label",null,s(e.$t("create.rating"))+":",1),d(o("input",{type:"text",placeholder:e.$t("create.rating"),"onUpdate:modelValue":a[4]||(a[4]=l=>t.value.rating=l)},null,8,me),[[c,t.value.rating]]),o("label",null,s(e.$t("create.genre"))+":",1),(n(!0),g(N,null,D(f(h),l=>(n(),g("div",{class:Y(["genre",{active:l.isSelect}]),key:l.id,onClick:v=>j(l.name)},s(e.$t(`genre.${l.name}`)),11,ve))),128)),ge,o("label",null,s(e.$t("create.runtime"))+":",1),d(o("input",{type:"number",placeholder:e.$t("create.runtime-min"),required:"","onUpdate:modelValue":a[5]||(a[5]=l=>t.value.runtime=l)},null,8,fe),[[c,t.value.runtime]]),o("label",null,s(e.$t("create.ep"))+":",1),d(o("input",{type:"number",placeholder:e.$t("create.ep"),required:"","onUpdate:modelValue":a[6]||(a[6]=l=>t.value.episode=l)},null,8,_e),[[c,t.value.episode]])]),o("div",ye,[o("div",he,[C(f(M),{onEmitImage:z,propImage:t.value.image},null,8,["propImage"])]),o("div",Te,[o("button",null,s(e.$t("update-delete.update-cartoon")),1)])])]),C(U,{name:"toast"},{default:E(()=>[m.value?(n(),F(f(A),{key:0,msg:L.value},null,8,["msg"])):P("",!0)]),_:1})],40,le))}},Ie=H(be,[["__scopeId","data-v-95aa298d"]]);export{Ie as default};