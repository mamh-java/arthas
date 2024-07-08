import{_ as h,o as c,c as d,a as e,b as a,w as n,e as t,d as r,r as i}from"./app.977e81c1.js";const l={},u=e("h1",{id:"faq",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#faq","aria-hidden":"true"},"#"),t(" FAQ")],-1),p={class:"custom-container tip"},m=e("p",{class:"custom-container-title"},"TIP",-1),b=t("For questions that are not in this list, please search in issues. "),_={href:"https://github.com/alibaba/arthas/issues",target:"_blank",rel:"noopener noreferrer"},f=t("https://github.com/alibaba/arthas/issues"),g=r('<h3 id="where-is-the-log-file" tabindex="-1"><a class="header-anchor" href="#where-is-the-log-file" aria-hidden="true">#</a> Where is the log file?</h3><p>Log file path: <code>~/logs/arthas/arthas.log</code></p><h3 id="telnet-connect-to-address-127-0-0-1-connection-refused" tabindex="-1"><a class="header-anchor" href="#telnet-connect-to-address-127-0-0-1-connection-refused" aria-hidden="true">#</a> telnet: connect to address 127.0.0.1: Connection refused</h3><ol><li>Check the log <code>~/logs/arthas/arthas.log</code></li><li>Check the startup parameters of <code>as.sh</code>/<code>arthas-boot.jar</code>, whether a specific <code>port</code> is specified</li><li>Use <code>netstat</code> to check the process of <code>LISTEN 3658</code> port, confirm it is a <code>java</code> process, and it is the process you want to diagnose</li><li>If the process of <code>LISTEN 3658</code> port is not a <code>java</code> process, then the <code>3658</code> port is already occupied. You need to specify other ports in the startup parameters of <code>as.sh</code>/<code>arthas-boot.jar</code>.</li><li>After confirming the process and port, try to connect with <code>telnet 127.0.0.1 3658</code></li></ol><p>Essentially, <code>arthas</code> will start a <code>tcp server</code> within the application java process, and then use <code>telnet</code> to connect to it.</p><ol><li>The port may not match</li><li>The process itself may have been suspended and cannot accept new connections</li></ol><p>If there is <code>Arthas server already bind.</code> in the Arthas log</p><ol><li>It means that the <code>Arthas server</code> has been started before, check the file descriptors opened by the target process. If it is a <code>linux</code> environment, you can go to <code>/proc/$pid/fd</code>, use <code>ls -alh | grep arthas</code> to check whether the process has loaded the <code>arthas</code> related jar package.</li><li>If not, it may be that other processes have started <code>arthas</code>, or the application has been restarted.</li></ol><h3 id="how-much-impact-does-arthas-attach-have-on-the-performance-of-the-original-process" tabindex="-1"><a class="header-anchor" href="#how-much-impact-does-arthas-attach-have-on-the-performance-of-the-original-process" aria-hidden="true">#</a> How much impact does Arthas attach have on the performance of the original process?</h3>',9),v={href:"https://github.com/alibaba/arthas/issues/44",target:"_blank",rel:"noopener noreferrer"},w=t("https://github.com/alibaba/arthas/issues/44"),k=e("h3",{id:"target-process-not-responding-or-hotspot-vm-not-loaded",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#target-process-not-responding-or-hotspot-vm-not-loaded","aria-hidden":"true"},"#"),t(" target process not responding or HotSpot VM not loaded")],-1),y=e("p",null,"com.sun.tools.attach.AttachNotSupportedException: Unable to open socket file: target process not responding or HotSpot VM not loaded",-1),x=e("li",null,"Check whether the current user and the target java process are consistent. If they are inconsistent, switch to the same user. JVM can only attach java processes under the same user.",-1),j=e("li",null,[t("Try to use "),e("code",null,"jstack -l $pid"),t(". If the process does not respond, it means that the process may freeze and fail to respond to the JVM attach signal. So Arthas based on the attach mechanism cannot work. Try to use "),e("code",null,"jmap"),t(" heapdump to analyze.")],-1),I=t("Try to attach math-game in "),C=t("quick-start"),T=t("."),A=t("For more information: "),E={href:"https://github.com/alibaba/arthas/issues/347",target:"_blank",rel:"noopener noreferrer"},V=t("https://github.com/alibaba/arthas/issues/347"),L=r(`<h3 id="can-commands-such-as-trace-watch-enhance-the-classes-in-jdk" tabindex="-1"><a class="header-anchor" href="#can-commands-such-as-trace-watch-enhance-the-classes-in-jdk" aria-hidden="true">#</a> Can commands such as trace/watch enhance the classes in jdk?</h3><p>By default, classes beginning with <code>java.</code> or the classes loaded by the <code>Bootstrap ClassLoader</code> are filtered out, but they can be turned on:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>options unsafe <span class="token boolean">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,3),S=t("See more at "),q=t("options"),F=r(`<div class="custom-container tip"><p class="custom-container-title">TIP</p><p>To support the jars appended by java.lang.instrument.Instrumentation#appendToBootstrapClassLoaderSearch need to enable unsafe.</p></div><h3 id="how-to-view-the-result-in-json-format" tabindex="-1"><a class="header-anchor" href="#how-to-view-the-result-in-json-format" aria-hidden="true">#</a> How to view the result in <code>json</code> format</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>options json-format <span class="token boolean">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,3),H=t("See more at "),M=t("options"),N=e("h3",{id:"can-arthas-trace-native-methods",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#can-arthas-trace-native-methods","aria-hidden":"true"},"#"),t(" Can arthas trace native methods")],-1),Y=e("p",null,"No.",-1),B=e("h3",{id:"can-arthas-view-the-value-of-a-variable-in-memory",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#can-arthas-view-the-value-of-a-variable-in-memory","aria-hidden":"true"},"#"),t(" Can arthas view the value of a variable in memory?")],-1),O=t("You can use "),z=e("code",null,"vmtool",-1),J=t(" command."),R=t("You can use some tricks to intercept the object with the "),U=e("code",null,"tt",-1),W=t(" command, or fetch it from a static method."),$=e("h3",{id:"how-to-filter-method-with-the-same-name",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#how-to-filter-method-with-the-same-name","aria-hidden":"true"},"#"),t(" How to filter method with the same name?")],-1),D=t("You can used all variables in "),G=t("fundamental fields in expressions"),P=t(" for the condition express to filter method with the same name, you can use the number of parameters "),Q=e("code",null,"params.length ==1",-1),K=t(",parameter type "),X=e("code",null,"params[0] instanceof java.lang.Integer",-1),Z=t(",return value type "),ee=e("code",null,"returnObj instanceof java.util.List",-1),te=t(" and so on in one or more combinations as condition express."),ae=t("You can use "),se=e("code",null,"-v",-1),oe=t(" to view the condition express result "),ne={href:"https://github.com/alibaba/arthas/issues/1348",target:"_blank",rel:"noopener noreferrer"},re=t("https://github.com/alibaba/arthas/issues/1348"),ie=t("example "),he=t("math-game"),ce=r(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">watch</span> demo.MathGame primeFactors <span class="token string">&#39;{params,returnObj,throwExp}&#39;</span> <span class="token string">&#39;params.length &gt;0 &amp;&amp; returnObj instanceof java.util.List&#39;</span> <span class="token parameter variable">-v</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="how-to-watch-or-trace-constructor" tabindex="-1"><a class="header-anchor" href="#how-to-watch-or-trace-constructor" aria-hidden="true">#</a> How to watch or trace constructor?</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">watch</span> demo.MathGame <span class="token operator">&lt;</span>init<span class="token operator">&gt;</span> <span class="token string">&#39;{params,returnObj,throwExp}&#39;</span> <span class="token parameter variable">-v</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="how-to-watch-or-trace-inner-classes" tabindex="-1"><a class="header-anchor" href="#how-to-watch-or-trace-inner-classes" aria-hidden="true">#</a> How to watch or trace inner classes?</h3><p>In the JVM specification the name of inner classes is <code>OuterClass$InnerClass</code>.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">watch</span> OuterClass<span class="token variable">$InnerClass</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="does-it-support-watch-and-trace-lambda-classes" tabindex="-1"><a class="header-anchor" href="#does-it-support-watch-and-trace-lambda-classes" aria-hidden="true">#</a> Does it support watch and trace lambda classes?</h3><p>For classes generated by lambda, will be skipped because the JVM itself does not allow enhancements to classes generated by lambda.</p>`,8),de={href:"https://github.com/alibaba/arthas/issues/1225",target:"_blank",rel:"noopener noreferrer"},le=t("https://github.com/alibaba/arthas/issues/1225"),ue=r(`<h3 id="enter-unicode-characters" tabindex="-1"><a class="header-anchor" href="#enter-unicode-characters" aria-hidden="true">#</a> Enter Unicode characters</h3><p>Convert Unicode characters to <code>\\u</code> representation:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>ognl <span class="token string">&#39;@java.lang.System@out.println(&quot;Hello \\u4e2d\\u6587&quot;)&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="java-lang-classformaterror-null-skywalking-arthas-compatible-use" tabindex="-1"><a class="header-anchor" href="#java-lang-classformaterror-null-skywalking-arthas-compatible-use" aria-hidden="true">#</a> java.lang.ClassFormatError: null, skywalking arthas compatible use</h3><p>When error log appear <code>java.lang.ClassFormatError: null</code>, it is usually modified by other bytecode tools that are not compatible with arthas modified bytecode.</p>`,5),pe=t("For example: use skywalking V8.1.0 below "),me={href:"https://github.com/alibaba/arthas/issues/1141",target:"_blank",rel:"noopener noreferrer"},be=t("cannot trace, watch classes enhanced by skywalking agent"),_e=t(", V8.1.0 or above is compatible, refer to skywalking configuration for more details. "),fe={href:"https://github.com/apache/skywalking/blob/master/docs/en/FAQ/Compatible-with-other-javaagent-bytecode-processing.md#",target:"_blank",rel:"noopener noreferrer"},ge=t("skywalking compatible with other javaagent bytecode processing"),ve=t("."),we=e("h4",{id:"class-redefinition-failed-attempted-to-change-the-schema-add-remove-fields",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#class-redefinition-failed-attempted-to-change-the-schema-add-remove-fields","aria-hidden":"true"},"#"),t(" class redefinition failed: attempted to change the schema (add/remove fields)")],-1),ke=t("Reference: "),ye={href:"https://github.com/alibaba/arthas/issues/2165",target:"_blank",rel:"noopener noreferrer"},xe=t("https://github.com/alibaba/arthas/issues/2165"),je=e("h3",{id:"can-i-use-arthas-offline",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#can-i-use-arthas-offline","aria-hidden":"true"},"#"),t(" Can I use arthas offline?")],-1),Ie=t("Yes. Just download the full size package and unzip it, refer to: "),Ce=t("Download"),Te=t("."),Ae=r('<h3 id="how-to-use-the-specified-version-of-arthas-without-using-the-automatic-upgrade-version" tabindex="-1"><a class="header-anchor" href="#how-to-use-the-specified-version-of-arthas-without-using-the-automatic-upgrade-version" aria-hidden="true">#</a> How to use the specified version of Arthas without using the automatic upgrade version?</h3><ol><li>When starting <code>as.sh</code>/<code>arthas-boot.jar</code>, you can specify it with the <code>--use-version</code> parameter.</li><li>Download the full package, unzip it, and cd to the arthas directory to start. In this case, the version in the current directory will be used.</li></ol><h3 id="attach-the-process-with-pid-1-in-docker-k8s-failed" tabindex="-1"><a class="header-anchor" href="#attach-the-process-with-pid-1-in-docker-k8s-failed" aria-hidden="true">#</a> Attach the process with pid 1 in docker/k8s failed</h3>',3),Ee=t("Reference: "),Ve={href:"https://github.com/alibaba/arthas/issues/362#issuecomment-448185416",target:"_blank",rel:"noopener noreferrer"},Le=t("https://github.com/alibaba/arthas/issues/362#issuecomment-448185416"),Se=r('<h3 id="why-is-the-new-version-of-arthas-downloaded-but-the-old-version-is-connected" tabindex="-1"><a class="header-anchor" href="#why-is-the-new-version-of-arthas-downloaded-but-the-old-version-is-connected" aria-hidden="true">#</a> Why is the new version of Arthas downloaded, but the old version is connected?</h3><p>For example, the started version of <code>as.sh/arthas-boot.jar</code> is 3.5.<em>, but after connecting, the printed arthas version is 3.4.</em>.</p><p>It may be that the target process has been diagnosed with the old version of arthas before. You can execute <code>stop</code> to stop the old version of arthas, and then reuse the new version to attach.</p><h3 id="the-spring-bean-cglib-object-is-obtained-in-the-ognl-expression-but-the-field-is-null" tabindex="-1"><a class="header-anchor" href="#the-spring-bean-cglib-object-is-obtained-in-the-ognl-expression-but-the-field-is-null" aria-hidden="true">#</a> The spring bean cglib object is obtained in the ognl expression, but the field is null</h3><p>Reference:</p>',5),qe={href:"https://github.com/alibaba/arthas/issues/1802",target:"_blank",rel:"noopener noreferrer"},Fe=t("https://github.com/alibaba/arthas/issues/1802"),He={href:"https://github.com/alibaba/arthas/issues/1424",target:"_blank",rel:"noopener noreferrer"},Me=t("https://github.com/alibaba/arthas/issues/1424");function Ne(Ye,Be){const s=i("ExternalLinkIcon"),o=i("RouterLink");return c(),d("div",null,[u,e("div",p,[m,e("p",null,[b,e("a",_,[f,a(s)])])]),g,e("p",null,[e("a",v,[w,a(s)])]),k,y,e("ol",null,[x,j,e("li",null,[I,a(o,{to:"/en/doc/quick-start.html"},{default:n(()=>[C]),_:1}),T]),e("li",null,[A,e("a",E,[V,a(s)])])]),L,e("p",null,[S,a(o,{to:"/en/doc/options.html"},{default:n(()=>[q]),_:1})]),F,e("p",null,[H,a(o,{to:"/en/doc/options.html"},{default:n(()=>[M]),_:1})]),N,Y,B,e("ol",null,[e("li",null,[O,a(o,{to:"/en/doc/vmtool.html"},{default:n(()=>[z]),_:1}),J]),e("li",null,[R,a(o,{to:"/en/doc/tt.html"},{default:n(()=>[U]),_:1}),W])]),$,e("p",null,[D,a(o,{to:"/en/doc/advice-class.html"},{default:n(()=>[G]),_:1}),P,Q,K,X,Z,ee,te]),e("p",null,[ae,se,oe,e("a",ne,[re,a(s)])]),e("p",null,[ie,a(o,{to:"/en/doc/quick-start.html"},{default:n(()=>[he]),_:1})]),ce,e("ul",null,[e("li",null,[e("a",de,[le,a(s)])])]),ue,e("p",null,[pe,e("a",me,[be,a(s)]),_e,e("a",fe,[ge,a(s)]),ve]),we,e("p",null,[ke,e("a",ye,[xe,a(s)])]),je,e("p",null,[Ie,a(o,{to:"/en/doc/download.html"},{default:n(()=>[Ce]),_:1}),Te]),Ae,e("p",null,[Ee,e("a",Ve,[Le,a(s)])]),Se,e("ul",null,[e("li",null,[e("a",qe,[Fe,a(s)])]),e("li",null,[e("a",He,[Me,a(s)])])])])}const ze=h(l,[["render",Ne],["__file","faq.html.vue"]]);export{ze as default};
