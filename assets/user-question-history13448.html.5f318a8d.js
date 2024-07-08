import{_ as c,o as d,c as i,a,b as s,w as t,d as h,e,r}from"./app.977e81c1.js";const l={},p=h(`<h2 id="\u7528\u6237\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u7528\u6237\u95EE\u9898" aria-hidden="true">#</a> \u7528\u6237\u95EE\u9898 \uFF1A</h2><p>\u5982\u4F55\u4F7F\u7528arthas\u5206\u6790\u6162\u67E5\u8BE2</p><hr><h2 id="\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54" tabindex="-1"><a class="header-anchor" href="#\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54" aria-hidden="true">#</a> \u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A</h2><p>\u8981\u4F7F\u7528Arthas\u5206\u6790\u6162\u67E5\u8BE2\uFF0C\u6211\u4EEC\u53EF\u4EE5\u6309\u7167\u4EE5\u4E0B\u6B65\u9AA4\u64CD\u4F5C\uFF0C\u57FA\u4E8E\u5DF2\u6709\u77E5\u8BC6\u8FDB\u884C\u5206\u6790\u548C\u6307\u5BFC\uFF1A</p><h3 id="_1-\u786E\u5B9A\u6162\u67E5\u8BE2\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#_1-\u786E\u5B9A\u6162\u67E5\u8BE2\u573A\u666F" aria-hidden="true">#</a> 1. \u786E\u5B9A\u6162\u67E5\u8BE2\u573A\u666F</h3><p>\u9996\u5148\uFF0C\u4F60\u9700\u8981\u660E\u786E\u5E94\u7528\u4E2D\u54EA\u4E2A\u6216\u54EA\u4E9B\u90E8\u5206\u5B58\u5728\u6162\u67E5\u8BE2\u95EE\u9898\u3002\u8FD9\u901A\u5E38\u6D89\u53CA\u5230\u5177\u4F53\u4E1A\u52A1\u903B\u8F91\u6216\u6570\u636E\u5E93\u67E5\u8BE2\u3002\u4E3A\u4E86\u5B9A\u4F4D\u8FD9\u4E9B\u95EE\u9898\uFF0C\u4F60\u53EF\u80FD\u5DF2\u7ECF\u6709\u4E86\u4E00\u4E9B\u521D\u6B65\u7EBF\u7D22\uFF0C\u6BD4\u5982\u7528\u6237\u53CD\u9988\u3001\u65E5\u5FD7\u8BB0\u5F55\u7684\u957F\u65F6\u95F4\u54CD\u5E94\u7B49\u3002</p><h3 id="_2-\u4F7F\u7528arthas\u76D1\u63A7\u65B9\u6CD5\u6267\u884C\u65F6\u95F4" tabindex="-1"><a class="header-anchor" href="#_2-\u4F7F\u7528arthas\u76D1\u63A7\u65B9\u6CD5\u6267\u884C\u65F6\u95F4" aria-hidden="true">#</a> 2. \u4F7F\u7528Arthas\u76D1\u63A7\u65B9\u6CD5\u6267\u884C\u65F6\u95F4</h3><p>\u4E00\u65E6\u786E\u5B9A\u4E86\u7591\u4F3C\u6162\u67E5\u8BE2\u7684\u65B9\u6CD5\u6216\u670D\u52A1\uFF0C\u53EF\u4EE5\u5229\u7528Arthas\u7684<code>trace</code>\u547D\u4EE4\u6765\u76D1\u63A7\u8FD9\u4E9B\u65B9\u6CD5\u7684\u6267\u884C\u60C5\u51B5\u3002<code>trace</code>\u547D\u4EE4\u80FD\u591F\u8BA9\u4F60\u8FFD\u8E2A\u5230\u6307\u5B9A\u65B9\u6CD5\u7684\u6240\u6709\u8C03\u7528\u8DEF\u5F84\u4EE5\u53CA\u6BCF\u4E2A\u8C03\u7528\u7684\u8017\u65F6\uFF0C\u8FD9\u5BF9\u4E8E\u53D1\u73B0\u6162\u67E5\u8BE2\u70B9\u975E\u5E38\u6709\u5E2E\u52A9\u3002</p><h4 id="\u5177\u4F53\u6B65\u9AA4" tabindex="-1"><a class="header-anchor" href="#\u5177\u4F53\u6B65\u9AA4" aria-hidden="true">#</a> \u5177\u4F53\u6B65\u9AA4\uFF1A</h4><ul><li><strong>\u542F\u52A8Arthas</strong>: \u786E\u4FDDArthas\u5DF2\u7ECF\u6B63\u786E\u5B89\u88C5\u5E76\u9644\u52A0\u5230\u4E86\u76EE\u6807Java\u8FDB\u7A0B\u4E2D\u3002</li><li><strong>\u6267\u884Ctrace\u547D\u4EE4</strong>:<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>trace <span class="token punctuation">[</span>\u7C7B\u540D<span class="token punctuation">]</span> <span class="token punctuation">[</span>\u65B9\u6CD5\u540D<span class="token punctuation">]</span> <span class="token punctuation">[</span>-n <span class="token operator">&lt;</span>\u6392\u540D\u6570\u91CF<span class="token operator">&gt;</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>--skipJDKMethod <span class="token operator">&lt;</span>\u662F\u5426\u8DF3\u8FC7JDK\u65B9\u6CD5<span class="token operator">&gt;</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>--condition <span class="token operator">&lt;</span>\u8FC7\u6EE4\u6761\u4EF6<span class="token operator">&gt;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>\u4F8B\u5982\uFF0C\u5982\u679C\u4F60\u6000\u7591<code>com.example.service.UserService</code>\u7C7B\u4E2D\u7684<code>getUserInfo</code>\u65B9\u6CD5\u6267\u884C\u7F13\u6162\uFF0C\u53EF\u4EE5\u6267\u884C\uFF1A<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>trace com.example.service.UserService getUserInfo <span class="token parameter variable">-n</span> <span class="token number">10</span> <span class="token parameter variable">--skipJDKMethod</span> <span class="token boolean">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>\u8FD9\u5C06\u4F1A\u663E\u793A\u6267\u884C\u65F6\u95F4\u6700\u957F\u768410\u6B21\u8C03\u7528\u94FE\u8DEF\uFF0C\u540C\u65F6\u8DF3\u8FC7\u4E86JDK\u5185\u90E8\u7684\u65B9\u6CD5\uFF0C\u4EE5\u4FBF\u66F4\u4E13\u6CE8\u4E8E\u4F60\u7684\u4E1A\u52A1\u4EE3\u7801\u3002</li></ul><h3 id="_3-\u5206\u6790trace\u7ED3\u679C" tabindex="-1"><a class="header-anchor" href="#_3-\u5206\u6790trace\u7ED3\u679C" aria-hidden="true">#</a> 3. \u5206\u6790trace\u7ED3\u679C</h3><ul><li><strong>\u89C2\u5BDF\u8C03\u7528\u94FE\u8DEF</strong>\uFF1A\u901A\u8FC7<code>trace</code>\u547D\u4EE4\u7684\u8F93\u51FA\uFF0C\u4F60\u53EF\u4EE5\u770B\u5230\u65B9\u6CD5\u7684\u8C03\u7528\u6B21\u6570\u3001\u603B\u8017\u65F6\u3001\u5E73\u5747\u8017\u65F6\u4EE5\u53CA\u6BCF\u6B21\u8C03\u7528\u7684\u8BE6\u7EC6\u5806\u6808\u4FE1\u606F\u3002</li><li><strong>\u8BC6\u522B\u74F6\u9888</strong>\uFF1A\u67E5\u627E\u90A3\u4E9B\u5E73\u5747\u6216\u6700\u5927\u8017\u65F6\u8F83\u9AD8\u7684\u65B9\u6CD5\u8C03\u7528\uFF0C\u8FD9\u4E9B\u5F88\u53EF\u80FD\u662F\u5BFC\u81F4\u6162\u67E5\u8BE2\u7684\u6839\u6E90\u3002</li><li><strong>\u6761\u4EF6\u8FC7\u6EE4</strong>\uFF1A\u5982\u679C\u8F93\u51FA\u4FE1\u606F\u91CF\u5927\uFF0C\u53EF\u4EE5\u4F7F\u7528<code>--condition</code>\u53C2\u6570\u6DFB\u52A0\u81EA\u5B9A\u4E49\u6761\u4EF6\u6765\u8FDB\u4E00\u6B65\u7B5B\u9009\uFF0C\u6BD4\u5982\u4EC5\u8FFD\u8E2A\u7279\u5B9A\u53C2\u6570\u7684\u8C03\u7528\u3002</li></ul><h3 id="_4-\u4F18\u5316\u4E0E\u9A8C\u8BC1" tabindex="-1"><a class="header-anchor" href="#_4-\u4F18\u5316\u4E0E\u9A8C\u8BC1" aria-hidden="true">#</a> 4. \u4F18\u5316\u4E0E\u9A8C\u8BC1</h3><ul><li>\u6839\u636E<code>trace</code>\u7684\u7ED3\u679C\uFF0C\u9488\u5BF9\u6027\u5730\u4F18\u5316\u4EE3\u7801\u6216SQL\u67E5\u8BE2\uFF0C\u6BD4\u5982\u4F18\u5316\u7B97\u6CD5\u3001\u8C03\u6574\u7D22\u5F15\u3001\u51CF\u5C11\u4E0D\u5FC5\u8981\u7684\u6570\u636E\u5904\u7406\u7B49\u3002</li><li>\u4F18\u5316\u540E\uFF0C\u91CD\u65B0\u4F7F\u7528Arthas\u7684<code>trace</code>\u6216<code>watch</code>(\u76D1\u89C6\u65B9\u6CD5\u5185\u90E8\u53D8\u91CF)\u547D\u4EE4\u9A8C\u8BC1\u662F\u5426\u89E3\u51B3\u4E86\u6162\u67E5\u8BE2\u95EE\u9898\u3002</li></ul><h3 id="\u89E3\u91CA" tabindex="-1"><a class="header-anchor" href="#\u89E3\u91CA" aria-hidden="true">#</a> \u89E3\u91CA</h3><p>\u901A\u8FC7\u4E0A\u8FF0\u6B65\u9AA4\uFF0C<code>trace</code>\u547D\u4EE4\u63D0\u4F9B\u4E86\u6DF1\u5165\u65B9\u6CD5\u6267\u884C\u7EC6\u8282\u7684\u80FD\u529B\uFF0C\u5E2E\u52A9\u4F60\u5FEB\u901F\u5B9A\u4F4D\u5230\u6162\u67E5\u8BE2\u7684\u5177\u4F53\u4F4D\u7F6E\u3002\u7ED3\u5408\u5B9E\u9645\u4E1A\u52A1\u903B\u8F91\u548C\u67E5\u8BE2\u9700\u6C42\uFF0C\u8FDB\u884C\u76F8\u5E94\u7684\u4F18\u5316\u63AA\u65BD\uFF0C\u6700\u7EC8\u8FBE\u5230\u63D0\u5347\u7CFB\u7EDF\u6027\u80FD\u7684\u76EE\u7684\u3002</p><p>\u8BF7\u6CE8\u610F\uFF0C\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u8C03\u6574\u4E0A\u8FF0\u547D\u4EE4\u4E2D\u7684\u53C2\u6570\u4EE5\u9002\u5E94\u4E0D\u540C\u7684\u8BCA\u65AD\u9700\u6C42\u3002\u5982\u679C\u5728\u4F7F\u7528\u8FC7\u7A0B\u4E2D\u9047\u5230\u6743\u9650\u6216\u5176\u4ED6\u95EE\u9898\uFF0C\u8BF7\u53C2\u7167Arthas\u7684\u5B98\u65B9\u6587\u6863\u6216\u793E\u533A\u8D44\u6E90\u5BFB\u6C42\u89E3\u51B3\u65B9\u6848\u3002</p>`,18),_=e("["),u={href:"https://arthas.aliyun.com/doc/",target:"_blank",rel:"noopener noreferrer"},f=e("Arthas\u5B98\u65B9\u6587\u6863"),b=e(" \u63D0\u4F9B\u4E86\u66F4\u591A\u547D\u4EE4\u548C\u4F7F\u7528\u573A\u666F\u7684\u8BE6\u7EC6\u4ECB\u7ECD\uFF0C\u5EFA\u8BAE\u8FDB\u4E00\u6B65\u5B66\u4E60\u4EE5\u5145\u5206\u5229\u7528\u5176\u529F\u80FD\u3002]"),k=a("p",null,"\u5E0C\u671B\u4EE5\u4E0A\u6B65\u9AA4\u80FD\u5E2E\u52A9\u4F60\u6709\u6548\u5206\u6790\u5E76\u89E3\u51B3\u6162\u67E5\u8BE2\u95EE\u9898\u3002\u5982\u679C\u6709\u5176\u4ED6\u5173\u4E8EArthas\u4F7F\u7528\u7684\u7591\u95EE\uFF0C\u6216\u8005\u9700\u8981\u8FDB\u4E00\u6B65\u7684\u6280\u672F\u6307\u5BFC\uFF0C\u8BF7\u968F\u65F6\u63D0\u95EE\u3002",-1),g=e("---------------"),m=a("h2",{id:"\u53C2\u8003\u94FE\u63A5",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#\u53C2\u8003\u94FE\u63A5","aria-hidden":"true"},"#"),e(" \u53C2\u8003\u94FE\u63A5 \uFF1A")],-1),v=a("p",null,"*\u4E13\u5BB6\u7ECF\u9A8C\uFF1A\u5229\u7528Arthas\u6392\u67E5NoSuchMethodError",-1),x=a("p",null,"*\u4E13\u5BB6\u7ECF\u9A8C\uFF1AArthas \u4ECB\u7ECD",-1),A=a("p",null,"*\u4E13\u5BB6\u7ECF\u9A8C\uFF1AArthas \u5982\u4F55\u501F\u52A9arthas\u8BCA\u65ADcpu\u8FC7\u9AD8\u7684\u539F\u56E0\uFF1F",-1),J=e("---------------"),F={id:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E",tabindex:"-1"},I=a("a",{class:"header-anchor",href:"#\u7B54\u7591\u670D\u52A1\u8BF4\u660E","aria-hidden":"true"},"#",-1),D=e(),E=e("\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A"),N=e("\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86"),S=e("\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1"),w=e("\uFF0C\u5728"),y=e("\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C"),B=e("\u3002\u60A8\u4E5F\u53EF\u4EE5\u8BBF\u95EE : "),K={href:"https://answer.opensource.alibaba.com/docs/intro",target:"_blank",rel:"noopener noreferrer"},O=e("\u5168\u5C40\u4E13\u5BB6\u7B54\u7591"),U=e(" \u3002 \u54A8\u8BE2\u5176\u4ED6\u4EA7\u54C1\u7684\u7684\u95EE\u9898"),V=a("h3",{id:"\u53CD\u9988",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#\u53CD\u9988","aria-hidden":"true"},"#"),e(" \u53CD\u9988")],-1),L=e("\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A"),M={href:"https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=16067",target:"_blank",rel:"noopener noreferrer"},C=e("\u5DEE\u8BC4"),G=e("\u7ED9\u6211\u4EEC\u53CD\u9988\u3002");function P(Q,q){const o=r("ExternalLinkIcon"),n=r("font");return d(),i("div",null,[p,a("p",null,[_,a("a",u,[f,s(o)]),b]),k,s(n,{color:"#949494"},{default:t(()=>[g]),_:1}),m,v,x,A,s(n,{color:"#949494"},{default:t(()=>[J]),_:1}),a("h2",F,[I,D,s(n,{color:"#FF0000"},{default:t(()=>[E]),_:1})]),a("p",null,[N,s(n,{color:"#FF0000"},{default:t(()=>[S]),_:1}),w,s(n,{color:"#FF0000"},{default:t(()=>[y]),_:1}),B,a("a",K,[O,s(o)]),U]),V,a("p",null,[L,a("a",M,[C,s(o)]),G])])}const T=c(l,[["render",P],["__file","user-question-history13448.html.vue"]]);export{T as default};
