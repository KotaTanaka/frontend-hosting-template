var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function u(t,n){t.appendChild(n)}function a(t){t.parentNode.removeChild(t)}function f(t){return document.createElement(t)}function s(t){return document.createTextNode(t)}function i(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}let l;function d(t){l=t}const p=[],m=[],h=[],g=[],$=Promise.resolve();let y=!1;function b(t){h.push(t)}let x=!1;const _=new Set;function w(){if(!x){x=!0;do{for(let t=0;t<p.length;t+=1){const n=p[t];d(n),v(n.$$)}for(p.length=0;m.length;)m.pop()();for(let t=0;t<h.length;t+=1){const n=h[t];_.has(n)||(_.add(n),n())}h.length=0}while(p.length);for(;g.length;)g.pop()();y=!1,x=!1,_.clear()}}function v(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(b)}}const E=new Set;function A(t,n){-1===t.$$.dirty[0]&&(p.push(t),y||(y=!0,$.then(w)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function k(c,u,f,s,i,p,m=[-1]){const h=l;d(c);const g=u.props||{},$=c.$$={fragment:null,ctx:null,props:p,update:t,not_equal:i,bound:e(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(h?h.$$.context:[]),callbacks:e(),dirty:m};let y=!1;if($.ctx=f?f(c,g,(t,n,...e)=>{const o=e.length?e[0]:n;return $.ctx&&i($.ctx[t],$.ctx[t]=o)&&($.bound[t]&&$.bound[t](o),y&&A(c,t)),n}):[],$.update(),y=!0,o($.before_update),$.fragment=!!s&&s($.ctx),u.target){if(u.hydrate){const t=function(t){return Array.from(t.childNodes)}(u.target);$.fragment&&$.fragment.l(t),t.forEach(a)}else $.fragment&&$.fragment.c();u.intro&&((x=c.$$.fragment)&&x.i&&(E.delete(x),x.i(_))),function(t,e,c){const{fragment:u,on_mount:a,on_destroy:f,after_update:s}=t.$$;u&&u.m(e,c),b(()=>{const e=a.map(n).filter(r);f?f.push(...e):o(e),t.$$.on_mount=[]}),s.forEach(b)}(c,u.target,u.anchor),w()}var x,_;d(h)}function C(n){let e,o,r,c,l,d,p;return{c(){e=f("main"),o=f("h1"),r=s("Hello "),c=s(n[0]),l=s("!"),d=s(" "),p=f("p"),p.textContent="Success Hosting.",i(o,"class","svelte-1e9puaw"),i(e,"class","svelte-1e9puaw")},m(t,n){!function(t,n,e){t.insertBefore(n,e||null)}(t,e,n),u(e,o),u(o,r),u(o,c),u(o,l),u(e,d),u(e,p)},p(t,[n]){1&n&&function(t,n){n=""+n,t.data!==n&&(t.data=n)}(c,t[0])},i:t,o:t,d(t){t&&a(e)}}}function N(t,n,e){let{name:o}=n;return t.$set=t=>{"name"in t&&e(0,o=t.name)},[o]}return new class extends class{$destroy(){!function(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(){}}{constructor(t){super(),k(this,t,N,C,c,{name:0})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
