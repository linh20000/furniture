F1GENZ.Blog = {
	init: function(){
		this.sidebar();
	},
	sidebar: function(){
		$('body').on('click', '.main-blog .main-blog-right .main-blog-right-menu .main-blog-right-menu-data .hasChild > a', function(e){
			e.preventDefault();
			$(this).toggleClass('active');
			$(this).next().slideToggle();
		})
	},
}
F1GENZ.Blog.init();



