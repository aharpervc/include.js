(function(){if(window.require){return}var require,p=true,x=false,j=document.getElementsByTagName('script'),y=document.body,q={},k={},l=function(){},r,s,t,m,u,n,d;require=function(b){var a,c;p=b.strict||false;x=b.async||false;d=b.files instanceof Array?b.files:[b.files];r=b.success||l;s=b.error||l;t=b.complete||l;m=u=n=0;k={};for(c in j){if(j.hasOwnProperty(c)){if(j[c].src){q[h(j[c].src)]=c}}}for(a in d){if(d.hasOwnProperty(a)){var e,f,o=l,g=null;if(d[a]instanceof Array){e=d[a][0];f=h(d[a][0]);if(typeof d[a][1]==="string"){g=d[a][1]}else{o=d[a][1]}g=g||d[a][2]||null}else{e=d[a];f=h(d[a])}if(typeof q[f]!=="undefined"||typeof k[f]!=="undefined"){continue}z(e,a,o,g);m++}}if(m===0){t();r()}};function z(e,f,o,g){var i=document.createElement('script'),A=h(e);i.onload=i.onerror=function(b){var a,c;if(b.type==="error"){n++;s(b,e)}else{o()}if(g!==null){a=setInterval(function(){if(typeof eval('window.'+g)!=="undefined"){v(e,f);clearInterval(a)}else if(c>10){n++;s(g,e);v(e,f);clearInterval(a)}c++},10)}else{v(e,f)}return true};k[A]=f;i.async=x;i.src=e;y.appendChild(i)}function h(b,a){a=a||p;var c=b.toString().split('/').pop();c=c.split('.');c.pop();c=c.join('-');return p||a?c:b}function v(b,a){u++;delete k[h(b)];q[h(b)]=a;if(u===m){t();if(n===0){r()}}return true}window.require=require})();