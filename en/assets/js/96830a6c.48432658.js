(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{116:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),i=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=i(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=i(n),m=r,b=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return n?o.a.createElement(b,c(c({ref:t},s),{},{components:n})):o.a.createElement(b,c({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var s=2;s<a;s++)l[s]=n[s];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},98:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return i}));var r=n(3),o=n(7),a=(n(0),n(116)),l={id:"usage",title:"Usage"},c={unversionedId:"getting-started/usage",id:"getting-started/usage",isDocsHomePage:!1,title:"Usage",description:"Installation",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/getting-started/usage.md",slug:"/getting-started/usage",permalink:"/en/docs/getting-started/usage",editUrl:"https://github.com/go-kratos/go-kratos.dev/edit/main/i18n/en/docusaurus-plugin-content-docs/current/getting-started/usage.md",version:"current",sidebar:"docs",previous:{title:"Quick Start",permalink:"/en/docs/getting-started/start"},next:{title:"Dependency Injection",permalink:"/en/docs/getting-started/wire"}},p=[{value:"Installation",id:"installation",children:[]},{value:"Tool Usage",id:"tool-usage",children:[{value:"Version",id:"version",children:[]}]},{value:"Project Creation",id:"project-creation",children:[]},{value:"Adding Proto files",id:"adding-proto-files",children:[]},{value:"Generate Proto Codes",id:"generate-proto-codes",children:[]},{value:"Generate Service Codes",id:"generate-service-codes",children:[]}],s={toc:p};function i(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"installation"},"Installation"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"go get -u github.com/go-kratos/kratos/cmd/kratos/v2@latest\n")),Object(a.b)("h2",{id:"tool-usage"},"Tool Usage"),Object(a.b)("h3",{id:"version"},"Version"),Object(a.b)("p",null,"To show the version"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"kratos -v\n")),Object(a.b)("p",null,"Output:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"kratos version v2.0.0\n")),Object(a.b)("h2",{id:"project-creation"},"Project Creation"),Object(a.b)("p",null,"To create a new project:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"kratos new helloworld\n")),Object(a.b)("p",null,"Output:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"helloworld\n|____api\n| |____helloworld\n| | |____v1\n| | | |____helloworld_grpc.pb.go\n| | | |____helloworld.proto\n| | | |____helloworld.pb.go\n| | | |____helloworld_http.pb.go\n| | |____errors\n| | | |____helloworld_errors.pb.go\n| | | |____helloworld.proto\n| | | |____helloworld.pb.go\n|____cmd\n| |____helloworld\n| | |____main.go\n|____internal\n| |____biz\n| | |____README.md\n| |____service\n| | |____README.md\n| | |____greeter.go\n| |____data\n| | |____README.md\n|____README.md\n|____Makefile\n|____LICENSE\n|____go.mod\n|____go.sum\n")),Object(a.b)("h2",{id:"adding-proto-files"},"Adding Proto files"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"kratos proto add api/helloworld/demo.proto\n")),Object(a.b)("p",null,"Output:"),Object(a.b)("p",null,"api/helloworld/demo.proto"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-protobuf"},'syntax = "proto3";\n\npackage api.helloworld;\n\noption go_package = "helloworld/api/api/helloworld;helloworld";\noption java_multiple_files = true;\noption java_package = "api.helloworld";\n\nservice Demo {\n    rpc CreateDemo (CreateDemoRequest) returns (CreateDemoReply);\n    rpc UpdateDemo (UpdateDemoRequest) returns (UpdateDemoReply);\n    rpc DeleteDemo (DeleteDemoRequest) returns (DeleteDemoReply);\n    rpc GetDemo (GetDemoRequest) returns (GetDemoReply);\n    rpc ListDemo (ListDemoRequest) returns (ListDemoReply);\n}\n\nmessage CreateDemoRequest {}\nmessage CreateDemoReply {}\n\nmessage UpdateDemoRequest {}\nmessage UpdateDemoReply {}\n\nmessage DeleteDemoRequest {}\nmessage DeleteDemoReply {}\n\nmessage GetDemoRequest {}\nmessage GetDemoReply {}\n\nmessage ListDemoRequest {}\nmessage ListDemoReply {}\n')),Object(a.b)("h2",{id:"generate-proto-codes"},"Generate Proto Codes"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"kratos proto client api/helloworld/demo.proto\n")),Object(a.b)("p",null,"Output:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"api/helloworld/demo.pb.go\napi/helloworld/demo_grpc.pb.go\napi/helloworld/demo_http.pb.go\n")),Object(a.b)("h2",{id:"generate-service-codes"},"Generate Service Codes"),Object(a.b)("p",null,"kratos can generate the bootstrap codes from the proto file."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"kratos proto server api/helloworld/demo.proto -t internal/service\n")),Object(a.b)("p",null,"Output:\ninternal/service/demo.go"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-go"},'package service\n\nimport (\n    "context"\n\n    pb "helloworld/api/helloworld"\n)\n\ntype DemoService struct {\n    pb.UnimplementedDemoServer\n}\n\nfunc NewDemoService() pb.DemoServer {\n    return &DemoService{}\n}\n\nfunc (s *DemoService) CreateDemo(ctx context.Context, req *pb.CreateDemoRequest) (*pb.CreateDemoReply, error) {\n    return &pb.CreateDemoReply{}, nil\n}\nfunc (s *DemoService) UpdateDemo(ctx context.Context, req *pb.UpdateDemoRequest) (*pb.UpdateDemoReply, error) {\n    return &pb.UpdateDemoReply{}, nil\n}\nfunc (s *DemoService) DeleteDemo(ctx context.Context, req *pb.DeleteDemoRequest) (*pb.DeleteDemoReply, error) {\n    return &pb.DeleteDemoReply{}, nil\n}\nfunc (s *DemoService) GetDemo(ctx context.Context, req *pb.GetDemoRequest) (*pb.GetDemoReply, error) {\n    return &pb.GetDemoReply{}, nil\n}\nfunc (s *DemoService) ListDemo(ctx context.Context, req *pb.ListDemoRequest) (*pb.ListDemoReply, error) {\n    return &pb.ListDemoReply{}, nil\n}\n')))}i.isMDXComponent=!0}}]);