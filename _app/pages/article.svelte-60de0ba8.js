import{S as V,i as j,s as B,G as J,e as T,c as S,a as q,d as f,b as Y,g as p,K as N,L as G,M as I,q as w,o as k,k as g,w as A,U as K,m as h,x as E,I as P,y as x,B as M,t as b,h as v}from"../chunks/index-74a41eac.js";import{b as L}from"../chunks/paths-396f020f.js";import{T as R,H as U}from"../chunks/Headline-a0bc6aff.js";import{S as z}from"../chunks/Subhead-e046b00a.js";import{A as O,S as C,L as Q,F}from"../chunks/Linkbox-648fe394.js";import"../chunks/Navbox-8a6958df.js";function W(c){let e,a;const i=c[2].default,n=J(i,c,c[1],null);return{c(){e=T("a"),n&&n.c(),this.h()},l(s){e=S(s,"A",{class:!0,href:!0});var l=q(e);n&&n.l(l),l.forEach(f),this.h()},h(){Y(e,"class","btn btn--primary btn--full-width width-md--40 margin-bottom--2"),Y(e,"href",c[0])},m(s,l){p(s,e,l),n&&n.m(e,null),a=!0},p(s,[l]){n&&n.p&&(!a||l&2)&&N(n,i,s,s[1],a?I(i,s[1],l,null):G(s[1]),null),(!a||l&1)&&Y(e,"href",s[0])},i(s){a||(w(n,s),a=!0)},o(s){k(n,s),a=!1},d(s){s&&f(e),n&&n.d(s)}}}function X(c,e,a){let{$$slots:i={},$$scope:n}=e,{url:s="/"}=e;return c.$$set=l=>{"url"in l&&a(0,s=l.url),"$$scope"in l&&a(1,n=l.$$scope)},[s,n,i]}class Z extends V{constructor(e){super(),j(this,e,X,W,B,{url:0})}}function y(c){let e;return{c(){e=b("Article title")},l(a){e=v(a,"Article title")},m(a,i){p(a,e,i)},d(a){a&&f(e)}}}function ee(c){let e;return{c(){e=b("This is an article subtitle.")},l(a){e=v(a,"This is an article subtitle.")},m(a,i){p(a,e,i)},d(a){a&&f(e)}}}function te(c){let e,a,i,n;return e=new U({props:{$$slots:{default:[y]},$$scope:{ctx:c}}}),i=new z({props:{$$slots:{default:[ee]},$$scope:{ctx:c}}}),{c(){A(e.$$.fragment),a=g(),A(i.$$.fragment)},l(s){E(e.$$.fragment,s),a=h(s),E(i.$$.fragment,s)},m(s,l){x(e,s,l),p(s,a,l),x(i,s,l),n=!0},p(s,l){const o={};l&1&&(o.$$scope={dirty:l,ctx:s}),e.$set(o);const _={};l&1&&(_.$$scope={dirty:l,ctx:s}),i.$set(_)},i(s){n||(w(e.$$.fragment,s),w(i.$$.fragment,s),n=!0)},o(s){k(e.$$.fragment,s),k(i.$$.fragment,s),n=!1},d(s){M(e,s),s&&f(a),M(i,s)}}}function se(c){let e,a,i,n,s;return{c(){e=T("h2"),a=b("Plain text section"),i=g(),n=T("p"),s=b("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at felis ut turpis sodales consectetur. Nunc ut odio eget quam sollicitudin faucibus id eget sapien. Cras id justo venenatis, elementum ex ac, feugiat lacus. Vivamus semper dui in congue sodales. Suspendisse eu arcu eget metus volutpat tempor. Maecenas mattis augue tellus, non consequat ipsum eleifend non. Mauris ac velit nec turpis hendrerit tincidunt in eget mauris.")},l(l){e=S(l,"H2",{});var o=q(e);a=v(o,"Plain text section"),o.forEach(f),i=h(l),n=S(l,"P",{});var _=q(n);s=v(_,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at felis ut turpis sodales consectetur. Nunc ut odio eget quam sollicitudin faucibus id eget sapien. Cras id justo venenatis, elementum ex ac, feugiat lacus. Vivamus semper dui in congue sodales. Suspendisse eu arcu eget metus volutpat tempor. Maecenas mattis augue tellus, non consequat ipsum eleifend non. Mauris ac velit nec turpis hendrerit tincidunt in eget mauris."),_.forEach(f)},m(l,o){p(l,e,o),P(e,a),p(l,i,o),p(l,n,o),P(n,s)},d(l){l&&f(e),l&&f(i),l&&f(n)}}}function ae(c){let e;return{c(){e=b("Svelte code for chart/map/image goes here (remove 'background' prop for transparent background)")},l(a){e=v(a,"Svelte code for chart/map/image goes here (remove 'background' prop for transparent background)")},m(a,i){p(a,e,i)},d(a){a&&f(e)}}}function re(c){let e,a,i,n,s,l,o,_,u,m,r;return o=new F({props:{embed:"<iframe></iframe>",download:"/",background:"#eaeaea",height:300,$$slots:{default:[ae]},$$scope:{ctx:c}}}),{c(){e=T("h2"),a=b("Section with embed"),i=g(),n=T("p"),s=b("This is a paragraph of text."),l=g(),A(o.$$.fragment),_=g(),u=T("p"),m=b("This is another paragraph of text.")},l(t){e=S(t,"H2",{});var $=q(e);a=v($,"Section with embed"),$.forEach(f),i=h(t),n=S(t,"P",{});var d=q(n);s=v(d,"This is a paragraph of text."),d.forEach(f),l=h(t),E(o.$$.fragment,t),_=h(t),u=S(t,"P",{});var H=q(u);m=v(H,"This is another paragraph of text."),H.forEach(f)},m(t,$){p(t,e,$),P(e,a),p(t,i,$),p(t,n,$),P(n,s),p(t,l,$),x(o,t,$),p(t,_,$),p(t,u,$),P(u,m),r=!0},p(t,$){const d={};$&1&&(d.$$scope={dirty:$,ctx:t}),o.$set(d)},i(t){r||(w(o.$$.fragment,t),r=!0)},o(t){k(o.$$.fragment,t),r=!1},d(t){t&&f(e),t&&f(i),t&&f(n),t&&f(l),M(o,t),t&&f(_),t&&f(u)}}}function ie(c){let e;return{c(){e=b("Svelte code for chart/map/image goes here (remove 'background' prop for transparent background)")},l(a){e=v(a,"Svelte code for chart/map/image goes here (remove 'background' prop for transparent background)")},m(a,i){p(a,e,i)},d(a){a&&f(e)}}}function le(c){let e,a,i,n,s,l,o,_,u,m,r;return o=new F({props:{embed:"<iframe></iframe>",download:"/",background:"#eaeaea",height:300,fullwidth:!0,$$slots:{default:[ie]},$$scope:{ctx:c}}}),{c(){e=T("h2"),a=b("Section with extra wide embed"),i=g(),n=T("p"),s=b("This is a paragraph of text."),l=g(),A(o.$$.fragment),_=g(),u=T("p"),m=b("This is another paragraph of text.")},l(t){e=S(t,"H2",{});var $=q(e);a=v($,"Section with extra wide embed"),$.forEach(f),i=h(t),n=S(t,"P",{});var d=q(n);s=v(d,"This is a paragraph of text."),d.forEach(f),l=h(t),E(o.$$.fragment,t),_=h(t),u=S(t,"P",{});var H=q(u);m=v(H,"This is another paragraph of text."),H.forEach(f)},m(t,$){p(t,e,$),P(e,a),p(t,i,$),p(t,n,$),P(n,s),p(t,l,$),x(o,t,$),p(t,_,$),p(t,u,$),P(u,m),r=!0},p(t,$){const d={};$&1&&(d.$$scope={dirty:$,ctx:t}),o.$set(d)},i(t){r||(w(o.$$.fragment,t),r=!0)},o(t){k(o.$$.fragment,t),r=!1},d(t){t&&f(e),t&&f(i),t&&f(n),t&&f(l),M(o,t),t&&f(_),t&&f(u)}}}function ne(c){let e;return{c(){e=b("View all data used in this article")},l(a){e=v(a,"View all data used in this article")},m(a,i){p(a,e,i)},d(a){a&&f(e)}}}function oe(c){let e,a,i,n,s,l,o,_,u,m;return e=new C({props:{backlink:!0,hr:!0,$$slots:{default:[se]},$$scope:{ctx:c}}}),i=new C({props:{backlink:!0,hr:!0,$$slots:{default:[re]},$$scope:{ctx:c}}}),s=new C({props:{backlink:!0,$$slots:{default:[le]},$$scope:{ctx:c}}}),o=new Z({props:{url:L+"/",$$slots:{default:[ne]},$$scope:{ctx:c}}}),u=new Q({props:{title:"Related",links:[{label:"Article one title",url:`${L}/`,type:"Article",meta:"31 January 2022",description:"This is a description of the article."},{label:"Article two title",url:`${L}/`,type:"Article",meta:"16 January 2022",description:"This is a description of the article."}]}}),{c(){A(e.$$.fragment),a=g(),A(i.$$.fragment),n=g(),A(s.$$.fragment),l=g(),A(o.$$.fragment),_=g(),A(u.$$.fragment)},l(r){E(e.$$.fragment,r),a=h(r),E(i.$$.fragment,r),n=h(r),E(s.$$.fragment,r),l=h(r),E(o.$$.fragment,r),_=h(r),E(u.$$.fragment,r)},m(r,t){x(e,r,t),p(r,a,t),x(i,r,t),p(r,n,t),x(s,r,t),p(r,l,t),x(o,r,t),p(r,_,t),x(u,r,t),m=!0},p(r,t){const $={};t&1&&($.$$scope={dirty:t,ctx:r}),e.$set($);const d={};t&1&&(d.$$scope={dirty:t,ctx:r}),i.$set(d);const H={};t&1&&(H.$$scope={dirty:t,ctx:r}),s.$set(H);const D={};t&1&&(D.$$scope={dirty:t,ctx:r}),o.$set(D)},i(r){m||(w(e.$$.fragment,r),w(i.$$.fragment,r),w(s.$$.fragment,r),w(o.$$.fragment,r),w(u.$$.fragment,r),m=!0)},o(r){k(e.$$.fragment,r),k(i.$$.fragment,r),k(s.$$.fragment,r),k(o.$$.fragment,r),k(u.$$.fragment,r),m=!1},d(r){M(e,r),r&&f(a),M(i,r),r&&f(n),M(s,r),r&&f(l),M(o,r),r&&f(_),M(u,r)}}}function ue(c){let e,a,i,n,s,l,o,_;return s=new R({props:{breadcrumb:[{label:"Home",url:`${L}/`},{label:"Article page"}],date:"DD Month YYYY",updated:"DD Month YYYY (optional)",$$slots:{default:[te]},$$scope:{ctx:c}}}),o=new O({props:{$$slots:{default:[oe]},$$scope:{ctx:c}}}),{c(){e=T("meta"),a=T("meta"),i=T("meta"),n=g(),A(s.$$.fragment),l=g(),A(o.$$.fragment),this.h()},l(u){const m=K('[data-svelte="svelte-sjw3el"]',document.head);e=S(m,"META",{property:!0,content:!0}),a=S(m,"META",{property:!0,content:!0}),i=S(m,"META",{name:!0,content:!0}),m.forEach(f),n=h(u),E(s.$$.fragment,u),l=h(u),E(o.$$.fragment,u),this.h()},h(){document.title="Page title",Y(e,"property","og:title"),Y(e,"content","Page title"),Y(a,"property","og:description"),Y(a,"content","This is a description of the page."),Y(i,"name","description"),Y(i,"content","This is a description of the page.")},m(u,m){P(document.head,e),P(document.head,a),P(document.head,i),p(u,n,m),x(s,u,m),p(u,l,m),x(o,u,m),_=!0},p(u,[m]){const r={};m&1&&(r.$$scope={dirty:m,ctx:u}),s.$set(r);const t={};m&1&&(t.$$scope={dirty:m,ctx:u}),o.$set(t)},i(u){_||(w(s.$$.fragment,u),w(o.$$.fragment,u),_=!0)},o(u){k(s.$$.fragment,u),k(o.$$.fragment,u),_=!1},d(u){f(e),f(a),f(i),u&&f(n),M(s,u),u&&f(l),M(o,u)}}}class de extends V{constructor(e){super(),j(this,e,null,ue,B,{})}}export{de as default};
