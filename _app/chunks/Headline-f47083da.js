import{S as X,i as z,s as J,e as g,k as N,c as b,a as k,m as q,d,b as h,g as O,I as _,R as K,T as Ee,t as R,h as S,j as P,O as G,w as Y,x as Z,y,q as V,o as T,B as $,G as le,f as ee,n as Q,p as W,K as te,L as ae,M as ne,r as re,X as fe,F as pe}from"./vendor-55adee57.js";import{N as De}from"./Navbox-1388a168.js";function oe(s,e,t){const l=s.slice();return l[2]=e[t],l}function Ie(s){let e=s[2].label+"",t;return{c(){t=R(e)},l(l){t=S(l,e)},m(l,i){O(l,t,i)},p(l,i){i&1&&e!==(e=l[2].label+"")&&P(t,e)},d(l){l&&d(t)}}}function we(s){let e,t=s[2].label+"",l,i;return{c(){e=g("a"),l=R(t),this.h()},l(n){e=b(n,"A",{class:!0,href:!0});var a=k(e);l=S(a,t),a.forEach(d),this.h()},h(){h(e,"class","breadcrumb__link"),h(e,"href",i=s[2].url)},m(n,a){O(n,e,a),_(e,l)},p(n,a){a&1&&t!==(t=n[2].label+"")&&P(l,t),a&1&&i!==(i=n[2].url)&&h(e,"href",i)},d(n){n&&d(e)}}}function ue(s){let e,t;function l(a,r){return a[2].url?we:Ie}let i=l(s),n=i(s);return{c(){e=g("li"),n.c(),t=N(),this.h()},l(a){e=b(a,"LI",{class:!0});var r=k(e);n.l(r),t=q(r),r.forEach(d),this.h()},h(){h(e,"class","breadcrumb__item")},m(a,r){O(a,e,r),n.m(e,null),_(e,t)},p(a,r){i===(i=l(a))&&n?n.p(a,r):(n.d(1),n=i(a),n&&(n.c(),n.m(e,t)))},d(a){a&&d(e),n.d()}}}function Ve(s){let e,t,l,i,n=s[0],a=[];for(let r=0;r<n.length;r+=1)a[r]=ue(oe(s,n,r));return{c(){e=g("nav"),t=g("div"),l=g("ol");for(let r=0;r<a.length;r+=1)a[r].c();this.h()},l(r){e=b(r,"NAV",{"aria-label":!0});var o=k(e);t=b(o,"DIV",{class:!0});var f=k(t);l=b(f,"OL",{class:!0});var u=k(l);for(let E=0;E<a.length;E+=1)a[E].l(u);u.forEach(d),f.forEach(d),o.forEach(d),this.h()},h(){h(l,"class","breadcrumb__list"),h(t,"class",i=(s[1]=="neutral"?"breadcrumb-neutral":"breadcrumb")+" print--hide"),h(e,"aria-label","Breadcrumbs")},m(r,o){O(r,e,o),_(e,t),_(t,l);for(let f=0;f<a.length;f+=1)a[f].m(l,null)},p(r,[o]){if(o&1){n=r[0];let f;for(f=0;f<n.length;f+=1){const u=oe(r,n,f);a[f]?a[f].p(u,o):(a[f]=ue(u),a[f].c(),a[f].m(l,null))}for(;f<a.length;f+=1)a[f].d(1);a.length=n.length}o&2&&i!==(i=(r[1]=="neutral"?"breadcrumb-neutral":"breadcrumb")+" print--hide")&&h(t,"class",i)},i:K,o:K,d(r){r&&d(e),Ee(a,r)}}}function He(s,e,t){let{links:l=[]}=e,{mode:i="neutral"}=e;return s.$$set=n=>{"links"in n&&t(0,l=n.links),"mode"in n&&t(1,i=n.mode)},[l,i]}class Le extends X{constructor(e){super();z(this,e,He,Ve,J,{links:0,mode:1})}}function ce(s,e,t){const l=s.slice();return l[2]=e[t],l}function de(s){let e,t,l=s[2].label+"",i,n,a,r;return{c(){e=g("li"),t=g("a"),i=R(l),r=N(),this.h()},l(o){e=b(o,"LI",{});var f=k(e);t=b(f,"A",{href:!0,"data-gtm-title":!0,"data-gtm-type":!0});var u=k(t);i=S(u,l),u.forEach(d),r=q(f),f.forEach(d),this.h()},h(){h(t,"href",n=s[2].url),h(t,"data-gtm-title",a=s[2].label),h(t,"data-gtm-type","highlighted-links")},m(o,f){O(o,e,f),_(e,t),_(t,i),_(e,r)},p(o,f){f&2&&l!==(l=o[2].label+"")&&P(i,l),f&2&&n!==(n=o[2].url)&&h(t,"href",n),f&2&&a!==(a=o[2].label)&&h(t,"data-gtm-title",a)},d(o){o&&d(e)}}}function Te(s){let e,t,l,i,n,a=s[1],r=[];for(let o=0;o<a.length;o+=1)r[o]=de(ce(s,a,o));return{c(){e=g("div"),t=g("h2"),l=R(s[0]),i=N(),n=g("ul");for(let o=0;o<r.length;o+=1)r[o].c();this.h()},l(o){e=b(o,"DIV",{class:!0});var f=k(e);t=b(f,"H2",{class:!0});var u=k(t);l=S(u,s[0]),u.forEach(d),i=q(f),n=b(f,"UL",{class:!0});var E=k(n);for(let C=0;C<r.length;C+=1)r[C].l(E);E.forEach(d),f.forEach(d),this.h()},h(){h(t,"class","margin-top-lg--1"),h(n,"class","list--neutral margin-top--negative-one-fix"),h(e,"class","nav-secondary--border-left-lg col col--md-47 col--lg-19 col--lg-offset-2 padding-left margin-top-lg--3")},m(o,f){O(o,e,f),_(e,t),_(t,l),_(e,i),_(e,n);for(let u=0;u<r.length;u+=1)r[u].m(n,null)},p(o,[f]){if(f&1&&P(l,o[0]),f&2){a=o[1];let u;for(u=0;u<a.length;u+=1){const E=ce(o,a,u);r[u]?r[u].p(E,f):(r[u]=de(E),r[u].c(),r[u].m(n,null))}for(;u<r.length;u+=1)r[u].d(1);r.length=a.length}},i:K,o:K,d(o){o&&d(e),Ee(r,o)}}}function Ce(s,e,t){let{title:l="Highlighted content"}=e,{links:i=[]}=e;return s.$$set=n=>{"title"in n&&t(0,l=n.title),"links"in n&&t(1,i=n.links)},[l,i]}class Me extends X{constructor(e){super();z(this,e,Ce,Te,J,{title:0,links:1})}}function Ae(s){let e,t,l,i,n,a,r,o,f;return{c(){e=g("div"),t=g("div"),l=g("dl"),i=g("div"),n=g("dt"),a=R(s[1]),r=R(":"),o=N(),f=g("dd"),this.h()},l(u){e=b(u,"DIV",{class:!0});var E=k(e);t=b(E,"DIV",{class:!0});var C=k(t);l=b(C,"DL",{class:!0});var v=k(l);i=b(v,"DIV",{class:!0});var M=k(i);n=b(M,"DT",{class:!0});var p=k(n);a=S(p,s[1]),r=S(p,":"),p.forEach(d),o=q(M),f=b(M,"DD",{class:!0});var U=k(f);U.forEach(d),M.forEach(d),v.forEach(d),C.forEach(d),E.forEach(d),this.h()},h(){h(n,"class","meta__term inline"),h(f,"class","inline"),h(i,"class","col padding-left--0 meta__item meta__item--no-border"),h(l,"class","col-wrap"),h(t,"class","wrapper"),h(e,"class","meta-wrap--thin"),G(e,"meta-wrap",s[0]=="grey")},m(u,E){O(u,e,E),_(e,t),_(t,l),_(l,i),_(i,n),_(n,a),_(n,r),_(i,o),_(i,f),f.innerHTML=s[2]},p(u,[E]){E&2&&P(a,u[1]),E&4&&(f.innerHTML=u[2]),E&1&&G(e,"meta-wrap",u[0]=="grey")},i:K,o:K,d(u){u&&d(e)}}}function Be(s,e,t){let{background:l="grey"}=e,{label:i="Last updated"}=e,{value:n="date"}=e;return s.$$set=a=>{"background"in a&&t(0,l=a.background),"label"in a&&t(1,i=a.label),"value"in a&&t(2,n=a.value)},[l,i,n]}class Ne extends X{constructor(e){super();z(this,e,Be,Ae,J,{background:0,label:1,value:2})}}const qe=s=>({}),_e=s=>({});function he(s){let e,t;return e=new Le({props:{links:s[2],mode:s[1]=="none"?"neutral":s[0]}}),{c(){Y(e.$$.fragment)},l(l){Z(e.$$.fragment,l)},m(l,i){y(e,l,i),t=!0},p(l,i){const n={};i&4&&(n.links=l[2]),i&3&&(n.mode=l[1]=="none"?"neutral":l[0]),e.$set(n)},i(l){t||(V(e.$$.fragment,l),t=!0)},o(l){T(e.$$.fragment,l),t=!1},d(l){$(e,l)}}}function me(s){let e,t;return{c(){e=g("p"),t=R(s[5]),this.h()},l(l){e=b(l,"P",{class:!0});var i=k(e);t=S(i,s[5]),i.forEach(d),this.h()},h(){h(e,"class","page-neutral-intro__meta margin-top--0 margin-bottom--3")},m(l,i){O(l,e,i),_(e,t)},p(l,i){i&32&&P(t,l[5])},d(l){l&&d(e)}}}function ge(s){let e,t;return e=new De({props:{links:s[3],title:"Contents"}}),{c(){Y(e.$$.fragment)},l(l){Z(e.$$.fragment,l)},m(l,i){y(e,l,i),t=!0},p(l,i){const n={};i&8&&(n.links=l[3]),e.$set(n)},i(l){t||(V(e.$$.fragment,l),t=!0)},o(l){T(e.$$.fragment,l),t=!1},d(l){$(e,l)}}}function be(s){let e,t;return e=new Me({props:{links:s[4]}}),{c(){Y(e.$$.fragment)},l(l){Z(e.$$.fragment,l)},m(l,i){y(e,l,i),t=!0},p(l,i){const n={};i&16&&(n.links=l[4]),e.$set(n)},i(l){t||(V(e.$$.fragment,l),t=!0)},o(l){T(e.$$.fragment,l),t=!1},d(l){$(e,l)}}}function ve(s){let e,t;return e=new Ne({props:{label:"Last updated",value:s[6],background:s[1]}}),{c(){Y(e.$$.fragment)},l(l){Z(e.$$.fragment,l)},m(l,i){y(e,l,i),t=!0},p(l,i){const n={};i&64&&(n.value=l[6]),i&2&&(n.background=l[1]),e.$set(n)},i(l){t||(V(e.$$.fragment,l),t=!0)},o(l){T(e.$$.fragment,l),t=!1},d(l){$(e,l)}}}function ke(s){let e,t,l,i;return{c(){e=g("div"),t=g("div"),l=g("div"),i=g("hr"),this.h()},l(n){e=b(n,"DIV",{class:!0});var a=k(e);t=b(a,"DIV",{class:!0});var r=k(t);l=b(r,"DIV",{class:!0});var o=k(l);i=b(o,"HR",{style:!0}),o.forEach(d),r.forEach(d),a.forEach(d),this.h()},h(){ee(i,"border","0"),ee(i,"height","0"),ee(i,"border-top","1px solid #808080"),h(l,"class","col"),h(t,"class","col-wrap"),h(e,"class","wrapper")},m(n,a){O(n,e,a),_(e,t),_(t,l),_(l,i)},d(n){n&&d(e)}}}function Oe(s){let e,t,l,i,n,a,r,o,f,u,E,C,v,M,p=s[2]&&he(s);const U=s[9].default,A=le(U,s,s[8],null);let H=s[5]&&me(s),D=s[3]&&ge(s),I=s[4]&&be(s);const x=s[9].meta,B=le(x,s,s[8],_e);let w=s[6]&&ve(s),L=s[1]=="none"&&s[7]&&ke();return{c(){e=g("div"),t=g("div"),l=g("div"),i=g("div"),p&&p.c(),n=N(),a=g("div"),A&&A.c(),r=N(),H&&H.c(),o=N(),D&&D.c(),f=N(),I&&I.c(),u=N(),B&&B.c(),E=N(),w&&w.c(),C=N(),L&&L.c(),this.h()},l(c){e=b(c,"DIV",{class:!0});var m=k(e);t=b(m,"DIV",{class:!0});var ie=k(t);l=b(ie,"DIV",{class:!0});var se=k(l);i=b(se,"DIV",{class:!0});var j=k(i);p&&p.l(j),n=q(j),a=b(j,"DIV",{class:!0});var F=k(a);A&&A.l(F),r=q(F),H&&H.l(F),o=q(F),D&&D.l(F),F.forEach(d),f=q(j),I&&I.l(j),j.forEach(d),se.forEach(d),ie.forEach(d),u=q(m),B&&B.l(m),E=q(m),w&&w.l(m),C=q(m),L&&L.l(m),m.forEach(d),this.h()},h(){h(a,"class","col col--md-47"),G(a,"col--lg-38",s[4]),G(a,"col--lg-48",!s[4]),h(i,"class","col"),h(l,"class","col-wrap"),h(t,"class","wrapper"),h(e,"class",v="page-neutral-intro "+(s[1]=="grey"?"background--gallery":""))},m(c,m){O(c,e,m),_(e,t),_(t,l),_(l,i),p&&p.m(i,null),_(i,n),_(i,a),A&&A.m(a,null),_(a,r),H&&H.m(a,null),_(a,o),D&&D.m(a,null),_(i,f),I&&I.m(i,null),_(e,u),B&&B.m(e,null),_(e,E),w&&w.m(e,null),_(e,C),L&&L.m(e,null),M=!0},p(c,[m]){c[2]?p?(p.p(c,m),m&4&&V(p,1)):(p=he(c),p.c(),V(p,1),p.m(i,n)):p&&(Q(),T(p,1,1,()=>{p=null}),W()),A&&A.p&&(!M||m&256)&&te(A,U,c,c[8],M?ne(U,c[8],m,null):ae(c[8]),null),c[5]?H?H.p(c,m):(H=me(c),H.c(),H.m(a,o)):H&&(H.d(1),H=null),c[3]?D?(D.p(c,m),m&8&&V(D,1)):(D=ge(c),D.c(),V(D,1),D.m(a,null)):D&&(Q(),T(D,1,1,()=>{D=null}),W()),m&16&&G(a,"col--lg-38",c[4]),m&16&&G(a,"col--lg-48",!c[4]),c[4]?I?(I.p(c,m),m&16&&V(I,1)):(I=be(c),I.c(),V(I,1),I.m(i,null)):I&&(Q(),T(I,1,1,()=>{I=null}),W()),B&&B.p&&(!M||m&256)&&te(B,x,c,c[8],M?ne(x,c[8],m,qe):ae(c[8]),_e),c[6]?w?(w.p(c,m),m&64&&V(w,1)):(w=ve(c),w.c(),V(w,1),w.m(e,C)):w&&(Q(),T(w,1,1,()=>{w=null}),W()),c[1]=="none"&&c[7]?L||(L=ke(),L.c(),L.m(e,null)):L&&(L.d(1),L=null),(!M||m&2&&v!==(v="page-neutral-intro "+(c[1]=="grey"?"background--gallery":"")))&&h(e,"class",v)},i(c){M||(V(p),V(A,c),V(D),V(I),V(B,c),V(w),M=!0)},o(c){T(p),T(A,c),T(D),T(I),T(B,c),T(w),M=!1},d(c){c&&d(e),p&&p.d(),A&&A.d(c),H&&H.d(),D&&D.d(),I&&I.d(),B&&B.d(c),w&&w.d(),L&&L.d()}}}function Re(s,e,t){let{$$slots:l={},$$scope:i}=e,{mode:n="neutral"}=e,{background:a="grey"}=e,{breadcrumb:r=null}=e,{contents:o=null}=e,{highlighted:f=null}=e,{date:u=null}=e,{updated:E=null}=e,{hr:C=!0}=e;return re("mode",n),re("background",a),s.$$set=v=>{"mode"in v&&t(0,n=v.mode),"background"in v&&t(1,a=v.background),"breadcrumb"in v&&t(2,r=v.breadcrumb),"contents"in v&&t(3,o=v.contents),"highlighted"in v&&t(4,f=v.highlighted),"date"in v&&t(5,u=v.date),"updated"in v&&t(6,E=v.updated),"hr"in v&&t(7,C=v.hr),"$$scope"in v&&t(8,i=v.$$scope)},[n,a,r,o,f,u,E,C,i,l]}class Ke extends X{constructor(e){super();z(this,e,Re,Oe,J,{mode:0,background:1,breadcrumb:2,contents:3,highlighted:4,date:5,updated:6,hr:7})}}function Se(s){let e,t,l;const i=s[2].default,n=le(i,s,s[1],null);return{c(){e=g("h1"),n&&n.c(),this.h()},l(a){e=b(a,"H1",{class:!0});var r=k(e);n&&n.l(r),r.forEach(d),this.h()},h(){h(e,"class",t=fe(s[0]=="neutral"?"page-neutral-intro__title":"page-intro__title")+" svelte-m86ur0")},m(a,r){O(a,e,r),n&&n.m(e,null),l=!0},p(a,[r]){n&&n.p&&(!l||r&2)&&te(n,i,a,a[1],l?ne(i,a[1],r,null):ae(a[1]),null),(!l||r&1&&t!==(t=fe(a[0]=="neutral"?"page-neutral-intro__title":"page-intro__title")+" svelte-m86ur0"))&&h(e,"class",t)},i(a){l||(V(n,a),l=!0)},o(a){T(n,a),l=!1},d(a){a&&d(e),n&&n.d(a)}}}function je(s,e,t){let{$$slots:l={},$$scope:i}=e,{mode:n=pe("mode")}=e;return s.$$set=a=>{"mode"in a&&t(0,n=a.mode),"$$scope"in a&&t(1,i=a.$$scope)},[n,i,l]}class Pe extends X{constructor(e){super();z(this,e,je,Se,J,{mode:0})}}export{Pe as H,Ke as T};
