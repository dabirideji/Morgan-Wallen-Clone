(function(){function n(){window.Shopify&&window.Shopify.customerPrivacy&&!window.Shopify.customerPrivacy.userCanBeTracked()||(t(),document.removeEventListener("trackingConsentAccepted",n,!1))}function t(){(function(){function l(){if(n&&window[n]){var t=window[n].q||[],i=t.filter(n=>{var t=n[0];return!!c.filter(n=>n===t).length});window[n].initialized||(window[n]=function(t){var i=Array.prototype.slice.call(arguments);i.shift();typeof window[n].methods[t]=="function"&&window[n].methods[t].apply(null,i)},window[n].q=t,window[n].initialized=!0);window[n].methods?Object.assign(window[n].methods,{_dmTrack:u,_dmSetDomain:f}):window[n].methods={_dmTrack:u,_dmSetDomain:f};window.$DD_CONFIG&&window.$DD_CONFIG.apis.siteTracking.domains!=null&&f(window.$DD_CONFIG.apis.siteTracking.domains.join(","));a(i,window[n])}}function a(n,t){var r,i;if(n)for(r=0;r<n.length;r++)(i=n[r],t.methods[i[0]])&&(n.splice(r,1),i.length&&t(i[0],i.length>1?i[1]:null,i.length>2?i[2]:null))}function v(n){var t=new RegExp("[A-Za-z0-9]+,[A-Za-z0-9]+,[A-Za-z0-9]+,[A-Za-z0-9]+,[0|1]");return t.test(s(n))}function o(){var p=w(),b=(p.indexOf("https://")!=-1?"https":"http")+"://"+h,c=y(),n,o,e,l,s,f,a;if(c!=""&&v(c)){if(n=[],n.push("url="+i(p)),n.push("title="+i(document.title)),n.push(t+"="+i(c)),Shopify&&Shopify.Checkout&&Shopify.Checkout.step==="thank_you"&&Shopify.checkout&&Shopify.checkout.line_items){for(o=Shopify.checkout.line_items,e=0;e<o.length;e++)l=o[e].title,s=o[e].variant_title,s&&s.length&&(l+=" - "+s),u("product",l);u("CheckOutAmount",Shopify.checkout.total_price)}for(f=0;f<r.length;f++)n.push((r[f].override?"dm_over_":"dm_write_")+i(r[f].name)+"="+i(r[f].value));b+="?"+n.join("&");a=new Image(1,1);a.src=b;a.onload=function(){return}}}function y(){var i=window.location.search.indexOf(t,0),n=window.location.search;return(n=i!=-1?n.substring(i):"",i=n.indexOf("&",0),i!=-1&&(n=n.substring(0,i)),n=n.substring((t+"=").length),n!="")?(n=s(n),k(n),n):(document.cookie.length>0&&(n=p(t)),n)}function p(n){var i="; "+document.cookie,t=i.split("; "+n+"=");if(t.length>=2)return s(t.pop().split(";").shift())}function w(){var n=window.location.href,r=window.location.search,u,f,i;if(r!=""){for(n=n.substring(0,n.indexOf("?")+1),r=r.substring(1),u=r.split("&"),f=[],i=0;i<u.length;i++)u[i].indexOf(t)==-1&&f.push(u[i]);f.length==0&&(n=n.substring(0,n.indexOf("?")));n+=f.join("&")}return n}function b(){return}function k(n){var r=new Date;r.setTime(r.getTime()+36e5);document.cookie=t+"="+i(n)+";expires="+r.toGMTString()+";path=/;"+(e?"domain="+e+";":"")}function i(n){return encodeURIComponent(n)}function s(n){return decodeURIComponent(n)}function f(n){e=n}function u(n,t){if(n&&t){n.length>255&&(n=n.substring(0,255));var i=arguments.length>2&&typeof arguments[2]=="boolean"?arguments[2]:!1;r.push({name:n,value:t,override:i})}}var h="r2-t.trackedlink.net/PageTrack.ashx",t="dm_i",r=[],e="",n=window.$DD_CONFIG&&window.$DD_CONFIG.apiName?window.$DD_CONFIG.apiName:window.dmtrackingobjectname,c=["_dmTrack","_dmSetDomain"];l();window._dmTrack=u;window._dmSetDomain=f;window._dmSend=b;document.readyState!=="loading"?o():window.addEventListener?window.addEventListener("load",o,!1):window.attachEvent("onload",o)})()}window.Shopify&&window.Shopify.loadFeatures?window.Shopify.loadFeatures([{name:"consent-tracking-api",version:"0.1"},],function(t){t||n()}):n();document.addEventListener("trackingConsentAccepted",n,!1)})()