!function(){const e=document.querySelector(".thomsonreuters-login-form"),o=document.querySelector(".thomsonreuters-login-form-mobile"),t=document.querySelector(".classlogin-wrap"),n=document.querySelector(".top_nav_mobile .classlogin-wrap");function r(e){e.classList.toggle("thomsonreuters-login-form-visible")}t&&t.addEventListener("click",r.bind(null,e)),n&&n.addEventListener("click",r.bind(null,o)),window.jQuery||function(){const e=document.createElement("script");e.async=!1,e.src="https://secure.netlinksolution.com/repository/jquery/1.7.2/jquery.min.js",document.head.appendChild(e)}();const c="CSS1Compat"==document.compatMode?"fixed":"absolute",i=location.protocol+"//"+location.host+"/wp-content/uploads/2019/03/1.png";window.jQuery(".thomsonreuters-login-form a").click(function(){var e=window.jQuery('<iframe id="trResetPwdFrame" style="background-color:transparent;display:none;position:'+c+';top:0;left:0;border:0;height:100%;width:100%;overflow:hidden" allowtransparency="true"></iframe>').appendTo("body").load(function(){try{"close"===e[0].contentWindow.name&&setTimeout(function(){e.remove()},0)}catch(e){}}).show().attr("src","https://secure.netlinksolution.com/nextgen/packaged/pwd-reset/1.1.0/index.html#"+i);return!1})}();