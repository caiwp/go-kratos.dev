(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{104:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),c=(n(0),n(110)),o={id:"data",title:"\u6570\u636e\u8bbf\u95ee"},i={unversionedId:"getting-started/data",id:"getting-started/data",isDocsHomePage:!1,title:"\u6570\u636e\u8bbf\u95ee",description:"Ent \u662f Fackbook \u5f00\u6e90\u7684\u4e00\u4e2a\u7b80\u5355\u6613\u7528\u7684 Database \u5b9e\u4f53\u6846\u67b6\u3002",source:"@site/docs/getting-started/data.md",slug:"/getting-started/data",permalink:"/docs/getting-started/data",editUrl:"https://github.com/go-kratos/go-kratos.dev/edit/main/docs/getting-started/data.md",version:"current",sidebar:"docs",previous:{title:"\u4f9d\u8d56\u6ce8\u5165",permalink:"/docs/getting-started/wire"},next:{title:"FAQ",permalink:"/docs/getting-started/faq"}},l=[{value:"\u5b89\u88c5\u5de5\u5177",id:"\u5b89\u88c5\u5de5\u5177",children:[]},{value:"\u521b\u5efa\u5b9e\u4f53 Schema",id:"\u521b\u5efa\u5b9e\u4f53-schema",children:[]},{value:"\u521b\u5efa\u6570\u636e\u8fde\u8fde\u63a5\u5ba2\u6237\u7aef",id:"\u521b\u5efa\u6570\u636e\u8fde\u8fde\u63a5\u5ba2\u6237\u7aef",children:[]},{value:"References",id:"references",children:[]}],s={toc:l};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Ent")," \u662f ",Object(c.b)("em",{parentName:"p"},"Fackbook")," \u5f00\u6e90\u7684\u4e00\u4e2a\u7b80\u5355\u6613\u7528\u7684 Database \u5b9e\u4f53\u6846\u67b6\u3002"),Object(c.b)("p",null,"\u5b83\u4f7f\u6784\u5efa\u548c\u7ef4\u62a4\u5177\u6709\u5927\u578b\u6570\u636e\u6a21\u578b\u7684\u5e94\u7528\u7a0b\u5e8f\u53d8\u5f97\u5bb9\u6613\uff0c\u5e76\u575a\u6301\u4ee5\u4e0b\u539f\u5219:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u8f7b\u677e\u5730\u5c06\u6570\u636e\u5e93\u6a21\u5f0f\u5efa\u6a21\u4e3a\u56fe\u5f62\u7ed3\u6784\u3002"),Object(c.b)("li",{parentName:"ul"},"\u5c06\u6a21\u5f0f\u5b9a\u4e49\u4e3a\u53ef\u7f16\u7a0b\u7684Go\u4ee3\u7801\u3002"),Object(c.b)("li",{parentName:"ul"},"\u57fa\u4e8e\u4ee3\u7801\u751f\u6210\u7684\u9759\u6001\u7c7b\u578b\u3002"),Object(c.b)("li",{parentName:"ul"},"\u6570\u636e\u5e93\u67e5\u8be2\u548c\u56fe\u904d\u5386\u5f88\u5bb9\u6613\u7f16\u5199\u3002"),Object(c.b)("li",{parentName:"ul"},"\u7b80\u5355\u5730\u6269\u5c55\u548c\u4f7f\u7528Go\u6a21\u677f\u81ea\u5b9a\u4e49\u3002")),Object(c.b)("h3",{id:"\u5b89\u88c5\u5de5\u5177"},"\u5b89\u88c5\u5de5\u5177"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"go get entgo.io/ent/cmd/ent\n")),Object(c.b)("h3",{id:"\u521b\u5efa\u5b9e\u4f53-schema"},"\u521b\u5efa\u5b9e\u4f53 Schema"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"ent init User\n")),Object(c.b)("p",null,"\u5c06\u4f1a\u5728 ",Object(c.b)("em",{parentName:"p"},"project/ent/schema/")," \u76ee\u5f55\u4e0b\u4e3a\u7528\u6237\u751f\u6210\u6a21\u5f0f:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-go"}),'// <project>/ent/schema/user.go\n\npackage schema\n\nimport "entgo.io/ent"\n\n// User holds the schema definition for the User entity.\ntype User struct {\n    ent.Schema\n}\n\n// Fields of the User.\nfunc (User) Fields() []ent.Field {\n    return nil\n}\n\n// Edges of the User.\nfunc (User) Edges() []ent.Edge {\n    return nil\n}\n')),Object(c.b)("p",null,"\u4e3a ",Object(c.b)("inlineCode",{parentName:"p"},"User")," \u6dfb\u52a0 ",Object(c.b)("inlineCode",{parentName:"p"},"name\u3001age")," \u4e24\u4e2a\u6570\u636e\u5e93\u5b57\u6bb5:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-go"}),'package schema\n\nimport (\n    "entgo.io/ent"\n    "entgo.io/ent/schema/field"\n)\n\n// Fields of the User.\nfunc (User) Fields() []ent.Field {\n    return []ent.Field{\n        field.Int("age").\n            Positive(),\n        field.String("name").\n            Default("unknown"),\n    }\n}\n')),Object(c.b)("p",null,"\u4ece\u9879\u76ee\u7684ent\u76ee\u5f55\u8fd0\u884cgo generate\uff0c\u5982\u4e0b\u6240\u793a:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"go generate ./ent\n")),Object(c.b)("h3",{id:"\u521b\u5efa\u6570\u636e\u8fde\u8fde\u63a5\u5ba2\u6237\u7aef"},"\u521b\u5efa\u6570\u636e\u8fde\u8fde\u63a5\u5ba2\u6237\u7aef"),Object(c.b)("p",null,"\u9996\u5148\uff0c\u521b\u5efa\u4e00\u4e2a\u65b0\u7684ent.Client\u3002\u5bf9\u4e8e\u672c\u4f8b\uff0c\u6211\u4eec\u5c06\u4f7f\u7528SQLite3\u3002"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-go"}),'package main\n\nimport (\n    "context"\n    "log"\n\n    "<project>/ent"\n\n    _ "github.com/mattn/go-sqlite3"\n)\n\nfunc main() {\n    client, err := ent.Open("sqlite3", "file:ent?mode=memory&cache=shared&_fk=1")\n    if err != nil {\n        log.Fatalf("failed opening connection to sqlite: %v", err)\n    }\n    defer client.Close()\n    // Run the auto migration tool.\n    if err := client.Schema.Create(context.Background()); err != nil {\n        log.Fatalf("failed creating schema resources: %v", err)\n    }\n}\n')),Object(c.b)("p",null,"\u7136\u540e\u8fdb\u884c\u521b\u5efa\u4e00\u4e2a ",Object(c.b)("inlineCode",{parentName:"p"},"User")," \u5c06\u4f1a\u5199\u5165\u5230\u6570\u636e\u5e93\u4e2d\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-go"}),'func CreateUser(ctx context.Context, client *ent.Client) (*ent.User, error) {\n    u, err := client.User.\n        Create().\n        SetAge(30).\n        SetName("a8m").\n        Save(ctx)\n    if err != nil {\n        return nil, fmt.Errorf("failed creating user: %v", err)\n    }\n    log.Println("user was created: ", u)\n    return u, nil\n}\n')),Object(c.b)("h3",{id:"references"},"References"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"https://entgo.io/docs/getting-started/"}),"https://entgo.io/docs/getting-started/")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/go-kratos/examples/tree/main/blog/internal/data"}),"https://github.com/go-kratos/examples/tree/main/blog/internal/data"))))}b.isMDXComponent=!0},110:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(n),d=r,m=p["".concat(o,".").concat(d)]||p[d]||u[d]||c;return n?a.a.createElement(m,i(i({ref:t},s),{},{components:n})):a.a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<c;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);