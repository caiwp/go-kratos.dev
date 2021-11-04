"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9644],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return h}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):d(d({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=s(r),h=o,v=u["".concat(l,".").concat(h)]||u[h]||p[h]||i;return r?n.createElement(v,d(d({ref:t},c),{},{components:r})):n.createElement(v,d({ref:t},c))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,d=new Array(i);d[0]=u;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,d[1]=a;for(var s=2;s<i;s++)d[s]=r[s];return n.createElement.apply(null,d)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9030:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var n=r(3117),o=r(102),i=(r(7294),r(3905)),d=["components"],a={id:"http",title:"HTTP",keywords:["Go","Kratos","Toolkit","Framework","Microservices","Protobuf","gRPC","HTTP"]},l=void 0,s={unversionedId:"component/transport/http",id:"component/transport/http",isDocsHomePage:!1,title:"HTTP",description:"Transporter/http is based on the gorilla/mux HTTP routing framework to implement Transporter to register http to kratos.Server().",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/component/transport/02-http.md",sourceDirName:"component/transport",slug:"/component/transport/http",permalink:"/en/docs/component/transport/http",editUrl:"https://github.com/go-kratos/go-kratos.dev/edit/main/i18n/en/docusaurus-plugin-content-docs/current/component/transport/02-http.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"http",title:"HTTP",keywords:["Go","Kratos","Toolkit","Framework","Microservices","Protobuf","gRPC","HTTP"]},sidebar:"docs",previous:{title:"Overview",permalink:"/en/docs/component/transport/overview"},next:{title:"gRPC",permalink:"/en/docs/component/transport/grpc"}},c=[{value:"Server",id:"server",children:[{value:"Configuration",id:"configuration",children:[{value:"<code>Network(network string) ServerOption</code>",id:"networknetwork-string-serveroption",children:[],level:4},{value:"<code>Address(addr string) ServerOption</code>",id:"addressaddr-string-serveroption",children:[],level:4},{value:"<code>Timeout(timeout time.Duration) ServerOption</code>",id:"timeouttimeout-timeduration-serveroption",children:[],level:4},{value:"<code>Logger(logger log.Logger) ServerOption</code>",id:"loggerlogger-loglogger-serveroption",children:[],level:4},{value:"<code>Middleware(m ...middleware.Middleware) ServerOption</code>",id:"middlewarem-middlewaremiddleware-serveroption",children:[],level:4},{value:"<code>Filter(filters ...FilterFunc) ServerOption</code>",id:"filterfilters-filterfunc-serveroption",children:[],level:4},{value:"<code>RequestDecoder(dec DecodeRequestFunc) ServerOption</code>",id:"requestdecoderdec-decoderequestfunc-serveroption",children:[],level:4},{value:"<code>ResponseEncoder(en EncodeResponseFunc) ServerOption</code>",id:"responseencoderen-encoderesponsefunc-serveroption",children:[],level:4},{value:"<code>ErrorEncoder(en EncodeErrorFunc) ServerOption</code>",id:"errorencoderen-encodeerrorfunc-serveroption",children:[],level:4}],level:3},{value:"Start Server",id:"start-server",children:[{value:"<code>NewServer(opts ...ServerOption) *Server </code>",id:"newserveropts-serveroption-server-",children:[],level:4},{value:"Use kratos middleware in HTTP server",id:"use-kratos-middleware-in-http-server",children:[],level:4},{value:"Handling http requests in middleware",id:"handling-http-requests-in-middleware",children:[],level:4}],level:3},{value:"Server Router",id:"server-router",children:[{value:"<code>func (s *Server) Route(prefix string, filters ...FilterFunc) *Router</code>",id:"func-s-server-routeprefix-string-filters-filterfunc-router",children:[],level:4},{value:"<code>func (s *Server) Handle(path string, h http.Handler)</code>",id:"func-s-server-handlepath-string-h-httphandler",children:[],level:4},{value:"<code>func (s *Server) HandlePrefix(prefix string, h http.Handler)</code>",id:"func-s-server-handleprefixprefix-string-h-httphandler",children:[],level:4},{value:"<code>func (s *Server) ServeHTTP(res http.ResponseWriter, req *http.Request)</code>",id:"func-s-server-servehttpres-httpresponsewriter-req-httprequest",children:[],level:4}],level:3}],level:2},{value:"Client",id:"client",children:[{value:"Configuration",id:"configuration-1",children:[{value:"<code>WithTransport(trans http.RoundTripper) ClientOption</code>",id:"withtransporttrans-httproundtripper-clientoption",children:[],level:4},{value:"<code>WithTimeout(d time.Duration) ClientOption</code>",id:"withtimeoutd-timeduration-clientoption",children:[],level:4},{value:"<code>WithUserAgent(ua string) ClientOption</code>",id:"withuseragentua-string-clientoption",children:[],level:4},{value:"<code>WithMiddleware(m ...middleware.Middleware) ClientOption</code>",id:"withmiddlewarem-middlewaremiddleware-clientoption",children:[],level:4},{value:"<code>WithEndpoint(endpoint string) ClientOption</code>",id:"withendpointendpoint-string-clientoption",children:[],level:4},{value:"<code>WithDiscovery(d registry.Discovery) ClientOption</code>",id:"withdiscoveryd-registrydiscovery-clientoption",children:[],level:4},{value:"<code>WithRequestEncoder(encoder EncodeRequestFunc) ClientOption</code>",id:"withrequestencoderencoder-encoderequestfunc-clientoption",children:[],level:4},{value:"<code>WithResponseDecoder(decoder DecodeResponseFunc) ClientOption </code>",id:"withresponsedecoderdecoder-decoderesponsefunc-clientoption-",children:[],level:4},{value:"<code>WithErrorDecoder(errorDecoder DecodeErrorFunc) ClientOption</code>",id:"witherrordecodererrordecoder-decodeerrorfunc-clientoption",children:[],level:4},{value:"<code>WithBalancer(b balancer.Balancer) ClientOption</code>",id:"withbalancerb-balancerbalancer-clientoption",children:[],level:4},{value:"<code>WithBlock() ClientOption</code>",id:"withblock-clientoption",children:[],level:4}],level:3},{value:"Client usage",id:"client-usage",children:[{value:"Create a client connection",id:"create-a-client-connection",children:[],level:4},{value:"Use middleware",id:"use-middleware",children:[],level:4},{value:"Use service discovery",id:"use-service-discovery",children:[],level:4}],level:3}],level:2}],p={toc:c};function u(e){var t=e.components,r=(0,o.Z)(e,d);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Transporter/http is based on the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/gorilla/mux"},"gorilla/mux")," HTTP routing framework to implement ",(0,i.kt)("inlineCode",{parentName:"p"},"Transporter")," to register http to ",(0,i.kt)("inlineCode",{parentName:"p"},"kratos.Server()"),"."),(0,i.kt)("h2",{id:"server"},"Server"),(0,i.kt)("h3",{id:"configuration"},"Configuration"),(0,i.kt)("h4",{id:"networknetwork-string-serveroption"},(0,i.kt)("inlineCode",{parentName:"h4"},"Network(network string) ServerOption")),(0,i.kt)("p",null,"Configure the network protocol of the server, such as tcp"),(0,i.kt)("h4",{id:"addressaddr-string-serveroption"},(0,i.kt)("inlineCode",{parentName:"h4"},"Address(addr string) ServerOption")),(0,i.kt)("p",null,"Configure the server listening address"),(0,i.kt)("h4",{id:"timeouttimeout-timeduration-serveroption"},(0,i.kt)("inlineCode",{parentName:"h4"},"Timeout(timeout time.Duration) ServerOption")),(0,i.kt)("p",null,"Configure server timeout settings"),(0,i.kt)("h4",{id:"loggerlogger-loglogger-serveroption"},(0,i.kt)("inlineCode",{parentName:"h4"},"Logger(logger log.Logger) ServerOption")),(0,i.kt)("p",null,"Configure log which used in http server"),(0,i.kt)("h4",{id:"middlewarem-middlewaremiddleware-serveroption"},(0,i.kt)("inlineCode",{parentName:"h4"},"Middleware(m ...middleware.Middleware) ServerOption")),(0,i.kt)("p",null,"Configure the kratos service middleware on the server side"),(0,i.kt)("h4",{id:"filterfilters-filterfunc-serveroption"},(0,i.kt)("inlineCode",{parentName:"h4"},"Filter(filters ...FilterFunc) ServerOption")),(0,i.kt)("p",null,"Configure the server-side kratos global HTTP native Fitler, the execution order of this Filter is before the Service middleware"),(0,i.kt)("h4",{id:"requestdecoderdec-decoderequestfunc-serveroption"},(0,i.kt)("inlineCode",{parentName:"h4"},"RequestDecoder(dec DecodeRequestFunc) ServerOption")),(0,i.kt)("p",null,"Configure the HTTP Request Decode method of the Kratos server to parse the Request Body into a user-defined pb structure\nLet's see how the default RequestDecoder in kratos is implemented:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'func DefaultRequestDecoder(r *http.Request, v interface{}) error {\n  // Extract the corresponding decoder from the Content-Type of the Request Header\n  codec, ok := CodecForRequest(r, "Content-Type")\n  // If the corresponding decoder cannot be found, an error will be reported at this time\nif !ok {\nreturn errors.BadRequest("CODEC", r.Header.Get("Content-Type"))\n}\ndata, err := ioutil.ReadAll(r.Body)\nif err != nil {\nreturn errors.BadRequest("CODEC", err.Error())\n}\nif err = codec.Unmarshal(data, v); err != nil {\nreturn errors.BadRequest("CODEC", err.Error())\n}\nreturn nil\n}\n')),(0,i.kt)("p",null,"Then if we want to extend or replace the parsing implementation corresponding to Content-Type, we can use http.RequestDecoder() to replace Kratos\u2019s default RequestDecoder,\nOr it can be extended by registering or overwriting a codec corresponding to a Content-Type in encoding"),(0,i.kt)("h4",{id:"responseencoderen-encoderesponsefunc-serveroption"},(0,i.kt)("inlineCode",{parentName:"h4"},"ResponseEncoder(en EncodeResponseFunc) ServerOption")),(0,i.kt)("p",null,"Configure the HTTP Response Encode method of the Kratos server to serialize the reply structure in the user pb definition and write it into the Response Body\nLet's see how the default ResponseEncoder in kratos is implemented:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'func DefaultResponseEncoder(w http.ResponseWriter, r *http.Request, v interface{}) error {\n  // Extract the corresponding encoder from the Accept of Request Header\n  // If not found, ignore the error and use the default json encoder\ncodec, _ := CodecForRequest(r, "Accept")\ndata, err := codec.Marshal(v)\nif err != nil {\nreturn err\n  }\n  // Write the scheme of the encoder in the Response Header\nw.Header().Set("Content-Type", httputil.ContentType(codec.Name()))\nw.Write(data)\nreturn nil\n}\n')),(0,i.kt)("p",null,"Then if we want to extend or replace the serialization implementation corresponding to Accept, we can use http.ResponseEncoder() to replace the default ResponseEncoder of Kratos,\nOr it can be extended by registering or overwriting a codec corresponding to Accept in encoding"),(0,i.kt)("h4",{id:"errorencoderen-encodeerrorfunc-serveroption"},(0,i.kt)("inlineCode",{parentName:"h4"},"ErrorEncoder(en EncodeErrorFunc) ServerOption")),(0,i.kt)("p",null,"Configure the HTTP Error Encode method of the Kratos server to serialize the error thrown by the business and write it into the Response Body, and set the HTTP Status Code\nLet's see how the default ErrorEncoder in kratos is implemented:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'func DefaultErrorEncoder(w http.ResponseWriter, r *http.Request, err error) {\n  // Get error and convert it into kratos Error entity\n  se := errors.FromError(err)\n  // Extract the corresponding encoder from the Accept of Request Header\ncodec, _ := CodecForRequest(r, "Accept")\nbody, err := codec.Marshal(se)\nif err != nil {\nw.WriteHeader(http.StatusInternalServerError)\nreturn\n}\n  w.Header().Set("Content-Type", httputil.ContentType(codec.Name()))\n  // Set HTTP Status Code\nw.WriteHeader(int(se.Code))\nw.Write(body)\n}\n')),(0,i.kt)("h3",{id:"start-server"},"Start Server"),(0,i.kt)("h4",{id:"newserveropts-serveroption-server-"},(0,i.kt)("inlineCode",{parentName:"h4"},"NewServer(opts ...ServerOption) *Server ")),(0,i.kt)("p",null,"Pass in opts configuration and start HTTP Server"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'hs := http.NewServer()\napp := kratos.New(\nkratos.Name("kratos"),\nkratos.Version("v1.0.0"),\nkratos.Server(hs),\n)\n')),(0,i.kt)("h4",{id:"use-kratos-middleware-in-http-server"},"Use kratos middleware in HTTP server"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'hs := http.NewServer(\nhttp.Address(":8000"),\nhttp.Middleware(\nlogging.Server(),\n),\n)\n')),(0,i.kt)("h4",{id:"handling-http-requests-in-middleware"},"Handling http requests in middleware"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"if tr, ok := transport.FromServerContext(ctx); ok {\nkind = tr.Kind().String()\noperation = tr.Operation()\n// Assert that HTTP transport can get special information\nif ht,ok := tr.(*http.Tranport);ok{\nfmt.Println(ht.Request())\n}\n}\n")),(0,i.kt)("h3",{id:"server-router"},"Server Router"),(0,i.kt)("h4",{id:"func-s-server-routeprefix-string-filters-filterfunc-router"},(0,i.kt)("inlineCode",{parentName:"h4"},"func (s *Server) Route(prefix string, filters ...FilterFunc) *Router")),(0,i.kt)("p",null,"Create a new HTTP Server Router, which can pass Kraots' HTTP Filter interceptor at the same time\nLet's look at the usage:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'r := s.Route("/v1")\nr.GET("/helloworld/{name}", _Greeter_SayHello0_HTTP_Handler(srv))\n')),(0,i.kt)("h4",{id:"func-s-server-handlepath-string-h-httphandler"},(0,i.kt)("inlineCode",{parentName:"h4"},"func (s *Server) Handle(path string, h http.Handler)")),(0,i.kt)("p",null,"Add the path to the route and use the standard HTTP Handler to handle it"),(0,i.kt)("h4",{id:"func-s-server-handleprefixprefix-string-h-httphandler"},(0,i.kt)("inlineCode",{parentName:"h4"},"func (s *Server) HandlePrefix(prefix string, h http.Handler)")),(0,i.kt)("p",null,"The prefix matching method adds the prefix to the route and uses the standard HTTP Handler to handle it"),(0,i.kt)("h4",{id:"func-s-server-servehttpres-httpresponsewriter-req-httprequest"},(0,i.kt)("inlineCode",{parentName:"h4"},"func (s *Server) ServeHTTP(res http.ResponseWriter, req *http.Request)")),(0,i.kt)("p",null,"Implemented the HTTP Handler interface of the standard library"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Reference for other routing usage methods: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/go-kratos/kratos/tree/main/examples/http/middlewares"},"https://github.com/go-kratos/kratos/tree/main/examples/http/middlewares"))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Use ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/gin-gonic/gin"},"gin")," framework in Kratos HTTP: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/go-kratos/kratos/blob/main/examples/http/gin/main.go"},"https://github.com/go-kratos/kratos/blob/main/examples/http/gin/main.go"))),(0,i.kt)("h2",{id:"client"},"Client"),(0,i.kt)("h3",{id:"configuration-1"},"Configuration"),(0,i.kt)("h4",{id:"withtransporttrans-httproundtripper-clientoption"},(0,i.kt)("inlineCode",{parentName:"h4"},"WithTransport(trans http.RoundTripper) ClientOption")),(0,i.kt)("p",null,"Configure the client's HTTP RoundTripper"),(0,i.kt)("h4",{id:"withtimeoutd-timeduration-clientoption"},(0,i.kt)("inlineCode",{parentName:"h4"},"WithTimeout(d time.Duration) ClientOption")),(0,i.kt)("p",null,"Configure the default timeout time of the client request, if there is a link timeout, the link timeout time is preferred"),(0,i.kt)("h4",{id:"withuseragentua-string-clientoption"},(0,i.kt)("inlineCode",{parentName:"h4"},"WithUserAgent(ua string) ClientOption")),(0,i.kt)("p",null,"Configure the default User-Agent of the client"),(0,i.kt)("h4",{id:"withmiddlewarem-middlewaremiddleware-clientoption"},(0,i.kt)("inlineCode",{parentName:"h4"},"WithMiddleware(m ...middleware.Middleware) ClientOption")),(0,i.kt)("p",null,"Configure the kratos client middleware used by the client"),(0,i.kt)("h4",{id:"withendpointendpoint-string-clientoption"},(0,i.kt)("inlineCode",{parentName:"h4"},"WithEndpoint(endpoint string) ClientOption")),(0,i.kt)("p",null,"Configure the peer connection address used by the client, if you do not use service discovery, it is ip:port, if you use service discovery, the format is discovery://\\<authority",">","/\\<serviceName",">",", here\\<authority",">"," You can fill in the blanks by default"),(0,i.kt)("h4",{id:"withdiscoveryd-registrydiscovery-clientoption"},(0,i.kt)("inlineCode",{parentName:"h4"},"WithDiscovery(d registry.Discovery) ClientOption")),(0,i.kt)("p",null,"Configure service discovery used by the client"),(0,i.kt)("h4",{id:"withrequestencoderencoder-encoderequestfunc-clientoption"},(0,i.kt)("inlineCode",{parentName:"h4"},"WithRequestEncoder(encoder EncodeRequestFunc) ClientOption")),(0,i.kt)("p",null,"Configure the HTTP Request Encode method of the client to serialize the user-defined pb structure to the Request Body\nLet's look at the default encoder:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"func DefaultRequestEncoder(ctx context.Context, contentType string, in interface{}) ([]byte, error) {\n// Obtain the encoder type through the externally configured contentType\nname := httputil.ContentSubtype(contentType)\n// Get the actual encoder\nbody, err := encoding.GetCodec(name).Marshal(in)\nif err != nil {\nreturn nil, err\n}\nreturn body, err\n}\n")),(0,i.kt)("h4",{id:"withresponsedecoderdecoder-decoderesponsefunc-clientoption-"},(0,i.kt)("inlineCode",{parentName:"h4"},"WithResponseDecoder(decoder DecodeResponseFunc) ClientOption ")),(0,i.kt)("p",null,"Configure the HTTP Response Decode method of the client to parse the Response Body into a user-defined pb structure\nLet's see how the default decoder in kratos is implemented:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"func DefaultResponseDecoder(ctx context.Context, res *http.Response, v interface{}) error {\ndefer res.Body.Close()\ndata, err := ioutil.ReadAll(res.Body)\nif err != nil {\nreturn err\n}\n// Here you get the corresponding decoder according to the Content-Type in the Response Header\n// Then proceed to Unmarshal\nreturn CodecForResponse(res).Unmarshal(data, v)\n}\n")),(0,i.kt)("h4",{id:"witherrordecodererrordecoder-decodeerrorfunc-clientoption"},(0,i.kt)("inlineCode",{parentName:"h4"},"WithErrorDecoder(errorDecoder DecodeErrorFunc) ClientOption")),(0,i.kt)("p",null,"Configure the client's Error parsing method\nLet's take a look at how the default error decoder in kratos is implemented:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"func DefaultErrorDecoder(ctx context.Context, res *http.Response) error {\n// HTTP Status Code is the highest priority\nif res.StatusCode >= 200 && res.StatusCode <= 299 {\nreturn nil\n}\ndefer res.Body.Close()\ndata, err := ioutil.ReadAll(res.Body)\nif err == nil {\ne := new(errors.Error)\n// Here you get the corresponding response decoder according to the Content-Type in the Response Header\n// Then parse out the main content of the error\nif err = CodecForResponse(res).Unmarshal(data, e); err == nil {\n// HTTP Status Code is the highest priority\ne.Code = int32(res.StatusCode)\nreturn e\n}\n}\n// If no valid Response Body is returned, the HTTP Status Code shall prevail\nreturn errors.Errorf(res.StatusCode, errors.UnknownReason, err.Error())\n}\n")),(0,i.kt)("h4",{id:"withbalancerb-balancerbalancer-clientoption"},(0,i.kt)("inlineCode",{parentName:"h4"},"WithBalancer(b balancer.Balancer) ClientOption")),(0,i.kt)("p",null,"Configure the client's load balancing strategy"),(0,i.kt)("h4",{id:"withblock-clientoption"},(0,i.kt)("inlineCode",{parentName:"h4"},"WithBlock() ClientOption")),(0,i.kt)("p",null,"Configure the dial policy of the client to be blocking (it will not return until the service discovers the node), and the default is asynchronous and non-blocking"),(0,i.kt)("h3",{id:"client-usage"},"Client usage"),(0,i.kt)("h4",{id:"create-a-client-connection"},"Create a client connection"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'conn, err := http.NewClient(\ncontext.Background(),\nhttp.WithEndpoint("127.0.0.1:8000"),\n)\n')),(0,i.kt)("h4",{id:"use-middleware"},"Use middleware"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'conn, err := http.NewClient(\ncontext.Background(),\nhttp.WithEndpoint("127.0.0.1:9000"),\n  http.WithMiddleware(\nrecovery.Recovery(),\n),\n)\n')),(0,i.kt)("h4",{id:"use-service-discovery"},"Use service discovery"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'conn, err := http.NewClient(\ncontext.Background(),\nhttp.WithEndpoint("discovery:///helloworld"),\nhttp.WithDiscovery(r),\n)\n')))}u.isMDXComponent=!0}}]);