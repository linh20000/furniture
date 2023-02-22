var F1GENZ = {};
F1GENZ.Helper = {
	formatTime: function(pDate) {
		let dd = pDate.split("/")[0].padStart(2, "0");
		let mm = pDate.split("/")[1].padStart(2, "0");
		let yyyy = pDate.split("/")[2].split(" ")[0];
		let hh = pDate.split("/")[2].split(" ")[1].split(":")[0].padStart(2, "0");
		let mi = pDate.split("/")[2].split(" ")[1].split(":")[1].padStart(2, "0");
		let secs = pDate.split("/")[2].split(" ")[1].split(":")[2].padStart(2, "0");
		mm = (parseInt(mm) - 1).toString(); // January is 0
		return new Date(yyyy, mm, dd, hh, mi, secs);
	},
	productSlider: function(element, itemsOne, itemsTwo, itemsThree, itemsFour, options){
		if( $(element).length > 0 ){
			$(element).slick({
				slidesToShow: itemsOne,
				prevArrow:"<button type='button' class='slick-prev'>‹</button>", 
				nextArrow:"<button type='button' class='slick-next'>›</button>",
				rows: options && options.rows ? options.rows: 1,
				centerMode: options && options.centerMode ? options.centerMode: false,
				focusOnSelect: options && options.focusOnSelect ? options.focusOnSelect: false,
				autoplay: options && options.autoplay ? options.autoplay: false,
				infinite: options && options.infinite ? options.infinite: false,
				autoplaySpeed: 6000,
				fade: options && options.fade ? options.fade: false,
				dots: true,
				arrows: true,
				speed: 1000,
				touchThreshold: 100,
				adaptiveHeight: options && options.adaptiveHeight ? options.adaptiveHeight: false,
				responsive: [
					{
						breakpoint: 480, 
						settings: {
							slidesToShow: itemsFour,
						}
					},
					{
						breakpoint: 991, 
						settings: {
							slidesToShow: itemsThree,
						}
					},
					{
						breakpoint: 1024,
						settings: {
							slidesToShow: itemsTwo,
						}
					},
					{
						breakpoint: 1200,
						settings: {
							slidesToShow: itemsOne,
						}
					}
				]
			});
		}
	},
	postForm: function(obj, string){
		$.ajax({
			type: "POST",
			url: string,
			async: false,
			data: $(obj).find('form').serialize(),
			success: function(){
				swal({
					title: "Cảm ơn bạn!",
					text: "Chúng tôi sẽ liên hệ lại trong thời gian sớm nhất",
					type: "success"
				}, function() {
					$(obj).find('form input, form textarea').val("");
					$(obj).modal('hide'); 
					Fancybox.getInstance().close();
					$('.overplay-all').trigger('click');
					if(window.F1GENZ_vars.template == "404") location.reload();
				});
			}
		})
	},
	getCart: function(){  
		$.ajax({
			type:"GET",
			url:"/cart.js",
			dataType: 'json',
			async: false,
			success: function(data){
				F1GENZ.Helper.freeship(data);
				$('button[data-type="shop-cart-header"] .shop-cart-count').html(data.item_count);
				$('.shop-cart-sidebar a[href="/checkout"] span:last-child').html(Haravan.formatMoney(data.total_price) + '₫')
				$('.shop-cart-sidebar .shop-cart-sidebar-note textarea').val(data.note);
				if(data.item_count === 0){
					$('.shop-cart-sidebar-body').html('<div class="shop-cart-sidebar-no">Giỏ hàng của bạn còn trống</div>')
				}else{
					$('.shop-cart-sidebar-body').html('<div class="shop-cart-sidebar-yes"></div>')
				}

				if(window.F1GENZ_vars.template == "cart"){
					var attr = data.attributes;
					if(!$.isEmptyObject(attr)){
						$('.main-cart-data-full-invoice input[name="main-cart-data-full-invoice"]').prop('checked', true);
						$('.main-cart-data-full-invoice .main-cart-data-full-invoice-data').show();
						$.each(attr, (key, value) => {
							$(`.main-cart-data-full-invoice input[name="${key}"]`).val(value);
						})
					}
				}
			}
		})
		$.ajax({
			type:"GET",
			url:"/cart?view=item",
			async: false,
			success: function(data){
				$('.shop-cart-sidebar .shop-cart-sidebar-yes').html('').append(data); 
			}
		});
	},
	updateCart: function(type, id, quantity, string){
		switch(type) {
			case "add":
				$.ajax({
					type: 'POST',
					async: false,
					url: '/cart/add.js',
					data:  { id: id, quantity: quantity },
					dataType: 'json',
					success: function(cart) { 
						if(string == 'checkout') window.location.href = "/checkout";
						swal({
							title: "Cảm ơn bạn!",
							text: "Sản phẩm đã được thêm vào giỏ thành công",
							type: "success",
							showCancelButton: true,
							cancelButtonText: "Tiếp tục mua sắm",
							cancelButtonColor: "var(--color_main2)",
							confirmButtonColor: "var(--color_main)",
							confirmButtonText: "Đến giỏ hàng",
							closeOnConfirm: false
						}, function() {
							window.location.href="/cart";
						});

						F1GENZ.Helper.getCart();
					},
					error: (XMLHttpRequest, textStatus) => { swal("Xin lỗi bạn!", "Có chút vấn đề về tồn kho!", "error") }
				})
				break;
			case "update":
				$.ajax({
					type: 'POST',
					async: false,
					url: '/cart/change.js',
					data:  { id: id, quantity: quantity },
					dataType: 'json',
					success: (cart) => { 
						$('.shop-cart-sidebar a[href="/checkout"] span:last-child').html(Haravan.formatMoney(cart.total_price) + '₫');
						if(string == 'cart')
							window.location.reload();
						else
							swal("", "Sản phẩm đã được cập nhật", "success")
					},
					error: (XMLHttpRequest, textStatus) => { swal("Xin lỗi bạn!", "Có chút vấn đề về tồn kho!", "error") }
				})
				break;
			case "delete": 
				$.ajax({
					type: 'GET', 
					async: false,
					url: string,
					success: (cart) => { F1GENZ.Helper.getCart(); },
					error: (XMLHttpRequest, textStatus) => { swal("Oppz..", "Vui lòng thử lại sau", "error") }
				})
				break;
			default:
				$.ajax({
					type: 'POST',
					async: false,
					url: '/cart/change.js',
					data:  { note: string },
					dataType: 'json',
					success: (cart) => { 
						$('.shop-cart-sidebar .shop-cart-sidebar-note textarea').html(cart.note);
						$('.shop-cart-sidebar .shop-cart-sidebar-note').removeClass('active');
					},
					error: (XMLHttpRequest, textStatus) => { swal("Oppz..", "Vui lòng thử lại sau", "error") }
				})
		};
	},
	updateWCS: function(name, handle, dom, view, type){
		// Wishtlist || Compare | Viewed
		// Name in Local, Handle product, Dom append data, View ajax, Type set or remove

		// Init Element for Wishlist and Compare (not Viewed)
		var $domEl = $(dom);
		var $countEl = name == "list_wishlist" ? $('.shop-wishlist-count') : ( name == "list_compare" && $('.shop-compare-count'));
		var $buttonEl = name == "list_wishlist" ? $('button[data-type="shop-wishlist-button-add"]') : ( name == "list_compare" && $('button[data-type="shop-compare-button-add"]'));
		var title = name == "list_wishlist" ? "yêu thích" : ( name == "list_compare" && "so sánh"); 
		var limit = 5;

		// Set or Remove but no Handle
		if(type && !handle){
			swal("Có lỗi xảy ra..", "Vui lòng thử lại sau", "error"); 
			return false;
		}

		if(localStorage.getItem(name) != null){
			var dataLocal = JSON.parse(localStorage.getItem(name));
			// Clear Dom
			$domEl.hasClass('slick-slider') && $domEl.slick("unslick"); 
			$domEl.find('.wcs-null').remove();

			// Set Item
			if(type == "set"){
				if($.inArray(handle, dataLocal) === -1){
					dataLocal.push(handle);
					if(dataLocal.length > limit) {
						$domEl.find(`.product-item[data-handle="${dataLocal[0]}"]`).remove();
						dataLocal.splice(dataLocal[0], 1);
					}
					localStorage.setItem(name, JSON.stringify(dataLocal));
					title && swal({
						title:"",
						text: "Bạn vừa thêm 1 sản phẩm vào mục yêu thích thành công!",
						imageUrl: "https://file.hstatic.net/200000584705/file/027-confetti_08b51104913a48cf9a99d0e8d349fccf.png",
						confirmButtonColor: "var(--color_main)",
					})

				}
			} // Remove Item
			else if(type == "remove"){
				var index = $.inArray(handle, dataLocal);
				dataLocal.splice(index, 1)
				localStorage.setItem(name, JSON.stringify(dataLocal));
				$domEl.find(`.product-item[data-handle="${handle}"]`).remove();
				title && swal(`Sản phẩm đã được xóa khỏi danh sách ${title}`);
			}
			// Get Item
			dataLocal = JSON.parse(localStorage.getItem(name)); // reGet
			$countEl && $countEl.text(dataLocal.length);
			$buttonEl && $buttonEl.removeClass('inStorage');

			if(dataLocal.length == 0){
				(title && $domEl) && $domEl.html(`<p class="wcs-null w-100 text-center">Chưa có sản phẩm trong danh sách ${title}</p>`);
				return false;
			}
			var listAjax = [];
			for(i = 0; i < dataLocal.length; i++){ 
				$buttonEl && $(`.product-item[data-handle="${dataLocal[i]}"]`).find($buttonEl).addClass('inStorage');
				if($domEl.find(`.product-item[data-handle="${dataLocal[i]}"]`).length === 0){
					var ajax = $.ajax({
						method: 'GET', 
						async: false,
						url: `/products/${dataLocal[i]}?view=${view}`,
						success: function(data){ 
							$domEl.append(data);
						}
					});
					listAjax.push(ajax);
				}
			};
			$.when.apply($, listAjax).done(function(res) {
				var itemDesktop = !title ? 5 : 3;
				F1GENZ.Helper.productSlider($domEl, itemDesktop, 3, 2, 1.25);
			}).fail(function(jqXHR, textStatus, errorThrown) {
				console.log('Fail: ' + textStatus);
			});
		}else{
			// Set Item
			if(type == "set"){
				var newData = [handle];
				localStorage.setItem(name, JSON.stringify(newData));
				$countEl && $countEl.text(1);
				title && swal(`Sản phẩm đã được thêm vào danh sách ${title}`);
			}
		}
	},
	freeship: function(data){
		var curPrice = data.total_price;
		var freePrice = +$('.shop-freeship').attr('data-freeship-price');
		var perBar = (curPrice/freePrice) * 100;
		var nextPrice = freePrice - curPrice;
		// Set current percent
		$('.shop-freeship .shop-freeship-bar .shop-freeship-bar-main span').css('width', `${perBar}%`);
		// Set next price 
		$('.shop-freeship .shop-freeship-note span').html('Mua thêm ' + Haravan.formatMoney(nextPrice, window.formatMoney));
		if(perBar >= 100){
			$('.shop-freeship .shop-freeship-note').addClass('active');
			$('.shop-freeship .shop-freeship-note').html("Chúc mừng bạn! Đơn hàng của bạn đã được Freeship");
		}else{
			$('.shop-freeship .shop-freeship-note').removeClass('active');
			$('.shop-freeship .shop-freeship-note').html('Mua thêm <span>' + Haravan.formatMoney(nextPrice, window.formatMoney) + '</span> để được miễn phí giao hàng trên toàn quốc');
		}
	}
};
F1GENZ.General = { 
	init: function(){
		var checkSafari = navigator.userAgent.toLowerCase(); 
		if (checkSafari.indexOf('safari') != -1) { 
			if (checkSafari.indexOf('chrome') == -1) {
				$('body, html').addClass('is-safari');
			}
		}
		if(navigator.userAgent.indexOf('Chrome-Lighthouse') == -1){
			F1GENZ.Quickview.init();
			F1GENZ.Wishlist.init();
			F1GENZ.Helper.getCart();
			F1GENZ.General.contact_popup();
			F1GENZ.General.phone_popup();
			F1GENZ.General.toolSearch();
		}
		this.shop_newletter();
		this.shop_cart_action();
		this.add_item_action();
		this.account_action();
		this.coupon_action();
		this.quantity_action();
		this.scrollPage();
		this.backToTop();
		this.removeAll();
		this.menu_mobile();
		this.toggleFooter();
	},
	shop_newletter: () => {
		if($('.home-newletter').length > 0){
			$('.home-newletter input[type="email"]').placeholderTypewriter({
				text: ["Bạn cần tư vấn?", "Nhập địa chỉ email của bạn..."]
			});
			$('body').on('submit', '.home-newletter form', function(e){
				e.preventDefault();
				F1GENZ.Helper.postForm('.home-newletter', '/account/contact');
			})
		}
	},
	shop_cart_action: function(){
		// Open
		$('body').on('click', 'button[data-type="shop-cart-header"]', function(){ 
			if(window.F1GENZ_vars.template !== "cart") $('body, html').addClass('open-overplay open-noscroll open-cart');
		});
		// Close
		$('body').on('click', 'button[data-type="shop-cart-sidebar-close"]', function(){ 
			$('body, html').removeClass('open-noscroll open-overplay open-cart'); 
		});
		// Change Quantity Item
		$('body').on('change', '.shop-cart-item .shop-quantity-wrap input[name*="quantity_"]', function(){ 
			F1GENZ.Helper.updateCart('update', $(this).parents('.shop-cart-item').attr('data-id'), +$(this).val()); 
		});
		// Remove Item
		$('body').on('click', 'button[data-type="shop-cart-item-remove"]', function(){ 
			F1GENZ.Helper.updateCart('delete', $(this).parents('.shop-cart-item').attr('data-id'), 0, $(this).attr('data-href')); 
		});
		// Open Note Cart
		$('body').on('click', 'button[data-type="shop-cart-sidebar-note-action"]', function(){ 
			$('.shop-cart-sidebar .shop-cart-sidebar-note').addClass('active'); 
		});
		// Save Note Cart
		$('body').on('click', 'button[data-type="shop-cart-sidebar-note-save"]', function(){ 
			F1GENZ.Helper.updateCart('updateNote', 0, 0, $(this).prev().val()); 
		});
	},
	add_item_action: function(){
		$('body').on('click', 'button[data-type="shop-addLoop-button"]', function(){
			F1GENZ.Helper.updateCart('add', $(this).parents('.product-item').attr('data-id'), 1);
		})
	},
	account_action: function(){
		$('body').on('click', 'button[data-type="shop-customer-header"]',function(){
			if($(window).width() > 768){
				if(window.F1GENZ_vars.account.logged == false ){
					$('#accountModal').modal('show');
				}else{
					window.location.href = "/account";
				}
			}else{
				window.location.href = "/account";
			}
		}) 
		$('body').on('click', '#accountModal .closeModal', function(){
			$('#accountModal').modal('hide');
		})
	},
	coupon_action: function(){
		$('body').on('click', '.shop-coupon-popup button[data-type="shop-coupon-confirm"]', function(){ 
			navigator.clipboard.writeText($(this).attr('data-coupon'));
			swal({
				title: "Chúc mừng bạn!",
				text: "Đã sao chép Voucher thành công! <br ><span style='margin-top:5px;color:var(--color_main2);'>Mời bạn <b style='color:#f30;'>dán</b> mã vào trang thanh toán nhé.<span>",
				html: true
			});
		})
	},
	quantity_action: function(){ 
		$('body').on('click', 'button[data-type*="shop-quantity"]', function(){
			var type = $(this).attr('data-type');
			if(type.toString() === 'shop-quantity-minus'){
				if(+$(this).next().val() > 1)
					$(this).next().val(+$(this).next().val() - 1) 
			}else{
				$(this).prev().val(+$(this).prev().val() + 1)
			}
			$(this).parent().find('input').trigger('change');
		})
	},
	contact_popup: function(){
		$('body').on('submit', '.modal-contact form', function(e){
			e.preventDefault();
			F1GENZ.Helper.postForm('.modal-contact', '/account/contact');
		})
		if(window.F1GENZ_vars.shop.featured.contactPopup.check){
			setTimeout(function(){
				if(sessionStorage.contact_popup == null){
					$('[data-src="#shop-modal-contact"]').trigger('click');
					sessionStorage.contact_popup = 'show' ;
				}
			}, window.F1GENZ_vars.shop.featured.contactPopup.time);
		}
	},
	phone_popup: function(){
		$('body').on('submit', '.modal-phone form', function(e){
			e.preventDefault();
			$(this).find("#shop-modal-phone-email").val(`${$(this).find("#shop-modal-phone-number").val()}@gmail.com`);
			F1GENZ.Helper.postForm('.modal-phone', '/account/contact');
		})
	},
	scrollPage:function(){
		var scroll_init = 0;
		$(window).on('scroll',function() {
			var scroll_top = $(this).scrollTop();
			if(scroll_top > 200){
				$('.back-to-top').addClass('active');
				if(scroll_top > scroll_init){
					$('.header').addClass('active'); 
					scroll_init = scroll_top;
				}else{
					$('.header').removeClass('active');
					scroll_init = scroll_top;
				}
			}else{
				$('.header').removeClass('active');
				$('.back-to-top').removeClass('active');
			}
		});
	},
	backToTop:function(){
		$('body').on("click", ".back-to-top", function(){
			$('html, body').animate({
				scrollTop: 0			
			}, 600);
		});
	},
	removeAll:function(){
		$('body').on('click touchstart', '.overplay-all', function(){
			$('header.header').removeClass('open-menuMob');
			$('header.header .header-menu-wrap .header-menu-left .header-menu-sidebar').removeClass('active');
			$('.main-article-share-cta').removeClass('show');
			$('.shop-filter').removeClass('active');
			$('body, html').removeClass('open-overplay open-noscroll open-wishlist open-compare open-filter-mobile open-cart open-smart-search open-share open-article-menu open-menu-mobile open-modalContact');
			// Pos Item 
			$('.home-product-pos-item').removeClass('left right');
			
			if($(window).width() < 991){ 
				$('.shop-filter').removeClass('active');
				$('.shop-filter .shop-filter-list').slideUp();
			}
		})
	},
	menu_mobile:function(){
		$('body').on('click touch', 'button[data-type="shop-menu-mobile-header"]', function(e){
			$('body, html').addClass('open-overplay open-noscroll open-menu-mobile');
		})
		$('body').on('click', 'button[data-type="close-menu-mobile"]', function(e){
			$('body, html').removeClass('open-overplay open-noscroll open-menu-mobile');
		})
		$('body').on('click', '.shop-menu-mobile .shop-menu-mobile-body .hasChild > a', function(e){
			e.preventDefault();
			$(this).toggleClass('active');
			$(this).next().slideToggle();
		}) 
		$('.shop-menu-mobile .shop-menu-mobile-foot form input[type="email"]').placeholderTypewriter({
			text: ["Bạn cần tư vấn?", "Nhập địa chỉ email của bạn..."]
		});
		$('body').on('submit', '.shop-menu-mobile .shop-menu-mobile-foot form', function(e){
			e.preventDefault();
			F1GENZ.Helper.postForm('.shop-menu-mobile .shop-menu-mobile-foot', '/account/contact');
		})

		// Action for Sidebar
		$('body').on('click', '.header-menu-left span, .header-menu-left svg', function(){
			if($(window).width() < 1200){
				if($(this).parent().find('.header-menu-sidebar').hasClass('active')){
					$('.header').removeClass('open-menuMob');
					$(this).parent().find('.header-menu-sidebar').removeClass('active');
					$('body, html').removeClass('open-overplay');
				}else{
					$('.header').addClass('open-menuMob');
					$(this).parent().find('.header-menu-sidebar').addClass('active');
					$('body, html').addClass('open-overplay');
				}
			}
		})
		$('body').on('click', '.header-menu-left .header-menu-sidebar .hasChild > a', function(e){
			e.preventDefault();
			$(window).width() < 1200 && $(this).parent().toggleClass('activeChild');
		}) 
	},
	toggleFooter: function(){
		if($(window).width() < 769){
			$('body').on('click', '.footer .footer-top-item h4', function(){
				$(this).toggleClass('active');
				$(this).next().slideToggle();
			})
		}
	},
	toolSearch: function(){
		try{
			// Placeholder
			$('.tool-search input[name="q"]').placeholderTypewriter({
				text: ["Tìm kiếm sản phẩm ...", "Bạn cần tìm gì ...?", "Nhập tên sản phẩm cần tìm ..."]
			});

			// Search smart
			$('body').on('keyup', '.tool-search input[name="q"]', function(e){
				e.preventDefault();
				if(e.which !== 40 && e.which !== 38){
					var s = $(this).val();
					if(	typeof s === 'string' && s.length>0 ){
						return
					}else{
						$('.tool-search-smart').parent().removeClass('active');
						$('body, html').removeClass('open-noscroll');
					}
				}
			});

			// Close Search
			$(document).on('mouseup touchstart', function(e) {
				var container = $('.tool-search, button[data-type="shop-search-mobile"]');
				if (!container.is(e.target) && container.has(e.target).length === 0) {
					$('.tool-search').removeClass('active show');
					$('.tool-search input[name="q"]').val("");
					$('body, html').removeClass('open-noscroll');
				}
			});
			$('body').on('click', '.tool-search .tool-search-overplay', function(e){
				e.preventDefault();
				$('.tool-search-smart').parent().removeClass('active show');
				$('.tool-search input[name="q"]').val("");
				$('body, html').removeClass('open-noscroll');
			})


			// Mobile
			$('body').on('click', 'button[data-type="shop-search-mobile"]', function(e){
				e.preventDefault();
				$('.tool-search').toggleClass('show'); 
			})
		}catch(e){
			// console.log(e);
		}
	},
};
F1GENZ.Wishlist = {
	init: function(){
		F1GENZ.Helper.updateWCS('list_wishlist', null, '.shop-wishlist-modal .shop-wishlist-modal-body', 'item_small', null);
		this.action();
	},
	action: function(){
		// Close Modal
		$('body').on('click', 'button[data-type="shop-wishlist-modal-close"]', function(){
			$('.overplay-all').trigger('click');
		})
		// Open Modal
		$('body').on('click', '.shop-tool[data-type="shop-wishlist-header"]', function(){
			$('body, html').addClass('open-noscroll open-overplay open-wishlist');
		})
		// Add Item
		$('body').on('click', 'button[data-type="shop-wishlist-button-add"]', function(){
			let handle = $(this).parents('.product-item').attr('data-handle');
			if($(this).hasClass('inStorage')){
				$('.shop-tool[data-type="shop-wishlist-header"]').trigger('click');
			}else{
				F1GENZ.Helper.updateWCS(
					'list_wishlist', // Name in local
					handle, // Handle
					'.shop-wishlist-modal .shop-wishlist-modal-body', // Dom append Data
					'item_small', // View ajax
					'set' // Type set
				);
			}
		})
		// Remove Item
		$('body').on('click', 'button[data-type="shop-wishlist-button-remove"]', function(){
			let handle = $(this).parents('.product-item').attr('data-handle');
			F1GENZ.Helper.updateWCS(
				'list_wishlist', // Name in local
				handle, // Handle
				'.shop-wishlist-modal .shop-wishlist-modal-body', // Dom append Data
				'item_small', // View ajax
				'remove' // Type set
			);
		})
	}
}
F1GENZ.Quickview = { 
	statusVariants: {},
	statusOption1: {},
	init:function(){
		var self = this;
		$('body').on('click', '#product-quickview button[data-type="product-quickview-add"]', function(){
			F1GENZ.Helper.updateCart('add', +$('#product-quickview #product-quickview-select').val(), $('#product-quickview [name="product-quickview-quantity"]').val());
		});
		$('body').on('click', 'button[data-type="shop-quickview-button"]',function(){
			let handle = $(this).parents('.product-item').attr('data-handle');
			const fancy_quickview = new Fancybox([{ src: `/products/${handle}?view=quickview`, type: "ajax" }], {
				infinite: false,
				groupAttr: null,
				hideScrollbar: false,
				dragToClose: false,
				Toolbar: false,
				on: {
					reveal: (fancybox, slide) => {
						F1GENZ.Helper.productSlider('#product-quickview .product-quickview-feature', 1, 1, 1, 1);
						self.changeOption(); 
						self.render();
						self.setStatusVariants();
						self.checkOptionFirst();
					}
				}
			});
		})
	},
	setStatusVariants: function(){
		var self = this;
		var opsAll = [];
		var ops1 = [];
		$.each(window.F1GENZ_vars.quickview.variants, function(i, v){
			var flagOpsAll = { val:'', status:''};
			if($.inArray(v['options'], opsAll) === -1){
				flagOpsAll.val = v['options'].toString();
				flagOpsAll.status = v.available;
				opsAll.push(flagOpsAll);
			}
			if($.inArray(v['option1'], ops1) === -1){
				ops1.push(v['option1']);
			}
		});
		self.statusVariants = opsAll; 
		self.statusOption1 = ops1; 
	},
	checkOptionFirst: function(){
		var self = this;
		var flagClick0 = false; 
		$('#product-quickview .product-sw-line').eq(0).find('.product-sw-select-item input').addClass('soldOut').prop('checked',false);
		$.each(self.statusOption1, function(keyC1, valC1){
			$.each(self.statusVariants, function(keyC2, valC2){
				if(String(valC2.val).indexOf(valC1) !== -1){
					if(valC2.status === true){
						$('#product-quickview .product-sw-select-item input[value="'+ valC1 +'"]').removeClass('soldOut');
						if(flagClick0 == false){
							flagClick0 = true;
							$('#product-quickview .product-sw-select-item input[value="'+ valC1 +'"]').trigger('click');
						}
					}
				}
			})
		})
	},
	checkAvailable: function(type, name, value){
		var self = this;
		if(name.indexOf(1) !== -1){
			$('#product-quickview .product-sw-line').eq(1).find('.product-sw-select-item input').addClass('soldOut').prop('checked',false);
			$('#product-quickview .product-sw-line').eq(2).find('.product-sw-select-item input').addClass('soldOut').prop('checked',false);
			var flagClick1 = false; 
			$('#product-quickview .product-sw-line').eq(1).find('input').each(function(key1, val1){
				var flagOption1 = $(this).val();
				if(window.F1GENZ_vars.quickview.options.length === 3){
					$('#product-quickview .product-sw-line').eq(2).find('input').each(function(key1, val1){
						var flagOption2 = $(this).val();
						var flagCheck = `${value},${flagOption1},${flagOption2}`;
						$.each(self.statusVariants, function(keyC, valC){
							if(String(valC.val) === String(flagCheck) && valC.status){
								$('#product-quickview .product-sw-select-item input[value="'+ flagOption1 +'"]').removeClass('soldOut');
								$('#product-quickview .product-sw-select-item input[value="'+ flagOption2 +'"]').removeClass('soldOut');
								if(flagClick1 == false){
									flagClick1 = true;
									$('#product-quickview .product-sw-select-item input[value="'+ flagOption1 +'"]').trigger('click');
								}
								return false;
							}
						})
					});
				}else{
					var flagCheck = `${value},${flagOption1}`
					$.each(self.statusVariants, function(keyC, valC){
						if(String(valC.val) === String(flagCheck) && valC.status){
							$('#product-quickview .product-sw-select-item input[value="'+ flagOption1 +'"]').removeClass('soldOut');
							if(flagClick1 == false){
								flagClick1 = true;
								$('#product-quickview .product-sw-select-item input[value="'+ flagOption1 +'"]').trigger('click');
							}
							return false;
						}
					})
				}
			})
		}else if(name.indexOf(2) !== -1){
			if(window.F1GENZ_vars.quickview.options.length == 3){
				var flagClick2 = false;
				$('#product-quickview .product-sw-line').eq(2).find('input').each(function(key23, val3){
					var flagOption2 = $(this).val();
					var flagCheck = `${$('#product-quickview .product-sw-line').eq(0).find('input:checked').val()},${value},${flagOption2}`;
					$.each(self.statusVariants, function(keyC, valC){
						if(String(valC.val) === String(flagCheck) && valC.status){
							$('#product-quickview .product-sw-select-item input[value="'+ value +'"]').removeClass('soldOut');
							$('#product-quickview .product-sw-select-item input[value="'+ flagOption2 +'"]').removeClass('soldOut');
							if(flagClick2 == ''){
								flagClick2 = true;
								$('#product-quickview .product-sw-select-item input[value="'+ flagOption2 +'"]').trigger('click');
							}
							return false;
						}
					})
				})
			}
		}
		return false;
	},
	changeOption: function(){
		var self = this;
		$('body').on('change', '#product-quickview .trigger-option-sw', function(){
			var name = $(this).attr('data-name');
			var value = $(this).val();
			$('#product-quickview select[data-option='+name+'][id^="product-quickview-select"]').val(value).trigger('change');
			self.checkAvailable(true, name, value);
		})
	},
	render: function(){
		new Haravan.OptionSelectors("product-quickview-select", { product: window.F1GENZ_vars.quickview, onVariantSelected: this.variants });
	},
	variants: function(variant, selector){
		if(variant){
			// Change Image
			var items = $('#product-quickview .product-quickview-feature img[data-id="' + variant.featured_image.id + '"]');
			$('#product-quickview .product-quickview-feature').slick('slickGoTo', parseInt(items.attr('data-index')) - 1);
			// End Change Image

			window.F1GENZ_vars.quickview.availableOption = variant.available;
			var saleChange = Math.round(100 - (variant.price / (variant.compare_at_price / 100)));
			if(variant.price == 0){
				$('#product-quickview .product-quickview-price .product-quickview-price-compare').prop('hidden', true);
				$('#product-quickview .product-quickview-price .product-quickview-price-discount').prop('hidden', true);
				$('#product-quickview .product-quickview-price .product-quickview-price-this').addClass('contact').html(`
<strong>${window.F1GENZ_vars.product.featured.contact_0.text}</strong>
<a href="tel:${window.F1GENZ_vars.shop.phone}"><img src="${window.F1GENZ_vars.product.featured.contact_0.image}" alt="${window.F1GENZ_vars.shop.name}"/></a>
`);
			}else{
				$('#product-quickview .product-quickview-price .product-quickview-price-this').removeClass('contact').text(Haravan.formatMoney(variant.price, window.F1GENZ_vars.formatMoney));
				if(variant.compare_at_price > variant.price){
					$('#product-quickview .product-quickview-price .product-quickview-price-compare').text(Haravan.formatMoney(variant.compare_at_price, window.F1GENZ_vars.formatMoney)).prop('hidden', false);
					$('#product-quickview .product-quickview-price .product-quickview-price-discount').html('Tiết kiệm ' + saleChange + '%').prop('hidden', false);
				}else{
					$('#product-quickview .product-quickview-price .product-quickview-price-compare').prop('hidden', true);
					$('#product-quickview .product-quickview-price .product-quickview-price-discount').prop('hidden', true);
				}
			}
			// Sku
			$('#product-quickview .product-quickview-info .product-quickview-info-sku span').html(variant.sku != null ? variant.sku : 'Đang cập nhật');
			// Barcode
			$('#product-quickview .product-quickview-info .product-quickview-info-barcode span').html(variant.barcode != null ? variant.barcode : 'Đang cập nhật');
			// CTA
			if(variant.available){
				$('#product-quickview .product-quickview-cta button[data-type="product-quickview-add"]').attr('disabled', false);
				$('#product-quickview .product-quickview-cta button[data-type="product-quickview-add"] span').html("Chọn ngay sản phẩm bạn yêu thích")
				$('#product-quickview .product-quickview-cta button[data-type="product-quickview-add"] strong').html("Thêm vào giỏ");
			}else{
				$('#product-quickview .product-quickview-cta button[data-type="product-quickview-add"]').attr('disabled', true);
				$('#product-quickview .product-quickview-cta button[data-type="product-quickview-add"] span').html("Liên hệ để được tư vấn thêm")
				$('#product-quickview .product-quickview-cta button[data-type="product-quickview-add"] strong').html("Tạm hết hàng");
			}

		}else{
			$('#product-quickview .product-quickview-cta button[data-type="product-quickview-add"]').attr('disabled', false);
			$('#product-quickview .product-quickview-cta button[data-type="product-quickview-add"] span').html("Chọn ngay sản phẩm bạn yêu thích")
			$('#product-quickview .product-quickview-cta button[data-type="product-quickview-add"] strong').html("Thêm vào giỏ");
			window.F1GENZ_vars.quickview.availableOption = false;
		}
	},
};
F1GENZ.General.init();