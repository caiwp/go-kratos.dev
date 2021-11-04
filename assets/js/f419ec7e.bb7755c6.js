"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2467],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return m}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),u=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},p=function(e){var r=u(e.components);return n.createElement(l.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},s=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(t),m=o,k=s["".concat(l,".").concat(m)]||s[m]||d[m]||i;return t?n.createElement(k,a(a({ref:r},p),{},{components:t})):n.createElement(k,a({ref:r},p))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=s;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=t[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},1432:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return s}});var n=t(3117),o=t(102),i=(t(7294),t(3905)),a=["components"],c={id:"circuitbreaker",title:"\u7194\u65ad\u5668",keywords:["Go","Kratos","Toolkit","Framework","Microservices","Protobuf","gRPC","HTTP"]},l=void 0,u={unversionedId:"component/middleware/circuitbreaker",id:"component/middleware/circuitbreaker",isDocsHomePage:!1,title:"\u7194\u65ad\u5668",description:"\u7194\u65ad\u5668\u4e2d\u95f4\u4ef6\uff0c\u7528\u4e8e\u63d0\u4f9b\u5ba2\u6237\u7aef\u7194\u65ad\u529f\u80fd\uff0c\u9ed8\u8ba4\u5b9e\u73b0\u4e86sre breaker \u7b97\u6cd5\u3002",source:"@site/docs/component/middleware/03-circuitbreaker.md",sourceDirName:"component/middleware",slug:"/component/middleware/circuitbreaker",permalink:"/docs/component/middleware/circuitbreaker",editUrl:"https://github.com/go-kratos/go-kratos.dev/edit/main/docs/component/middleware/03-circuitbreaker.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"circuitbreaker",title:"\u7194\u65ad\u5668",keywords:["Go","Kratos","Toolkit","Framework","Microservices","Protobuf","gRPC","HTTP"]},sidebar:"docs",previous:{title:"\u8ba4\u8bc1\u9274\u6743",permalink:"/docs/component/middleware/auth"},next:{title:"\u65e5\u5fd7",permalink:"/docs/component/middleware/logging"}},p=[{value:"\u914d\u7f6e",id:"\u914d\u7f6e",children:[{value:"<code>WithGroup</code>",id:"withgroup",children:[],level:4}],level:3},{value:"\u4f7f\u7528\u65b9\u6cd5",id:"\u4f7f\u7528\u65b9\u6cd5",children:[{value:"\u5728 Client \u8bf7\u6c42\u4e2d\u4f7f\u7528\u7194\u65ad\u5668",id:"\u5728-client-\u8bf7\u6c42\u4e2d\u4f7f\u7528\u7194\u65ad\u5668",children:[],level:4},{value:"\u89e6\u53d1\u7194\u65ad",id:"\u89e6\u53d1\u7194\u65ad",children:[],level:4}],level:3}],d={toc:p};function s(e){var r=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u7194\u65ad\u5668\u4e2d\u95f4\u4ef6\uff0c\u7528\u4e8e\u63d0\u4f9b\u5ba2\u6237\u7aef\u7194\u65ad\u529f\u80fd\uff0c\u9ed8\u8ba4\u5b9e\u73b0\u4e86",(0,i.kt)("a",{parentName:"p",href:"https://github.com/go-kratos/aegis/tree/main/circuitbreaker/sre"},"sre breaker")," \u7b97\u6cd5\u3002"),(0,i.kt)("h3",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,i.kt)("h4",{id:"withgroup"},(0,i.kt)("inlineCode",{parentName:"h4"},"WithGroup")),(0,i.kt)("p",null,"breaker \u4f9d\u8d56\u4e8e ",(0,i.kt)("inlineCode",{parentName:"p"},"container/group")," \u6765\u5b9e\u73b0\u5bf9\u4e8e\u9488\u5bf9\u4e0d\u540c",(0,i.kt)("inlineCode",{parentName:"p"},"Operation"),"\u4f7f\u7528\u4e92\u76f8\u72ec\u7acb\u7684 breaker\u3002\n",(0,i.kt)("inlineCode",{parentName:"p"},"WithGroup"),"\u53ef\u4ee5\u914d\u7f6e\u81ea\u5b9a\u4e49\u7684Group\u6765\u66ff\u6362\u9ed8\u8ba4\u7684\u7194\u65ad\u7b97\u6cd5\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"// WithGroup with circuit breaker group.\n// NOTE: implements generics circuitbreaker.CircuitBreaker\nfunc WithGroup(g *group.Group) Option {\n    return func(o *options) {\n        o.group = g\n    }\n}\n")),(0,i.kt)("p",null,"\u9ed8\u8ba4\u914d\u7f6e\u4f1a\u9488\u5bf9\u4e0d\u540c\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"Operation"),"\u751f\u6210\u72ec\u7acb\u7684 breaker\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"opt := &options{\n    group: group.NewGroup(func() interface{} {\n        return sre.NewBreaker()\n    }),\n}\n")),(0,i.kt)("h3",{id:"\u4f7f\u7528\u65b9\u6cd5"},"\u4f7f\u7528\u65b9\u6cd5"),(0,i.kt)("h4",{id:"\u5728-client-\u8bf7\u6c42\u4e2d\u4f7f\u7528\u7194\u65ad\u5668"},"\u5728 Client \u8bf7\u6c42\u4e2d\u4f7f\u7528\u7194\u65ad\u5668"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'conn, err := http.NewClient(\n    context.Background(),\n    http.WithMiddleware(\n        circuitbreaker.Client(),\n    ),\n    http.WithEndpoint("127.0.0.1:8000"),\n)\n')),(0,i.kt)("h4",{id:"\u89e6\u53d1\u7194\u65ad"},"\u89e6\u53d1\u7194\u65ad"),(0,i.kt)("p",null,"\u5f53\u7194\u65ad\u5668\u89e6\u53d1\u65f6\uff0c\u4f1a\u5728\u4e00\u6bb5\u65f6\u95f4\u5185\u5bf9\u4e8e\u8be5",(0,i.kt)("inlineCode",{parentName:"p"},"Operation"),"\u7684\u8c03\u7528\u5feb\u901f\u5931\u8d25\uff0c\u5e76\u8fd4\u56de\u9519\u8bef",(0,i.kt)("inlineCode",{parentName:"p"},"ErrNotAllowed"),"\uff0c\u5b9a\u4e49\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'// ErrNotAllowed is request failed due to circuit breaker triggered.\nvar ErrNotAllowed = errors.New(503, "CIRCUITBREAKER", "request failed due to circuit breaker triggered")\n')))}s.isMDXComponent=!0}}]);