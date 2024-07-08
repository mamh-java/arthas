import{_ as c,o as d,c as h,b as t,w as s,a as o,d as i,e,r as n}from"./app.977e81c1.js";const l={},_=i(`<h2 id="\u7528\u6237\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u7528\u6237\u95EE\u9898" aria-hidden="true">#</a> \u7528\u6237\u95EE\u9898 \uFF1A</h2><p>\u4F7F\u7528arthas\u67E5\u770B\u6210\u5458\u53D8\u91CF\u503C\u5177\u4F53\u600E\u4E48\u505A\uFF1F</p><hr><h2 id="\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54" tabindex="-1"><a class="header-anchor" href="#\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54" aria-hidden="true">#</a> \u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A</h2><p>\u8981\u4F7F\u7528Arthas\u67E5\u770B\u6210\u5458\u53D8\u91CF\u503C\uFF0C\u53EF\u4EE5\u9075\u5FAA\u4EE5\u4E0B\u6B65\u9AA4\uFF1A</p><ol><li><p><strong>\u542F\u52A8Arthas</strong><br> \u9996\u5148\uFF0C\u4F60\u9700\u8981\u542F\u52A8Arthas\u5E76\u8FDE\u63A5\u5230\u76EE\u6807Java\u8FDB\u7A0B\u3002\u5728\u547D\u4EE4\u884C\u4E2D\uFF0C\u8FDB\u5165Arthas\u7684\u5B89\u88C5\u76EE\u5F55\uFF0C\u7136\u540E\u6267\u884C<code>java -jar arthas-boot.jar</code>\u3002\u8FD9\u5C06\u5217\u51FA\u6240\u6709\u6B63\u5728\u8FD0\u884C\u7684Java\u8FDB\u7A0B\uFF0C\u4ECE\u4E2D\u9009\u62E9\u4F60\u8981\u8C03\u8BD5\u7684\u76EE\u6807\u8FDB\u7A0B\u5E76\u8F93\u5165\u5176\u5BF9\u5E94\u7684\u7F16\u53F7\u6216PID\u3002</p></li><li><p><strong>\u4F7F\u7528<code>watch</code>\u547D\u4EE4</strong><br> Arthas\u63D0\u4F9B\u4E86<code>watch</code>\u547D\u4EE4\u6765\u89C2\u5BDF\u65B9\u6CD5\u7684\u8C03\u7528\u4EE5\u53CA\u5176\u5165\u53C2\u3001\u8FD4\u56DE\u503C\u548C\u6210\u5458\u53D8\u91CF\u7684\u53D8\u5316\u3002\u5047\u8BBE\u4F60\u60F3\u89C2\u5BDF\u7C7B<code>com.example.YourClass</code>\u7684\u5B9E\u4F8B\u4E2D\u540D\u4E3A<code>yourVariable</code>\u7684\u6210\u5458\u53D8\u91CF\uFF0C\u4F60\u53EF\u4EE5\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">watch</span> com.example.YourClass yourMethod <span class="token string">&quot;{params,returnObj,this}-&gt;this.yourVariable&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8FD9\u91CC\uFF0C<code>yourMethod</code>\u662F\u8981\u76D1\u542C\u7684\u65B9\u6CD5\u540D\uFF08\u5982\u679C\u60F3\u5728\u4EFB\u4F55\u65B9\u6CD5\u8C03\u7528\u65F6\u90FD\u89C2\u5BDF\u8BE5\u53D8\u91CF\uFF0C\u53EF\u4EE5\u4F7F\u7528<code>*</code>\u4EE3\u66FF\u65B9\u6CD5\u540D\uFF09\u3002\u4E0A\u8FF0\u547D\u4EE4\u4F1A\u5728\u6BCF\u6B21<code>yourMethod</code>\u88AB\u8C03\u7528\u65F6\u6253\u5370\u51FA<code>yourVariable</code>\u7684\u503C\u3002<code>params</code>\u3001<code>returnObj</code>\u548C<code>this</code>\u5206\u522B\u4EE3\u8868\u65B9\u6CD5\u53C2\u6570\u3001\u8FD4\u56DE\u503C\u548C\u5F53\u524D\u5BF9\u8C61\u5B9E\u4F8B\u3002</p></li><li><p><strong>\u7406\u89E3\u8F93\u51FA</strong><br> \u6267\u884C\u4E0A\u8FF0\u547D\u4EE4\u540E\uFF0CArthas\u5C06\u5728\u6307\u5B9A\u7684\u65B9\u6CD5\u88AB\u8C03\u7528\u65F6\u663E\u793A\u5305\u542B<code>yourVariable</code>\u503C\u7684\u4FE1\u606F\u3002\u8FD9\u6709\u52A9\u4E8E\u4F60\u76D1\u63A7\u8BE5\u53D8\u91CF\u5728\u4E0D\u540C\u8C03\u7528\u65F6\u523B\u7684\u72B6\u6001\u53D8\u5316\uFF0C\u8FDB\u800C\u5E2E\u52A9\u4F60\u8BCA\u65AD\u95EE\u9898\u3002</p></li></ol><p><strong>\u89E3\u91CA</strong>\uFF1A</p><ul><li><strong>\u542F\u52A8Arthas</strong>\u6B65\u9AA4\u662F\u4E3A\u4E86\u5EFA\u7ACB\u4E0E\u76EE\u6807Java\u5E94\u7528\u7684\u8FDE\u63A5\uFF0C\u8FD9\u662F\u4F7F\u7528Arthas\u8FDB\u884C\u8BCA\u65AD\u7684\u524D\u63D0\u3002</li><li><strong>\u4F7F\u7528<code>watch</code>\u547D\u4EE4</strong>\u662F\u76F4\u63A5\u9488\u5BF9\u95EE\u9898\u7684\u89E3\u51B3\u65B9\u6848\uFF0C\u5B83\u5141\u8BB8\u4F60\u52A8\u6001\u5730\u89C2\u6D4B\u7279\u5B9A\u7C7B\u4E2D\u65B9\u6CD5\u8C03\u7528\u65F6\u6210\u5458\u53D8\u91CF\u7684\u503C\uFF0C\u65E0\u9700\u4FEE\u6539\u4EE3\u7801\u6216\u91CD\u542F\u5E94\u7528\u3002</li><li>\u901A\u8FC7\u89C2\u5BDF\u8F93\u51FA\uFF0C\u4F60\u53EF\u4EE5\u76F4\u63A5\u83B7\u5F97\u6210\u5458\u53D8\u91CF\u5728\u7A0B\u5E8F\u8FD0\u884C\u65F6\u7684\u5373\u65F6\u72B6\u6001\uFF0C\u8FD9\u5BF9\u4E8E\u8FFD\u8E2A\u95EE\u9898\u6E90\u5934\u6216\u9A8C\u8BC1\u4FEE\u590D\u65B9\u6848\u975E\u5E38\u6709\u5E2E\u52A9\u3002</li></ul><p>\u6CE8\u610F\uFF0C\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u8C03\u6574\u7C7B\u540D\u3001\u65B9\u6CD5\u540D\u548C\u53D8\u91CF\u540D\u4EE5\u9002\u5E94\u4F60\u7684\u8C03\u8BD5\u9700\u6C42\u3002\u5982\u679C\u9700\u8981\u66F4\u590D\u6742\u7684\u6761\u4EF6\u8FC7\u6EE4\u6216\u64CD\u4F5C\uFF0C<code>watch</code>\u547D\u4EE4\u8FD8\u652F\u6301\u66F4\u4E30\u5BCC\u7684\u8868\u8FBE\u5F0F\uFF0C\u8BE6\u7EC6\u7528\u6CD5\u53EF\u4EE5\u901A\u8FC7Arthas\u7684\u5B98\u65B9\u6587\u6863\u83B7\u53D6\u3002</p><p>\u5E0C\u671B\u4EE5\u4E0A\u6B65\u9AA4\u80FD\u5E2E\u52A9\u4F60\u6210\u529F\u4F7F\u7528Arthas\u67E5\u770B\u76EE\u6807\u6210\u5458\u53D8\u91CF\u7684\u503C\u3002\u5982\u679C\u6709\u5176\u4ED6\u5173\u4E8EArthas\u4F7F\u7528\u7684\u7591\u95EE\uFF0C\u6B22\u8FCE\u7EE7\u7EED\u63D0\u95EE\u3002</p>`,10),u=e("---------------"),p=o("h2",{id:"\u53C2\u8003\u94FE\u63A5",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#\u53C2\u8003\u94FE\u63A5","aria-hidden":"true"},"#"),e(" \u53C2\u8003\u94FE\u63A5 \uFF1A")],-1),b=o("p",null,"*\u4E13\u5BB6\u7ECF\u9A8C\uFF1AArthas \u4ECB\u7ECD",-1),f=o("p",null,"*\u4E13\u5BB6\u7ECF\u9A8C\uFF1A\u5229\u7528Arthas\u6392\u67E5NoSuchMethodError",-1),g=e("---------------"),m={id:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E",tabindex:"-1"},x=o("a",{class:"header-anchor",href:"#\u7B54\u7591\u670D\u52A1\u8BF4\u660E","aria-hidden":"true"},"#",-1),v=e(),A=e("\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A"),y=e("\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86"),k=e("\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1"),w=e("\uFF0C\u5728"),V=e("\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C"),F=e("\u3002\u60A8\u4E5F\u53EF\u4EE5\u8BBF\u95EE : "),O={href:"https://answer.opensource.alibaba.com/docs/intro",target:"_blank",rel:"noopener noreferrer"},j=e("\u5168\u5C40\u4E13\u5BB6\u7B54\u7591"),E=e(" \u3002 \u54A8\u8BE2\u5176\u4ED6\u4EA7\u54C1\u7684\u7684\u95EE\u9898"),I=o("h3",{id:"\u53CD\u9988",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#\u53CD\u9988","aria-hidden":"true"},"#"),e(" \u53CD\u9988")],-1),J=e("\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A"),N={href:"https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=16054",target:"_blank",rel:"noopener noreferrer"},B=e("\u5DEE\u8BC4"),C=e("\u7ED9\u6211\u4EEC\u53CD\u9988\u3002");function M(q,P){const a=n("font"),r=n("ExternalLinkIcon");return d(),h("div",null,[_,t(a,{color:"#949494"},{default:s(()=>[u]),_:1}),p,b,f,t(a,{color:"#949494"},{default:s(()=>[g]),_:1}),o("h2",m,[x,v,t(a,{color:"#FF0000"},{default:s(()=>[A]),_:1})]),o("p",null,[y,t(a,{color:"#FF0000"},{default:s(()=>[k]),_:1}),w,t(a,{color:"#FF0000"},{default:s(()=>[V]),_:1}),F,o("a",O,[j,t(r)]),E]),I,o("p",null,[J,o("a",N,[B,t(r)]),C])])}const G=c(l,[["render",M],["__file","user-question-history11795.html.vue"]]);export{G as default};
