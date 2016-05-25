/*!
 * present 0.0.1 (2016-05-24, 19:33)
 */
!function(a,b){"function"==typeof define&&define.amd?(a.marked=require("./marked"),a.RevealMarkdown=b(a.marked),a.RevealMarkdown.initialize()):"object"==typeof exports?module.exports=b(require("./marked")):(a.RevealMarkdown=b(a.marked),a.RevealMarkdown.initialize())}(this,function(a){function b(a){var b=a.querySelector("script"),c=(b||a).textContent;c=c.replace(new RegExp(p,"g"),"</script>");var d=c.match(/^\n?(\s*)/)[1].length,e=c.match(/^\n?(\t*)/)[1].length;return e>0?c=c.replace(new RegExp("\\n?\\t{"+e+"}","g"),"\n"):d>1&&(c=c.replace(new RegExp("\\n? {"+d+"}","g"),"\n")),c}function c(a){for(var b=a.attributes,c=[],d=0,e=b.length;e>d;d++){var f=b[d].name,g=b[d].value;/data\-(markdown|separator|vertical|notes)/gi.test(f)||(g?c.push(f+'="'+g+'"'):c.push(f))}return c.join(" ")}function d(a){return a=a||{},a.separator=a.separator||l,a.notesSeparator=a.notesSeparator||m,a.attributes=a.attributes||"",a}function e(b,c){c=d(c);var e=b.split(new RegExp(c.notesSeparator,"mgi"));return 2===e.length&&(b=e[0]+'<aside class="notes">'+a(e[1].trim())+"</aside>"),b=b.replace(/<\/script>/g,p),'<script type="text/template">'+b+"</script>"}function f(a,b){b=d(b);for(var c,f,g,h=new RegExp(b.separator+(b.verticalSeparator?"|"+b.verticalSeparator:""),"mg"),i=new RegExp(b.separator),j=0,k=!0,l=[];c=h.exec(a);)notes=null,f=i.test(c[0]),!f&&k&&l.push([]),g=a.substring(j,c.index),f&&k?l.push(g):l[l.length-1].push(g),j=h.lastIndex,k=f;(k?l:l[l.length-1]).push(a.substring(j));for(var m="",n=0,o=l.length;o>n;n++)l[n]instanceof Array?(m+="<section "+b.attributes+">",l[n].forEach(function(a){m+="<section data-markdown>"+e(a,b)+"</section>"}),m+="</section>"):m+="<section "+b.attributes+" data-markdown>"+e(l[n],b)+"</section>";return m}function g(){for(var a,d=document.querySelectorAll("[data-markdown]"),g=0,h=d.length;h>g;g++)if(a=d[g],a.getAttribute("data-markdown").length){var i=new XMLHttpRequest,j=a.getAttribute("data-markdown");datacharset=a.getAttribute("data-charset"),null!=datacharset&&""!=datacharset&&i.overrideMimeType("text/html; charset="+datacharset),i.onreadystatechange=function(){4===i.readyState&&(i.status>=200&&i.status<300||0===i.status?a.outerHTML=f(i.responseText,{separator:a.getAttribute("data-separator"),verticalSeparator:a.getAttribute("data-separator-vertical"),notesSeparator:a.getAttribute("data-separator-notes"),attributes:c(a)}):a.outerHTML='<section data-state="alert">ERROR: The attempt to fetch '+j+" failed with HTTP status "+i.status+".Check your browser's JavaScript console for more details.<p>Remember that you need to serve the presentation HTML from a HTTP server.</p></section>")},i.open("GET",j,!1);try{i.send()}catch(k){alert("Failed to get the Markdown file "+j+". Make sure that the presentation and the file are served by a HTTP server and the file can be found there. "+k)}}else a.getAttribute("data-separator")||a.getAttribute("data-separator-vertical")||a.getAttribute("data-separator-notes")?a.outerHTML=f(b(a),{separator:a.getAttribute("data-separator"),verticalSeparator:a.getAttribute("data-separator-vertical"),notesSeparator:a.getAttribute("data-separator-notes"),attributes:c(a)}):a.innerHTML=e(b(a))}function h(a,b,c){var d=new RegExp(c,"mg"),e=new RegExp('([^"= ]+?)="([^"=]+?)"',"mg"),f=a.nodeValue;if(matches=d.exec(f)){var g=matches[1];for(f=f.substring(0,matches.index)+f.substring(d.lastIndex),a.nodeValue=f;matchesClass=e.exec(g);)b.setAttribute(matchesClass[1],matchesClass[2]);return!0}return!1}function i(a,b,c,d,e){if(null!=b&&void 0!=b.childNodes&&b.childNodes.length>0){previousParentElement=b;for(var f=0;f<b.childNodes.length;f++){if(childElement=b.childNodes[f],f>0)for(j=f-1;j>=0;){if(aPreviousChildElement=b.childNodes[j],"function"==typeof aPreviousChildElement.setAttribute&&"BR"!=aPreviousChildElement.tagName){previousParentElement=aPreviousChildElement;break}j-=1}parentSection=a,"section"==childElement.nodeName&&(parentSection=childElement,previousParentElement=childElement),("function"==typeof childElement.setAttribute||childElement.nodeType==Node.COMMENT_NODE)&&i(parentSection,childElement,previousParentElement,d,e)}}b.nodeType==Node.COMMENT_NODE&&0==h(b,c,d)&&h(b,a,e)}function k(){for(var c=document.querySelectorAll("[data-markdown]"),d=0,e=c.length;e>d;d++){var f=c[d];if(!f.getAttribute("data-markdown-parsed")){f.setAttribute("data-markdown-parsed",!0);var g=f.querySelector("aside.notes"),h=b(f);f.innerHTML=a(h),i(f,f,null,f.getAttribute("data-element-attributes")||f.parentNode.getAttribute("data-element-attributes")||n,f.getAttribute("data-attributes")||f.parentNode.getAttribute("data-attributes")||o),g&&f.appendChild(g)}}}if("undefined"==typeof a)throw"The reveal.js Markdown plugin requires marked to be loaded";"undefined"!=typeof hljs&&a.setOptions({highlight:function(a,b){return hljs.highlightAuto(a,b).value}});var l="^\r?\n---\r?\n$",m="note:",n="\\.element\\s*?(.+?)$",o="\\.slide:\\s*?(\\S.+?)$",p="__SCRIPT_END__";return{initialize:function(){g(),k()},processSlides:g,convertSlides:k,slidify:f}});