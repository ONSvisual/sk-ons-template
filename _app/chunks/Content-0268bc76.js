import{S as q,i as H,s as M,e as g,t as J,k as S,c as v,a as w,h as K,d,m as G,b,g as z,I as C,j as L,K as E,L as I,M as D,q as h,o as p,G as V,H as W,f as k,J as A,n as B,p as F,r as N}from"./index-74a41eac.js";import{w as O}from"./index-1ccb10cb.js";/* empty css                                            */const P=i=>({}),j=i=>({});function y(i){let l,r,a,o;const n=i[7].meta,s=V(n,i,i[6],j);return{c(){l=g("h2"),r=J(i[0]),a=S(),s&&s.c(),this.h()},l(e){l=v(e,"H2",{class:!0});var t=w(l);r=K(t,i[0]),t.forEach(d),a=G(e),s&&s.l(e),this.h()},h(){b(l,"class","svelte-4xzjby")},m(e,t){z(e,l,t),C(l,r),z(e,a,t),s&&s.m(e,t),o=!0},p(e,t){(!o||t&1)&&L(r,e[0]),s&&s.p&&(!o||t&64)&&E(s,n,e,e[6],o?D(n,e[6],t,P):I(e[6]),j)},i(e){o||(h(s,e),o=!0)},o(e){p(s,e),o=!1},d(e){e&&d(l),e&&d(a),s&&s.d(e)}}}function Q(i){let l,r,a,o,n=`repeat(${i[1]=="full"?"1fr":"auto-fit, minmax(min("+i[4][i[1]].w+"px, 100%), 1fr))"}`,s=`${i[2]}px`,e,t=i[0]&&y(i);const m=i[7].default,u=V(m,i,i[6],null);return{c(){l=g("div"),t&&t.c(),r=S(),a=g("div"),u&&u.c(),this.h()},l(f){l=v(f,"DIV",{class:!0});var _=w(l);t&&t.l(_),r=G(_),a=v(_,"DIV",{class:!0});var c=w(a);u&&u.l(c),c.forEach(d),_.forEach(d),this.h()},h(){b(a,"class","tiles-grid margin-bottom svelte-4xzjby"),W(()=>i[8].call(a)),k(a,"grid-template-columns",n,!1),k(a,"grid-gap",s,!1),b(l,"class","tiles")},m(f,_){z(f,l,_),t&&t.m(l,null),C(l,r),C(l,a),u&&u.m(a,null),o=A(a,i[8].bind(a)),e=!0},p(f,[_]){f[0]?t?(t.p(f,_),_&1&&h(t,1)):(t=y(f),t.c(),h(t,1),t.m(l,r)):t&&(B(),p(t,1,1,()=>{t=null}),F()),u&&u.p&&(!e||_&64)&&E(u,m,f,f[6],e?D(m,f[6],_,null):I(f[6]),null),_&2&&n!==(n=`repeat(${f[1]=="full"?"1fr":"auto-fit, minmax(min("+f[4][f[1]].w+"px, 100%), 1fr))"}`)&&k(a,"grid-template-columns",n,!1),_&4&&s!==(s=`${f[2]}px`)&&k(a,"grid-gap",s,!1)},i(f){e||(h(t),h(u,f),e=!0)},o(f){p(t),p(u,f),e=!1},d(f){f&&d(l),t&&t.d(),u&&u.d(f),o()}}}function R(i,l,r){let a,{$$slots:o={},$$scope:n}=l,{title:s=null}=l,{colwidth:e="medium"}=l,{gridgap:t=16}=l;const m={narrow:{w:180,c:4},medium:{w:280,c:3},wide:{w:380,c:2},full:{w:"100%",c:1}};let u;const f=O(m[e].c);N("tiles",{cols:f});function _(){u=this.clientWidth,r(3,u)}return i.$$set=c=>{"title"in c&&r(0,s=c.title),"colwidth"in c&&r(1,e=c.colwidth),"gridgap"in c&&r(2,t=c.gridgap),"$$scope"in c&&r(6,n=c.$$scope)},i.$$.update=()=>{i.$$.dirty&14&&r(5,a=e=="full"?1:u?Math.floor((u+t)/(m[e].w+t)):m[e].c),i.$$.dirty&32&&f.set(a)},[s,e,t,u,m,a,n,o,_]}class $ extends q{constructor(l){super(),H(this,l,R,Q,M,{title:0,colwidth:1,gridgap:2})}}function T(i){let l,r,a;const o=i[1].default,n=V(o,i,i[0],null);return{c(){l=g("div"),r=g("div"),n&&n.c(),this.h()},l(s){l=v(s,"DIV",{class:!0});var e=w(l);r=v(e,"DIV",{class:!0});var t=w(r);n&&n.l(t),t.forEach(d),e.forEach(d),this.h()},h(){b(r,"class","wrapper"),b(l,"class","page-content margin-bottom--2")},m(s,e){z(s,l,e),C(l,r),n&&n.m(r,null),a=!0},p(s,[e]){n&&n.p&&(!a||e&1)&&E(n,o,s,s[0],a?D(o,s[0],e,null):I(s[0]),null)},i(s){a||(h(n,s),a=!0)},o(s){p(n,s),a=!1},d(s){s&&d(l),n&&n.d(s)}}}function U(i,l,r){let{$$slots:a={},$$scope:o}=l;return i.$$set=n=>{"$$scope"in n&&r(0,o=n.$$scope)},[o,a]}class x extends q{constructor(l){super(),H(this,l,U,T,M,{})}}export{x as C,$ as a};
