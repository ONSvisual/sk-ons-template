import{S as B,i as F,s as J,l as M,g as $,e as K,k as S,t as V,c as D,a as I,d as _,m as T,h as L,b as y,f as k,X as de,I as E,j as P,T as j,R as q,G as ge,O as Z,K as ve,L as be,M as ke,q as N,o as z,Z as $e,w as W,V as we,x as H,y as A,B as O}from"../chunks/vendor-55adee57.js";import{a as pe}from"../chunks/paths-c0fc83a9.js";import{T as ye,H as Ee}from"../chunks/Headline-f47083da.js";import{S as Ke}from"../chunks/Subhead-54a5020a.js";import{C as De,a as Ce}from"../chunks/Cards-36f7dd50.js";import{C as G}from"../chunks/Card-294ca308.js";import"../chunks/Navbox-1388a168.js";/* empty css                                                    *//* empty css                                                   */function Q(n,e,a){const t=n.slice();return t[13]=e[a],t[15]=a,t}function Y(n,e,a){const t=n.slice();return t[16]=e[a],t[18]=a,t}function x(n,e,a){const t=n.slice();return t[16]=e[a],t[18]=a,t}function ee(n,e,a){const t=n.slice();return t[20]=e[a],t[15]=a,t}function te(n){let e,a=n[6],t=[];for(let s=0;s<a.length;s+=1)t[s]=le(ee(n,a,s));return{c(){for(let s=0;s<t.length;s+=1)t[s].c();e=M()},l(s){for(let r=0;r<t.length;r+=1)t[r].l(s);e=M()},m(s,r){for(let l=0;l<t.length;l+=1)t[l].m(s,r);$(s,e,r)},p(s,r){if(r&68){a=s[6];let l;for(l=0;l<a.length;l+=1){const i=ee(s,a,l);t[l]?t[l].p(i,r):(t[l]=le(i),t[l].c(),t[l].m(e.parentNode,e))}for(;l<t.length;l+=1)t[l].d(1);t.length=a.length}},d(s){j(t,s),s&&_(e)}}}function le(n){let e,a,t=`${n[15]==0?0:n[2]}px`,s,r,l=n[20]+"",i,u,c;return{c(){e=K("li"),a=K("div"),s=S(),r=K("span"),i=V(l),c=S(),this.h()},l(o){e=D(o,"LI",{class:!0});var p=I(e);a=D(p,"DIV",{class:!0}),I(a).forEach(_),s=T(p),r=D(p,"SPAN",{class:!0});var b=I(r);i=L(b,l),b.forEach(_),c=T(p),p.forEach(_),this.h()},h(){y(a,"class","legend-vis "+(n[15]==0?"bar":"marker-vis")+" svelte-14ipkw6"),k(a,"border-bottom-width",t,!1),y(r,"class",u=de(n[15]==0?"bold":"brackets")+" svelte-14ipkw6"),y(e,"class","svelte-14ipkw6")},m(o,p){$(o,e,p),E(e,a),E(e,s),E(e,r),E(r,i),E(e,c)},p(o,p){p&4&&t!==(t=`${o[15]==0?0:o[2]}px`)&&k(a,"border-bottom-width",t,!1),p&64&&l!==(l=o[20]+"")&&P(i,l)},d(o){o&&_(e)}}}function Ie(n){let e,a=n[13].values,t=[];for(let s=0;s<a.length;s+=1)t[s]=ae(Y(n,a,s));return{c(){for(let s=0;s<t.length;s+=1)t[s].c();e=M()},l(s){for(let r=0;r<t.length;r+=1)t[r].l(s);e=M()},m(s,r){for(let l=0;l<t.length;l+=1)t[l].m(s,r);$(s,e,r)},p(s,r){if(r&181){a=s[13].values;let l;for(l=0;l<a.length;l+=1){const i=Y(s,a,l);t[l]?t[l].p(i,r):(t[l]=ae(i),t[l].c(),t[l].m(e.parentNode,e))}for(;l<t.length;l+=1)t[l].d(1);t.length=a.length}},d(s){j(t,s),s&&_(e)}}}function Se(n){let e,a=n[13].values,t=[];for(let s=0;s<a.length;s+=1)t[s]=se(x(n,a,s));return{c(){for(let s=0;s<t.length;s+=1)t[s].c();e=M()},l(s){for(let r=0;r<t.length;r+=1)t[r].l(s);e=M()},m(s,r){for(let l=0;l<t.length;l+=1)t[l].m(s,r);$(s,e,r)},p(s,r){if(r&177){a=s[13].values;let l;for(l=0;l<a.length;l+=1){const i=x(s,a,l);t[l]?t[l].p(i,r):(t[l]=se(i),t[l].c(),t[l].m(e.parentNode,e))}for(;l<t.length;l+=1)t[l].d(1);t.length=a.length}},d(s){j(t,s),s&&_(e)}}}function ae(n){let e,a=`calc(100% - ${n[5](n[16][n[0]])}% - ${n[2]/2}px)`,t=`${n[18]/n[7].length*100}%`,s=`${1/n[7].length*100}%`,r=`${n[2]}px`;return{c(){e=K("div"),this.h()},l(l){e=D(l,"DIV",{class:!0}),I(e).forEach(_),this.h()},h(){y(e,"class","marker svelte-14ipkw6"),k(e,"top",a,!1),k(e,"height","0px",!1),k(e,"left",t,!1),k(e,"width",s,!1),k(e,"border-bottom-width",r,!1)},m(l,i){$(l,e,i)},p(l,i){i&53&&a!==(a=`calc(100% - ${l[5](l[16][l[0]])}% - ${l[2]/2}px)`)&&k(e,"top",a,!1),i&128&&t!==(t=`${l[18]/l[7].length*100}%`)&&k(e,"left",t,!1),i&128&&s!==(s=`${1/l[7].length*100}%`)&&k(e,"width",s,!1),i&4&&r!==(r=`${l[2]}px`)&&k(e,"border-bottom-width",r,!1)},d(l){l&&_(e)}}}function se(n){let e,a=`${100-n[5](n[16][n[0]])}%`,t=`${n[5](n[16][n[0]])}%`,s=`${n[18]/n[7].length*100}%`,r=`calc(${1/n[7].length*100}% + 0.2px)`;return{c(){e=K("div"),this.h()},l(l){e=D(l,"DIV",{class:!0}),I(e).forEach(_),this.h()},h(){y(e,"class","bar svelte-14ipkw6"),k(e,"top",a,!1),k(e,"height",t,!1),k(e,"left",s,!1),k(e,"width",r,!1)},m(l,i){$(l,e,i)},p(l,i){i&49&&a!==(a=`${100-l[5](l[16][l[0]])}%`)&&k(e,"top",a,!1),i&49&&t!==(t=`${l[5](l[16][l[0]])}%`)&&k(e,"height",t,!1),i&128&&s!==(s=`${l[18]/l[7].length*100}%`)&&k(e,"left",s,!1),i&128&&r!==(r=`calc(${1/l[7].length*100}% + 0.2px)`)&&k(e,"width",r,!1)},d(l){l&&_(e)}}}function re(n){let e;function a(r,l){return r[15]==0?Se:Ie}let s=a(n)(n);return{c(){s.c(),e=M()},l(r){s.l(r),e=M()},m(r,l){s.m(r,l),$(r,e,l)},p(r,l){s.p(r,l)},d(r){s.d(r),r&&_(e)}}}function Te(n){let e,a,t,s=`${n[1]}px`,r,l,i,u=n[3][0]+"",c,o,p,b=n[3][1]+"",d,g=n[6][1]&&te(n),m=n[4],f=[];for(let h=0;h<m.length;h+=1)f[h]=re(Q(n,m,h));return{c(){e=K("ul"),g&&g.c(),a=S(),t=K("div");for(let h=0;h<f.length;h+=1)f[h].c();r=S(),l=K("div"),i=K("div"),c=V(u),o=S(),p=K("div"),d=V(b),this.h()},l(h){e=D(h,"UL",{class:!0});var v=I(e);g&&g.l(v),v.forEach(_),a=T(h),t=D(h,"DIV",{class:!0});var w=I(t);for(let U=0;U<f.length;U+=1)f[U].l(w);w.forEach(_),r=T(h),l=D(h,"DIV",{class:!0});var C=I(l);i=D(C,"DIV",{class:!0});var R=I(i);c=L(R,u),R.forEach(_),o=T(C),p=D(C,"DIV",{class:!0});var X=I(p);d=L(X,b),X.forEach(_),C.forEach(_),this.h()},h(){y(e,"class","legend-block svelte-14ipkw6"),y(t,"class","bar-group svelte-14ipkw6"),k(t,"height",s,!1),y(i,"class","svelte-14ipkw6"),k(i,"left",0,!1),y(p,"class","svelte-14ipkw6"),k(p,"right",0,!1),y(l,"class","x-scale svelte-14ipkw6"),k(l,"height","1rem",!1)},m(h,v){$(h,e,v),g&&g.m(e,null),$(h,a,v),$(h,t,v);for(let w=0;w<f.length;w+=1)f[w].m(t,null);$(h,r,v),$(h,l,v),E(l,i),E(i,c),E(l,o),E(l,p),E(p,d)},p(h,[v]){if(h[6][1]?g?g.p(h,v):(g=te(h),g.c(),g.m(e,null)):g&&(g.d(1),g=null),v&181){m=h[4];let w;for(w=0;w<m.length;w+=1){const C=Q(h,m,w);f[w]?f[w].p(C,v):(f[w]=re(C),f[w].c(),f[w].m(t,null))}for(;w<f.length;w+=1)f[w].d(1);f.length=m.length}v&2&&s!==(s=`${h[1]}px`)&&k(t,"height",s,!1),v&8&&u!==(u=h[3][0]+"")&&P(c,u),v&8&&b!==(b=h[3][1]+"")&&P(d,b)},i:q,o:q,d(h){h&&_(e),g&&g.d(),h&&_(a),h&&_(t),j(f,h),h&&_(r),h&&_(l)}}}function Ve(n,e,a){let t,s,r,l,i,{data:u}=e,{xKey:c="category"}=e,{yKey:o="value"}=e,{zKey:p="group"}=e,{height:b=65}=e,{markerWidth:d=2.5}=e,{minmax:g=["0 years","70 plus"]}=e;function m(f,h){let v={};for(const C of f)v[C[h]]||(v[C[h]]={label:C[h],values:[]}),v[C[h]].values.push(C);let w=[];for(const C in v)w.push(v[C]);return w}return n.$$set=f=>{"data"in f&&a(8,u=f.data),"xKey"in f&&a(9,c=f.xKey),"yKey"in f&&a(0,o=f.yKey),"zKey"in f&&a(10,p=f.zKey),"height"in f&&a(1,b=f.height),"markerWidth"in f&&a(2,d=f.markerWidth),"minmax"in f&&a(3,g=f.minmax)},n.$$.update=()=>{n.$$.dirty&768&&a(7,t=u.map(f=>f[c]).filter((f,h,v)=>v.indexOf(f)===h)),n.$$.dirty&257&&a(11,s=[0,Math.max(...u.map(f=>f[o]))]),n.$$.dirty&1280&&a(6,r=u.map(f=>f[p]).filter((f,h,v)=>v.indexOf(f)===h)),n.$$.dirty&2048&&a(5,l=f=>Math.abs(f/s[1])*100),n.$$.dirty&1280&&a(4,i=m(u,p))},[o,b,d,g,i,l,r,t,u,c,p,s]}class Le extends B{constructor(e){super();F(this,e,Ve,Te,J,{data:8,xKey:9,yKey:0,zKey:10,height:1,markerWidth:2,minmax:3})}}function ne(n,e,a){const t=n.slice();return t[14]=e[a],t}function ie(n,e,a){const t=n.slice();return t[17]=e[a],t[19]=a,t}function fe(n,e,a){const t=n.slice();return t[17]=e[a],t[19]=a,t}function oe(n,e,a){const t=n.slice();return t[14]=e[a],t[19]=a,t}function ce(n){let e,a=n[7],t=[];for(let s=0;s<a.length;s+=1)t[s]=ue(oe(n,a,s));return{c(){e=K("ul");for(let s=0;s<t.length;s+=1)t[s].c();this.h()},l(s){e=D(s,"UL",{class:!0});var r=I(e);for(let l=0;l<t.length;l+=1)t[l].l(r);r.forEach(_),this.h()},h(){y(e,"class","legend-block svelte-1ri9pb8")},m(s,r){$(s,e,r);for(let l=0;l<t.length;l+=1)t[l].m(e,null)},p(s,r){if(r&144){a=s[7];let l;for(l=0;l<a.length;l+=1){const i=oe(s,a,l);t[l]?t[l].p(i,r):(t[l]=ue(i),t[l].c(),t[l].m(e,null))}for(;l<t.length;l+=1)t[l].d(1);t.length=a.length}},d(s){s&&_(e),j(t,s)}}}function ue(n){let e,a,t,s,r=n[14]+"",l,i,u;return{c(){e=K("li"),a=K("div"),t=S(),s=K("span"),l=V(r),u=S(),this.h()},l(c){e=D(c,"LI",{class:!0});var o=I(e);a=D(o,"DIV",{class:!0}),I(a).forEach(_),t=T(o),s=D(o,"SPAN",{class:!0});var p=I(s);l=L(p,r),p.forEach(_),u=T(o),o.forEach(_),this.h()},h(){y(a,"class","legend-vis "+(n[19]==0?"bar":"marker")+" svelte-1ri9pb8"),k(a,"height","1rem",!1),k(a,"width",n[19]==0?"1rem":n[4]+"px",!1),y(s,"class",i=de(n[19]==0?"bold":"brackets")+" svelte-1ri9pb8"),y(e,"class","svelte-1ri9pb8")},m(c,o){$(c,e,o),E(e,a),E(e,t),E(e,s),E(s,l),E(e,u)},p(c,o){o&16&&k(a,"width",c[19]==0?"1rem":c[4]+"px",!1),o&128&&r!==(r=c[14]+"")&&P(l,r)},d(c){c&&_(e)}}}function he(n){let e,a=n[1](n[17].value)+"",t,s,r;return{c(){e=K("span"),t=V(a),s=V(n[2]),this.h()},l(l){e=D(l,"SPAN",{class:!0});var i=I(e);t=L(i,a),s=L(i,n[2]),i.forEach(_),this.h()},h(){y(e,"class",r="label "+(n[19]==0?"bold":"sml brackets")+" svelte-1ri9pb8")},m(l,i){$(l,e,i),E(e,t),E(e,s)},p(l,i){i&34&&a!==(a=l[1](l[17].value)+"")&&P(t,a),i&4&&P(s,l[2])},d(l){l&&_(e)}}}function Ne(n){let e,a=`calc(${n[6](n[17][n[0]])}% - ${n[4]/2}px)`,t=`${n[4]}px`;return{c(){e=K("div"),this.h()},l(s){e=D(s,"DIV",{class:!0}),I(e).forEach(_),this.h()},h(){y(e,"class","marker svelte-1ri9pb8"),k(e,"left",a,!1),k(e,"border-left-width",t,!1)},m(s,r){$(s,e,r)},p(s,r){r&113&&a!==(a=`calc(${s[6](s[17][s[0]])}% - ${s[4]/2}px)`)&&k(e,"left",a,!1),r&16&&t!==(t=`${s[4]}px`)&&k(e,"border-left-width",t,!1)},d(s){s&&_(e)}}}function ze(n){let e,a=`${n[6](n[17][n[0]])}%`;return{c(){e=K("div"),this.h()},l(t){e=D(t,"DIV",{class:!0}),I(e).forEach(_),this.h()},h(){y(e,"class","bar svelte-1ri9pb8"),k(e,"left","0",!1),k(e,"width",a,!1)},m(t,s){$(t,e,s)},p(t,s){s&97&&a!==(a=`${t[6](t[17][t[0]])}%`)&&k(e,"width",a,!1)},d(t){t&&_(e)}}}function _e(n){let e;function a(r,l){return r[19]==0?ze:Ne}let s=a(n)(n);return{c(){s.c(),e=M()},l(r){s.l(r),e=M()},m(r,l){s.m(r,l),$(r,e,l)},p(r,l){s.p(r,l)},d(r){s.d(r),r&&_(e)}}}function me(n){let e,a=n[14].label+"",t,s,r,l,i,u=`${n[3]}px`,c=n[14].values,o=[];for(let d=0;d<c.length;d+=1)o[d]=he(fe(n,c,d));let p=n[14].values,b=[];for(let d=0;d<p.length;d+=1)b[d]=_e(ie(n,p,d));return{c(){e=K("div"),t=V(a),s=S();for(let d=0;d<o.length;d+=1)o[d].c();r=S(),l=K("div");for(let d=0;d<b.length;d+=1)b[d].c();i=S(),this.h()},l(d){e=D(d,"DIV",{class:!0});var g=I(e);t=L(g,a),s=T(g);for(let f=0;f<o.length;f+=1)o[f].l(g);g.forEach(_),r=T(d),l=D(d,"DIV",{class:!0});var m=I(l);for(let f=0;f<b.length;f+=1)b[f].l(m);i=T(m),m.forEach(_),this.h()},h(){y(e,"class","label-group svelte-1ri9pb8"),y(l,"class","bar-group svelte-1ri9pb8"),k(l,"height",u,!1)},m(d,g){$(d,e,g),E(e,t),E(e,s);for(let m=0;m<o.length;m+=1)o[m].m(e,null);$(d,r,g),$(d,l,g);for(let m=0;m<b.length;m+=1)b[m].m(l,null);E(l,i)},p(d,g){if(g&32&&a!==(a=d[14].label+"")&&P(t,a),g&38){c=d[14].values;let m;for(m=0;m<c.length;m+=1){const f=fe(d,c,m);o[m]?o[m].p(f,g):(o[m]=he(f),o[m].c(),o[m].m(e,null))}for(;m<o.length;m+=1)o[m].d(1);o.length=c.length}if(g&113){p=d[14].values;let m;for(m=0;m<p.length;m+=1){const f=ie(d,p,m);b[m]?b[m].p(f,g):(b[m]=_e(f),b[m].c(),b[m].m(l,i))}for(;m<b.length;m+=1)b[m].d(1);b.length=p.length}g&8&&u!==(u=`${d[3]}px`)&&k(l,"height",u,!1)},d(d){d&&_(e),j(o,d),d&&_(r),d&&_(l),j(b,d)}}}function Me(n){let e,a,t=n[7][1]&&ce(n),s=n[5],r=[];for(let l=0;l<s.length;l+=1)r[l]=me(ne(n,s,l));return{c(){t&&t.c(),e=S();for(let l=0;l<r.length;l+=1)r[l].c();a=M()},l(l){t&&t.l(l),e=T(l);for(let i=0;i<r.length;i+=1)r[i].l(l);a=M()},m(l,i){t&&t.m(l,i),$(l,e,i);for(let u=0;u<r.length;u+=1)r[u].m(l,i);$(l,a,i)},p(l,[i]){if(l[7][1]?t?t.p(l,i):(t=ce(l),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null),i&127){s=l[5];let u;for(u=0;u<s.length;u+=1){const c=ne(l,s,u);r[u]?r[u].p(c,i):(r[u]=me(c),r[u].c(),r[u].m(a.parentNode,a))}for(;u<r.length;u+=1)r[u].d(1);r.length=s.length}},i:q,o:q,d(l){t&&t.d(l),l&&_(e),j(r,l),l&&_(a)}}}function We(n,e,a){let t,s,r,l,{data:i}=e,{xKey:u="value"}=e,{yKey:c="category"}=e,{zKey:o="group"}=e,{formatTick:p=f=>Math.round(f)}=e,{suffix:b="%"}=e,{barHeight:d=25}=e,{markerWidth:g=3}=e;function m(f,h){let v={};for(const C of f)v[C[h]]||(v[C[h]]={label:C[h],values:[]}),v[C[h]].values.push(C);let w=[];for(const C in v)w.push(v[C]);return w}return n.$$set=f=>{"data"in f&&a(8,i=f.data),"xKey"in f&&a(0,u=f.xKey),"yKey"in f&&a(9,c=f.yKey),"zKey"in f&&a(10,o=f.zKey),"formatTick"in f&&a(1,p=f.formatTick),"suffix"in f&&a(2,b=f.suffix),"barHeight"in f&&a(3,d=f.barHeight),"markerWidth"in f&&a(4,g=f.markerWidth)},n.$$.update=()=>{n.$$.dirty&257&&a(11,t=[0,Math.max(...i.map(f=>f[u]))]),n.$$.dirty&768&&i.map(f=>f[c]).filter((f,h,v)=>v.indexOf(f)===h),n.$$.dirty&1280&&a(7,s=i.map(f=>f[o]).filter((f,h,v)=>v.indexOf(f)===h)),n.$$.dirty&2048&&a(6,r=f=>f/t[1]*100),n.$$.dirty&768&&a(5,l=m(i,c))},[u,p,b,d,g,l,r,s,i,c,o,t]}class He extends B{constructor(e){super();F(this,e,We,Me,J,{data:8,xKey:0,yKey:9,zKey:10,formatTick:1,suffix:2,barHeight:3,markerWidth:4})}}function Ae(n){let e,a;const t=n[5].default,s=ge(t,n,n[4],null);return{c(){e=K("span"),s&&s.c(),this.h()},l(r){e=D(r,"SPAN",{class:!0,style:!0,role:!0});var l=I(e);s&&s.l(l),l.forEach(_),this.h()},h(){y(e,"class","em svelte-s1t2y4"),k(e,"background-color",n[0]),k(e,"color",n[2]),y(e,"role","presentation"),Z(e,"nowrap",n[1])},m(r,l){$(r,e,l),s&&s.m(e,null),a=!0},p(r,[l]){s&&s.p&&(!a||l&16)&&ve(s,t,r,r[4],a?ke(t,r[4],l,null):be(r[4]),null),(!a||l&1)&&k(e,"background-color",r[0]),(!a||l&4)&&k(e,"color",r[2]),l&2&&Z(e,"nowrap",r[1])},i(r){a||(N(s,r),a=!0)},o(r){z(s,r),a=!1},d(r){r&&_(e),s&&s.d(r)}}}function Oe(n,e,a){let t,{$$slots:s={},$$scope:r}=e,{color:l="lightgrey"}=e,{nowrap:i=!0}=e;function u(o){return(o[0]*299+o[1]*587+o[2]*114)/1e3>125?"black":"white"}let c="black";return n.$$set=o=>{"color"in o&&a(0,l=o.color),"nowrap"in o&&a(1,i=o.nowrap),"$$scope"in o&&a(4,r=o.$$scope)},n.$$.update=()=>{n.$$.dirty&1&&a(3,t=$e(l).rgb),n.$$.dirty&8&&t&&a(2,c=u(t))},[l,i,c,t,r,s]}class Pe extends B{constructor(e){super();F(this,e,Oe,Ae,J,{color:0,nowrap:1})}}function je(n){let e;return{c(){e=V("Charts demo")},l(a){e=L(a,"Charts demo")},m(a,t){$(a,e,t)},d(a){a&&_(e)}}}function qe(n){let e;return{c(){e=V('This page offers a demo of how to pre-load JSON data in a "load" function in order to create simple pre-rendered HTML charts.')},l(a){e=L(a,'This page offers a demo of how to pre-load JSON data in a "load" function in order to create simple pre-rendered HTML charts.')},m(a,t){$(a,e,t)},d(a){a&&_(e)}}}function Be(n){let e,a,t,s;return e=new Ee({props:{$$slots:{default:[je]},$$scope:{ctx:n}}}),t=new Ke({props:{$$slots:{default:[qe]},$$scope:{ctx:n}}}),{c(){W(e.$$.fragment),a=S(),W(t.$$.fragment)},l(r){H(e.$$.fragment,r),a=T(r),H(t.$$.fragment,r)},m(r,l){A(e,r,l),$(r,a,l),A(t,r,l),s=!0},p(r,l){const i={};l&2&&(i.$$scope={dirty:l,ctx:r}),e.$set(i);const u={};l&2&&(u.$$scope={dirty:l,ctx:r}),t.$set(u)},i(r){s||(N(e.$$.fragment,r),N(t.$$.fragment,r),s=!0)},o(r){z(e.$$.fragment,r),z(t.$$.fragment,r),s=!1},d(r){O(e,r),r&&_(a),O(t,r)}}}function Fe(n){let e=n[0].population[0].value.toLocaleString()+"",a;return{c(){a=V(e)},l(t){a=L(t,e)},m(t,s){$(t,a,s)},p(t,s){s&1&&e!==(e=t[0].population[0].value.toLocaleString()+"")&&P(a,e)},d(t){t&&_(a)}}}function Je(n){let e,a=(100*n[0].population[0].value/n[0].population[1].value).toFixed(1)+"",t,s,r,l,i,u,c,o,p,b=n[0].population[1].value.toLocaleString()+"",d,g,m;return o=new Pe({props:{color:"lightgrey",$$slots:{default:[Fe]},$$scope:{ctx:n}}}),{c(){e=K("div"),t=V(a),s=V("%"),r=S(),l=K("div"),i=V("of people in England and Wales"),u=S(),c=K("div"),W(o.$$.fragment),p=V(` 
        of `),d=V(b),g=V(" people"),this.h()},l(f){e=D(f,"DIV",{class:!0});var h=I(e);t=L(h,a),s=L(h,"%"),h.forEach(_),r=T(f),l=D(f,"DIV",{class:!0});var v=I(l);i=L(v,"of people in England and Wales"),v.forEach(_),u=T(f),c=D(f,"DIV",{class:!0});var w=I(c);H(o.$$.fragment,w),p=L(w,` 
        of `),d=L(w,b),g=L(w," people"),w.forEach(_),this.h()},h(){y(e,"class","num-big"),y(l,"class","num-suffix"),y(c,"class","num-desc")},m(f,h){$(f,e,h),E(e,t),E(e,s),$(f,r,h),$(f,l,h),E(l,i),$(f,u,h),$(f,c,h),A(o,c,null),E(c,p),E(c,d),E(c,g),m=!0},p(f,h){(!m||h&1)&&a!==(a=(100*f[0].population[0].value/f[0].population[1].value).toFixed(1)+"")&&P(t,a);const v={};h&3&&(v.$$scope={dirty:h,ctx:f}),o.$set(v),(!m||h&1)&&b!==(b=f[0].population[1].value.toLocaleString()+"")&&P(d,b)},i(f){m||(N(o.$$.fragment,f),m=!0)},o(f){z(o.$$.fragment,f),m=!1},d(f){f&&_(e),f&&_(r),f&&_(l),f&&_(u),f&&_(c),O(o)}}}function Ue(n){let e,a;return e=new Le({props:{data:n[0].age}}),{c(){W(e.$$.fragment)},l(t){H(e.$$.fragment,t)},m(t,s){A(e,t,s),a=!0},p(t,s){const r={};s&1&&(r.data=t[0].age),e.$set(r)},i(t){a||(N(e.$$.fragment,t),a=!0)},o(t){z(e.$$.fragment,t),a=!1},d(t){O(e,t)}}}function Ge(n){let e,a;return e=new He({props:{data:n[0].sex}}),{c(){W(e.$$.fragment)},l(t){H(e.$$.fragment,t)},m(t,s){A(e,t,s),a=!0},p(t,s){const r={};s&1&&(r.data=t[0].sex),e.$set(r)},i(t){a||(N(e.$$.fragment,t),a=!0)},o(t){z(e.$$.fragment,t),a=!1},d(t){O(e,t)}}}function Re(n){let e,a,t,s,r,l;return e=new G({props:{title:"Population",$$slots:{default:[Je]},$$scope:{ctx:n}}}),t=new G({props:{title:"Age profile",$$slots:{default:[Ue]},$$scope:{ctx:n}}}),r=new G({props:{title:"Sex",$$slots:{default:[Ge]},$$scope:{ctx:n}}}),{c(){W(e.$$.fragment),a=S(),W(t.$$.fragment),s=S(),W(r.$$.fragment)},l(i){H(e.$$.fragment,i),a=T(i),H(t.$$.fragment,i),s=T(i),H(r.$$.fragment,i)},m(i,u){A(e,i,u),$(i,a,u),A(t,i,u),$(i,s,u),A(r,i,u),l=!0},p(i,u){const c={};u&3&&(c.$$scope={dirty:u,ctx:i}),e.$set(c);const o={};u&3&&(o.$$scope={dirty:u,ctx:i}),t.$set(o);const p={};u&3&&(p.$$scope={dirty:u,ctx:i}),r.$set(p)},i(i){l||(N(e.$$.fragment,i),N(t.$$.fragment,i),N(r.$$.fragment,i),l=!0)},o(i){z(e.$$.fragment,i),z(t.$$.fragment,i),z(r.$$.fragment,i),l=!1},d(i){O(e,i),i&&_(a),O(t,i),i&&_(s),O(r,i)}}}function Xe(n){let e,a;return e=new Ce({props:{title:"Example charts",subtitle:"optional",$$slots:{default:[Re]},$$scope:{ctx:n}}}),{c(){W(e.$$.fragment)},l(t){H(e.$$.fragment,t)},m(t,s){A(e,t,s),a=!0},p(t,s){const r={};s&3&&(r.$$scope={dirty:s,ctx:t}),e.$set(r)},i(t){a||(N(e.$$.fragment,t),a=!0)},o(t){z(e.$$.fragment,t),a=!1},d(t){O(e,t)}}}function Ze(n){let e,a,t,s,r,l,i,u;return r=new ye({props:{mode:"page",breadcrumb:[{label:"Home",url:`${pe}/`},{label:"Charts demo"}],$$slots:{default:[Be]},$$scope:{ctx:n}}}),i=new De({props:{$$slots:{default:[Xe]},$$scope:{ctx:n}}}),{c(){e=K("meta"),a=K("meta"),t=K("meta"),s=S(),W(r.$$.fragment),l=S(),W(i.$$.fragment),this.h()},l(c){const o=we('[data-svelte="svelte-yj8sr5"]',document.head);e=D(o,"META",{property:!0,content:!0}),a=D(o,"META",{property:!0,content:!0}),t=D(o,"META",{name:!0,content:!0}),o.forEach(_),s=T(c),H(r.$$.fragment,c),l=T(c),H(i.$$.fragment,c),this.h()},h(){document.title="Charts demo",y(e,"property","og:title"),y(e,"content","Charts demo"),y(a,"property","og:description"),y(a,"content","This is a description of the page."),y(t,"name","description"),y(t,"content","This is a description of the page.")},m(c,o){E(document.head,e),E(document.head,a),E(document.head,t),$(c,s,o),A(r,c,o),$(c,l,o),A(i,c,o),u=!0},p(c,[o]){const p={};o&2&&(p.$$scope={dirty:o,ctx:c}),r.$set(p);const b={};o&3&&(b.$$scope={dirty:o,ctx:c}),i.$set(b)},i(c){u||(N(r.$$.fragment,c),N(i.$$.fragment,c),u=!0)},o(c){z(r.$$.fragment,c),z(i.$$.fragment,c),u=!1},d(c){_(e),_(a),_(t),c&&_(s),O(r,c),c&&_(l),O(i,c)}}}async function it({fetch:n}){return{props:{data:await(await n(pe+"/data/data.json")).json()}}}function Qe(n,e,a){let{data:t}=e;return n.$$set=s=>{"data"in s&&a(0,t=s.data)},[t]}class ft extends B{constructor(e){super();F(this,e,Qe,Ze,J,{data:0})}}export{ft as default,it as load};