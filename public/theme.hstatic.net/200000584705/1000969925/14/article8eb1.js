F1GENZ.Article = {
	init: function(){
		this.TOC();
		this.proIn();
		this.sidebar();
		this.share();
	},
	TOC: function(){
		if($('.main-article-menu').length > 0){
			var catalog = "";
			var count_h2 = 1; 
			var count_h3 = 1;
			$('.main-article-content').find('h2, h3').each(function(i, v){
				$(this).attr('data-id', `catalog${i}`);
				if($(this)[0].localName == 'h2'){
					catalog += `</div><div class="main-article-menu-data-parent" data-id="${$(this)[0].dataset.id}"><span>${count_h2}.</span><strong>${$(this)[0].innerText}</strong>`
					count_h3 = 1;
					count_h2++;
				}else{
					catalog += `<div class="main-article-menu-data-child" data-id="${$(this)[0].dataset.id}"><span>${count_h2 - 1}.${count_h3}.</span><strong>${$(this)[0].innerText}</strong></div>`
					count_h3++;
				}
			})
			if($('.main-article-content').find('h2').length > 0) { catalog = catalog.replace("</div>", ""); }
			$('.main-article-menu .main-article-menu-data').append(catalog);
			setTimeout(function(){ $('.main-article-menu label span').trigger('click') }, 250)

			$('body').on('click', '.main-article-menu-data-parent strong, .main-article-menu-data-child strong', function(){
				var id = $(this).parent().attr('data-id');
				$("html, body").stop().animate({
					scrollTop: $('.main-article-content [data-id="' + id + '"]').offset().top - 150
				}, 1000, 'swing');
				$('.main-article-share-cta').removeClass('show');
				$('body, html').removeClass('open-noscroll open-overplay open-article-menu open-share');
			})

			$('body').on('click', '.main-article-menu:not(.sidebar) label', function(){
				$(this).find('span').toggleClass('active');
				$(this).next().slideToggle(500, "swing");
			})

			$(window).on('scroll', function(){
				if($(this).scrollTop() > ($('.main-article-menu:not(.sidebar)').offset().top + $('.main-article-menu:not(.sidebar)').height() - 150)){
					$('.main-article-share-cta[data-type="main-article-share-menu"]').addClass('active');
				}else{
					$('.main-article-share-cta[data-type="main-article-share-menu"]').removeClass('active');
				}
			})

			$('body').on('click', '.main-article-share-cta[data-type="main-article-share-menu"]', function(){
				$(this).siblings().toggleClass('show');
				$('body, html').toggleClass('open-overplay open-article-menu');
			})
		} 
	},
	proIn: function(){
		var options = {
			collections: [],
			products: [],
		};
		var parseFunc = function(data, pro, col, startTag, endTag){
			try{
				var items = data.split(startTag);
				var optionPro = [];
				var optionCol = [];
				$.each(items, function(index, item){
					if(item.indexOf(endTag) !== -1){
						var query = item.split(endTag);
						if(query[0].indexOf('products') !== -1) optionPro.push(query[0]);
						if(query[0].indexOf('collections') !== -1) optionCol.push(query[0]);
					}
				})
				options[pro] = optionPro;
				options[col] = optionCol;
			}catch(e){console.log(e)}
		};
		var data = window.F1GENZ_vars.article.data; 
		if(data.length > 0){
			parseFunc(data, 'products', 'collections', '[', ']');
		}
		if(options.collections.length > 0){
			$.each(options.collections, function(i, v){
				try{
					$.ajax({
						type: "GET",
						url: `${v}?view=article`,
						async: false,
						success: function(data){
							if(data.length > 0){ 
								$(`.main-article-content p:contains('[${v}]')`).wrap(`<div class="superContent-collection-parent" data-stt="${ i }"'></div>`).parent().append(data);
								$('.superContent-collection-parent').find('> p').remove();
								F1GENZ.Helper.productSlider(`.superContent-collection-parent[data-stt="${ i }"] .superContent-collection`, 3, 3, 2, 1.25);
							}
						}
					});
				}catch(e){ console.log(e) }
			})
		} 

		if(options.products.length > 0){
			$.each(options.products, function(i, v){
				try{
					$.ajax({
						type: "GET",
						url: `${v}?view=article`,
						async: false,
						success: function(data){
							$(`.main-article-content p:contains('[${v}]')`).wrap("<div class='superContent-product-parent'></div>").parent().append(data);
							$('.superContent-product-parent').find('> p').remove();
						}
					})
				}catch(e){ console.log(e) }
			})
		}
	},
	sidebar: function(){
		$('body').on('click', '.main-article .main-article-right .main-article-right-menu .main-article-right-menu-data .hasChild > a', function(e){
			e.preventDefault();
			$(this).toggleClass('active');
			$(this).next().slideToggle();
		})
	},
	share: function(){
		$('body').on('click', '[data-type="main-article-share-open-popup"]', function(e){
			e.preventDefault();
			$(this).siblings().toggleClass('show');
			$('body, html').toggleClass('open-noscroll open-overplay open-share');
		})

		$('body').on('click', '[data-type="main-article-share-comment"]', function(e){
			e.preventDefault();
			$("html, body").stop().animate({
				scrollTop: $('.main-article-comment').offset().top - 150
			}, 1000, 'swing');
		})

		$('body').on('click', '[data-type="main-article-share-font"]', function(e){
			e.preventDefault();
			var that = $('.main-article-content');
			switch (+that.attr('data-size')){
				case 16:
					that.attr({ "data-size": 20, "style": "--share_font:" + 20 + "px" });
					break;
				case 20:
					that.attr({ "data-size": 24, "style": "--share_font:" + 24 + "px" });
					break;
				case 24:
					that.attr({ "data-size": 16, "style": "--share_font:" + 16 + "px" });
					break;
				default: break;
			}
		})

		$('body').on('click', '[data-type="main-article-share-copy"]', function(){
			var textBox = document.getElementById("main-article-share-copy");
			textBox.select();
			document.execCommand("copy");
			$(this).text('Đã sao chép');
			setTimeout(function(){ 
				$(this).text('Sao chép');
			}, 3000)
		})
	}
}
F1GENZ.Article.init();


