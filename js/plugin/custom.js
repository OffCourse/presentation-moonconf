/*!
 * present 0.0.1 (2016-05-24, 19:33)
 */
var CustomPlugin=window.CustomPlugin||function(){for(var a=document.querySelectorAll("section[data-markdown-parsed] > p > .stretch"),b=0,c=a.length;c>b;b++){var d=a[b],e=d.parentNode,f=e.parentNode;e.removeChild(d),f.insertBefore(d,e),f.removeChild(e)}}();