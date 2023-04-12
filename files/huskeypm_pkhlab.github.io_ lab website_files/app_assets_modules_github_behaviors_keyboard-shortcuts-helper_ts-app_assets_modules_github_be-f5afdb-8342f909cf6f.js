"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["app_assets_modules_github_behaviors_keyboard-shortcuts-helper_ts-app_assets_modules_github_be-f5afdb"],{7322(a,b,c){c.d(b,{Ty:()=>e,YE:()=>f,Zf:()=>g});var d=c(11793);let e=()=>{let a=document.querySelector("meta[name=keyboard-shortcuts-preference]");return!a||"all"===a.content},f=a=>/Enter|Arrow|Escape|Meta|Control|Esc/.test(a)||a.includes("Alt")&&a.includes("Shift"),g=a=>{let b=(0,d.EL)(a);return!!e()||f(b)}},44245(a,b,c){c.d(b,{"L$":()=>l,SE:()=>E,nj:()=>m});var d,e,f=c(5690),g=c(59753),h=c(40987),i=c(36071),j=c(65935),k=c(96393);function l(a){if(a.querySelector(".js-task-list-field")){let b=a.querySelectorAll("task-lists");for(let c of b)if(c instanceof h.Z){c.disabled=!1;let d=c.querySelectorAll("button");for(let e of d)e.disabled=!1}}}function m(a){for(let b of a.querySelectorAll("task-lists"))if(b instanceof h.Z){b.disabled=!0;let c=b.querySelectorAll("button");for(let d of c)d.disabled=!0}}function n(a,b,c){let d=a.querySelector(".js-comment-update");m(a),G(a);let e=d.elements.namedItem("task_list_track");e instanceof Element&&e.remove();let f=d.elements.namedItem("task_list_operation");f instanceof Element&&f.remove();let g=document.createElement("input");g.setAttribute("type","hidden"),g.setAttribute("name","task_list_track"),g.setAttribute("value",b),d.appendChild(g);let h=document.createElement("input");if(h.setAttribute("type","hidden"),h.setAttribute("name","task_list_operation"),h.setAttribute("value",JSON.stringify(c)),d.appendChild(h),!d.elements.namedItem("task_list_key")){let i=d.querySelector(".js-task-list-field"),j=i.getAttribute("name"),l=j.split("[")[0],n=document.createElement("input");n.setAttribute("type","hidden"),n.setAttribute("name","task_list_key"),n.setAttribute("value",l),d.appendChild(n)}a.classList.remove("is-comment-stale"),(0,k.Bt)(d)}(0,i.N7)(".js-task-list-container .js-task-list-field",function(a){let b=a.closest(".js-task-list-container");l(b),G(b)}),(0,i.N7)(".js-convert-tasklist-to-block-enabled .contains-task-list",function(a){let b=H(a);if(!b)return;let c=Array.from(b.children).some(a=>a.classList.contains("task-list-item-convert-container"));if(c)return;let d=a.ownerDocument.querySelector(".js-convert-to-block-template"),e=d?.content.cloneNode(!0);e&&b.appendChild(e)}),(0,g.on)("task-lists-move","task-lists",function(a){let{src:b,dst:c}=a.detail,d=a.currentTarget.closest(".js-task-list-container");n(d,"reordered",{operation:"move",src:b,dst:c})}),(0,g.on)("task-lists-check","task-lists",function(a){let{position:b,checked:c}=a.detail,d=a.currentTarget.closest(".js-task-list-container");n(d,`checked:${c?1:0}`,{operation:"check",position:b,checked:c})}),(0,g.on)("click",".js-convert-to-block-button",function(a){let b=H(a.target);if(!b)return;let c=b.closest("task-lists");if(!c)throw Error("parent not found");let d=E(b),e=a.currentTarget.closest(".js-task-list-container");n(e,"converted",{operation:"convert_to_block",position:d})}),(0,j.AC)(".js-task-list-container .js-comment-update",async function(a,b){let c=a.closest(".js-task-list-container"),d=a.elements.namedItem("task_list_track");d instanceof Element&&d.remove();let e=a.elements.namedItem("task_list_operation");e instanceof Element&&e.remove();let f;try{f=await b.json()}catch(g){let h;try{h=JSON.parse(g.response.text)}catch(i){}if(h&&h.stale){let j=c.querySelector(".js-task-list-field");j.classList.add("session-resumable-canceled"),j.classList.remove("js-session-resumable")}else 422===g.response.status||window.location.reload()}f&&(e&&f.json.source&&(c.querySelector(".js-task-list-field").value=f.json.source),l(c),requestAnimationFrame(()=>G(c)))});let o=!1,p=!1,q=null;function r(a){let b="insertLineBreak"===a.inputType;o=!!b}function s(a){let b=a;if(!o){let c="insertLineBreak"===b.inputType;if(!c)return}let d=b.target;t(d),o=!1}function t(a){let b=C(a.value,[a.selectionStart,a.selectionEnd]);void 0!==b&&u(a,b)}function u(a,b){if(null===q|| !0===q){a.contentEditable="true";try{o=!1;let c;b.commandId===e.insertText?(c=b.autocompletePrefix,null!==b.writeSelection[0]&&null!==b.writeSelection[1]&&(a.selectionStart=b.writeSelection[0],a.selectionEnd=b.writeSelection[1])):a.selectionStart=b.selection[0],q=document.execCommand(b.commandId,!1,c)}catch(d){q=!1}a.contentEditable="false"}if(!q){try{document.execCommand("ms-beginUndoUnit")}catch(f){}a.value=b.text;try{document.execCommand("ms-endUndoUnit")}catch(g){}a.dispatchEvent(new CustomEvent("input",{bubbles:!0,cancelable:!0}))}null!=b.selection[0]&&null!=b.selection[1]&&(a.selectionStart=b.selection[0],a.selectionEnd=b.selection[1])}function v(a){if(p)return;let b=a;if("Enter"===b.key&&b.shiftKey&&!b.metaKey){let c=b.target,d=A(c.value,[c.selectionStart,c.selectionEnd]);if(void 0===d)return;u(c,d),b.preventDefault(),(0,g.f)(c,"change")}}function w(){p=!0}function x(){p=!1}function y(a){if(p)return;let b=a;if("Escape"===b.key){F(a);return}if("Tab"!==b.key)return;let c=b.target,d=D(c.value,[c.selectionStart,c.selectionEnd],b.shiftKey);void 0!==d&&(b.preventDefault(),u(c,d))}(0,i.N7)(".js-task-list-field",{subscribe:a=>(0,f.qC)((0,f.RB)(a,"keydown",y),(0,f.RB)(a,"keydown",v),(0,f.RB)(a,"beforeinput",r),(0,f.RB)(a,"input",s),(0,f.RB)(a,"compositionstart",w),(0,f.RB)(a,"compositionend",x))}),(d=e||(e={})).insertText="insertText",d.delete="delete";let z=/^(\s*)?/;function A(a,b){let c=b[0];if(!c||!a)return;let d=a.substring(0,c).split("\n"),f=d[d.length-1],g=f?.match(z);if(!g)return;let h=g[1]||"",i=`
${h}`;return{text:a.substring(0,c)+i+a.substring(c),autocompletePrefix:i,selection:[c+i.length,c+i.length],commandId:e.insertText,writeSelection:[null,null]}}let B=/^(\s*)([*-]|(\d+)\.)\s(\[[\sx]\]\s)?/;function C(a,b){let c=b[0];if(!c||!a)return;let d=a.substring(0,c).split("\n"),f=d[d.length-2],g=f?.match(B);if(!g)return;let h=g[0],i=g[1],j=g[2],k=parseInt(g[3],10),l=Boolean(g[4]),m=!isNaN(k),n=m?`${k+1}.`:j,o=`${n} ${l?"[ ] ":""}`,p=a.indexOf("\n",c);p<0&&(p=a.length);let q=a.substring(c,p);q.startsWith(o)&&(o="");let r=f.replace(h,"").trim().length>0||q.trim().length>0;if(r){let s=`${i}${o}`,t=a.substring(c),u=s.length,v=[null,null],w=/^\s*$/g,x=a.substring(0,c)+s+t;if(m&&!a.substring(c).match(w)){var y,z;let A;t=(y=a.substring(c),z=k+1,(A=(A=y.split("\n")).map(a=>{if(a.replace(/^\s+/,"").startsWith(`${z}.`)){let b=a.replace(`${z}`,`${z+1}`);return z+=1,b}return a})).join("\n")),s+=t,v=[c,c+s.length],x=a.substring(0,c)+s}return{text:x,autocompletePrefix:s,selection:[c+u,c+u],commandId:e.insertText,writeSelection:v}}{let C=c-`
${h}`.length;return{autocompletePrefix:"",text:a.substring(0,C)+a.substring(c),selection:[C,C],commandId:e.delete,writeSelection:[null,null]}}}function D(a,b,c){let d=b[0]||0,f=b[1]||d;if(null===b[0]||d===f)return;let g=a.substring(0,d).lastIndexOf("\n")+1,h=a.indexOf("\n",f-1),i=h>0?h:a.length-1,j=a.substring(g,i).split("\n"),k=!1,l=0,m=0,n=[];for(let o of j){let p=o.match(/^\s*/);if(p){let q=p[0],r=o.substring(q.length);if(c){let s=q.length;q=q.slice(0,-2),l=k?l:q.length-s,k=!0,m+=q.length-s}else q+="  ",l=2,m+=2;n.push(q+r)}}let t=n.join("\n"),u=a.substring(0,g)+t+a.substring(i),v=[Math.max(g,d+l),f+m];return{text:u,selection:v,autocompletePrefix:t,commandId:e.insertText,writeSelection:[g,i]}}function E(a){let b=a.closest("task-lists");if(!b)throw Error("parent not found");let c=Array.from(b.querySelectorAll("ol, ul")).filter(a=>!a.closest("tracking-block"));return c.indexOf(a)}function F(a){let b=a.target;"backward"===b.selectionDirection?b.selectionEnd=b.selectionStart:b.selectionStart=b.selectionEnd}function G(a){if(0===document.querySelectorAll("tracked-issues-progress").length)return;let b=a.closest(".js-timeline-item");if(b)return;let c=a.querySelectorAll(".js-comment-body [type=checkbox]"),d=c.length,e=Array.from(c).filter(a=>a.checked).length,f=document.querySelectorAll("tracked-issues-progress[data-type=checklist]");for(let g of f)g.setAttribute("data-completed",String(e)),g.setAttribute("data-total",String(d))}function H(a){let b=a.closest(".contains-task-list"),c=b;for(;(c=c.parentElement.closest(".contains-task-list"))!==b&&null!==c;)b=c;return b}},97546(a,b,c){c.d(b,{W:()=>e});var d=c(59753);async function e(a){let b=document.querySelector("#site-details-dialog"),c=b.content.cloneNode(!0),e=c.querySelector("details"),f=e.querySelector("details-dialog"),g=e.querySelector(".js-details-dialog-spinner");a.detailsClass&&e.classList.add(...a.detailsClass.split(" ")),a.dialogClass&&f.classList.add(...a.dialogClass.split(" ")),a.label?f.setAttribute("aria-label",a.label):a.labelledBy&&f.setAttribute("aria-labelledby",a.labelledBy),document.body.append(c);try{let h=await a.content;g.remove(),f.prepend(h)}catch(i){g.remove();let j=document.createElement("span");j.textContent=a.errorMessage||"Couldn't load the content",j.classList.add("my-6"),j.classList.add("mx-4"),f.prepend(j)}return e.addEventListener("toggle",()=>{e.hasAttribute("open")||((0,d.f)(f,"dialog:remove"),e.remove())}),f}},35338(a,b,c){c.d(b,{D:()=>g,a:()=>f});var d=c(47),e=c(16762);async function f(a,b,c){let f=new Request(b,c);f.headers.append("X-Requested-With","XMLHttpRequest");let g=await self.fetch(f);if(g.status<200||g.status>=300)throw Error(`HTTP ${g.status}${g.statusText||""}`);return(0,d.t)((0,d.P)(a),g),(0,e.r)(a,await g.text())}function g(a,b,c=1e3,d=[200]){return async function c(e){let f=new Request(a,b);f.headers.append("X-Requested-With","XMLHttpRequest");let g=await self.fetch(f);if(202===g.status)return await new Promise(a=>setTimeout(a,e)),c(1.5*e);if(d.includes(g.status))return g;if(g.status<200||g.status>=300)throw Error(`HTTP ${g.status}${g.statusText||""}`);throw Error(`Unexpected ${g.status} response status from poll endpoint`)}(c)}},47(a,b,c){function d(a){let b=[...a.querySelectorAll("meta[name=html-safe-nonce]")].map(a=>a.content);if(b.length<1)throw Error("could not find html-safe-nonce on document");return b}c.d(b,{P:()=>d,t:()=>f});let e=class ResponseError extends Error{constructor(a,b){super(`${a} for HTTP ${b.status}`),this.response=b}};function f(a,b,c=!1){let d=b.headers.get("content-type")||"";if(!c&&!d.startsWith("text/html"))throw new e(`expected response with text/html, but was ${d}`,b);if(c&&!(d.startsWith("text/html")||d.startsWith("application/json")))throw new e(`expected response with text/html or application/json, but was ${d}`,b);let f=b.headers.get("x-html-safe");if(f){if(!a.includes(f))throw new e("response X-HTML-Safe nonce did not match",b)}else throw new e("missing X-HTML-Safe nonce",b)}},7256(a,b,c){c.d(b,{ZG:()=>h,q6:()=>j,w4:()=>i});var d=c(8439);let e=!1,f=new d.Z;function g(a){let b=a.target;if(b instanceof HTMLElement&&b.nodeType!==Node.DOCUMENT_NODE)for(let c of f.matches(b))c.data.call(null,b)}function h(a,b){e||(e=!0,document.addEventListener("focus",g,!0)),f.add(a,b),document.activeElement instanceof HTMLElement&&document.activeElement.matches(a)&&b(document.activeElement)}function i(a,b,c){function d(b){let e=b.currentTarget;e&&(e.removeEventListener(a,c),e.removeEventListener("blur",d))}h(b,function(b){b.addEventListener(a,c),b.addEventListener("blur",d)})}function j(a,b){function c(a){let{currentTarget:d}=a;d&&(d.removeEventListener("input",b),d.removeEventListener("blur",c))}h(a,function(a){a.addEventListener("input",b),a.addEventListener("blur",c)})}},91582(a,b,c){c.d(b,{Z:()=>l});var d=c(97546),e=c(35338),f=c(36071);function g(a){let b=document.querySelector(".sso-modal");b&&(b.classList.remove("success","error"),a?b.classList.add("success"):b.classList.add("error"))}async function h(){var a;let b=document.querySelector("link[rel=sso-modal]"),c=await (0,d.W)({content:(0,e.a)(document,b.href),dialogClass:"sso-modal"}),f=null,h=window.external;if(h.ssoComplete=function(a){a.error?g(f=!1):(g(f=!0),function(a){let b=document.querySelector("meta[name=sso-expires-around]");b&&b.setAttribute("content",a)}(a.expiresAround),window.focus()),h.ssoComplete=null},await (a=c,new Promise(b=>{a.addEventListener("dialog:remove",b,{once:!0})})),!f)throw Error("sso prompt canceled")}async function i(){let a=document.querySelector("link[rel=sso-session]"),b=document.querySelector("meta[name=sso-expires-around]");if(!(a instanceof HTMLLinkElement)||!function(a){if(!(a instanceof HTMLMetaElement))return!0;let b=parseInt(a.content),c=new Date().getTime()/1e3;return c>b}(b))return!0;let c=a.href,d=await fetch(c,{headers:{Accept:"application/json","X-Requested-With":"XMLHttpRequest"}}),e=await d.json();return e}(0,f.N7)(".js-sso-modal-complete",function(a){if(window.opener&&window.opener.external.ssoComplete){let b=a.getAttribute("data-error"),c=a.getAttribute("data-expires-around");window.opener.external.ssoComplete({error:b,expiresAround:c}),window.close()}else{let d=a.getAttribute("data-fallback-url");d&&(window.location.href=d)}});let j=null;function k(){j=null}async function l(){let a=await i();a||(j||(j=h().then(k).catch(k)),await j)}}}])
//# sourceMappingURL=app_assets_modules_github_behaviors_keyboard-shortcuts-helper_ts-app_assets_modules_github_be-f5afdb-8b908834720b.js.map