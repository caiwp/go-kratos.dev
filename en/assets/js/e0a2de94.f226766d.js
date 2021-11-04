"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5327],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(t),m=a,g=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return t?r.createElement(g,i(i({ref:n},u),{},{components:t})):r.createElement(g,i({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8389:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var r=t(3117),a=t(102),o=(t(7294),t(3905)),i=["components"],l={id:"ent",title:"Ent"},c=void 0,s={unversionedId:"guide/ent",id:"guide/ent",isDocsHomePage:!1,title:"Ent",description:"Any ORM or library is supported in Kratos project for data accessing. Please refer to the examples for integration.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/guide/04-ent.md",sourceDirName:"guide",slug:"/guide/ent",permalink:"/en/docs/guide/ent",editUrl:"https://github.com/go-kratos/go-kratos.dev/edit/main/i18n/en/docusaurus-plugin-content-docs/current/guide/04-ent.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"ent",title:"Ent"},sidebar:"docs",previous:{title:"Dependency Injection",permalink:"/en/docs/guide/wire"},next:{title:"Docker",permalink:"/en/docs/devops/docker"}},u=[{value:"Install Ent",id:"install-ent",children:[],level:3},{value:"Create Schema",id:"create-schema",children:[],level:3},{value:"Create DB Connection Client",id:"create-db-connection-client",children:[],level:3},{value:"References",id:"references",children:[],level:3}],p={toc:u};function d(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Any ORM or library is supported in Kratos project for data accessing. Please refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/go-kratos/kratos/tree/main/examples"},"examples")," for integration."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Ent")," is an easy-to-use ORM which developed by ",(0,o.kt)("em",{parentName:"p"},"Facebook"),". Here is a brief guide to use this library."),(0,o.kt)("h3",{id:"install-ent"},"Install Ent"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"go get entgo.io/ent/cmd/ent\n")),(0,o.kt)("h3",{id:"create-schema"},"Create Schema"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ent init User\n")),(0,o.kt)("p",null,"This command will generate schema in ",(0,o.kt)("inlineCode",{parentName:"p"},"project/ent/schema/")," directory."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'// <project>/ent/schema/user.go\n\npackage schema\n\nimport "entgo.io/ent"\n\n// User holds the schema definition for the User entity.\ntype User struct {\n    ent.Schema\n}\n\n// Fields of the User.\nfunc (User) Fields() []ent.Field {\n    return nil\n}\n\n// Edges of the User.\nfunc (User) Edges() []ent.Edge {\n    return nil\n}\n')),(0,o.kt)("p",null,"Add two fields ",(0,o.kt)("inlineCode",{parentName:"p"},"name\u3001age")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"User")," table."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package schema\n\nimport (\n    "entgo.io/ent"\n    "entgo.io/ent/schema/field"\n)\n\n// Fields of the User.\nfunc (User) Fields() []ent.Field {\n    return []ent.Field{\n        field.Int("age").\n            Positive(),\n        field.String("name").\n            Default("unknown"),\n    }\n}\n')),(0,o.kt)("p",null,"Run ",(0,o.kt)("inlineCode",{parentName:"p"},"go generate"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"go generate ./ent\n")),(0,o.kt)("h3",{id:"create-db-connection-client"},"Create DB Connection Client"),(0,o.kt)("p",null,"First, create a new ",(0,o.kt)("inlineCode",{parentName:"p"},"ent.Client"),". We use SQLite3 here for demonstration."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "context"\n    "log"\n\n    "<project>/ent"\n\n    _ "github.com/mattn/go-sqlite3"\n)\n\nfunc main() {\n    client, err := ent.Open("sqlite3", "file:ent?mode=memory&cache=shared&_fk=1")\n    if err != nil {\n        log.Fatalf("failed opening connection to sqlite: %v", err)\n    }\n    defer client.Close()\n    // Run the auto migration tool.\n    if err := client.Schema.Create(context.Background()); err != nil {\n        log.Fatalf("failed creating schema resources: %v", err)\n    }\n}\n')),(0,o.kt)("p",null,"To create a ",(0,o.kt)("inlineCode",{parentName:"p"},"User")," in table."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'func CreateUser(ctx context.Context, client *ent.Client) (*ent.User, error) {\n    u, err := client.User.\n        Create().\n        SetAge(30).\n        SetName("a8m").\n        Save(ctx)\n    if err != nil {\n        return nil, fmt.Errorf("failed creating user: %v", err)\n    }\n    log.Println("user was created: ", u)\n    return u, nil\n}\n')),(0,o.kt)("h3",{id:"references"},"References"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://entgo.io/docs/getting-started/"},"https://entgo.io/docs/getting-started/")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/go-kratos/examples/tree/main/blog/internal/data"},"https://github.com/go-kratos/examples/tree/main/blog/internal/data"))))}d.isMDXComponent=!0}}]);