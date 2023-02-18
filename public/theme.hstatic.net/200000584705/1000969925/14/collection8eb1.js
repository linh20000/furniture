F1GENZ.Collection = { 
	init: function(){
		this.action();
		if(window.F1GENZ_vars.collection.featured == "horizontal") this.horizontal();
		if(window.F1GENZ_vars.collection.featured == "vertical") this.vertical();
	},
	horizontal: function(){
		$('body').on('click', '.shop-filter h4', function(){
			$(this).parent().toggleClass('active');
			if($(window).width() > 1024){
				$('body, html').toggleClass('open-noscroll open-overplay');
			}else{
				$(this).next().slideToggle();
			}
		})
	},
	vertical: function(){
		$('body').on('click', '.shop-filter h4', function(){
			$(this).parent().toggleClass('active');
			if($(window).width() < 1024) $(this).next().slideToggle();
		})
	},
	action: function(){
		var self = this;
		// Mobile
		$('body').on('click', '.shop-filter-mobile-btn button[data-type="shop-filter-mobile-btn"]', function(){
			$('body, html').toggleClass('open-noscroll open-overplay open-filter-mobile');
		})

		// Sort type
		$('body').on('click', '.shop-sort-style .shop-sort-item[data-show]', function(){
			var show = $(this).attr('data-show');
			if(show == "four") $(this).parent().find('[data-show="three"]').removeClass('left_zero');
			if(show == "one") $(this).parent().find('[data-show="three"]').addClass('left_zero');
			$(this).addClass('active').siblings().removeClass('active');
			$('.main-collection .main-collection-data').removeClass('one two three four');
			$('.main-collection .main-collection-data').addClass(show);
		})

		// Sort by
		$('body').on('change', '.shop-sort-by select', function(e){
			e.preventDefault();
			self.buildQuery();
		})

		// Remove Choose 
		$('body').on('click', '.shop-filter-choose label button[data-type="shop-filter-choose-remove"]', function(){
			$('.shop-filter .shop-filter-list .shop-filter-item input:checked').prop('checked', false);
			self.buildQuery();
		})
		$('body').on('click', '.shop-filter-choose .shop-filter-choose-data li', function(){
			var data = $(this).attr('data-remove');
			$('.shop-filter .shop-filter-list .shop-filter-item input[value="' + data + '"]:checked').prop('checked', false);
			self.buildQuery();
		})

		// Filter Query
		$('body').on('click', '.shop-filter .shop-filter-list .shop-filter-item input', function(){
			self.buildQuery();
		})
		$('body').on('click', '.shop-pagination.filter a', function(e){
			e.preventDefault();
			var successQuery = $(this).attr('href');
			self.pickQuery(successQuery);
		})
	},
	buildQuery: function(){
		var self = this;
		var chooseData = "";
		var vendorLength = 1,
				typeLength = 1,
				tagLength = 1;
		var query = "(collectionid:product" + ($('.main-collection').data('id') == 0 ? ">=" : "=") + $('.main-collection').data('id') + ")";
		$('.shop-filter .shop-filter-list .shop-filter-item input[type="checkbox"]:checked').each(function(){
			if($(this).data('type') != "price"){
				chooseData += `<li data-remove="${$(this).val()}">${$(this).val()}<i class="fal fa-times"></i></li>`
			}else{
				chooseData += `<li data-remove="${$(this).val()}">${$(this).next().text()}<i class="fal fa-times"></i></li>`
			}
			switch($(this).data('type')){
				case 'vendor':
					if(query.indexOf('vendor') == -1 ) {
						query += "&&((vendor:product=";
					}
					if($('input[data-type="vendor"]:checked').length > 1){
						if(vendorLength == $('input[data-type="vendor"]:checked').length){
							query += $(this).val() + '))'; 
						}else{
							query += $(this).val() + ')||(vendor:product=';
							vendorLength+=1;
						}
					}else{
						query += $(this).val() + '))';
					}
					break;
				case 'type':
					if(query.indexOf('product_type') == -1 ) {
						query += "&&((product_type:product=";
					}
					if($('input[data-type="type"]:checked').length > 1){
						if(typeLength == $('input[data-type="type"]:checked').length){
							query += $(this).val() + '))'; 
						}else{
							query += $(this).val() + ')||(product_type:product=';
							typeLength+=1;
						}
					}else{
						query += $(this).val() + '))';
					}
					break;
				case 'tag' :
					if(query.indexOf('variant') == -1 ) {
						query += "&&((variant:product=";
					}
					if($('input[data-type="tag"]:checked').length > 1){
						if(tagLength == $('input[data-type="tag"]:checked').length){
							query += $(this).val() + '))';
						}else{
							query += $(this).val() + ')||(variant:product=';
							tagLength+=1;
						}
					}else{
						query += $(this).val() + '))';
					}
					break;
				case 'price' :
					query += `&&${$(this).val()}`;
					break;
				default:
			}
		})
		var flagQuery = encodeURIComponent(query);
		flagQuery += $('.shop-sort-by select').val();
		var successQuery = '/search?q=filter=' + flagQuery + '&view=filter';

		self.pickQuery(successQuery);
		$('.shop-pagination').addClass('filter');
		if($('.shop-filter .shop-filter-list .shop-filter-item input:checked').length > 0){
			$('.shop-filter-choose .shop-filter-choose-data').html("").append(chooseData)
			$('.shop-filter-choose').slideDown();
		}else{
			$('.shop-filter-choose').slideUp();
			$('.shop-filter-choose .shop-filter-choose-data').html("").append(chooseData)
		}
	},
	pickQuery: function(successQuery){
		$.ajax({
			type: "GET",
			url: successQuery,
			async: false,
			success: function(data){
				$('.main-collection .main-collection-data').html('').append(data);
				$('.shop-pagination').addClass('filter');
			}
		})
	}
};
F1GENZ.Collection.init();

