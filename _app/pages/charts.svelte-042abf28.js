import{S as le,i as re,s as ae,l as W,g as M,e as D,k as V,t as q,c as I,a as C,d as m,m as T,h as N,b as K,f as $,W as je,I as z,j as F,R as B,E as te,G as Ge,O as ke,K as Qe,L as Xe,M as Ye,q as A,o as L,w as H,U as Ze,x as O,y as P,B as j}from"../chunks/index-74a41eac.js";import{b as Fe}from"../chunks/paths-396f020f.js";import{T as xe,H as et}from"../chunks/Headline-a0bc6aff.js";import{S as tt}from"../chunks/Subhead-e046b00a.js";import{C as lt,a as rt}from"../chunks/Content-0268bc76.js";import{C as fe}from"../chunks/Card-0d927863.js";import"../chunks/Navbox-8a6958df.js";import"../chunks/index-1ccb10cb.js";/* empty css                                                    *//* empty css                                                   */function we(n,t,l){const e=n.slice();return e[13]=t[l],e[15]=l,e}function $e(n,t,l){const e=n.slice();return e[16]=t[l],e[18]=l,e}function Me(n,t,l){const e=n.slice();return e[16]=t[l],e[18]=l,e}function Ee(n,t,l){const e=n.slice();return e[20]=t[l],e[15]=l,e}function Ke(n){let t,l=n[6],e=[];for(let i=0;i<l.length;i+=1)e[i]=ze(Ee(n,l,i));return{c(){for(let i=0;i<e.length;i+=1)e[i].c();t=W()},l(i){for(let s=0;s<e.length;s+=1)e[s].l(i);t=W()},m(i,s){for(let a=0;a<e.length;a+=1)e[a].m(i,s);M(i,t,s)},p(i,s){if(s&68){l=i[6];let a;for(a=0;a<l.length;a+=1){const o=Ee(i,l,a);e[a]?e[a].p(o,s):(e[a]=ze(o),e[a].c(),e[a].m(t.parentNode,t))}for(;a<e.length;a+=1)e[a].d(1);e.length=l.length}},d(i){B(e,i),i&&m(t)}}}function ze(n){let t,l,e=`${n[15]==0?0:n[2]}px`,i,s,a=n[20]+"",o,f,c;return{c(){t=D("li"),l=D("div"),i=V(),s=D("span"),o=q(a),c=V(),this.h()},l(h){t=I(h,"LI",{class:!0});var v=C(t);l=I(v,"DIV",{class:!0}),C(l).forEach(m),i=T(v),s=I(v,"SPAN",{class:!0});var w=C(s);o=N(w,a),w.forEach(m),c=T(v),v.forEach(m),this.h()},h(){K(l,"class","legend-vis "+(n[15]==0?"bar":"marker-vis")+" svelte-14ipkw6"),$(l,"border-bottom-width",e,!1),K(s,"class",f=je(n[15]==0?"bold":"brackets")+" svelte-14ipkw6"),K(t,"class","svelte-14ipkw6")},m(h,v){M(h,t,v),z(t,l),z(t,i),z(t,s),z(s,o),z(t,c)},p(h,v){v&4&&e!==(e=`${h[15]==0?0:h[2]}px`)&&$(l,"border-bottom-width",e,!1),v&64&&a!==(a=h[20]+"")&&F(o,a)},d(h){h&&m(t)}}}function at(n){let t,l=n[13].values,e=[];for(let i=0;i<l.length;i+=1)e[i]=De($e(n,l,i));return{c(){for(let i=0;i<e.length;i+=1)e[i].c();t=W()},l(i){for(let s=0;s<e.length;s+=1)e[s].l(i);t=W()},m(i,s){for(let a=0;a<e.length;a+=1)e[a].m(i,s);M(i,t,s)},p(i,s){if(s&181){l=i[13].values;let a;for(a=0;a<l.length;a+=1){const o=$e(i,l,a);e[a]?e[a].p(o,s):(e[a]=De(o),e[a].c(),e[a].m(t.parentNode,t))}for(;a<e.length;a+=1)e[a].d(1);e.length=l.length}},d(i){B(e,i),i&&m(t)}}}function nt(n){let t,l=n[13].values,e=[];for(let i=0;i<l.length;i+=1)e[i]=Ie(Me(n,l,i));return{c(){for(let i=0;i<e.length;i+=1)e[i].c();t=W()},l(i){for(let s=0;s<e.length;s+=1)e[s].l(i);t=W()},m(i,s){for(let a=0;a<e.length;a+=1)e[a].m(i,s);M(i,t,s)},p(i,s){if(s&177){l=i[13].values;let a;for(a=0;a<l.length;a+=1){const o=Me(i,l,a);e[a]?e[a].p(o,s):(e[a]=Ie(o),e[a].c(),e[a].m(t.parentNode,t))}for(;a<e.length;a+=1)e[a].d(1);e.length=l.length}},d(i){B(e,i),i&&m(t)}}}function De(n){let t,l=`calc(100% - ${n[5](n[16][n[0]])}% - ${n[2]/2}px)`,e=`${n[18]/n[7].length*100}%`,i=`${1/n[7].length*100}%`,s=`${n[2]}px`;return{c(){t=D("div"),this.h()},l(a){t=I(a,"DIV",{class:!0}),C(t).forEach(m),this.h()},h(){K(t,"class","marker svelte-14ipkw6"),$(t,"top",l,!1),$(t,"height","0px",!1),$(t,"left",e,!1),$(t,"width",i,!1),$(t,"border-bottom-width",s,!1)},m(a,o){M(a,t,o)},p(a,o){o&53&&l!==(l=`calc(100% - ${a[5](a[16][a[0]])}% - ${a[2]/2}px)`)&&$(t,"top",l,!1),o&128&&e!==(e=`${a[18]/a[7].length*100}%`)&&$(t,"left",e,!1),o&128&&i!==(i=`${1/a[7].length*100}%`)&&$(t,"width",i,!1),o&4&&s!==(s=`${a[2]}px`)&&$(t,"border-bottom-width",s,!1)},d(a){a&&m(t)}}}function Ie(n){let t,l=`${100-n[5](n[16][n[0]])}%`,e=`${n[5](n[16][n[0]])}%`,i=`${n[18]/n[7].length*100}%`,s=`calc(${1/n[7].length*100}% + 0.2px)`;return{c(){t=D("div"),this.h()},l(a){t=I(a,"DIV",{class:!0}),C(t).forEach(m),this.h()},h(){K(t,"class","bar svelte-14ipkw6"),$(t,"top",l,!1),$(t,"height",e,!1),$(t,"left",i,!1),$(t,"width",s,!1)},m(a,o){M(a,t,o)},p(a,o){o&49&&l!==(l=`${100-a[5](a[16][a[0]])}%`)&&$(t,"top",l,!1),o&49&&e!==(e=`${a[5](a[16][a[0]])}%`)&&$(t,"height",e,!1),o&128&&i!==(i=`${a[18]/a[7].length*100}%`)&&$(t,"left",i,!1),o&128&&s!==(s=`calc(${1/a[7].length*100}% + 0.2px)`)&&$(t,"width",s,!1)},d(a){a&&m(t)}}}function Se(n){let t;function l(s,a){return s[15]==0?nt:at}let i=l(n)(n);return{c(){i.c(),t=W()},l(s){i.l(s),t=W()},m(s,a){i.m(s,a),M(s,t,a)},p(s,a){i.p(s,a)},d(s){i.d(s),s&&m(t)}}}function it(n){let t,l,e,i=`${n[1]}px`,s,a,o,f=n[3][0]+"",c,h,v,w=n[3][1]+"",p,y=n[6][1]&&Ke(n),_=n[4],u=[];for(let d=0;d<_.length;d+=1)u[d]=Se(we(n,_,d));return{c(){t=D("ul"),y&&y.c(),l=V(),e=D("div");for(let d=0;d<u.length;d+=1)u[d].c();s=V(),a=D("div"),o=D("div"),c=q(f),h=V(),v=D("div"),p=q(w),this.h()},l(d){t=I(d,"UL",{class:!0});var k=C(t);y&&y.l(k),k.forEach(m),l=T(d),e=I(d,"DIV",{class:!0});var E=C(e);for(let oe=0;oe<u.length;oe+=1)u[oe].l(E);E.forEach(m),s=T(d),a=I(d,"DIV",{class:!0});var S=C(a);o=I(S,"DIV",{class:!0});var ve=C(o);c=N(ve,f),ve.forEach(m),h=T(S),v=I(S,"DIV",{class:!0});var ye=C(v);p=N(ye,w),ye.forEach(m),S.forEach(m),this.h()},h(){K(t,"class","legend-block svelte-14ipkw6"),K(e,"class","bar-group svelte-14ipkw6"),$(e,"height",i,!1),K(o,"class","svelte-14ipkw6"),$(o,"left",0,!1),K(v,"class","svelte-14ipkw6"),$(v,"right",0,!1),K(a,"class","x-scale svelte-14ipkw6"),$(a,"height","1rem",!1)},m(d,k){M(d,t,k),y&&y.m(t,null),M(d,l,k),M(d,e,k);for(let E=0;E<u.length;E+=1)u[E].m(e,null);M(d,s,k),M(d,a,k),z(a,o),z(o,c),z(a,h),z(a,v),z(v,p)},p(d,[k]){if(d[6][1]?y?y.p(d,k):(y=Ke(d),y.c(),y.m(t,null)):y&&(y.d(1),y=null),k&181){_=d[4];let E;for(E=0;E<_.length;E+=1){const S=we(d,_,E);u[E]?u[E].p(S,k):(u[E]=Se(S),u[E].c(),u[E].m(e,null))}for(;E<u.length;E+=1)u[E].d(1);u.length=_.length}k&2&&i!==(i=`${d[1]}px`)&&$(e,"height",i,!1),k&8&&f!==(f=d[3][0]+"")&&F(c,f),k&8&&w!==(w=d[3][1]+"")&&F(p,w)},i:te,o:te,d(d){d&&m(t),y&&y.d(),d&&m(l),d&&m(e),B(u,d),d&&m(s),d&&m(a)}}}function st(n,t,l){let e,i,s,a,o,{data:f}=t,{xKey:c="category"}=t,{yKey:h="value"}=t,{zKey:v="group"}=t,{height:w=65}=t,{markerWidth:p=2.5}=t,{minmax:y=["0 years","70 plus"]}=t;function _(u,d){let k={};for(const S of u)k[S[d]]||(k[S[d]]={label:S[d],values:[]}),k[S[d]].values.push(S);let E=[];for(const S in k)E.push(k[S]);return E}return n.$$set=u=>{"data"in u&&l(8,f=u.data),"xKey"in u&&l(9,c=u.xKey),"yKey"in u&&l(0,h=u.yKey),"zKey"in u&&l(10,v=u.zKey),"height"in u&&l(1,w=u.height),"markerWidth"in u&&l(2,p=u.markerWidth),"minmax"in u&&l(3,y=u.minmax)},n.$$.update=()=>{n.$$.dirty&768&&l(7,e=f.map(u=>u[c]).filter((u,d,k)=>k.indexOf(u)===d)),n.$$.dirty&257&&l(11,i=[0,Math.max(...f.map(u=>u[h]))]),n.$$.dirty&1280&&l(6,s=f.map(u=>u[v]).filter((u,d,k)=>k.indexOf(u)===d)),n.$$.dirty&2048&&l(5,a=u=>Math.abs(u/i[1])*100),n.$$.dirty&1280&&l(4,o=_(f,v))},[h,w,p,y,o,a,s,e,f,c,v,i]}class ot extends le{constructor(t){super(),re(this,t,st,it,ae,{data:8,xKey:9,yKey:0,zKey:10,height:1,markerWidth:2,minmax:3})}}function Ce(n,t,l){const e=n.slice();return e[14]=t[l],e}function Ve(n,t,l){const e=n.slice();return e[17]=t[l],e[19]=l,e}function Te(n,t,l){const e=n.slice();return e[17]=t[l],e[19]=l,e}function qe(n,t,l){const e=n.slice();return e[14]=t[l],e[19]=l,e}function Ne(n){let t,l=n[7],e=[];for(let i=0;i<l.length;i+=1)e[i]=Ae(qe(n,l,i));return{c(){t=D("ul");for(let i=0;i<e.length;i+=1)e[i].c();this.h()},l(i){t=I(i,"UL",{class:!0});var s=C(t);for(let a=0;a<e.length;a+=1)e[a].l(s);s.forEach(m),this.h()},h(){K(t,"class","legend-block svelte-1ri9pb8")},m(i,s){M(i,t,s);for(let a=0;a<e.length;a+=1)e[a].m(t,null)},p(i,s){if(s&144){l=i[7];let a;for(a=0;a<l.length;a+=1){const o=qe(i,l,a);e[a]?e[a].p(o,s):(e[a]=Ae(o),e[a].c(),e[a].m(t,null))}for(;a<e.length;a+=1)e[a].d(1);e.length=l.length}},d(i){i&&m(t),B(e,i)}}}function Ae(n){let t,l,e,i,s=n[14]+"",a,o,f;return{c(){t=D("li"),l=D("div"),e=V(),i=D("span"),a=q(s),f=V(),this.h()},l(c){t=I(c,"LI",{class:!0});var h=C(t);l=I(h,"DIV",{class:!0}),C(l).forEach(m),e=T(h),i=I(h,"SPAN",{class:!0});var v=C(i);a=N(v,s),v.forEach(m),f=T(h),h.forEach(m),this.h()},h(){K(l,"class","legend-vis "+(n[19]==0?"bar":"marker")+" svelte-1ri9pb8"),$(l,"height","1rem",!1),$(l,"width",n[19]==0?"1rem":n[4]+"px",!1),K(i,"class",o=je(n[19]==0?"bold":"brackets")+" svelte-1ri9pb8"),K(t,"class","svelte-1ri9pb8")},m(c,h){M(c,t,h),z(t,l),z(t,e),z(t,i),z(i,a),z(t,f)},p(c,h){h&16&&$(l,"width",c[19]==0?"1rem":c[4]+"px",!1),h&128&&s!==(s=c[14]+"")&&F(a,s)},d(c){c&&m(t)}}}function Le(n){let t,l=n[1](n[17].value)+"",e,i,s;return{c(){t=D("span"),e=q(l),i=q(n[2]),this.h()},l(a){t=I(a,"SPAN",{class:!0});var o=C(t);e=N(o,l),i=N(o,n[2]),o.forEach(m),this.h()},h(){K(t,"class",s="label "+(n[19]==0?"bold":"sml brackets")+" svelte-1ri9pb8")},m(a,o){M(a,t,o),z(t,e),z(t,i)},p(a,o){o&34&&l!==(l=a[1](a[17].value)+"")&&F(e,l),o&4&&F(i,a[2])},d(a){a&&m(t)}}}function ft(n){let t,l=`calc(${n[6](n[17][n[0]])}% - ${n[4]/2}px)`,e=`${n[4]}px`;return{c(){t=D("div"),this.h()},l(i){t=I(i,"DIV",{class:!0}),C(t).forEach(m),this.h()},h(){K(t,"class","marker svelte-1ri9pb8"),$(t,"left",l,!1),$(t,"border-left-width",e,!1)},m(i,s){M(i,t,s)},p(i,s){s&113&&l!==(l=`calc(${i[6](i[17][i[0]])}% - ${i[4]/2}px)`)&&$(t,"left",l,!1),s&16&&e!==(e=`${i[4]}px`)&&$(t,"border-left-width",e,!1)},d(i){i&&m(t)}}}function ut(n){let t,l=`${n[6](n[17][n[0]])}%`;return{c(){t=D("div"),this.h()},l(e){t=I(e,"DIV",{class:!0}),C(t).forEach(m),this.h()},h(){K(t,"class","bar svelte-1ri9pb8"),$(t,"left","0",!1),$(t,"width",l,!1)},m(e,i){M(e,t,i)},p(e,i){i&97&&l!==(l=`${e[6](e[17][e[0]])}%`)&&$(t,"width",l,!1)},d(e){e&&m(t)}}}function We(n){let t;function l(s,a){return s[19]==0?ut:ft}let i=l(n)(n);return{c(){i.c(),t=W()},l(s){i.l(s),t=W()},m(s,a){i.m(s,a),M(s,t,a)},p(s,a){i.p(s,a)},d(s){i.d(s),s&&m(t)}}}function He(n){let t,l=n[14].label+"",e,i,s,a,o,f=`${n[3]}px`,c=n[14].values,h=[];for(let p=0;p<c.length;p+=1)h[p]=Le(Te(n,c,p));let v=n[14].values,w=[];for(let p=0;p<v.length;p+=1)w[p]=We(Ve(n,v,p));return{c(){t=D("div"),e=q(l),i=V();for(let p=0;p<h.length;p+=1)h[p].c();s=V(),a=D("div");for(let p=0;p<w.length;p+=1)w[p].c();o=V(),this.h()},l(p){t=I(p,"DIV",{class:!0});var y=C(t);e=N(y,l),i=T(y);for(let u=0;u<h.length;u+=1)h[u].l(y);y.forEach(m),s=T(p),a=I(p,"DIV",{class:!0});var _=C(a);for(let u=0;u<w.length;u+=1)w[u].l(_);o=T(_),_.forEach(m),this.h()},h(){K(t,"class","label-group svelte-1ri9pb8"),K(a,"class","bar-group svelte-1ri9pb8"),$(a,"height",f,!1)},m(p,y){M(p,t,y),z(t,e),z(t,i);for(let _=0;_<h.length;_+=1)h[_].m(t,null);M(p,s,y),M(p,a,y);for(let _=0;_<w.length;_+=1)w[_].m(a,null);z(a,o)},p(p,y){if(y&32&&l!==(l=p[14].label+"")&&F(e,l),y&38){c=p[14].values;let _;for(_=0;_<c.length;_+=1){const u=Te(p,c,_);h[_]?h[_].p(u,y):(h[_]=Le(u),h[_].c(),h[_].m(t,null))}for(;_<h.length;_+=1)h[_].d(1);h.length=c.length}if(y&113){v=p[14].values;let _;for(_=0;_<v.length;_+=1){const u=Ve(p,v,_);w[_]?w[_].p(u,y):(w[_]=We(u),w[_].c(),w[_].m(a,o))}for(;_<w.length;_+=1)w[_].d(1);w.length=v.length}y&8&&f!==(f=`${p[3]}px`)&&$(a,"height",f,!1)},d(p){p&&m(t),B(h,p),p&&m(s),p&&m(a),B(w,p)}}}function ct(n){let t,l,e=n[7][1]&&Ne(n),i=n[5],s=[];for(let a=0;a<i.length;a+=1)s[a]=He(Ce(n,i,a));return{c(){e&&e.c(),t=V();for(let a=0;a<s.length;a+=1)s[a].c();l=W()},l(a){e&&e.l(a),t=T(a);for(let o=0;o<s.length;o+=1)s[o].l(a);l=W()},m(a,o){e&&e.m(a,o),M(a,t,o);for(let f=0;f<s.length;f+=1)s[f].m(a,o);M(a,l,o)},p(a,[o]){if(a[7][1]?e?e.p(a,o):(e=Ne(a),e.c(),e.m(t.parentNode,t)):e&&(e.d(1),e=null),o&127){i=a[5];let f;for(f=0;f<i.length;f+=1){const c=Ce(a,i,f);s[f]?s[f].p(c,o):(s[f]=He(c),s[f].c(),s[f].m(l.parentNode,l))}for(;f<s.length;f+=1)s[f].d(1);s.length=i.length}},i:te,o:te,d(a){e&&e.d(a),a&&m(t),B(s,a),a&&m(l)}}}function ht(n,t,l){let e,i,s,a,{data:o}=t,{xKey:f="value"}=t,{yKey:c="category"}=t,{zKey:h="group"}=t,{formatTick:v=u=>Math.round(u)}=t,{suffix:w="%"}=t,{barHeight:p=25}=t,{markerWidth:y=3}=t;function _(u,d){let k={};for(const S of u)k[S[d]]||(k[S[d]]={label:S[d],values:[]}),k[S[d]].values.push(S);let E=[];for(const S in k)E.push(k[S]);return E}return n.$$set=u=>{"data"in u&&l(8,o=u.data),"xKey"in u&&l(0,f=u.xKey),"yKey"in u&&l(9,c=u.yKey),"zKey"in u&&l(10,h=u.zKey),"formatTick"in u&&l(1,v=u.formatTick),"suffix"in u&&l(2,w=u.suffix),"barHeight"in u&&l(3,p=u.barHeight),"markerWidth"in u&&l(4,y=u.markerWidth)},n.$$.update=()=>{n.$$.dirty&257&&l(11,e=[0,Math.max(...o.map(u=>u[f]))]),n.$$.dirty&768&&o.map(u=>u[c]).filter((u,d,k)=>k.indexOf(u)===d),n.$$.dirty&1280&&l(7,i=o.map(u=>u[h]).filter((u,d,k)=>k.indexOf(u)===d)),n.$$.dirty&2048&&l(6,s=u=>u/e[1]*100),n.$$.dirty&768&&l(5,a=_(o,c))},[f,v,w,p,y,a,s,i,o,c,h,e]}class dt extends le{constructor(t){super(),re(this,t,ht,ct,ae,{data:8,xKey:0,yKey:9,zKey:10,formatTick:1,suffix:2,barHeight:3,markerWidth:4})}}var mt={rgb2hsl:G,rgb2hsv:ne,rgb2hwb:Q,rgb2cmyk:X,rgb2keyword:Y,rgb2xyz:me,rgb2lab:_e,rgb2lch:_t,hsl2rgb:ie,hsl2hsv:gt,hsl2hwb:pt,hsl2cmyk:bt,hsl2keyword:vt,hsv2rgb:se,hsv2hsl:yt,hsv2hwb:kt,hsv2cmyk:wt,hsv2keyword:$t,hwb2rgb:Z,hwb2hsl:Mt,hwb2hsv:Et,hwb2cmyk:Kt,hwb2keyword:zt,cmyk2rgb:x,cmyk2hsl:Dt,cmyk2hsv:It,cmyk2hwb:St,cmyk2keyword:Ct,keyword2rgb:U,keyword2hsl:Nt,keyword2hsv:At,keyword2hwb:Lt,keyword2cmyk:Wt,keyword2lab:Ht,keyword2xyz:Ot,xyz2rgb:Be,xyz2lab:Je,xyz2lch:Vt,lab2xyz:ge,lab2rgb:Ue,lab2lch:pe,lch2lab:be,lch2xyz:Tt,lch2rgb:qt};function G(n){var t=n[0]/255,l=n[1]/255,e=n[2]/255,i=Math.min(t,l,e),s=Math.max(t,l,e),a=s-i,o,f,c;return s==i?o=0:t==s?o=(l-e)/a:l==s?o=2+(e-t)/a:e==s&&(o=4+(t-l)/a),o=Math.min(o*60,360),o<0&&(o+=360),c=(i+s)/2,s==i?f=0:c<=.5?f=a/(s+i):f=a/(2-s-i),[o,f*100,c*100]}function ne(n){var t=n[0],l=n[1],e=n[2],i=Math.min(t,l,e),s=Math.max(t,l,e),a=s-i,o,f,c;return s==0?f=0:f=a/s*1e3/10,s==i?o=0:t==s?o=(l-e)/a:l==s?o=2+(e-t)/a:e==s&&(o=4+(t-l)/a),o=Math.min(o*60,360),o<0&&(o+=360),c=s/255*1e3/10,[o,f,c]}function Q(n){var t=n[0],l=n[1],s=n[2],e=G(n)[0],i=1/255*Math.min(t,Math.min(l,s)),s=1-1/255*Math.max(t,Math.max(l,s));return[e,i*100,s*100]}function X(n){var t=n[0]/255,l=n[1]/255,e=n[2]/255,i,s,a,o;return o=Math.min(1-t,1-l,1-e),i=(1-t-o)/(1-o)||0,s=(1-l-o)/(1-o)||0,a=(1-e-o)/(1-o)||0,[i*100,s*100,a*100,o*100]}function Y(n){return Re[JSON.stringify(n)]}function me(n){var t=n[0]/255,l=n[1]/255,e=n[2]/255;t=t>.04045?Math.pow((t+.055)/1.055,2.4):t/12.92,l=l>.04045?Math.pow((l+.055)/1.055,2.4):l/12.92,e=e>.04045?Math.pow((e+.055)/1.055,2.4):e/12.92;var i=t*.4124+l*.3576+e*.1805,s=t*.2126+l*.7152+e*.0722,a=t*.0193+l*.1192+e*.9505;return[i*100,s*100,a*100]}function _e(n){var t=me(n),l=t[0],e=t[1],i=t[2],s,a,o;return l/=95.047,e/=100,i/=108.883,l=l>.008856?Math.pow(l,1/3):7.787*l+16/116,e=e>.008856?Math.pow(e,1/3):7.787*e+16/116,i=i>.008856?Math.pow(i,1/3):7.787*i+16/116,s=116*e-16,a=500*(l-e),o=200*(e-i),[s,a,o]}function _t(n){return pe(_e(n))}function ie(n){var t=n[0]/360,l=n[1]/100,e=n[2]/100,i,s,a,o,f;if(l==0)return f=e*255,[f,f,f];e<.5?s=e*(1+l):s=e+l-e*l,i=2*e-s,o=[0,0,0];for(var c=0;c<3;c++)a=t+1/3*-(c-1),a<0&&a++,a>1&&a--,6*a<1?f=i+(s-i)*6*a:2*a<1?f=s:3*a<2?f=i+(s-i)*(2/3-a)*6:f=i,o[c]=f*255;return o}function gt(n){var t=n[0],l=n[1]/100,e=n[2]/100,i,s;return e===0?[0,0,0]:(e*=2,l*=e<=1?e:2-e,s=(e+l)/2,i=2*l/(e+l),[t,i*100,s*100])}function pt(n){return Q(ie(n))}function bt(n){return X(ie(n))}function vt(n){return Y(ie(n))}function se(n){var t=n[0]/60,l=n[1]/100,f=n[2]/100,e=Math.floor(t)%6,i=t-Math.floor(t),s=255*f*(1-l),a=255*f*(1-l*i),o=255*f*(1-l*(1-i)),f=255*f;switch(e){case 0:return[f,o,s];case 1:return[a,f,s];case 2:return[s,f,o];case 3:return[s,a,f];case 4:return[o,s,f];case 5:return[f,s,a]}}function yt(n){var t=n[0],l=n[1]/100,e=n[2]/100,i,s;return s=(2-l)*e,i=l*e,i/=s<=1?s:2-s,i=i||0,s/=2,[t,i*100,s*100]}function kt(n){return Q(se(n))}function wt(n){return X(se(n))}function $t(n){return Y(se(n))}function Z(n){var t=n[0]/360,l=n[1]/100,e=n[2]/100,i=l+e,s,a,o,f;switch(i>1&&(l/=i,e/=i),s=Math.floor(6*t),a=1-e,o=6*t-s,(s&1)!=0&&(o=1-o),f=l+o*(a-l),s){default:case 6:case 0:r=a,g=f,b=l;break;case 1:r=f,g=a,b=l;break;case 2:r=l,g=a,b=f;break;case 3:r=l,g=f,b=a;break;case 4:r=f,g=l,b=a;break;case 5:r=a,g=l,b=f;break}return[r*255,g*255,b*255]}function Mt(n){return G(Z(n))}function Et(n){return ne(Z(n))}function Kt(n){return X(Z(n))}function zt(n){return Y(Z(n))}function x(n){var t=n[0]/100,l=n[1]/100,e=n[2]/100,i=n[3]/100,s,a,o;return s=1-Math.min(1,t*(1-i)+i),a=1-Math.min(1,l*(1-i)+i),o=1-Math.min(1,e*(1-i)+i),[s*255,a*255,o*255]}function Dt(n){return G(x(n))}function It(n){return ne(x(n))}function St(n){return Q(x(n))}function Ct(n){return Y(x(n))}function Be(n){var t=n[0]/100,l=n[1]/100,e=n[2]/100,i,s,a;return i=t*3.2406+l*-1.5372+e*-.4986,s=t*-.9689+l*1.8758+e*.0415,a=t*.0557+l*-.204+e*1.057,i=i>.0031308?1.055*Math.pow(i,1/2.4)-.055:i=i*12.92,s=s>.0031308?1.055*Math.pow(s,1/2.4)-.055:s=s*12.92,a=a>.0031308?1.055*Math.pow(a,1/2.4)-.055:a=a*12.92,i=Math.min(Math.max(0,i),1),s=Math.min(Math.max(0,s),1),a=Math.min(Math.max(0,a),1),[i*255,s*255,a*255]}function Je(n){var t=n[0],l=n[1],e=n[2],i,s,a;return t/=95.047,l/=100,e/=108.883,t=t>.008856?Math.pow(t,1/3):7.787*t+16/116,l=l>.008856?Math.pow(l,1/3):7.787*l+16/116,e=e>.008856?Math.pow(e,1/3):7.787*e+16/116,i=116*l-16,s=500*(t-l),a=200*(l-e),[i,s,a]}function Vt(n){return pe(Je(n))}function ge(n){var t=n[0],l=n[1],e=n[2],i,s,a,o;return t<=8?(s=t*100/903.3,o=7.787*(s/100)+16/116):(s=100*Math.pow((t+16)/116,3),o=Math.pow(s/100,1/3)),i=i/95.047<=.008856?i=95.047*(l/500+o-16/116)/7.787:95.047*Math.pow(l/500+o,3),a=a/108.883<=.008859?a=108.883*(o-e/200-16/116)/7.787:108.883*Math.pow(o-e/200,3),[i,s,a]}function pe(n){var t=n[0],l=n[1],e=n[2],i,s,a;return i=Math.atan2(e,l),s=i*360/2/Math.PI,s<0&&(s+=360),a=Math.sqrt(l*l+e*e),[t,a,s]}function Ue(n){return Be(ge(n))}function be(n){var t=n[0],l=n[1],e=n[2],i,s,a;return a=e/360*2*Math.PI,i=l*Math.cos(a),s=l*Math.sin(a),[t,i,s]}function Tt(n){return ge(be(n))}function qt(n){return Ue(be(n))}function U(n){return de[n]}function Nt(n){return G(U(n))}function At(n){return ne(U(n))}function Lt(n){return Q(U(n))}function Wt(n){return X(U(n))}function Ht(n){return _e(U(n))}function Ot(n){return me(U(n))}var de={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},Re={};for(var Oe in de)Re[JSON.stringify(de[Oe])]=Oe;var ue=mt,J=function(){return new ee};for(var R in ue){J[R+"Raw"]=function(n){return function(t){return typeof t=="number"&&(t=Array.prototype.slice.call(arguments)),ue[n](t)}}(R);var Pe=/(\w+)2(\w+)/.exec(R),ce=Pe[1],Pt=Pe[2];J[ce]=J[ce]||{},J[ce][Pt]=J[R]=function(n){return function(t){typeof t=="number"&&(t=Array.prototype.slice.call(arguments));var l=ue[n](t);if(typeof l=="string"||l===void 0)return l;for(var e=0;e<l.length;e++)l[e]=Math.round(l[e]);return l}}(R)}var ee=function(){this.convs={}};ee.prototype.routeSpace=function(n,t){var l=t[0];return l===void 0?this.getValues(n):(typeof l=="number"&&(l=Array.prototype.slice.call(t)),this.setValues(n,l))};ee.prototype.setValues=function(n,t){return this.space=n,this.convs={},this.convs[n]=t,this};ee.prototype.getValues=function(n){var t=this.convs[n];if(!t){var l=this.space,e=this.convs[l];t=J[l][n](e),this.convs[n]=t}return t};["rgb","hsl","hsv","cmyk","keyword"].forEach(function(n){ee.prototype[n]=function(t){return this.routeSpace(n,arguments)}});var jt=J,he=jt,Ft=function(n){var t,l,e,i;if(t=/^((?:rgb|hs[lv]|cmyk|xyz|lab)a?)\s*\(([^\)]*)\)/.exec(n)){var s=t[1],a=s.replace(/a$/,""),o=a==="cmyk"?4:3;l=he[a],e=t[2].replace(/^\s+|\s+$/g,"").split(/\s*,\s*/).map(function(c,h){return/%$/.test(c)&&h===o?parseFloat(c)/100:(/%$/.test(c),parseFloat(c))}),s===a&&e.push(1),i=e[o]===void 0?1:e[o],e=e.slice(0,o),l[a]=function(){return e}}else if(/^#[A-Fa-f0-9]+$/.test(n)){var a=n.replace(/^#/,""),o=a.length;l=he.rgb,e=a.split(o===3?/(.)/:/(..)/),e=e.filter(Boolean).map(function(v){return parseInt(o===3?v+v:v,16)}),i=1,l.rgb=function(){return e},e[0]||(e[0]=0),e[1]||(e[1]=0),e[2]||(e[2]=0)}else l=he.keyword,l.keyword=function(){return n},e=n,i=1;var f={rgb:void 0,hsl:void 0,hsv:void 0,cmyk:void 0,keyword:void 0,hex:void 0};try{f.rgb=l.rgb(e)}catch{}try{f.hsl=l.hsl(e)}catch{}try{f.hsv=l.hsv(e)}catch{}try{f.cmyk=l.cmyk(e)}catch{}try{f.keyword=l.keyword(e)}catch{}return f.rgb&&(f.hex="#"+f.rgb.map(function(c){var h=c.toString(16);return h.length===1?"0"+h:h}).join("")),f.rgb&&(f.rgba=f.rgb.concat(i)),f.hsl&&(f.hsla=f.hsl.concat(i)),f.hsv&&(f.hsva=f.hsv.concat(i)),f.cmyk&&(f.cmyka=f.cmyk.concat(i)),f};function Bt(n){let t,l;const e=n[5].default,i=Ge(e,n,n[4],null);return{c(){t=D("span"),i&&i.c(),this.h()},l(s){t=I(s,"SPAN",{class:!0,style:!0,role:!0});var a=C(t);i&&i.l(a),a.forEach(m),this.h()},h(){K(t,"class","em svelte-s1t2y4"),$(t,"background-color",n[0]),$(t,"color",n[2]),K(t,"role","presentation"),ke(t,"nowrap",n[1])},m(s,a){M(s,t,a),i&&i.m(t,null),l=!0},p(s,[a]){i&&i.p&&(!l||a&16)&&Qe(i,e,s,s[4],l?Ye(e,s[4],a,null):Xe(s[4]),null),(!l||a&1)&&$(t,"background-color",s[0]),(!l||a&4)&&$(t,"color",s[2]),a&2&&ke(t,"nowrap",s[1])},i(s){l||(A(i,s),l=!0)},o(s){L(i,s),l=!1},d(s){s&&m(t),i&&i.d(s)}}}function Jt(n,t,l){let e,{$$slots:i={},$$scope:s}=t,{color:a="lightgrey"}=t,{nowrap:o=!0}=t;function f(h){return(h[0]*299+h[1]*587+h[2]*114)/1e3>125?"black":"white"}let c="black";return n.$$set=h=>{"color"in h&&l(0,a=h.color),"nowrap"in h&&l(1,o=h.nowrap),"$$scope"in h&&l(4,s=h.$$scope)},n.$$.update=()=>{n.$$.dirty&1&&l(3,e=Ft(a).rgb),n.$$.dirty&8&&e&&l(2,c=f(e))},[a,o,c,e,s,i]}class Ut extends le{constructor(t){super(),re(this,t,Jt,Bt,ae,{color:0,nowrap:1})}}function Rt(n){let t;return{c(){t=q("Charts demo")},l(l){t=N(l,"Charts demo")},m(l,e){M(l,t,e)},d(l){l&&m(t)}}}function Gt(n){let t;return{c(){t=q('This page offers a demo of how to pre-load JSON data in a "load" function in order to create simple pre-rendered HTML charts.')},l(l){t=N(l,'This page offers a demo of how to pre-load JSON data in a "load" function in order to create simple pre-rendered HTML charts.')},m(l,e){M(l,t,e)},d(l){l&&m(t)}}}function Qt(n){let t,l,e,i;return t=new et({props:{$$slots:{default:[Rt]},$$scope:{ctx:n}}}),e=new tt({props:{$$slots:{default:[Gt]},$$scope:{ctx:n}}}),{c(){H(t.$$.fragment),l=V(),H(e.$$.fragment)},l(s){O(t.$$.fragment,s),l=T(s),O(e.$$.fragment,s)},m(s,a){P(t,s,a),M(s,l,a),P(e,s,a),i=!0},p(s,a){const o={};a&2&&(o.$$scope={dirty:a,ctx:s}),t.$set(o);const f={};a&2&&(f.$$scope={dirty:a,ctx:s}),e.$set(f)},i(s){i||(A(t.$$.fragment,s),A(e.$$.fragment,s),i=!0)},o(s){L(t.$$.fragment,s),L(e.$$.fragment,s),i=!1},d(s){j(t,s),s&&m(l),j(e,s)}}}function Xt(n){let t=n[0].population[0].value.toLocaleString()+"",l;return{c(){l=q(t)},l(e){l=N(e,t)},m(e,i){M(e,l,i)},p(e,i){i&1&&t!==(t=e[0].population[0].value.toLocaleString()+"")&&F(l,t)},d(e){e&&m(l)}}}function Yt(n){let t,l=(100*n[0].population[0].value/n[0].population[1].value).toFixed(1)+"",e,i,s,a,o,f,c,h,v,w=n[0].population[1].value.toLocaleString()+"",p,y,_;return h=new Ut({props:{color:"lightgrey",$$slots:{default:[Xt]},$$scope:{ctx:n}}}),{c(){t=D("div"),e=q(l),i=q("%"),s=V(),a=D("div"),o=q("of people in England and Wales"),f=V(),c=D("div"),H(h.$$.fragment),v=q(` 
        of `),p=q(w),y=q(" people"),this.h()},l(u){t=I(u,"DIV",{class:!0});var d=C(t);e=N(d,l),i=N(d,"%"),d.forEach(m),s=T(u),a=I(u,"DIV",{class:!0});var k=C(a);o=N(k,"of people in England and Wales"),k.forEach(m),f=T(u),c=I(u,"DIV",{class:!0});var E=C(c);O(h.$$.fragment,E),v=N(E,` 
        of `),p=N(E,w),y=N(E," people"),E.forEach(m),this.h()},h(){K(t,"class","num-big"),K(a,"class","num-suffix"),K(c,"class","num-desc")},m(u,d){M(u,t,d),z(t,e),z(t,i),M(u,s,d),M(u,a,d),z(a,o),M(u,f,d),M(u,c,d),P(h,c,null),z(c,v),z(c,p),z(c,y),_=!0},p(u,d){(!_||d&1)&&l!==(l=(100*u[0].population[0].value/u[0].population[1].value).toFixed(1)+"")&&F(e,l);const k={};d&3&&(k.$$scope={dirty:d,ctx:u}),h.$set(k),(!_||d&1)&&w!==(w=u[0].population[1].value.toLocaleString()+"")&&F(p,w)},i(u){_||(A(h.$$.fragment,u),_=!0)},o(u){L(h.$$.fragment,u),_=!1},d(u){u&&m(t),u&&m(s),u&&m(a),u&&m(f),u&&m(c),j(h)}}}function Zt(n){let t,l;return t=new ot({props:{data:n[0].age}}),{c(){H(t.$$.fragment)},l(e){O(t.$$.fragment,e)},m(e,i){P(t,e,i),l=!0},p(e,i){const s={};i&1&&(s.data=e[0].age),t.$set(s)},i(e){l||(A(t.$$.fragment,e),l=!0)},o(e){L(t.$$.fragment,e),l=!1},d(e){j(t,e)}}}function xt(n){let t,l;return t=new dt({props:{data:n[0].sex}}),{c(){H(t.$$.fragment)},l(e){O(t.$$.fragment,e)},m(e,i){P(t,e,i),l=!0},p(e,i){const s={};i&1&&(s.data=e[0].sex),t.$set(s)},i(e){l||(A(t.$$.fragment,e),l=!0)},o(e){L(t.$$.fragment,e),l=!1},d(e){j(t,e)}}}function el(n){let t,l,e,i,s,a;return t=new fe({props:{title:"Population",$$slots:{default:[Yt]},$$scope:{ctx:n}}}),e=new fe({props:{title:"Age profile",$$slots:{default:[Zt]},$$scope:{ctx:n}}}),s=new fe({props:{title:"Sex",$$slots:{default:[xt]},$$scope:{ctx:n}}}),{c(){H(t.$$.fragment),l=V(),H(e.$$.fragment),i=V(),H(s.$$.fragment)},l(o){O(t.$$.fragment,o),l=T(o),O(e.$$.fragment,o),i=T(o),O(s.$$.fragment,o)},m(o,f){P(t,o,f),M(o,l,f),P(e,o,f),M(o,i,f),P(s,o,f),a=!0},p(o,f){const c={};f&3&&(c.$$scope={dirty:f,ctx:o}),t.$set(c);const h={};f&3&&(h.$$scope={dirty:f,ctx:o}),e.$set(h);const v={};f&3&&(v.$$scope={dirty:f,ctx:o}),s.$set(v)},i(o){a||(A(t.$$.fragment,o),A(e.$$.fragment,o),A(s.$$.fragment,o),a=!0)},o(o){L(t.$$.fragment,o),L(e.$$.fragment,o),L(s.$$.fragment,o),a=!1},d(o){j(t,o),o&&m(l),j(e,o),o&&m(i),j(s,o)}}}function tl(n){let t,l;return t=new rt({props:{title:"Example charts",subtitle:"optional",$$slots:{default:[el]},$$scope:{ctx:n}}}),{c(){H(t.$$.fragment)},l(e){O(t.$$.fragment,e)},m(e,i){P(t,e,i),l=!0},p(e,i){const s={};i&3&&(s.$$scope={dirty:i,ctx:e}),t.$set(s)},i(e){l||(A(t.$$.fragment,e),l=!0)},o(e){L(t.$$.fragment,e),l=!1},d(e){j(t,e)}}}function ll(n){let t,l,e,i,s,a,o,f;return s=new xe({props:{mode:"page",breadcrumb:[{label:"Home",url:`${Fe}/`},{label:"Charts demo"}],$$slots:{default:[Qt]},$$scope:{ctx:n}}}),o=new lt({props:{$$slots:{default:[tl]},$$scope:{ctx:n}}}),{c(){t=D("meta"),l=D("meta"),e=D("meta"),i=V(),H(s.$$.fragment),a=V(),H(o.$$.fragment),this.h()},l(c){const h=Ze('[data-svelte="svelte-yj8sr5"]',document.head);t=I(h,"META",{property:!0,content:!0}),l=I(h,"META",{property:!0,content:!0}),e=I(h,"META",{name:!0,content:!0}),h.forEach(m),i=T(c),O(s.$$.fragment,c),a=T(c),O(o.$$.fragment,c),this.h()},h(){document.title="Charts demo",K(t,"property","og:title"),K(t,"content","Charts demo"),K(l,"property","og:description"),K(l,"content","This is a description of the page."),K(e,"name","description"),K(e,"content","This is a description of the page.")},m(c,h){z(document.head,t),z(document.head,l),z(document.head,e),M(c,i,h),P(s,c,h),M(c,a,h),P(o,c,h),f=!0},p(c,[h]){const v={};h&2&&(v.$$scope={dirty:h,ctx:c}),s.$set(v);const w={};h&3&&(w.$$scope={dirty:h,ctx:c}),o.$set(w)},i(c){f||(A(s.$$.fragment,c),A(o.$$.fragment,c),f=!0)},o(c){L(s.$$.fragment,c),L(o.$$.fragment,c),f=!1},d(c){m(t),m(l),m(e),c&&m(i),j(s,c),c&&m(a),j(o,c)}}}async function ml({fetch:n}){return{props:{data:await(await n(Fe+"/data/data.json")).json()}}}function rl(n,t,l){let{data:e}=t;return n.$$set=i=>{"data"in i&&l(0,e=i.data)},[e]}class _l extends le{constructor(t){super(),re(this,t,rl,ll,ae,{data:0})}}export{_l as default,ml as load};
