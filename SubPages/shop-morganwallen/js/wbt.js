(function(){function n(){window.Shopify&&window.Shopify.customerPrivacy&&!window.Shopify.customerPrivacy.userCanBeTracked()||(t(),document.removeEventListener("trackingConsentAccepted",n,!1))}function t(){(function(n,t,i,r,u,f){n.dmtrackingobjectname=u;n.dmtrackingdomain="";f=t.createElement(r);f.async=1;f.src=i;r=t.getElementsByTagName(r)[0];r.parentNode.insertBefore(f,r);n[u]=n[u]||function(){(n[u].q=n[u].q||[]).push(arguments)}})(window,document,"//static.trackedweb.net/js/_dmptv4.js","script","dmPt");window.dmPt("create","DM-0562947041-02","shop.morganwallen.com,morgan-wallen-official.myshopify.com");window.dmPtId&&window.dmPtId(),function(n,t,i){var r=t.querySelectorAll(i),u,f,e;if(r&&r.length)for(u=0;u<r.length;u++)f=r[u],e=f.form||f,e.addEventListener("submit",function(t){var i=t.target.querySelector("input[type=email]");i&&i.value&&n.dmPt("identify",i.value)},!1)}(window,document,"#ContactFooter,#contact_form"),function(n,t,i,r){function o(){n.dmPt("track")}function s(){l(f+".js",c,o)}function l(n,t,i){let r=new XMLHttpRequest;r.onreadystatechange=function(){if(r.readyState===4){if(r.status!==200&&r.status!==304){i&&i();return}try{t(JSON.parse(r.responseText))}catch{i()}}};r.open("GET",n,!0);r.send("")}function h(){let n=i.search.match(/[?&]variant=(\d+)/i);return n?n[1]:null}function c(t){u=t;let e=h(),i=a(t,e),f={product_name:i.name,product_url:v(i.id),product_image_path:y(t,i),product_sku:i.sku,product_status:i.available?"In stock":"Out of stock",product_currency:r.currency.active};i.compare_at_price?(f.product_price=i.compare_at_price/100,f.product_specialPrice=i.price/100):f.product_price=i.price/100;n.dmPt("track",f)}function a(n,t){return t?n.variants.find(function(n){return n.id==t}):n.variants[0]}function v(n){let t=i.protocol+"//"+i.hostname+i.pathname;return n&&(t+="?variant="+n),t}function y(n,t){let r=t.featured_image?.src,u=n.featured_image?i.protocol+n.featured_image:null;return r??u}let f=i.pathname,u=null,e=null;/\/products\//i.test(f)?(s(),t.addEventListener("change",function(){let n=h();n!=e&&(e=n,u?c(u):s())},!1)):o()}(window,window.document,window.location,window.Shopify),function(n,t,i,r,u){function s(n){for(var i,u=n+"=",f=t.cookie.split(";"),r=0;r<f.length;r++){for(i=f[r];i.charAt(0)==" ";)i=i.substring(1,i.length);if(i.indexOf(u)==0)return i.substring(u.length,i.length)}return null}function h(){l(c()+"cart.js",function(n){n&&a(n)})}function c(){return i.routes.root||i.routes.root_url||"/"}function l(n,t){var i=new XMLHttpRequest;i.onreadystatechange=function(){i.readyState===4&&(i.status===200||i.status===304)&&t(JSON.parse(i.responseText))};i.open("GET",n,!0);i.send("")}function a(t){var e={programID:r,cartDelay:u,cartID:t.token,cartPhase:"CUSTOMER_LOGIN",currency:t.currency,subtotal:t.items_subtotal_price/100,discountAmount:t.total_discount/100,taxAmount:0,grandTotal:t.total_price/100},f=t.items;f&&f.length&&(e.cartUrl="https://"+i.shop+"/cart/"+f.map(function(n){return n.variant_id+":"+n.quantity}).join(","),e.lineItems=f.map(function(n){return{sku:n.sku,name:n.title,description:n.product_description,category:n.product_type,unitPrice:n.price/100,salePrice:n.price/100,quantity:n.quantity,totalPrice:n.line_price/100,imageUrl:n.image,productUrl:"https://"+i.shop+n.url}}));n.dmPt("cartInsight",e)}if(n.dmPt&&i)if(i.Checkout&&i.checkout){if(i.Checkout.step==="thank_you"){var f=i.checkout,e=f.line_items,o={programID:r,cartDelay:u,cartID:i.Checkout.cartToken,cartPhase:"ORDER_COMPLETE",currency:f.presentment_currency,subtotal:f.subtotal_price,discountAmount:f.discount&&f.discount.amount||0,taxAmount:f.total_tax,grandTotal:f.total_price};e&&e.length&&(o.cartUrl="https://"+i.shop+"/cart/"+e.map(function(n){return n.variant_id+":"+n.quantity}).join(","),o.lineItems=e.map(function(n){return{sku:n.sku,name:n.title,unitPrice:n.price,salePrice:n.price,quantity:n.quantity,totalPrice:n.line_price,imageUrl:n.image_url}}));n.dmPt("cartInsight",o)}}else s("cart")&&h()}(window,document,window.Shopify,47992,30)}window.Shopify&&window.Shopify.loadFeatures?window.Shopify.loadFeatures([{name:"consent-tracking-api",version:"0.1"},],function(t){t||n()}):n();document.addEventListener("trackingConsentAccepted",n,!1)})()