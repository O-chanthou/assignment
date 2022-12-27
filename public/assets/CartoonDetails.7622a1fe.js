import{_ as B,f as h,h as g,z as V,o as i,c as d,e as f,w,T as y,a as e,u as s,p as n,t,q as E,F as $,r as b,g as C,k as T,l as k,x as L,y as N}from"./index.4ed40f8b.js";import{u as P}from"./CartoonStore.0572f68d.js";import"./firebase-config.2a97ce7f.js";const u=l=>(L("data-v-4e55d8a1"),l=l(),N(),l),z={class:"ctn-detail-container"},A=["src"],R={class:"ctn-detail"},M={class:"btn-watch-fav"},O={class:"watch"},H=u(()=>e("i",{class:"material-icons size-white color"}," play_circle_filled",-1)),j={class:"ctn-title"},G={class:"ctn-rating"},J=["href"],K=u(()=>e("i",{class:"material-icons"}," videocam ",-1)),Q=u(()=>e("a",{class:"quality"},"HD",-1)),U={class:"rating"},W=u(()=>e("div",{class:"description"},[e("p",null," Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem iure molestiae, consequuntur laudantium ab aperiam optio aliquam numquam nisi eaque voluptatibus mollitia illum magni iusto! ")],-1)),X={class:"parent"},Y={class:"info-left"},Z={class:"episode"},x={class:"release"},ee={class:"genre"},te={class:"info-right"},se={class:"duration"},ae={class:"creator"},oe=u(()=>e("div",{class:"spacer"},null,-1)),ie={__name:"CartoonDetails",props:{id:String},setup(l){const F=l,D=h(()=>C(()=>import("./Preloader.9409cb3c.js"),["assets/Preloader.9409cb3c.js","assets/index.4ed40f8b.js","assets/index.9ab57275.css","assets/Preloader.4031abe0.css"])),q=h(()=>C(()=>import("./ToastNotification.113ed359.js"),["assets/ToastNotification.113ed359.js","assets/index.4ed40f8b.js","assets/index.9ab57275.css","assets/ToastNotification.4d78b82b.css"])),r=g(!1),v=g(!1),m=P();m.fetchCartoonsFB(F.id);const{cartoonDetail:o,isLoading:I,updateMsg:p}=V(m),S=(a,_)=>{m.toggleFavoriteFB(a,_).then(c=>{console.log("updateMsg::: "+p.value),p.value=="success"?(v.value=!0,r.value=!0,setTimeout(()=>r.value=!1,550)):(r.value=!0,setTimeout(()=>r.value=!1,550))})};return(a,_)=>(i(),d("div",z,[f(y,{name:"preloader"},{default:w(()=>[s(I)?(i(),T(s(D),{key:0})):k("",!0)]),_:1}),e("img",{class:"ctn-image",src:s(o).image,alt:"Poster Image",onerror:"src='/src/assets/cartoon.png'; title='image not found'"},null,8,A),e("div",R,[e("div",M,[e("a",O,[H,n(" "+t(a.$t("detail.watch-now")),1)]),e("a",{class:"fav",onClick:_[0]||(_[0]=c=>S(l.id,s(o).isFav))},[e("i",{class:E(["material-icons size color-black",{active:s(o).isFav}])},"favorite",2),n(" "+t(a.$t("detail.add-to-fav")),1)])]),e("div",j,[e("h1",null,t(s(o).title),1)]),e("div",G,[e("a",{class:"trailer",href:"https://www.youtube.com/results?search_query="+s(o).title,target:"_blank"},[K,n(" "+t(a.$t("detail.trailer")),1)],8,J),Q,e("a",U,t(a.$t("detail.rating"))+": "+t(s(o).rating),1)]),W,e("div",X,[e("div",Y,[e("div",Z,[e("b",null,t(a.$t("detail.ep"))+":",1),n(" "+t(s(o).episodes),1)]),e("div",x,[e("b",null,t(a.$t("detail.release"))+":",1),n(" "+t(s(o).year),1)]),e("div",ee,[e("b",null,t(a.$t("detail.genre"))+": ",1),(i(!0),d($,null,b(s(o).genre,c=>(i(),d("span",null,t(a.$t(`genre.${c}`))+", ",1))),256))])]),e("div",te,[e("div",se,[e("b",null,t(a.$t("detail.duration"))+": ",1),n(" "+t(s(o).runtime_in_minutes)+" min ",1)]),e("div",ae,[e("b",null,t(a.$t("detail.creator"))+" : ",1),(i(!0),d($,null,b(s(o).creator,c=>(i(),d("span",null,t(c),1))),256))])]),oe])]),f(y,{name:"toast"},{default:w(()=>[r.value?(i(),T(s(q),{key:0,msg:v.value},null,8,["msg"])):k("",!0)]),_:1})]))}},ce=B(ie,[["__scopeId","data-v-4e55d8a1"]]);export{ce as default};
