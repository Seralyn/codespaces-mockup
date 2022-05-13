"use strict";(()=>{var ie=Object.defineProperty;var o=(P,x)=>ie(P,"name",{value:x,configurable:!0});(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[3826],{1314:(P,x,c)=>{c.d(x,{N:()=>u,x:()=>m});var _=c(34782);let p=null;(async function(){await _.x,l()})();function u(i){m(a(i))}o(u,"announceFromElement");function m(i){!p||(p.textContent="",p.textContent=i)}o(m,"announce");function l(){p=document.createElement("div"),p.setAttribute("aria-live","polite"),p.classList.add("sr-only"),document.body.append(p)}o(l,"createNoticeContainer");function a(i){return(i.getAttribute("aria-label")||i.innerText||"").trim()}o(a,"getTextContent")},83954:(P,x,c)=>{var _=c(64463),p=c(58797);(0,_.N7)(".js-check-all-container",{constructor:HTMLElement,subscribe:p.Z})},79046:(P,x,c)=>{c.d(x,{O4:()=>R,jo:()=>O,Qp:()=>j});var _=c(70130),p=c(59753);const u="ontransitionend"in window;function m(d,w){if(!u){w();return}const S=Array.from(d.querySelectorAll(".js-transitionable"));d.classList.contains("js-transitionable")&&S.push(d);for(const L of S){const I=l(L);L instanceof HTMLElement&&(L.addEventListener("transitionend",()=>{L.style.display="",L.style.visibility="",I&&a(L,function(){L.style.height=""})},{once:!0}),L.style.boxSizing="content-box",L.style.display="block",L.style.visibility="visible",I&&a(L,function(){L.style.height=getComputedStyle(L).height}),L.offsetHeight)}w();for(const L of S)if(L instanceof HTMLElement&&l(L)){const I=getComputedStyle(L).height;L.style.boxSizing="",I==="0px"?L.style.height=`${L.scrollHeight}px`:L.style.height="0px"}}o(m,"performTransition");function l(d){return getComputedStyle(d).transitionProperty==="height"}o(l,"isTransitioningHeight");function a(d,w){d.style.transition="none",w(),d.offsetHeight,d.style.transition=""}o(a,"withoutTransition");var i=c(96776);function n(d,w){w.find(S=>{const L=d.querySelectorAll(S),I=L[L.length-1];if(I&&document.activeElement!==I)return I.focus(),!0})}o(n,"findAndFocusByQuerySelector");function t(d){n(d,[".js-focus-on-dismiss","input[autofocus], textarea[autofocus]"])}o(t,"restoreAutofocus");function s(d){!d.classList.contains("tooltipped")||(d.classList.remove("tooltipped"),d.addEventListener("mouseleave",()=>{d.classList.add("tooltipped"),d.blur()},{once:!0}))}o(s,"hideTooltip");function f(d){return[...document.querySelectorAll(".js-details-container")].filter(w=>w.getAttribute("data-details-container-group")===d)}o(f,"groupMembers");function C(d){return[...d.querySelectorAll(".js-details-target")].filter(w=>w.closest(".js-details-container")===d)}o(C,"containerTargets");function T(d,w){const S=d.getAttribute("data-details-container-group");return S?((0,i.uQ)(d,()=>{for(const L of f(S))L!==d&&M(L,w)}),S):null}o(T,"toggleGroup");function M(d,w){d.classList.toggle("open",w),d.classList.toggle("Details--on",w);for(const S of C(d))S.setAttribute("aria-expanded",w.toString())}o(M,"updateOpenState");function j(d,w){var S,L;const I=d.getAttribute("data-details-container")||".js-details-container",$=d.closest(I),z=(S=w==null?void 0:w.force)!=null?S:!$.classList.contains("open"),V=(L=w==null?void 0:w.withGroup)!=null?L:!1;m($,()=>{M($,z);const r=V?T($,z):null;Promise.resolve().then(()=>{t($),s(d),$.dispatchEvent(new CustomEvent("details:toggled",{bubbles:!0,cancelable:!1,detail:{open:z}})),r&&$.dispatchEvent(new CustomEvent("details:toggled-group",{bubbles:!0,cancelable:!1,detail:{open:z,group:r}}))})})}o(j,"toggleDetailsTarget");function O(d){const w=d.getAttribute("data-details-container")||".js-details-container",L=d.closest(w).classList;return L.contains("Details--on")||L.contains("open")}o(O,"isDetailsTargetExpanded");function D(d){const w=d.altKey,S=d.currentTarget;j(S,{withGroup:w}),d.preventDefault()}o(D,"handleDetailsTargetClick"),(0,p.on)("click",".js-details-target",D),(0,_.Z)(function({target:d}){d&&R(d)});function R(d){let w=!1,S=d.parentElement;for(;S;)S.classList.contains("Details-content--shown")&&(w=!0),S.classList.contains("js-details-container")&&(S.classList.toggle("open",!w),S.classList.toggle("Details--on",!w),w=!1),S=S.parentElement}o(R,"ensureExpanded")},64909:(P,x,c)=>{var _=c(57443),p=c(59753),u=c(1314);function m(e,h,y,v={}){var g;const E=(g=v.limit)!=null?g:1/0;let k=0;for(const W of e.children){const A=y(W,h);A==null||(A&&k<E?(k++,l(W,!0)):l(W,!1))}return k}o(m,"filterList");function l(e,h){e.style.display=h?"":"none",e.hidden=!h}o(l,"toggle");var a=c(34821),i=c(71900);const n=new WeakMap;function t(e,h,y){const v=h.toLowerCase(),g=y.limit;let E=n.get(e);const k=e.querySelector('input[type="radio"]:checked'),W=Array.from(e.children);E||(E=Array.from(e.children),n.set(e,E));for(const U of W)e.removeChild(U),U instanceof HTMLElement&&(U.style.display="");const A=v?(0,i.W)(E,y.sortKey,a.qu):E,K=g==null?A:A.slice(0,g),F=K.length,B=document.createDocumentFragment();for(const U of K)B.appendChild(U);let N=!1;if(k instanceof HTMLInputElement)for(const U of B.querySelectorAll('input[type="radio"]:checked'))U instanceof HTMLInputElement&&U.value!==k.value&&(U.checked=!1,N=!0);e.appendChild(B),k&&N&&k.dispatchEvent(new Event("change",{bubbles:!0}));const X=e.querySelectorAll(".js-divider");for(const U of X)U.classList.toggle("d-none",Boolean(v&&v.trim().length>0));return F}o(t,"filterSortList");var s=c(12020),f=c(64463),C=c(85830);let T=new AbortController;const M=new WeakMap,j=new WeakMap,O=new WeakMap;async function D(e,h,y,v){y&&!M.has(e)&&w(e);const g=await R(e,h,y,v);return e.hasAttribute("data-filterable-data-pre-rendered")&&(g.suggestions=d(e,y)),g}o(D,"getData");async function R(e,h,y,v){const g=new URL(e.getAttribute("data-filterable-src")||"",window.location.origin);if(g.pathname==="/")throw new Error("could not get data-filterable-src");if(y){const E=M.get(e),k=h.trim();if(E.lastSearchText===k)return E.lastSearchResult;const W=E.lastSearchText===void 0;E.lastSearchText=k;const A=e.getAttribute("data-filterable-for")||"",K=document.getElementById(A);if(T.abort(),k===""&&!v)E.lastSearchResult={suggestions:[],users:[]};else{T=new AbortController;const F={headers:{Accept:"application/json","X-Requested-With":"XMLHttpRequest"},signal:T.signal},B=g.searchParams||new URLSearchParams;B.set("q",h),B.set("typeAhead","true"),g.search=B.toString(),W||K==null||K.classList.add("is-loading");const N=await fetch(g.toString(),F);E.lastSearchResult=await N.json()}return K==null||K.classList.remove("is-loading"),E.lastSearchResult}else{const E={headers:{Accept:"application/json","X-Requested-With":"XMLHttpRequest"}};return await(await fetch(g.toString(),E)).json()}}o(R,"fetchQueryIfNeeded");function d(e,h){const y=[],v=e.querySelectorAll(".js-filterable-suggested-user");if(v.length>0)for(const g of e.querySelectorAll(".js-filterable-suggested-user"))g.classList.remove("js-filterable-suggested-user"),y.push({name:g.querySelector(".js-description").textContent,login:g.querySelector(".js-username").textContent,selected:g.getAttribute("aria-checked")==="true",element:g,suggestion:!0});if(h){const g=M.get(e);return v.length>0&&(g.cachedSuggestions=y,g.userResultCache.clear()),g.cachedSuggestions}return y}o(d,"getPreRenderedUsers");function w(e){M.set(e,{lastSearchResult:{suggestions:[],users:[]},cachedSuggestions:[],userResultCache:new Map})}o(w,"initializeTypeAheadCache");async function S(e,h,y){var v,g;O.set(e,h),await(0,C.Z)();const E=e.hasAttribute("data-filterable-show-suggestion-header"),k=e.hasAttribute("data-filterable-type-ahead"),W=e.hasAttribute("data-filterable-type-ahead-query-on-empty");let A=j.get(e);if(!A)try{A=await D(e,h,k,W),k||j.set(e,A)}catch(H){if(H.name==="AbortError")return-1;throw H}if(!k&&O.get(e)!==h)return-1;const K=y.limit,F=e.querySelector("template"),B={};for(const H of e.querySelectorAll("input[type=hidden]"))B[`${H.name}${H.value}`]=H;let N=F.nextElementSibling;for(;N;){const H=N;N=H.nextElementSibling,H instanceof HTMLElement&&(k||H.getAttribute("aria-checked")==="true"||H.classList.contains("select-menu-divider"))?H.hidden=!0:H.remove()}let X=0;const U=h.trim()==="",G=document.createDocumentFragment(),Z=e.querySelector(".js-divider-suggestions"),J=e.querySelector(".js-divider-rest"),oe=M.get(e);function Y(H){const te=`${H.login} ${H.name}`.toLowerCase().trim().includes(h),Q=!(K!=null&&X>=K)&&te;if(Q||H.selected||H.suggestion){const q=L(H,F,B,oe);q.hidden=!Q,Q&&X++,G.appendChild(q)}}o(Y,"addItem");let ee=!1;if(Z&&(((v=A.suggestions)==null?void 0:v.length)>0||E&&A.users.length>0)){const H=(g=A.suggestions)!=null?g:[],te=H.filter(q=>q.selected),Q=H.filter(q=>!q.selected);for(const q of te)Y(q);G.appendChild(Z);const ne=X;for(const q of Q)Y(q);ee=X>ne,Z.hidden=!ee||k&&!U,E&&A.users.length>0&&(Z.hidden=!U)}J&&G.appendChild(J);const se=X;for(const H of A.users)Y(H);return J&&(J.hidden=se===X||!ee),e.append(G),X}o(S,"substringMemoryFilterList");function L(e,h,y,v){if(e.element!=null)return e.element;if(v==null?void 0:v.userResultCache.has(e.id))return v.userResultCache.get(e.id);const g=h.content.cloneNode(!0),E=g.querySelector("input[type=checkbox], input[type=radio]");e.type&&(E.name=`reviewer_${e.type}_ids[]`),E.value=e.id;const k=`${E.name}${e.id}`;let W=e.selected;y[k]&&(W=!0,y[k].remove(),delete y[k]);const A=g.querySelector("[role^=menuitem]");W&&(A.setAttribute("aria-checked","true"),E.checked=!0),e.disabled&&A.setAttribute("aria-disabled","true");const K=g.querySelector(".js-username");K&&(K.textContent=e.login);const F=g.querySelector(".js-description");F&&(F.textContent=e.name);const B=g.querySelector(".js-extended-description");B&&(e.description?B.textContent=e.description:B.remove());const N=g.querySelector(".js-avatar");return N.className=`${N.className} ${e.class}`,N.src=e.avatar,e.element=A,v==null||v.userResultCache.set(e.id,A),e.element}o(L,"createReviewerItem"),(0,f.N7)(".js-filterable-field",{constructor:HTMLInputElement,initialize(e){e.autocomplete||(e.autocomplete="off");const h=e.hasAttribute("type-ahead")?200:null;let y=e.value;async function v(E){y!==E.value&&(y=E.value,await(0,s.gJ)(),(0,p.f)(E,"filterable:change"))}o(v,"onInputChange");async function g(){y=e.value,await(0,s.gJ)(),(0,p.f)(e,"filterable:change")}return o(g,"onFocus"),{add(E){E.addEventListener("focus",g),(0,_.oq)(E,v,{wait:h}),document.activeElement===E&&g()},remove(E){E.removeEventListener("focus",g),(0,_.iU)(E,v)}}}}),(0,p.on)("filterable:change",".js-filterable-field",async function(e){const h=e.currentTarget,y=h.value.trim().toLowerCase(),v=document.querySelectorAll(`[data-filterable-for="${h.id}"]`);for(const g of v){const E=await $(g,y);if(E===-1)return;document.activeElement&&h===document.activeElement&&(0,u.x)(`${E} results found.`),g.dispatchEvent(new CustomEvent("filterable:change",{bubbles:!0,cancelable:!1,detail:{inputField:h}}))}});function I(e){return e.hasAttribute("data-filter-value")?e.getAttribute("data-filter-value").toLowerCase().trim():e.textContent.toLowerCase().trim()}o(I,"defaultText");async function $(e,h){const y=parseInt(e.getAttribute("data-filterable-limit"),10)||null;let v=0;switch(e.getAttribute("data-filterable-type")){case"fuzzy":{const g=h.toLowerCase();v=t(e,h,{limit:y,sortKey:o(k=>{const W=I(k),A=(0,a.EW)(W,g);return A>0?{score:A,text:W}:null},"sortKey")});break}case"substring":v=m(e,h.toLowerCase(),V,{limit:y});break;case"substring-memory":v=await S(e,h,{limit:y});break;default:v=m(e,h.toLowerCase(),z,{limit:y});break}return e.classList.toggle("filterable-active",h.length>0),e.classList.toggle("filterable-empty",v===0),v}o($,"filter");function z(e,h){return e.textContent.toLowerCase().trim().startsWith(h)}o(z,"prefix");function V(e,h){return e.hasAttribute("data-skip-substring-filter")||e.classList.contains("select-menu-no-results")?null:(e.querySelector("[data-filterable-item-text]")||e).textContent.toLowerCase().trim().includes(h)}o(V,"substring"),(0,p.on)("filterable:change","details-menu .select-menu-list",function(e){const h=e.currentTarget,y=h.querySelector(".js-new-item-form");y&&r(h,y,e.detail.inputField.value)});function r(e,h,y){const v=y.length>0&&!b(e,y);if(e.classList.toggle("is-showing-new-item-form",v),!v)return;h.querySelector(".js-new-item-name").textContent=y;const g=h.querySelector(".js-new-item-value");(g instanceof HTMLInputElement||g instanceof HTMLButtonElement)&&(g.value=y)}o(r,"toggleForm");function b(e,h){for(const y of e.querySelectorAll("[data-menu-button-text]"))if(y.textContent.toLowerCase().trim()===h.toLowerCase())return!0;return!1}o(b,"itemExists"),(0,f.N7)("tab-container .select-menu-list .filterable-empty, details-menu .select-menu-list .filterable-empty",{add(e){e.closest(".select-menu-list").classList.add("filterable-empty")},remove(e){e.closest(".select-menu-list").classList.remove("filterable-empty")}})},11997:(P,x,c)=>{var _=c(59753);(0,_.on)("click",".js-flash-close",function(p){const u=p.currentTarget.closest(".flash-messages");p.currentTarget.closest(".flash").remove(),u&&!u.querySelector(".flash")&&u.remove()})},70130:(P,x,c)=>{c.d(x,{Z:()=>m});var _=c(34782);const p=[];let u=0;function m(t){(async function(){p.push(t),await _.x,l()})()}o(m,"hashChange"),m.clear=()=>{p.length=u=0};function l(){const t=u;u=p.length,a(p.slice(t),null,window.location.href)}o(l,"runRemainingHandlers");function a(t,s,f){const C=window.location.hash.slice(1),T=C?document.getElementById(C):null,M={oldURL:s,newURL:f,target:T};for(const j of t)j.call(null,M)}o(a,"runHandlers");let i=window.location.href;window.addEventListener("popstate",function(){i=window.location.href}),window.addEventListener("hashchange",function(t){const s=window.location.href;try{a(p,t.oldURL||i,s)}finally{i=s}});let n=null;document.addEventListener("pjax:start",function(){n=window.location.href}),document.addEventListener("pjax:end",function(){a(p,n,window.location.href)})},42474:(P,x,c)=>{c.d(x,{h:()=>p});var _=c(59753);(0,_.on)("click",".js-skip-to-content",function(n){const t=document.getElementById("start-of-content");if(t){const s=t.nextElementSibling;s instanceof HTMLElement&&(s.setAttribute("tabindex","-1"),s.setAttribute("data-skipped-to-content","1"),s.focus())}n.preventDefault()});function p(){let n=!1;const t=document.getElementById("start-of-content");if(t){const s=t.nextElementSibling;if(s instanceof HTMLElement)return n=s.getAttribute("data-skipped-to-content")==="1",n&&s.removeAttribute("data-skipped-to-content"),n}}o(p,"hasSkippedToContent");const u="ontouchstart"in document;function m(){return window.innerWidth>1012}o(m,"compatibleDesktop");for(const n of document.querySelectorAll(".HeaderMenu-details"))n.addEventListener("toggle",a),u||(n.addEventListener("mouseover",i),n.addEventListener("mouseleave",i));let l=!1;function a(n){if(!l){l=!0;for(const t of document.querySelectorAll(".HeaderMenu-details"))t!==n.currentTarget&&t.removeAttribute("open");setTimeout(()=>l=!1)}}o(a,"onMenuToggle");function i(n){const{currentTarget:t}=n;!(t instanceof HTMLElement)||!m()||(n.type==="mouseover"&&n instanceof MouseEvent?n.target instanceof Node&&n.relatedTarget instanceof Node&&t.contains(n.target)&&!t.contains(n.relatedTarget)&&t.setAttribute("open",""):t.removeAttribute("open"))}o(i,"onMenuHover")},25522:(P,x,c)=>{var _=c(82453),p=c(11793),u=c(64463);(0,u.N7)("[data-hotkey]",{constructor:HTMLElement,add(l){if((0,_.Ty)())(0,p.N9)(l);else{const a=l.getAttribute("data-hotkey");if(a){const i=m(a);i.length>0&&(l.setAttribute("data-hotkey",i),(0,p.N9)(l))}}},remove(l){(0,p.Tz)(l)}});function m(l){return l.split(",").filter(i=>(0,_.YE)(i)).join(",")}o(m,"filterOutCharacterKeyShortcuts")},76006:(P,x,c)=>{function _(l){const a=l.createElement("textarea");return a.style.position="fixed",a.style.top="0",a.style.left="0",a.style.opacity="0",l.body.appendChild(a),a.focus(),()=>(a.blur(),a.remove(),a.value)}o(_,"captureKeypresses");var p=c(82036),u=c(59753);let m=null;(0,u.on)("pjax:click",".js-pjax-capture-input",function(){m=_(document)}),(0,u.on)("pjax:end","#js-repo-pjax-container",function(){if(m){const l=m(),a=document.querySelector(".js-pjax-restore-captured-input");a instanceof HTMLInputElement&&l&&(0,p.Se)(a,l),m=null}})},7796:(P,x,c)=>{var _=c(40728),p=c(59753);(0,p.on)("pjax:click",".js-pjax-history-navigate",function(u){u.currentTarget instanceof HTMLAnchorElement&&(u.currentTarget.href===(0,_._C)()?(history.back(),u.detail.relatedEvent.preventDefault(),u.preventDefault()):u.currentTarget.href===(0,_.Mw)()&&(history.forward(),u.detail.relatedEvent.preventDefault(),u.preventDefault()))})},15528:(P,x,c)=>{var _=c(82762),p=c(64463);function u(l){if(l.id)return`#${l.id}`;throw new Error("pjax container has no id")}o(u,"getContainerSelector");function m(l,a){const i=(0,_.W)(l),n=u(i),t=new URL(l.href,window.location.origin),s=new URLSearchParams(t.search.slice(1));return t.search=s.toString(),fetch(t.href,{headers:Object.assign({Accept:"text/html","X-PJAX":"true","X-PJAX-Container":n,"X-Requested-With":"XMLHttpRequest"},a&&a.headers)})}o(m,"pjaxFetch"),(0,p.N7)("[data-pjax-container] link[rel=pjax-prefetch]",{constructor:HTMLLinkElement,initialize(l){m(l,{headers:{Purpose:"prefetch"}})}})},82762:(P,x,c)=>{c.d(x,{W:()=>p,r:()=>_});function _(u){return u.getAttribute("data-pjax-preserve-scroll")!=null?!1:0}o(_,"preserveScrollTo");function p(u){let m=u;for(;m;){const l=m.getAttribute("data-pjax");if(l&&l!=="true")return document.querySelector(l);m=m.parentElement&&m.parentElement.closest("[data-pjax]")}return u.closest("[data-pjax-container]")}o(p,"detectContainer")},53488:(P,x,c)=>{var _=c(14037),p=c(59753);(0,p.on)("click",".js-smoothscroll-anchor",function(u){const m=u.currentTarget;if(!(m instanceof HTMLAnchorElement))return;const l=(0,_.Kt)(document,m.hash);!l||(l.scrollIntoView({behavior:"smooth"}),u.preventDefault())})},24930:(P,x,c)=>{c.d(x,{O3:()=>m,_g:()=>p,lB:()=>u});let _=0;function p(){return _}o(p,"getBaseStickyHeaderHeight");function u(l){_=l,l?document.body.style.setProperty("--base-sticky-header-height",`${l}px`):document.body.style.removeProperty("--base-sticky-header-height")}o(u,"setBaseStickyHeaderHeight");const m="var(--base-sticky-header-height, 0px)"},54235:(P,x,c)=>{c.d(x,{H:()=>s});var _=c(42474),p=c(34782),u=c(64463),m=c(24930);let l=!1;const a=[];function i(){a.length?n():t()}o(i,"manageObservers");function n(){l||(window.addEventListener("resize",f),document.addEventListener("scroll",f),l=!0)}o(n,"addObservers");function t(){window.removeEventListener("resize",f),document.removeEventListener("scroll",f),l=!1}o(t,"removeObservers");function s(){C(!0)}o(s,"forceStickyRelayout");function f(){C()}o(f,"checkElementsForStickingHandler");function C(r=!1){for(const b of a)if(b.element.offsetHeight>0){const{element:e,placeholder:h,top:y}=b,v=e.getBoundingClientRect();if(h){const g=h.getBoundingClientRect();e.classList.contains("is-stuck")?g.top>z(e,y)?j(b):O(b):v.top<=z(e,y)?M(b):r&&O(b)}else v.top-z(e,y)<.1?M(b):j(b)}}o(C,"checkElementsForSticking");function T(r){const{position:b}=window.getComputedStyle(r);return/sticky/.test(b)}o(T,"browserHasSticky");function M({element:r,placeholder:b,top:e}){if(b){const h=r.getBoundingClientRect();V(r,z(r,e)),r.style.left=`${h.left}px`,r.style.width=`${h.width}px`,r.style.marginTop="0",r.style.position="fixed",b.style.display="block"}r.classList.add("is-stuck")}o(M,"pinSet");function j({element:r,placeholder:b}){b&&(r.style.position="static",r.style.marginTop=b.style.marginTop,b.style.display="none"),r.classList.remove("is-stuck")}o(j,"unpinSet");function O({element:r,placeholder:b,offsetParent:e,top:h}){if(b&&!(0,_.h)()){const y=r.getBoundingClientRect(),v=b.getBoundingClientRect();if(V(r,z(r,h)),r.style.left=`${v.left}px`,r.style.width=`${v.width}px`,e){const g=e.getBoundingClientRect();g.bottom<y.height+parseInt(String(h))&&(r.style.top=`${g.bottom-y.height}px`)}}}o(O,"updatePinnedSet");function D(r){if(T(r))return null;const b=r.previousElementSibling;if(b&&b.classList.contains("is-placeholder"))return b;const e=document.createElement("div");return e.style.visibility="hidden",e.style.display="none",e.style.height=window.getComputedStyle(r).height,e.className=r.className,e.classList.remove("js-sticky"),e.classList.add("is-placeholder"),r.parentNode.insertBefore(e,r)}o(D,"findOrCreatePlaceholder");function R(r){const b=D(r),e=window.getComputedStyle(r).position;r.style.position="static";const h=r.offsetParent;r.style.position="fixed";const y=$(r),v={element:r,placeholder:b,offsetParent:h,top:y==="auto"?0:parseInt(y||"0")};r.style.position=e,a.push(v)}o(R,"createSet");function d(r){const b=a.map(e=>e.element).indexOf(r);a.splice(b,1)}o(d,"removeSet");async function w(r){await p.C,R(r),C(),i()}o(w,"initializeSet"),(0,u.N7)(".js-sticky",{constructor:HTMLElement,add(r){w(r)},remove(r){d(r),i()}}),(0,u.N7)(".js-notification-top-shelf",{constructor:HTMLElement,add(r){S(r)},remove(){for(const r of document.querySelectorAll(".js-notification-top-shelf"))r.remove();(0,m._g)()>0&&((0,m.lB)(0),L(),s())}}),(0,u.N7)(".js-notification-shelf-offset-top, .js-position-sticky",{constructor:HTMLElement,add:I});async function S(r){if(r.offsetParent===null)return;await p.C;const b=Math.floor(r.getBoundingClientRect().height);b>0&&((0,m.lB)(b),L(),s())}o(S,"initializeNotificationShelf");function L(){for(const r of document.querySelectorAll(".js-position-sticky, .js-notification-shelf-offset-top"))I(r)}o(L,"updateTopOffsets");function I(r){if(r.classList.contains("js-notification-top-shelf"))return;const b=parseInt($(r))||0;V(r,b+(0,m._g)())}o(I,"updateTopOffset");function $(r){const b=r.getAttribute("data-original-top");if(b!=null)return b;const e=window.getComputedStyle(r).top;return r.setAttribute("data-original-top",e),e}o($,"getOriginalTop");function z(r,b){return r.classList.contains("js-notification-top-shelf")?b:b+(0,m._g)()}o(z,"withShelfOffset");function V(r,b){r.style.setProperty("top",`${b}px`,"important")}o(V,"setTopImportant")},86276:(P,x,c)=>{c.d(x,{VZ:()=>p,_C:()=>u,cv:()=>_,oE:()=>m});function _(i){const n=i.getBoundingClientRect();return{top:n.top+window.pageYOffset,left:n.left+window.pageXOffset}}o(_,"offset");function p(i){let n=i;const t=n.ownerDocument;if(!t||!n.offsetParent)return;const s=t.defaultView.HTMLElement;if(n!==t.body){for(;n!==t.body;){if(n.parentElement instanceof s)n=n.parentElement;else return;const{position:f,overflowY:C,overflowX:T}=getComputedStyle(n);if(f==="fixed"||C==="auto"||T==="auto"||C==="scroll"||T==="scroll")break}return n instanceof Document?null:n}}o(p,"overflowParent");function u(i,n){let t=n;const s=i.ownerDocument;if(!s)return;const f=s.documentElement;if(!f||i===f)return;const C=m(i,t);if(!C)return;t=C._container;const T=t===s.documentElement&&s.defaultView?{top:s.defaultView.pageYOffset,left:s.defaultView.pageXOffset}:{top:t.scrollTop,left:t.scrollLeft},M=C.top-T.top,j=C.left-T.left,O=t.clientHeight,D=t.clientWidth,R=O-(M+i.offsetHeight),d=D-(j+i.offsetWidth);return{top:M,left:j,bottom:R,right:d,height:O,width:D}}o(u,"overflowOffset");function m(i,n){let t=i;const s=t.ownerDocument;if(!s)return;const f=s.documentElement;if(!f)return;const C=s.defaultView.HTMLElement;let T=0,M=0;const j=t.offsetHeight,O=t.offsetWidth;for(;!(t===s.body||t===n);)if(T+=t.offsetTop||0,M+=t.offsetLeft||0,t.offsetParent instanceof C)t=t.offsetParent;else return;let D,R,d;if(!n||n===s||n===s.defaultView||n===s.documentElement||n===s.body)d=f,D=l(s.body,f),R=a(s.body,f);else if(n instanceof C)d=n,D=n.scrollHeight,R=n.scrollWidth;else return;const w=D-(T+j),S=R-(M+O);return{top:T,left:M,bottom:w,right:S,_container:d}}o(m,"positionedOffset");function l(i,n){return Math.max(i.scrollHeight,n.scrollHeight,i.offsetHeight,n.offsetHeight,n.clientHeight)}o(l,"getDocumentHeight");function a(i,n){return Math.max(i.scrollWidth,n.scrollWidth,i.offsetWidth,n.offsetWidth,n.clientWidth)}o(a,"getDocumentWidth")},12020:(P,x,c)=>{c.d(x,{Dc:()=>m,g:()=>a,gJ:()=>_,rs:()=>p});function _(){return Promise.resolve()}o(_,"microtask");function p(){return new Promise(window.requestAnimationFrame)}o(p,"animationFrame");async function u(i,n){let t;const s=new Promise((f,C)=>{t=self.setTimeout(()=>C(new Error("timeout")),i)});if(!n)return s;try{await Promise.race([s,l(n)])}catch(f){throw self.clearTimeout(t),f}}o(u,"timeout");async function m(i,n){let t;const s=new Promise(f=>{t=self.setTimeout(f,i)});if(!n)return s;try{await Promise.race([s,l(n)])}catch(f){throw self.clearTimeout(t),f}}o(m,"wait");function l(i){return new Promise((n,t)=>{const s=new Error("aborted");s.name="AbortError",i.aborted?t(s):i.addEventListener("abort",()=>t(s))})}o(l,"whenAborted");function a(i){const n=[];return function(t){n.push(t),n.length===1&&queueMicrotask(()=>{const s=[...n];n.length=0,i(s)})}}o(a,"taskQueue")},71900:(P,x,c)=>{c.d(x,{W:()=>p});function*_(u,m){for(const l of u){const a=m(l);a!=null&&(yield a)}}o(_,"filterMap");function p(u,m,l){return[..._(u,o(i=>{const n=m(i);return n!=null?[i,n]:null},"sortKey"))].sort((i,n)=>l(i[1],n[1])).map(([i])=>i)}o(p,"filterSort")},34821:(P,x,c)=>{c.d(x,{EW:()=>_,Qw:()=>u,qu:()=>l});function _(a,i){let n=m(a,i);if(n&&i.indexOf("/")===-1){const t=a.substring(a.lastIndexOf("/")+1);n+=m(t,i)}return n}o(_,"fuzzyScore");function p(a){const i=a.toLowerCase().split("");let n="";for(let t=0;t<i.length;t++){const f=i[t].replace(/[\\^$*+?.()|[\]{}]/g,"\\$&");t===0?n+=`(.*)(${f})`:n+=`([^${f}]*?)(${f})`}return new RegExp(`${n}(.*?)$`,"i")}o(p,"fuzzyRegexp");function u(a,i,n){if(i){const t=a.innerHTML.trim().match(n||p(i));if(!t)return;let s=!1;const f=[];for(let C=1;C<t.length;++C){const T=t[C];!T||(C%2===0?s||(f.push("<mark>"),s=!0):s&&(f.push("</mark>"),s=!1),f.push(T))}a.innerHTML=f.join("")}else{const t=a.innerHTML.trim(),s=t.replace(/<\/?mark>/g,"");t!==s&&(a.innerHTML=s)}}o(u,"fuzzyHighlightElement");function m(a,i){let n=a;if(n===i)return 1;const t=n.length;let s=0,f=0;for(let j=0;j<i.length;j++){const O=i[j],D=n.indexOf(O.toLowerCase()),R=n.indexOf(O.toUpperCase()),d=Math.min(D,R),w=d>-1?d:Math.max(D,R);if(w===-1)return 0;s+=.1,n[w]===O&&(s+=.1),w===0&&(s+=.8,j===0&&(f=1)),n.charAt(w-1)===" "&&(s+=.8),n=n.substring(w+1,t)}const C=i.length,T=s/C;let M=(T*(C/t)+T)/2;return f&&M+.1<1&&(M+=.1),M}o(m,"stringScore");function l(a,i){return a.score>i.score?-1:a.score<i.score?1:a.text<i.text?-1:a.text>i.text?1:0}o(l,"compare")},57443:(P,x,c)=>{c.d(x,{dY:()=>n,iU:()=>i,oq:()=>a});const _=new WeakMap;function p(t){const s=_.get(t);!s||(s.timer!=null&&clearTimeout(s.timer),s.timer=window.setTimeout(()=>{s.timer!=null&&(s.timer=null),s.inputed=!1,s.listener.call(null,t)},s.wait))}o(p,"schedule");function u(t){const s=t.currentTarget,f=_.get(s);!f||(f.keypressed=!0,f.timer!=null&&clearTimeout(f.timer))}o(u,"onKeydownInput");function m(t){const s=t.currentTarget,f=_.get(s);!f||(f.keypressed=!1,f.inputed&&p(s))}o(m,"onKeyupInput");function l(t){const s=t.currentTarget,f=_.get(s);!f||(f.inputed=!0,f.keypressed||p(s))}o(l,"onInputInput");function a(t,s,f={wait:null}){_.set(t,{keypressed:!1,inputed:!1,timer:void 0,listener:s,wait:f.wait!=null?f.wait:100}),t.addEventListener("keydown",u),t.addEventListener("keyup",m),t.addEventListener("input",l)}o(a,"addThrottledInputEventListener");function i(t,s){t.removeEventListener("keydown",u),t.removeEventListener("keyup",m),t.removeEventListener("input",l);const f=_.get(t);f&&(f.timer!=null&&f.listener===s&&clearTimeout(f.timer),_.delete(t))}o(i,"removeThrottledInputEventListener");function n(t){const s=_.get(t);s&&s.listener.call(null,t)}o(n,"dispatchThrottledInputEvent")},12585:(P,x,c)=>{c.d(x,{Z:()=>p});function _(u){return u.offsetWidth<=0&&u.offsetHeight<=0}o(_,"hidden");function p(u){return!_(u)}o(p,"visible")}}]);})();

//# sourceMappingURL=3826-2ced70c57da1.js.map