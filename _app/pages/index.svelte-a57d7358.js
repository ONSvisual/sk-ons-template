import{S as H,i as W,s as y,e as v,t as I,k as b,c as g,a as h,h as V,d as f,m as w,b as $,f as L,g as _,I as d,j as B,R as M,N as x,F as K,W as Q,w as T,V as U,x as C,y as S,q as A,o as N,B as F}from"../chunks/vendor-55adee57.js";import{a as R}from"../chunks/paths-c0fc83a9.js";import{C as X,a as J}from"../chunks/Cards-36f7dd50.js";import{N as Y}from"../chunks/Navbox-1388a168.js";import{C as q}from"../chunks/Card-294ca308.js";/* empty css                                                    *//* empty css                                                   */function Z(p){let e,n,a,r,o,u,s,c,t,l,i;return{c(){e=v("section"),n=v("div"),a=v("a"),r=v("div"),o=v("h1"),u=I(p[0]),s=b(),c=v("p"),t=I(p[1]),l=b(),i=v("span"),this.h()},l(m){e=g(m,"SECTION",{class:!0,style:!0});var D=h(e);n=g(D,"DIV",{class:!0});var k=h(n);a=g(k,"A",{href:!0});var E=h(a);r=g(E,"DIV",{class:!0});var P=h(r);o=g(P,"H1",{class:!0});var j=h(o);u=V(j,p[0]),j.forEach(f),s=w(P),c=g(P,"P",{class:!0});var O=h(c);t=V(O,p[1]),O.forEach(f),P.forEach(f),l=w(E),i=g(E,"SPAN",{class:!0}),h(i).forEach(f),E.forEach(f),k.forEach(f),D.forEach(f),this.h()},h(){$(o,"class","banner__heading margin-top--1 font-weight-700 font-size--h2 adjust-font-size--30"),$(c,"class","underline-link banner__link banner__body margin-top--0 margin-bottom--1"),$(r,"class","col"),$(i,"class","box__clickable"),$(a,"href",p[2]),$(n,"class","col-wrap"),$(e,"class","background--pineapple-yellow wrapper banner__bottom-shadow margin-top-sm--3 margin-top-md--3 margin-top-lg--3 margin-bottom--3 js-hover-click"),L(e,"position","relative")},m(m,D){_(m,e,D),d(e,n),d(n,a),d(a,r),d(r,o),d(o,u),d(r,s),d(r,c),d(c,t),d(a,l),d(a,i)},p(m,[D]){D&1&&B(u,m[0]),D&2&&B(t,m[1]),D&4&&$(a,"href",m[2])},i:M,o:M,d(m){m&&f(e)}}}function tt(p,e,n){let{title:a="Banner title"}=e,{label:r="This is a description of the link"}=e,{url:o="/"}=e;return p.$$set=u=>{"title"in u&&n(0,a=u.title),"label"in u&&n(1,r=u.label),"url"in u&&n(2,o=u.url)},[a,r,o]}class et extends H{constructor(e){super();W(this,e,tt,Z,y,{title:0,label:1,url:2})}}function st(p){let e,n,a,r,o,u,s,c,t,l,i,m=`span ${p[0]==1?1:p[0]>p[6]?p[6]:p[0]}`,D=`span ${p[1]}`;return{c(){e=v("article"),n=v("div"),a=v("img"),o=b(),u=v("h2"),s=v("a"),c=I(p[2]),t=b(),l=v("p"),i=I(p[4]),this.h()},l(k){e=g(k,"ARTICLE",{class:!0});var E=h(e);n=g(E,"DIV",{class:!0});var P=h(n);a=g(P,"IMG",{class:!0,src:!0,alt:!0}),P.forEach(f),o=w(E),u=g(E,"H2",{class:!0});var j=h(u);s=g(j,"A",{class:!0,href:!0,"data-gtm-group":!0,"data-gtm-group-position":!0});var O=h(s);c=V(O,p[2]),O.forEach(f),j.forEach(f),t=w(E),l=g(E,"P",{class:!0});var G=h(l);i=V(G,p[4]),G.forEach(f),E.forEach(f),this.h()},h(){$(a,"class","tile__highlighted-content-image"),x(a.src,r=p[5])||$(a,"src",r),$(a,"alt",""),$(n,"class","tile__highlighted-content-image-container"),$(s,"class","margin-left--0 tile__link tile__link--highlighted-content-title font-size--24"),$(s,"href",p[3]),$(s,"data-gtm-group","in-focus"),$(s,"data-gtm-group-position","1"),$(u,"class","margin-top--0 margin-bottom--0"),$(l,"class","tile__text-description margin-top--0 margin-bottom--0"),$(e,"class","tile tile__highlighted-content svelte-1krn9ab"),L(e,"grid-column",m,!1),L(e,"grid-row",D,!1)},m(k,E){_(k,e,E),d(e,n),d(n,a),d(e,o),d(e,u),d(u,s),d(s,c),d(e,t),d(e,l),d(l,i)},p(k,[E]){E&32&&!x(a.src,r=k[5])&&$(a,"src",r),E&4&&B(c,k[2]),E&8&&$(s,"href",k[3]),E&16&&B(i,k[4]),E&65&&m!==(m=`span ${k[0]==1?1:k[0]>k[6]?k[6]:k[0]}`)&&L(e,"grid-column",m,!1),E&2&&D!==(D=`span ${k[1]}`)&&L(e,"grid-row",D,!1)},i:M,o:M,d(k){k&&f(e)}}}function it(p,e,n){let a,{colspan:r=1}=e,{rowspan:o=1}=e,{title:u="Local statistics"}=e,{url:s="https://www.ons.gov.uk/help/localstatistics"}=e,{description:c="Where to find statistics covering specific areas"}=e,{image:t="https://static.ons.gov.uk/images/cf4ffa0c-d7ea-43a9-85a4-03ea05bbaaaf/original/local-statistics.png"}=e;const{cols:l}=K("tiles");return Q(p,l,i=>n(6,a=i)),p.$$set=i=>{"colspan"in i&&n(0,r=i.colspan),"rowspan"in i&&n(1,o=i.rowspan),"title"in i&&n(2,u=i.title),"url"in i&&n(3,s=i.url),"description"in i&&n(4,c=i.description),"image"in i&&n(5,t=i.image)},[r,o,u,s,c,t,a,l]}class z extends H{constructor(e){super();W(this,e,it,st,y,{colspan:0,rowspan:1,title:2,url:3,description:4,image:5})}}function at(p){let e,n,a,r,o,u,s,c;return{c(){e=v("div"),n=I("100"),a=b(),r=v("div"),o=I("number suffix"),u=b(),s=v("div"),c=I("footnote"),this.h()},l(t){e=g(t,"DIV",{class:!0});var l=h(e);n=V(l,"100"),l.forEach(f),a=w(t),r=g(t,"DIV",{class:!0});var i=h(r);o=V(i,"number suffix"),i.forEach(f),u=w(t),s=g(t,"DIV",{class:!0});var m=h(s);c=V(m,"footnote"),m.forEach(f),this.h()},h(){$(e,"class","num-big"),$(r,"class","num-suffix"),$(s,"class","num-desc")},m(t,l){_(t,e,l),d(e,n),_(t,a,l),_(t,r,l),d(r,o),_(t,u,l),_(t,s,l),d(s,c)},d(t){t&&f(e),t&&f(a),t&&f(r),t&&f(u),t&&f(s)}}}function lt(p){let e,n,a,r,o,u,s,c;return{c(){e=v("div"),n=I("89"),a=b(),r=v("div"),o=I("number suffix"),u=b(),s=v("div"),c=I("footnote"),this.h()},l(t){e=g(t,"DIV",{class:!0});var l=h(e);n=V(l,"89"),l.forEach(f),a=w(t),r=g(t,"DIV",{class:!0});var i=h(r);o=V(i,"number suffix"),i.forEach(f),u=w(t),s=g(t,"DIV",{class:!0});var m=h(s);c=V(m,"footnote"),m.forEach(f),this.h()},h(){$(e,"class","num-big"),$(r,"class","num-suffix"),$(s,"class","num-desc")},m(t,l){_(t,e,l),d(e,n),_(t,a,l),_(t,r,l),d(r,o),_(t,u,l),_(t,s,l),d(s,c)},d(t){t&&f(e),t&&f(a),t&&f(r),t&&f(u),t&&f(s)}}}function rt(p){let e,n,a,r,o,u,s,c;return{c(){e=v("div"),n=I("42"),a=b(),r=v("div"),o=I("number suffix"),u=b(),s=v("div"),c=I("footnote"),this.h()},l(t){e=g(t,"DIV",{class:!0});var l=h(e);n=V(l,"42"),l.forEach(f),a=w(t),r=g(t,"DIV",{class:!0});var i=h(r);o=V(i,"number suffix"),i.forEach(f),u=w(t),s=g(t,"DIV",{class:!0});var m=h(s);c=V(m,"footnote"),m.forEach(f),this.h()},h(){$(e,"class","num-big"),$(r,"class","num-suffix"),$(s,"class","num-desc")},m(t,l){_(t,e,l),d(e,n),_(t,a,l),_(t,r,l),d(r,o),_(t,u,l),_(t,s,l),d(s,c)},d(t){t&&f(e),t&&f(a),t&&f(r),t&&f(u),t&&f(s)}}}function nt(p){let e,n,a,r,o,u,s,c;return{c(){e=v("div"),n=I("1,000,000"),a=b(),r=v("div"),o=I("number suffix"),u=b(),s=v("div"),c=I("this card spans two columns"),this.h()},l(t){e=g(t,"DIV",{class:!0});var l=h(e);n=V(l,"1,000,000"),l.forEach(f),a=w(t),r=g(t,"DIV",{class:!0});var i=h(r);o=V(i,"number suffix"),i.forEach(f),u=w(t),s=g(t,"DIV",{class:!0});var m=h(s);c=V(m,"this card spans two columns"),m.forEach(f),this.h()},h(){$(e,"class","num-big"),$(r,"class","num-suffix"),$(s,"class","num-desc")},m(t,l){_(t,e,l),d(e,n),_(t,a,l),_(t,r,l),d(r,o),_(t,u,l),_(t,s,l),d(s,c)},d(t){t&&f(e),t&&f(a),t&&f(r),t&&f(u),t&&f(s)}}}function ft(p){let e,n,a,r,o,u,s,c;return{c(){e=v("div"),n=I("20%"),a=b(),r=v("div"),o=I("number suffix"),u=b(),s=v("div"),c=I("footnote"),this.h()},l(t){e=g(t,"DIV",{class:!0});var l=h(e);n=V(l,"20%"),l.forEach(f),a=w(t),r=g(t,"DIV",{class:!0});var i=h(r);o=V(i,"number suffix"),i.forEach(f),u=w(t),s=g(t,"DIV",{class:!0});var m=h(s);c=V(m,"footnote"),m.forEach(f),this.h()},h(){$(e,"class","num-big"),$(r,"class","num-suffix"),$(s,"class","num-desc")},m(t,l){_(t,e,l),d(e,n),_(t,a,l),_(t,r,l),d(r,o),_(t,u,l),_(t,s,l),d(s,c)},d(t){t&&f(e),t&&f(a),t&&f(r),t&&f(u),t&&f(s)}}}function ot(p){let e,n,a,r,o,u,s,c,t,l;return e=new q({props:{title:"Topic one",$$slots:{default:[at]},$$scope:{ctx:p}}}),a=new q({props:{title:"Topic two",$$slots:{default:[lt]},$$scope:{ctx:p}}}),o=new q({props:{title:"Topic three",$$slots:{default:[rt]},$$scope:{ctx:p}}}),s=new q({props:{title:"Topic four",colspan:2,$$slots:{default:[nt]},$$scope:{ctx:p}}}),t=new q({props:{title:"Topic five",$$slots:{default:[ft]},$$scope:{ctx:p}}}),{c(){T(e.$$.fragment),n=b(),T(a.$$.fragment),r=b(),T(o.$$.fragment),u=b(),T(s.$$.fragment),c=b(),T(t.$$.fragment)},l(i){C(e.$$.fragment,i),n=w(i),C(a.$$.fragment,i),r=w(i),C(o.$$.fragment,i),u=w(i),C(s.$$.fragment,i),c=w(i),C(t.$$.fragment,i)},m(i,m){S(e,i,m),_(i,n,m),S(a,i,m),_(i,r,m),S(o,i,m),_(i,u,m),S(s,i,m),_(i,c,m),S(t,i,m),l=!0},p(i,m){const D={};m&1&&(D.$$scope={dirty:m,ctx:i}),e.$set(D);const k={};m&1&&(k.$$scope={dirty:m,ctx:i}),a.$set(k);const E={};m&1&&(E.$$scope={dirty:m,ctx:i}),o.$set(E);const P={};m&1&&(P.$$scope={dirty:m,ctx:i}),s.$set(P);const j={};m&1&&(j.$$scope={dirty:m,ctx:i}),t.$set(j)},i(i){l||(A(e.$$.fragment,i),A(a.$$.fragment,i),A(o.$$.fragment,i),A(s.$$.fragment,i),A(t.$$.fragment,i),l=!0)},o(i){N(e.$$.fragment,i),N(a.$$.fragment,i),N(o.$$.fragment,i),N(s.$$.fragment,i),N(t.$$.fragment,i),l=!1},d(i){F(e,i),i&&f(n),F(a,i),i&&f(r),F(o,i),i&&f(u),F(s,i),i&&f(c),F(t,i)}}}function ut(p){let e,n;return{c(){e=v("span"),n=I("- Slot for optional subtitle/link"),this.h()},l(a){e=g(a,"SPAN",{slot:!0});var r=h(e);n=V(r,"- Slot for optional subtitle/link"),r.forEach(f),this.h()},h(){$(e,"slot","meta")},m(a,r){_(a,e,r),d(e,n)},d(a){a&&f(e)}}}function ct(p){let e,n,a,r,o,u,s,c;return e=new z({props:{title:"Local statistics",url:"/",description:"Where to find statistics covering specific areas",image:"https://static.ons.gov.uk/images/cf4ffa0c-d7ea-43a9-85a4-03ea05bbaaaf/original/local-statistics.png"}}),a=new z({props:{title:"Secure Research Service",url:"/",description:"Find out how ONS secure data could help your research project",image:"https://static.ons.gov.uk/images/9eb49f05-66d0-4ab9-9fcb-e5a4e523460f/original/data-strategy.png"}}),o=new z({props:{title:"COVID-19 Infection Survey",url:"/",description:"Find out more if you have been contacted to take part",image:"https://static.ons.gov.uk/images/b72dc597-81e0-47c3-a331-2759a207524b/original/covid-infection-survey@2x.png"}}),s=new z({props:{title:"Other government statistics",url:"/",description:"Official Statistics available from across government",image:"https://static.ons.gov.uk/images/8c1ab5f0-f830-408b-bb18-0c025054e8c8/original/other-govt-statistics.png"}}),{c(){T(e.$$.fragment),n=b(),T(a.$$.fragment),r=b(),T(o.$$.fragment),u=b(),T(s.$$.fragment)},l(t){C(e.$$.fragment,t),n=w(t),C(a.$$.fragment,t),r=w(t),C(o.$$.fragment,t),u=w(t),C(s.$$.fragment,t)},m(t,l){S(e,t,l),_(t,n,l),S(a,t,l),_(t,r,l),S(o,t,l),_(t,u,l),S(s,t,l),c=!0},p:M,i(t){c||(A(e.$$.fragment,t),A(a.$$.fragment,t),A(o.$$.fragment,t),A(s.$$.fragment,t),c=!0)},o(t){N(e.$$.fragment,t),N(a.$$.fragment,t),N(o.$$.fragment,t),N(s.$$.fragment,t),c=!1},d(t){F(e,t),t&&f(n),F(a,t),t&&f(r),F(o,t),t&&f(u),F(s,t)}}}function mt(p){let e,n,a,r,o,u;return e=new Y({props:{title:"List of links (click to view templates)",links:[{label:"Home"},{label:"Section page",url:`${R}/section`},{label:"Article page",url:`${R}/article`},{label:"Area report page",url:`${R}/areareport`},{label:"Charts demo",url:`${R}/charts`}]}}),a=new J({props:{title:"Grid of text cards",subtitle:"optional",$$slots:{meta:[ut],default:[ot]},$$scope:{ctx:p}}}),o=new J({props:{title:"Featured link cards",subtitle:"optional",colwidth:"narrow",$$slots:{default:[ct]},$$scope:{ctx:p}}}),{c(){T(e.$$.fragment),n=b(),T(a.$$.fragment),r=b(),T(o.$$.fragment)},l(s){C(e.$$.fragment,s),n=w(s),C(a.$$.fragment,s),r=w(s),C(o.$$.fragment,s)},m(s,c){S(e,s,c),_(s,n,c),S(a,s,c),_(s,r,c),S(o,s,c),u=!0},p(s,c){const t={};c&1&&(t.$$scope={dirty:c,ctx:s}),a.$set(t);const l={};c&1&&(l.$$scope={dirty:c,ctx:s}),o.$set(l)},i(s){u||(A(e.$$.fragment,s),A(a.$$.fragment,s),A(o.$$.fragment,s),u=!0)},o(s){N(e.$$.fragment,s),N(a.$$.fragment,s),N(o.$$.fragment,s),u=!1},d(s){F(e,s),s&&f(n),F(a,s),s&&f(r),F(o,s)}}}function pt(p){let e,n,a,r,o,u,s,c;return o=new et({props:{title:"This is a banner",label:"This is a link on a banner",url:"/"}}),s=new X({props:{$$slots:{default:[mt]},$$scope:{ctx:p}}}),{c(){e=v("meta"),n=v("meta"),a=v("meta"),r=b(),T(o.$$.fragment),u=b(),T(s.$$.fragment),this.h()},l(t){const l=U('[data-svelte="svelte-sjw3el"]',document.head);e=g(l,"META",{property:!0,content:!0}),n=g(l,"META",{property:!0,content:!0}),a=g(l,"META",{name:!0,content:!0}),l.forEach(f),r=w(t),C(o.$$.fragment,t),u=w(t),C(s.$$.fragment,t),this.h()},h(){document.title="Page title",$(e,"property","og:title"),$(e,"content","Page title"),$(n,"property","og:description"),$(n,"content","This is a description of the page."),$(a,"name","description"),$(a,"content","This is a description of the page.")},m(t,l){d(document.head,e),d(document.head,n),d(document.head,a),_(t,r,l),S(o,t,l),_(t,u,l),S(s,t,l),c=!0},p(t,[l]){const i={};l&1&&(i.$$scope={dirty:l,ctx:t}),s.$set(i)},i(t){c||(A(o.$$.fragment,t),A(s.$$.fragment,t),c=!0)},o(t){N(o.$$.fragment,t),N(s.$$.fragment,t),c=!1},d(t){f(e),f(n),f(a),t&&f(r),F(o,t),t&&f(u),F(s,t)}}}class wt extends H{constructor(e){super();W(this,e,null,pt,y,{})}}export{wt as default};