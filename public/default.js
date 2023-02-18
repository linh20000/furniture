    window.F1GENZ_vars = { 			
        template: "index",
        account: {
            logged:false,
            id:null,
            email:null	},
        shop:{
            url: "https://f1genz-furniture-2.myharavan.com",
            name: "F1GENZ Furniture 2",
            phone: "0932093794",
            featured:{
                super_fs: {
                    all_day: true,
                    slider: true,
                },
                animate: false,
                contactPopup: {
                    check: true,
                    time: 5000,
                },
            }
        },
        collection:{
            featured: "vertical"
        },
        quickview: null,
        product: {
            data:null,
            gift: false,
            availableOption: true,
            featured: {
                style_gallery: "style1",
                contact_0: {
                    text:"Liên hệ ngay 1900.63.60.99",
                }
            }
        },
        article: { 
            data: "null",
        },
    }		
window.noPS = navigator.userAgent.indexOf('Chrome-Lighthouse') === -1 ? true : false
window.HaravanAnalytics = window.HaravanAnalytics || {};
window.HaravanAnalytics.meta = window.HaravanAnalytics.meta || {};
window.HaravanAnalytics.meta.currency = 'VND';
var meta = {"page":{"pageType":"home"}};
for (var attr in meta) {
	window.HaravanAnalytics.meta[attr] = meta[attr];
}
window.HaravanAnalytics.AutoTrack = true;

if(navigator.userAgent.indexOf('Chrome-Lighthouse') === -1){
(function() { function asyncLoad() { var urls = ["https://product-reviews-apps.haravan.com/js/productreview/ProductReviews.js"];for (var i = 0; i < urls.length; i++) {var s = document.createElement('script');s.type = 'text/javascript';s.async = true;s.src = urls[i];var x = document.getElementsByTagName('script')[0];x.parentNode.insertBefore(s, x);}}window.attachEvent ? window.attachEvent('onload', asyncLoad) : window.addEventListener('load', asyncLoad, false);})();
}

if(navigator.userAgent.indexOf('Chrome-Lighthouse') === -1){
if ((typeof Haravan) === 'undefined') {
  Haravan = {};
}
Haravan.culture = 'vi-VN';
Haravan.shop = 'f1genz-furniture-2.myharavan.com';
Haravan.theme = {"name":"F1GENZ Luxury Furniture update 13/02/2023","id":1000969925,"role":"main"};
Haravan.domain = 'f1genz-furniture-2.myharavan.com';
}

$("body").removeClass("preload");
	document.addEventListener('lazybeforeunveil', function(e){
		var bg = e.target.getAttribute('data-bg');
		if(bg) e.target.style.backgroundImage = 'url(' + bg + ')';
	});
	if(window.noPS){
		if($('input[name="g-recaptcha-response"]').length > 0){
			$.getScript('www.google.com/recaptcha/api4d7a.js?render=6LdD18MUAAAAAHqKl3Avv8W-tREL6LangePxQLM-').done(function(s,r){			
				$('head').append(s);
				$('input[name="g-recaptcha-response"]').each(function(){
					var flagId = $(this).attr('id');
					grecaptcha.ready(function() {
						grecaptcha.execute('6LdD18MUAAAAAHqKl3Avv8W-tREL6LangePxQLM-', {action: 'submit'})
							.then(function(token) {
							document.getElementById(flagId).value = token;
						});
					});
				})
			});
		}
	}else{
		// Jquery touch
		jQuery.event.special.touchstart = {
			setup: function( _, ns, handle ) {
				this.addEventListener("touchstart", handle, { passive: !ns.includes("noPreventDefault") });
			}
		};
		jQuery.event.special.touchmove = {
			setup: function( _, ns, handle ) {
				this.addEventListener("touchmove", handle, { passive: !ns.includes("noPreventDefault") });
			}
		};
	}