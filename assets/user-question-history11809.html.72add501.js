import{_ as p,o as c,c as l,a as s,b as n,w as t,d as i,e as a,r}from"./app.977e81c1.js";const d={},h=i(`<h2 id="\u7528\u6237\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u7528\u6237\u95EE\u9898" aria-hidden="true">#</a> \u7528\u6237\u95EE\u9898 \uFF1A</h2><p>linux\u4E0B\u7684arthas \u5177\u4F53\u600E\u4E48\u7528\uFF1F\uFF08\u4F7F\u7528\u6559\u7A0B\uFF09</p><hr><h2 id="\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54" tabindex="-1"><a class="header-anchor" href="#\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54" aria-hidden="true">#</a> \u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A</h2><p>\u5728Linux\u4E0B\u4F7F\u7528Arthas\u7684\u5177\u4F53\u6559\u7A0B\u53EF\u4EE5\u6309\u7167\u4EE5\u4E0B\u6B65\u9AA4\u8FDB\u884C\uFF1A</p><p><strong>1. \u4E0B\u8F7DArthas</strong></p><p>\u63A8\u8350\u4F7F\u7528arthas-boot\u8FDB\u884C\u5B89\u88C5\uFF0C\u8FD9\u662F\u4E00\u4E2A\u4FBF\u6377\u7684\u542F\u52A8\u5668\uFF0C\u80FD\u81EA\u52A8\u5B8C\u6210\u7248\u672C\u9009\u62E9\u548C\u73AF\u5883\u68C0\u6D4B\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-O</span> https://arthas.aliyun.com/arthas-boot.jar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>2. \u8FD0\u884Carthas-boot\u5E76\u9009\u62E9\u76EE\u6807Java\u8FDB\u7A0B</strong></p><p>\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\u540E\uFF0Carthas-boot\u4F1A\u5217\u51FA\u5F53\u524D\u7CFB\u7EDF\u4E2D\u8FD0\u884C\u7684\u6240\u6709Java\u8FDB\u7A0B\u4F9B\u4F60\u9009\u62E9\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">java</span> <span class="token parameter variable">-jar</span> arthas-boot.jar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5C4F\u5E55\u4E0A\u4F1A\u663E\u793A\u5982\u4E0B\u7684\u8FDB\u7A0B\u5217\u8868\uFF08\u793A\u4F8B\uFF09\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>* [1]: 35542
  [2]: 71560 math-game.jar\uFF08\u4F8B\u5B50\uFF09
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6839\u636E\u9700\u8981\u9009\u62E9\u4E00\u4E2A\u8FDB\u7A0B\u7F16\u53F7\u5E76\u8F93\u5165\uFF0C\u4F8B\u5982\u8F93\u5165\u201C2\u201D\u6765\u9009\u62E9math-game.jar\u8FD9\u4E2A\u8FDB\u7A0B\u3002</p><p><strong>3. \u8FDE\u63A5\u6210\u529F\u5E76\u5F00\u59CB\u4F7F\u7528Arthas</strong></p><p>\u4E00\u65E6\u8FDE\u63A5\u6210\u529F\uFF0C\u4F60\u5C06\u770B\u5230\u7C7B\u4F3C\u4E8E\u4EE5\u4E0B\u7684\u65E5\u5FD7\u8F93\u51FA\uFF0C\u8868\u660EArthas\u5DF2\u7ECF\u6210\u529F\u63A5\u5165\u76EE\u6807Java\u5E94\u7528\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>INFO<span class="token punctuation">]</span> Try to attach process <span class="token number">71560</span>
<span class="token punctuation">[</span>INFO<span class="token punctuation">]</span> Attach process <span class="token number">71560</span> success.
<span class="token punctuation">[</span>INFO<span class="token punctuation">]</span> arthas-client connect <span class="token number">127.0</span>.0.1 <span class="token number">3658</span>
  ,---.  ,------. ,--------.,--.  ,--.  ,---.   ,---.
 /  O  <span class="token punctuation">\\</span> <span class="token operator">|</span>  .--. <span class="token string">&#39;&#39;</span>--.  .--<span class="token string">&#39;|  &#39;</span>--<span class="token string">&#39;  | /  O  \\ &#39;</span>   .-<span class="token string">&#39;
|  .-.  ||  &#39;</span>--<span class="token string">&#39;.&#39;</span>   <span class="token operator">|</span>  <span class="token operator">|</span>   <span class="token operator">|</span>  .--.  <span class="token operator">||</span>  .-.  <span class="token operator">|</span><span class="token variable"><span class="token variable">\`</span><span class="token builtin class-name">.</span>  <span class="token variable">\`</span></span>-.
<span class="token operator">|</span>  <span class="token operator">|</span> <span class="token operator">|</span>  <span class="token operator">||</span>  <span class="token operator">|</span><span class="token punctuation">\\</span>  <span class="token punctuation">\\</span>    <span class="token operator">|</span>  <span class="token operator">|</span>   <span class="token operator">|</span>  <span class="token operator">|</span>  <span class="token operator">|</span>  <span class="token operator">||</span>  <span class="token operator">|</span> <span class="token operator">|</span>  <span class="token operator">|</span>.-<span class="token string">&#39;    |
\`--&#39;</span> <span class="token variable"><span class="token variable">\`</span>--&#39;<span class="token variable">\`</span></span>--<span class="token string">&#39; &#39;</span>--<span class="token string">&#39;   \`--&#39;</span>   <span class="token variable"><span class="token variable">\`</span>--&#39;  <span class="token variable">\`</span></span>--<span class="token string">&#39;\`--&#39;</span> <span class="token variable"><span class="token variable">\`</span>--&#39;<span class="token variable">\`</span></span>-----&#39;


wiki: https://arthas.aliyun.com/doc
version: <span class="token number">3.0</span>.5.20181127201536
pid: <span class="token number">71560</span>
time: <span class="token number">2018</span>-11-28 <span class="token number">19</span>:16:24
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>4. \u4F7F\u7528Arthas\u547D\u4EE4</strong></p><p>\u73B0\u5728\u4F60\u53EF\u4EE5\u5F00\u59CB\u4F7F\u7528Arthas\u63D0\u4F9B\u7684\u4E30\u5BCC\u529F\u80FD\u4E86\u3002\u6BD4\u5982\u67E5\u770B\u5F53\u524D\u5E94\u7528\u7684\u5B9E\u65F6\u4FE1\u606F\u9762\u677F\uFF0C\u53EA\u9700\u8F93\u5165\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>dashboard
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8FD9\u4F1A\u5C55\u793A\u51FA\u5305\u62ECJVM\u4FE1\u606F\u3001\u7EBF\u7A0B\u5806\u6808\u3001\u5185\u5B58\u72B6\u51B5\u7B49\u5728\u5185\u7684\u5173\u952E\u6570\u636E\u3002</p><p><strong>5. \u63A2\u7D22\u66F4\u591A\u529F\u80FD</strong></p><p>Arthas\u63D0\u4F9B\u4E86\u8BF8\u5982<code>trace</code>\u3001<code>watch</code>\u3001<code>monitor</code>\u3001<code>heapdump</code>\u7B49\u591A\u79CD\u547D\u4EE4\uFF0C\u5206\u522B\u7528\u4E8E\u65B9\u6CD5\u8FFD\u8E2A\u3001\u6761\u4EF6\u65AD\u70B9\u3001\u6027\u80FD\u76D1\u89C6\u53CA\u5806\u5185\u5B58dump\u7B49\u3002\u8BE6\u7EC6\u547D\u4EE4\u5217\u8868\u548C\u4F7F\u7528\u65B9\u6CD5\u53EF\u4EE5\u901A\u8FC7\u8BBF\u95EE\u5176\u5B98\u65B9\u6587\u6863\u83B7\u53D6\uFF1A</p>`,23),u={href:"https://arthas.aliyun.com/doc/arthas-tutorials.html?language=cn",target:"_blank",rel:"noopener noreferrer"},v=a("Arthas\u5B98\u65B9\u6559\u7A0B"),_=s("p",null,[s("strong",null,"\u89E3\u91CA\u8BF4\u660E\uFF1A")],-1),b=s("p",null,"\u4EE5\u4E0A\u6B65\u9AA4\u6307\u5BFC\u4F60\u5728Linux\u73AF\u5883\u4E0B\u5982\u4F55\u5FEB\u901F\u90E8\u7F72\u5E76\u5F00\u59CB\u4F7F\u7528Arthas\u3002Arthas\u662F\u4E00\u4E2A\u5F3A\u5927\u7684Java\u8BCA\u65AD\u5DE5\u5177\uFF0C\u5B83\u80FD\u591F\u5E2E\u52A9\u4F60\u65E0\u9700\u91CD\u542F\u5E94\u7528\u5373\u53EF\u8FDB\u884C\u95EE\u9898\u8BCA\u65AD\u3001\u6027\u80FD\u76D1\u63A7\u7B49\u64CD\u4F5C\uFF0C\u6781\u5927\u5730\u63D0\u9AD8\u4E86\u5F00\u53D1\u548C\u8FD0\u7EF4\u6548\u7387\u3002\u901A\u8FC7\u8DDF\u968F\u4E0A\u8FF0\u6B65\u9AA4\uFF0C\u4F60\u53EF\u4EE5\u8F7B\u677E\u5730\u63A5\u5165Arthas\u5E76\u63A2\u7D22\u5176\u5F3A\u5927\u529F\u80FD\uFF0C\u4E3A\u4F60\u7684Java\u5E94\u7528\u4FDD\u9A7E\u62A4\u822A\u3002",-1),k=a("---------------"),m=s("h2",{id:"\u53C2\u8003\u94FE\u63A5",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u53C2\u8003\u94FE\u63A5","aria-hidden":"true"},"#"),a(" \u53C2\u8003\u94FE\u63A5 \uFF1A")],-1),g=s("p",null,"*\u4E13\u5BB6\u7ECF\u9A8C\uFF1AArthas \u5B98\u65B9\u6559\u7A0B",-1),f=s("p",null,"*\u4E13\u5BB6\u7ECF\u9A8C\uFF1AArthas \u4ECB\u7ECD",-1),x=s("p",null,"*\u4E13\u5BB6\u7ECF\u9A8C\uFF1AArthas \u5FEB\u901F\u542F\u52A8",-1),A=a("---------------"),O={id:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E",tabindex:"-1"},F=s("a",{class:"header-anchor",href:"#\u7B54\u7591\u670D\u52A1\u8BF4\u660E","aria-hidden":"true"},"#",-1),J=a(),y=a("\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A"),I=a("\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86"),N=a("\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1"),j=a("\uFF0C\u5728"),w=a("\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C"),V=a("\u3002\u60A8\u4E5F\u53EF\u4EE5\u8BBF\u95EE : "),B={href:"https://answer.opensource.alibaba.com/docs/intro",target:"_blank",rel:"noopener noreferrer"},E=a("\u5168\u5C40\u4E13\u5BB6\u7B54\u7591"),L=a(" \u3002 \u54A8\u8BE2\u5176\u4ED6\u4EA7\u54C1\u7684\u7684\u95EE\u9898"),C=s("h3",{id:"\u53CD\u9988",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u53CD\u9988","aria-hidden":"true"},"#"),a(" \u53CD\u9988")],-1),G=a("\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A"),P={href:"https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=16056",target:"_blank",rel:"noopener noreferrer"},T=a("\u5DEE\u8BC4"),q=a("\u7ED9\u6211\u4EEC\u53CD\u9988\u3002");function D(H,M){const o=r("ExternalLinkIcon"),e=r("font");return c(),l("div",null,[h,s("ul",null,[s("li",null,[s("a",u,[v,n(o)])])]),_,b,n(e,{color:"#949494"},{default:t(()=>[k]),_:1}),m,g,f,x,n(e,{color:"#949494"},{default:t(()=>[A]),_:1}),s("h2",O,[F,J,n(e,{color:"#FF0000"},{default:t(()=>[y]),_:1})]),s("p",null,[I,n(e,{color:"#FF0000"},{default:t(()=>[N]),_:1}),j,n(e,{color:"#FF0000"},{default:t(()=>[w]),_:1}),V,s("a",B,[E,n(o)]),L]),C,s("p",null,[G,s("a",P,[T,n(o)]),q])])}const S=p(d,[["render",D],["__file","user-question-history11809.html.vue"]]);export{S as default};
