"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7301],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return d}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),c=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(p.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),g=c(t),d=o,m=g["".concat(p,".").concat(d)]||g[d]||s[d]||a;return t?n.createElement(m,i(i({ref:r},u),{},{components:t})):n.createElement(m,i({ref:r},u))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=g;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},6330:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return u},default:function(){return g}});var n=t(3117),o=t(102),a=(t(7294),t(3905)),i=["components"],l={id:"wire",title:"Wire \u4f9d\u8d56\u6ce8\u5165",description:"Kratos \u9879\u76ee\u6a21\u5757\u4f9d\u8d56\u6ce8\u5165\uff0c\u5feb\u901f\u521d\u59cb\u5316 Go \u9879\u76ee\u6a21\u677f\uff0cGo \u4f9d\u8d56\u6ce8\u5165\u5de5\u5177",keywords:["Go","Kratos","Toolkit","Framework","Microservices","Protobuf","gRPC","HTTP"]},p=void 0,c={unversionedId:"guide/wire",id:"guide/wire",isDocsHomePage:!1,title:"Wire \u4f9d\u8d56\u6ce8\u5165",description:"Kratos \u9879\u76ee\u6a21\u5757\u4f9d\u8d56\u6ce8\u5165\uff0c\u5feb\u901f\u521d\u59cb\u5316 Go \u9879\u76ee\u6a21\u677f\uff0cGo \u4f9d\u8d56\u6ce8\u5165\u5de5\u5177",source:"@site/docs/guide/03-wire.md",sourceDirName:"guide",slug:"/guide/wire",permalink:"/docs/guide/wire",editUrl:"https://github.com/go-kratos/go-kratos.dev/edit/main/docs/guide/03-wire.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"wire",title:"Wire \u4f9d\u8d56\u6ce8\u5165",description:"Kratos \u9879\u76ee\u6a21\u5757\u4f9d\u8d56\u6ce8\u5165\uff0c\u5feb\u901f\u521d\u59cb\u5316 Go \u9879\u76ee\u6a21\u677f\uff0cGo \u4f9d\u8d56\u6ce8\u5165\u5de5\u5177",keywords:["Go","Kratos","Toolkit","Framework","Microservices","Protobuf","gRPC","HTTP"]},sidebar:"docs",previous:{title:"OpenAPI Swagger \u4f7f\u7528",permalink:"/docs/guide/openapi"},next:{title:"Ent \u6570\u636e\u5e93\u6846\u67b6\u4f7f\u7528",permalink:"/docs/guide/ent"}},u=[{value:"\u5b89\u88c5\u5de5\u5177",id:"\u5b89\u88c5\u5de5\u5177",children:[],level:3},{value:"\u5de5\u4f5c\u539f\u7406",id:"\u5de5\u4f5c\u539f\u7406",children:[],level:3},{value:"\u4f7f\u7528\u65b9\u5f0f",id:"\u4f7f\u7528\u65b9\u5f0f",children:[],level:3},{value:"\u521d\u59cb\u5316\u7ec4\u4ef6",id:"\u521d\u59cb\u5316\u7ec4\u4ef6",children:[],level:3},{value:"References",id:"references",children:[],level:2}],s={toc:u};function g(e){var r=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Wire")," \u662f\u4e00\u4e2a\u7075\u6d3b\u7684\u4f9d\u8d56\u6ce8\u5165\u5de5\u5177\uff0c\u901a\u8fc7\u81ea\u52a8\u751f\u6210\u4ee3\u7801\u7684\u65b9\u5f0f\u5728\u7f16\u8bd1\u671f\u5b8c\u6210\u4f9d\u8d56\u6ce8\u5165\u3002"),(0,a.kt)("p",null,"\u5728\u5404\u4e2a\u7ec4\u4ef6\u4e4b\u95f4\u7684\u4f9d\u8d56\u5173\u7cfb\u4e2d\uff0c\u901a\u5e38\u9f13\u52b1\u663e\u5f0f\u521d\u59cb\u5316\uff0c\u800c\u4e0d\u662f\u5168\u5c40\u53d8\u91cf\u4f20\u9012\u3002"),(0,a.kt)("p",null,"\u6240\u4ee5\u901a\u8fc7 ",(0,a.kt)("em",{parentName:"p"},"Wire")," \u8fdb\u884c\u521d\u59cb\u5316\u4ee3\u7801\uff0c\u53ef\u4ee5\u5f88\u597d\u5730\u89e3\u51b3\u7ec4\u4ef6\u4e4b\u95f4\u7684\u8026\u5408\uff0c\u4ee5\u53ca\u63d0\u9ad8\u4ee3\u7801\u7ef4\u62a4\u6027\u3002"),(0,a.kt)("h3",{id:"\u5b89\u88c5\u5de5\u5177"},"\u5b89\u88c5\u5de5\u5177"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"go get github.com/google/wire/cmd/wire\n")),(0,a.kt)("h3",{id:"\u5de5\u4f5c\u539f\u7406"},"\u5de5\u4f5c\u539f\u7406"),(0,a.kt)("p",null,"Wire \u5177\u6709\u4e24\u4e2a\u57fa\u672c\u6982\u5ff5\uff1a",(0,a.kt)("em",{parentName:"p"},"Provider")," \u548c ",(0,a.kt)("em",{parentName:"p"},"Injector"),"\u3002"),(0,a.kt)("p",null,"Provider \u662f\u4e00\u4e2a\u666e\u901a\u7684 ",(0,a.kt)("em",{parentName:"p"},"Go Func")," \uff0c\u8fd9\u4e2a\u65b9\u6cd5\u4e5f\u53ef\u4ee5\u63a5\u6536\u5176\u5b83 ",(0,a.kt)("em",{parentName:"p"},"Provider")," \u7684\u8fd4\u56de\u503c\uff0c\u4ece\u800c\u5f62\u6210\u4e86\u4f9d\u8d56\u6ce8\u5165\uff1b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"// \u63d0\u4f9b\u4e00\u4e2a\u914d\u7f6e\u6587\u4ef6\uff08\u4e5f\u53ef\u80fd\u662f\u914d\u7f6e\u6587\u4ef6\uff09\nfunc NewConfig() *conf.Data {...}\n\n// \u63d0\u4f9b\u6570\u636e\u7ec4\u4ef6\uff0c\u4f9d\u8d56\u4e86\u6570\u636e\u914d\u7f6e\uff08\u521d\u59cb\u5316 Database\u3001Cache \u7b49\uff09\nfunc NewData(c *conf.Data) (*Data, error) {...}\n\n// \u63d0\u4f9b\u6301\u4e45\u5316\u7ec4\u4ef6\uff0c\u4f9d\u8d56\u6570\u636e\u7ec4\u4ef6\uff08\u5b9e\u73b0 CURD \u6301\u4e45\u5316\u5c42\uff09\nfunc NewUserRepo(d *data.Data) (*UserRepo, error) {...}\n")),(0,a.kt)("h3",{id:"\u4f7f\u7528\u65b9\u5f0f"},"\u4f7f\u7528\u65b9\u5f0f"),(0,a.kt)("p",null,"\u5728 Kratos \u4e2d\uff0c\u4e3b\u8981\u5206\u4e3a ",(0,a.kt)("em",{parentName:"p"},"server\u3001service\u3001biz\u3001data")," \u670d\u52a1\u6a21\u5757\uff0c\u4f1a\u901a\u8fc7 ",(0,a.kt)("em",{parentName:"p"},"Wire")," \u8fdb\u884c\u6a21\u5757\u987a\u5e8f\u7684\u521d\u59cb\u5316\uff1b"),(0,a.kt)("img",{src:"/images/wire.png",alt:"kratos ddd",width:"650px"}),(0,a.kt)("p",null,"\u5728\u6bcf\u4e2a\u6a21\u5757\u4e2d\uff0c\u53ea\u9700\u8981\u4e00\u4e2a ",(0,a.kt)("em",{parentName:"p"},"ProviderSet")," \u63d0\u4f9b\u8005\u96c6\u5408\uff0c\u5c31\u53ef\u4ee5\u5728 wire \u4e2d\u8fdb\u884c\u4f9d\u8d56\u6ce8\u5165\uff1b"),(0,a.kt)("p",null,"\u5e76\u4e14\u6211\u4eec\u5728\u6bcf\u4e2a\u7ec4\u4ef6\u63d0\u4f9b\u5165\u53e3\u5373\u53ef\uff0c\u4e0d\u9700\u8981\u5176\u5b83\u4f9d\u8d56\uff0c\u4f8b\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"-data\n--data.go    // var ProviderSet = wire.NewSet(NewData, NewGreeterRepo)\n--greeter.go // func NewGreeterRepo(data *Data, logger log.Logger) biz.GreeterRepo {...}\n")),(0,a.kt)("p",null,"\u7136\u540e\u901a\u8fc7 ",(0,a.kt)("em",{parentName:"p"},"wire.go")," \u4e2d\u5b9a\u4e49\u6240\u6709 ",(0,a.kt)("em",{parentName:"p"},"ProviderSet")," \u53ef\u4ee5\u5b8c\u6210\u4f9d\u8d56\u6ce8\u5165\u914d\u7f6e\u3002"),(0,a.kt)("h3",{id:"\u521d\u59cb\u5316\u7ec4\u4ef6"},"\u521d\u59cb\u5316\u7ec4\u4ef6"),(0,a.kt)("p",null,"\u901a\u8fc7 wire \u521d\u59cb\u5316\u7ec4\u4ef6\uff0c\u9700\u8981\u5b9a\u4e49\u5bf9\u5e94\u7684 wire.go\uff0c\u4ee5\u53ca kratos application \u7528\u4e8e\u542f\u52a8\u7ba1\u7406\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"// \u5e94\u7528\u7a0b\u5e8f\u5165\u53e3\ncmd\n-main.go\n-wire.go\n-wire_gen.go\n\n// main.go \u521b\u5efa kratos \u5e94\u7528\u751f\u547d\u5468\u671f\u7ba1\u7406\nfunc newApp(logger log.Logger, hs *http.Server, gs *grpc.Server, greeter *service.GreeterService) *kratos.App {\n    pb.RegisterGreeterServer(gs, greeter)\n    pb.RegisterGreeterHTTPServer(hs, greeter)\n    return kratos.New(\n        kratos.Name(Name),\n        kratos.Version(Version),\n        kratos.Logger(logger),\n        kratos.Server(\n            hs,\n            gs,\n        ),\n    )\n}\n\n// wire.go \u521d\u59cb\u5316\u6a21\u5757\nfunc initApp(*conf.Server, *conf.Data, log.Logger) (*kratos.App, error) {\n    // \u6784\u5efa\u6240\u6709\u6a21\u5757\u4e2d\u7684 ProviderSet\uff0c\u7528\u4e8e\u751f\u6210 wire_gen.go \u81ea\u52a8\u4f9d\u8d56\u6ce8\u5165\u6587\u4ef6\n    panic(wire.Build(server.ProviderSet, data.ProviderSet, biz.ProviderSet, service.ProviderSet, newApp))\n}\n")),(0,a.kt)("p",null,"\u5728\u9879\u76ee\u7684 main \u76ee\u5f55\u4e2d\uff0c\u8fd0\u884c go generate \u8fdb\u884c\u751f\u6210\u7f16\u8bd1\u671f\u4f9d\u8d56\u6ce8\u5165\u4ee3\u7801\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"go generate ./...\n")),(0,a.kt)("h2",{id:"references"},"References"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://blog.golang.org/wire"},"https://blog.golang.org/wire")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/google/wire"},"https://github.com/google/wire")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://medium.com/@dche423/master-wire-cn-d57de86caa1b"},"https://medium.com/@dche423/master-wire-cn-d57de86caa1b"))))}g.isMDXComponent=!0}}]);