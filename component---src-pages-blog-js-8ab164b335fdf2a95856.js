"use strict";(self.webpackChunkmy_gatsby_blog=self.webpackChunkmy_gatsby_blog||[]).push([[7],{7786:function(e,t,a){a.d(t,{V:function(){return m}});var n=a(5785),s=a(7294),r=a(1883),c=a(5868);const l=e=>{let t,{node:a,prefix:n,newspaper:l}=e;if(a.date)if(l)t=(0,c.L0)(a.date);else{const e=a.date.split("/");t=parseInt(e[2])+" "+c.O_[parseInt(e[1])]}return s.createElement(r.Link,{to:a.slug,key:a.id,className:"post"},s.createElement("h3",null,a.shortTitle),s.createElement("time",null,(0,c.rs)(t)))},m=e=>{let{data:t=[],showYears:a,query:r,prefix:m,hideDate:i,yearOnly:o,...u}=e;const d=(0,s.useMemo)((()=>{const e={};return t.forEach((t=>{var a;const s=null===(a=t.date)||void 0===a?void 0:a.split("/")[0];e[s]=[].concat((0,n.Z)(e[s]||[]),[t])})),e}),[t]),E=(0,s.useMemo)((()=>Object.keys(d).reverse()),[d]);return a?E.map((e=>s.createElement("section",{key:e,className:"segment"},s.createElement("h2",{className:"year"},(0,c.rs)(e)),s.createElement("div",{className:"posts"},d[e].map((e=>s.createElement(l,{key:e.id,node:e,query:r,prefix:m}))))))):s.createElement("div",{className:u.newspaper?"posts newspaper":"posts"},t.map((e=>s.createElement(l,Object.assign({key:e.id,node:e,query:r,prefix:m,hideDate:i,yearOnly:o},u)))))}},7203:function(e,t,a){a.d(t,{C:function(){return m}});var n=a(7294),s=a(1883),r=a(5868),c=a(7141);const l=()=>{const e=(0,c.E)(),t=e.categories.group,a=e.tags.group;return n.createElement("aside",{className:"post-sidebar"},n.createElement("div",{className:"post-sidebar-card"},n.createElement("h2",null,"دسته بندی ها"),n.createElement("div",{className:"list"},t.filter((e=>"Highlight"!==e.name)).map((e=>n.createElement(s.Link,{key:e.name,to:"/categories/"+(0,r.lV)(e.name),className:"category",activeClassName:"active"},n.createElement("div",{className:"name"},e.name),n.createElement("div",{className:"count"},e.totalCount)))))),n.createElement("div",{className:"post-sidebar-card"},n.createElement("h2",null,"تگ‌ها"),n.createElement("div",{className:"tags"},a.map((e=>n.createElement(s.Link,{key:e.name,to:"/tags/"+(0,r.lV)(e.name),className:"tag",activeClassName:"active"},e.name))))))},m=e=>{let{children:t}=e;return n.createElement("section",{className:"container markdown-content"},n.createElement("div",{className:"grid"},n.createElement("div",{className:"article-content"},t),n.createElement("div",{className:"sidebar-content"},n.createElement(l,null))))}},5502:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var n=a(7294),s=a(4593),r=a(1906),c=a(7786),l=a(8454),m=a(7203),i=a(3737),o=a(5868);function u(e){let{data:t}=e;const a=t.posts.edges,r=(0,n.useMemo)((()=>(0,o.Nx)(a)),[a]),u="بلاگ";return n.createElement("div",null,n.createElement(s.Z,{title:u+" | "+i.Z.siteTitle}),n.createElement(l.H,{customDescription:"یادداشت ها و آموزش‌ها"}),n.createElement(m.C,null,n.createElement("header",{className:"hero"},n.createElement("h1",null,u)),n.createElement(c.V,{data:r,showYears:!0})))}u.Layout=r.A},7141:function(e,t,a){a.d(t,{E:function(){return s}});var n=a(1883);const s=()=>(0,n.useStaticQuery)("523315755")}}]);
//# sourceMappingURL=component---src-pages-blog-js-8ab164b335fdf2a95856.js.map