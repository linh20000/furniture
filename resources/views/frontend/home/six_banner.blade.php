<section class="home-six-banner">
	<div class="container">
		<div class="home-six-banner-head section-title-all">
			<h2>Bộ sư tập</h2>
			<p>Sản phẩm bán chạy nhất tuần này!</p>
		</div>
		<div class="home-six-banner-body"> 
			<ul class="home-six-banner-body-main home-six-banner-body-main-left">	
				@foreach ($banner_six_left as $item)
					<li class="home-six-banner-item">
						<a href="{{route('collectionAll')}}" aria-label="{{$item->name}}">
							<picture>
								<source media="(max-width: 480px)" data-srcset="{{$item->thumbnail}}"/>
								<source media="(min-width: 481px)" data-srcset="{{$item->thumbnail}}"/>
								<img class="lazyload" width="450" height="450" alt="Khuyến mãi"
										src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAABCAQAAABA4oeyAAAADklEQVR42mP8L8mAFQAAGlkBGm3rIKMAAAAASUVORK5CYII="
										data-src="{{$item->thumbnail}}"/>
							</picture>
							<span>{{$item->name}}</span>
						</a>
					</li>
				@endforeach		
			</ul>
			<ul class="home-six-banner-body-main home-six-banner-body-main-right">		
				@foreach ($banner_six_right as $item)
					<li class="home-six-banner-item">
						<a href="{{route('collectionAll')}}"  aria-label="{{$item->name}}">
							<picture>
								<source media="(max-width: 480px)" data-srcset="{{$item->thumbnail}}"/>
								<source media="(min-width: 481px)" data-srcset="{{$item->thumbnail}}"/>
								<img class="lazyload" width="450" height="450" alt="New Sale"
										src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAABCAQAAABA4oeyAAAADklEQVR42mP8L8mAFQAAGlkBGm3rIKMAAAAASUVORK5CYII="
										data-src="{{$item->thumbnail}}"/>
							</picture>
							<span>{{$item->name}}</span>
						</a>
					</li>
				@endforeach	
			</ul>		
		</div>
	</div>
</section>