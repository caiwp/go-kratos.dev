(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{115:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(124),i=t(137),s=t(119),o=t(120);var c=function(e){var a=e.nextItem,t=e.prevItem;return r.a.createElement("nav",{className:"pagination-nav","aria-label":Object(s.b)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},r.a.createElement("div",{className:"pagination-nav__item"},t&&r.a.createElement(o.a,{className:"pagination-nav__link",to:t.permalink},r.a.createElement("div",{className:"pagination-nav__sublabel"},r.a.createElement(s.a,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")),r.a.createElement("div",{className:"pagination-nav__label"},"\xab ",t.title))),r.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},a&&r.a.createElement(o.a,{className:"pagination-nav__link",to:a.permalink},r.a.createElement("div",{className:"pagination-nav__sublabel"},r.a.createElement(s.a,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post")),r.a.createElement("div",{className:"pagination-nav__label"},a.title," \xbb"))))},m=t(132),u=t(146),d=t(147),g=t(117);a.default=function(e){var a=e.content,t=e.sidebar,n=a.frontMatter,s=a.metadata,o=s.title,v=s.description,p=s.nextItem,E=s.prevItem,h=s.editUrl,f=n.hide_table_of_contents;return r.a.createElement(l.a,{title:o,description:v,wrapperClassName:g.ThemeClassNames.wrapper.blogPages,pageClassName:g.ThemeClassNames.page.blogPostPage},a&&r.a.createElement("div",{className:"container margin-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--3"},r.a.createElement(m.a,{sidebar:t})),r.a.createElement("main",{className:"col col--7"},r.a.createElement(i.a,{frontMatter:n,metadata:s,isBlogPostPage:!0},r.a.createElement(a,null)),r.a.createElement("div",null,h&&r.a.createElement(d.a,{editUrl:h})),(p||E)&&r.a.createElement("div",{className:"margin-vert--xl"},r.a.createElement(c,{nextItem:p,prevItem:E}))),!f&&a.toc&&r.a.createElement("div",{className:"col col--2"},r.a.createElement(u.a,{toc:a.toc})))))}},122:function(e,a,t){"use strict";t.d(a,"c",(function(){return l})),t.d(a,"d",(function(){return i})),t.d(a,"a",(function(){return s})),t.d(a,"b",(function(){return o})),t.d(a,"f",(function(){return c})),t.d(a,"e",(function(){return m})),t.d(a,"g",(function(){return u}));var n=t(121),r=t.n(n);t(127)(r.a),t(130).lunrLanguageZh(r.a),t(128)(r.a);var l=["en","zh"],i=!1,s=null,o="aafa56ec",c=8,m=50,u={search_placeholder:"Search",see_all_results:"See all results",no_results:"No results.",search_results_for:'Search results for "{{ keyword }}"',search_the_documentation:"Search the documentation",count_documents_found_plural:"{{ count }} documents found",count_documents_found:"{{ count }} document found",no_documents_were_found:"No documents were found"}},132:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var n=t(0),r=t.n(n),l=t(118),i=t(120),s=t(55),o=t.n(s);function c(e){var a=e.sidebar;return 0===a.items.length?null:r.a.createElement("div",{className:Object(l.a)(o.a.sidebar,"thin-scrollbar")},r.a.createElement("h3",{className:o.a.sidebarItemTitle},a.title),r.a.createElement("ul",{className:o.a.sidebarItemList},a.items.map((function(e){return r.a.createElement("li",{key:e.permalink,className:o.a.sidebarItem},r.a.createElement(i.a,{isNavLink:!0,to:e.permalink,className:o.a.sidebarItemLink,activeClassName:o.a.sidebarItemLinkActive},e.title))}))))}},137:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(118),i=t(116),s=t(119),o=t(120),c=t(138),m=t(136),u=t(57),d=t.n(u),g=t(117);a.a=function(e){var a,t,n=(a=Object(g.usePluralForm)().selectMessage,function(e){var t=Math.ceil(e);return a(t,Object(s.b)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),u=e.children,v=e.frontMatter,p=e.metadata,E=e.truncated,h=e.isBlogPostPage,f=void 0!==h&&h,b=p.date,_=p.formattedDate,N=p.permalink,k=p.tags,w=p.readingTime,T=v.author,L=v.title,O=v.image,P=v.keywords,I=v.author_url||v.authorURL,x=v.author_title||v.authorTitle,C=v.author_image_url||v.authorImageURL;return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{keywords:P,image:O}),r.a.createElement("article",{className:f?void 0:"margin-bottom--xl"},(t=f?"h1":"h2",r.a.createElement("header",null,r.a.createElement(t,{className:Object(l.a)("margin-bottom--sm",d.a.blogPostTitle)},f?L:r.a.createElement(o.a,{to:N},L)),r.a.createElement("div",{className:"margin-vert--md"},r.a.createElement("time",{dateTime:b,className:d.a.blogPostDate},_,w&&r.a.createElement(r.a.Fragment,null," \xb7 ",n(w)))),r.a.createElement("div",{className:"avatar margin-vert--md"},C&&r.a.createElement(o.a,{className:"avatar__photo-link avatar__photo",href:I},r.a.createElement("img",{src:C,alt:T})),r.a.createElement("div",{className:"avatar__intro"},T&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{className:"avatar__name"},r.a.createElement(o.a,{href:I},T)),r.a.createElement("small",{className:"avatar__subtitle"},x)))))),r.a.createElement("div",{className:"markdown"},r.a.createElement(i.a,{components:c.a},u)),(k.length>0||E)&&r.a.createElement("footer",{className:"row margin-vert--lg"},k.length>0&&r.a.createElement("div",{className:"col"},r.a.createElement("strong",null,r.a.createElement(s.a,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),k.map((function(e){var a=e.label,t=e.permalink;return r.a.createElement(o.a,{key:t,className:"margin-horiz--sm",to:t},a)}))),E&&r.a.createElement("div",{className:"col text--right"},r.a.createElement(o.a,{to:p.permalink,"aria-label":"Read more about "+L},r.a.createElement("strong",null,r.a.createElement(s.a,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}},146:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(118);var i=function(e,a,t){var r=Object(n.useState)(void 0),l=r[0],i=r[1];Object(n.useEffect)((function(){function n(){var n=function(){var e=Array.from(document.getElementsByClassName("anchor")),a=e.find((function(e){return e.getBoundingClientRect().top>=t}));if(a){if(a.getBoundingClientRect().top>=t){var n=e[e.indexOf(a)-1];return null!=n?n:a}return a}return e[e.length-1]}();if(n)for(var r=0,s=!1,o=document.getElementsByClassName(e);r<o.length&&!s;){var c=o[r],m=c.href,u=decodeURIComponent(m.substring(m.indexOf("#")+1));n.id===u&&(l&&l.classList.remove(a),c.classList.add(a),i(c),s=!0),r+=1}}return document.addEventListener("scroll",n),document.addEventListener("resize",n),n(),function(){document.removeEventListener("scroll",n),document.removeEventListener("resize",n)}}))},s=t(58),o=t.n(s),c="table-of-contents__link";function m(e){var a=e.toc,t=e.isChild;return a.length?r.a.createElement("ul",{className:t?"":"table-of-contents table-of-contents__left-border"},a.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("a",{href:"#"+e.id,className:c,dangerouslySetInnerHTML:{__html:e.value}}),r.a.createElement(m,{isChild:!0,toc:e.children}))}))):null}a.a=function(e){var a=e.toc;return i(c,"table-of-contents__link--active",100),r.a.createElement("div",{className:Object(l.a)(o.a.tableOfContents,"thin-scrollbar")},r.a.createElement(m,{toc:a}))}},147:function(e,a,t){"use strict";t.d(a,"a",(function(){return d}));var n=t(0),r=t.n(n),l=t(119),i=t(3),s=t(7),o=t(118),c=t(59),m=t.n(c),u=function(e){var a=e.className,t=Object(s.a)(e,["className"]);return r.a.createElement("svg",Object(i.a)({fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",role:"img",viewBox:"0 0 40 40",className:Object(o.a)(m.a.iconEdit,a),"aria-label":"Edit page"},t),r.a.createElement("g",null,r.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function d(e){var a=e.editUrl;return r.a.createElement("a",{href:a,target:"_blank",rel:"noreferrer noopener"},r.a.createElement(u,null),r.a.createElement(l.a,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}}}]);