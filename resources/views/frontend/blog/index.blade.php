@extends('master')

@section('script')
	<script>
			window.F1GENZ_vars = { 			
				template: "article",
				shop: {
                url: "http://127.0.0.1:8000/",
                name: "F1GENZ Furniture 2",
                phone: "1234567890",
                featured: {
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
            collection: {
                featured: "vertical"
            },
            quickview: null,
            product: {
                data: false,
                gift: false,
                availableOption: true,
                featured: {
                    style_gallery: "style1",
                    contact_0: {
                        text: "Liên hệ ngay 1234567890",
                    }
                }
            },
            article: {
                data: "null",
            },
			}		
		</script>
@endsection

@section('content')
	

<main class="main-layout">
			<div class="main-blog">
	<div class="main-blog-breadcrumb">
		<div class="container">
			<div class="section-title-all">
				<h1>Tất cả bài viết</h1>
			</div>
			<div c-lass="breadcrumb-wrap">
				<ol class="breadcrumb">
					<li class="breadcrumb-item"><a href="../index.html">Trang chủ</a></li>
 					<li class="breadcrumb-item active"><span>Blog - Tất cả bài viết</span></li>
				</ol>
			</div>
		</div>
	</div>
	<div class="container">
		<div class="main-blog-wrap">
			<div class="main-blog-left">
				<div class="main-blog-left-data justify-content-center">
					@if ($blog->isEmpty())
						<h1 class="text-center">
							Chưa có bài viết nào
						</h1>
					@else
						@foreach ($blog as $item)
							@include('frontend.blog.blog_list')
						@endforeach
					@endif
				</div>
				@if ($blog->hasPages())
				<div class="shop-pagination">
					 @if ($blog->onFirstPage())
						<span class="current">1</span>
					@else
						<a href="{{ $blog->previousPageUrl() }}"><span class="current">1</span></a>
					@endif
					@if ($blog->hasMorePages())
						<a href="{{ $blog->nextPageUrl() }}" aria-label="Trang 2">2</a>
					@else
						<a href="#" aria-label="Trang 2">2</a>
					@endif
					@if ($blog->hasMorePages())
						<a href="{{ $blog->nextPageUrl() }}" aria-label="Trang sau">
							<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" x="0" y="0" viewBox="0 0 240.823 240.823" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><path id="Chevron_Right_1_" d="M183.189,111.816L74.892,3.555c-4.752-4.74-12.451-4.74-17.215,0c-4.752,4.74-4.752,12.439,0,17.179l99.707,99.671l-99.695,99.671c-4.752,4.74-4.752,12.439,0,17.191c4.752,4.74,12.463,4.74,17.215,0l108.297-108.261C187.881,124.315,187.881,116.495,183.189,111.816z" fill="#000000" data-original="#000000"></path></svg>
						</a>
					@else
						<a href="#" aria-label="Trang sau">
							<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" x="0" y="0" viewBox="0 0 240.823 240.823" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><path id="Chevron_Right_1_" d="M183.189,111.816L74.892,3.555c-4.752-4.74-12.451-4.74-17.215,0c-4.752,4.74-4.752,12.439,0,17.179l99.707,99.671l-99.695,99.671c-4.752,4.74-4.752,12.439,0,17.191c4.752,4.74,12.463,4.74,17.215,0l108.297-108.261C187.881,124.315,187.881,116.495,183.189,111.816z" fill="#000000" data-original="#000000"></path></svg>
						</a>>
					@endif

				</div>
				@endif
			</div>
			<div class="main-blog-right">
				<div class="main-blog-right-newest">
					<div class="section-title-all">
						<span>Đừng bỏ lỡ.</span>
					</div>
					@foreach ($relation as $item)
						<article class="article-item layout-small" data-index="3">
							<div class="article-item-wrap">
								<div class="article-item-image">
									<a href="{{route('blogDetail', [$item->id, Str::slug($item->name)])}}" title="{{$item->name}}" rel="nofollow">
										
										<img src="{{$item->image}}"
												class="lazyload"
												data-src="{{$item->image}}" 
												alt="{{$item->name}}"> 
										
										<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="512" height="512" x="0" y="0" viewBox="0 0 48 48" style="enable-background: new 0 0 512 512" xml:space="preserve" class=""> <path d="m40.8994141 39.4853516-7.8127441-7.8127441c2.3978882-2.734375 3.7209473-6.1942749 3.7209473-9.8649902 0-4.0068359-1.5605469-7.7734375-4.3935547-10.6064453s-6.5996094-4.3935547-10.6064453-4.3935547-7.7734375 1.5605469-10.6064453 4.3935547-4.3935547 6.5996094-4.3935547 10.6064453 1.5605469 7.7734375 4.3935547 10.6064453 6.5996094 4.3935547 10.6064453 4.3935547c3.6707153 0 7.1306152-1.3230591 9.8649902-3.7209473l7.8127441 7.8127441c.1953125.1953125.4511719.2929688.7070313.2929688s.5117188-.0976563.7070313-.2929688c.3906249-.390625.3906249-1.0234375-.0000001-1.4140625zm-28.2841797-8.4853516c-2.4550781-2.4555664-3.8076172-5.7202148-3.8076172-9.1923828s1.3525391-6.7368164 3.8076172-9.1923828c2.4555664-2.4550781 5.7202148-3.8076172 9.1923828-3.8076172s6.7368164 1.3525391 9.1923828 3.8076172c2.4550781 2.4555664 3.8076172 5.7202148 3.8076172 9.1923828s-1.3525391 6.7368164-3.8076172 9.1923828c-2.4555664 2.4550781-5.7202148 3.8076172-9.1923828 3.8076172s-6.7368164-1.3525391-9.1923828-3.8076172z" fill="#ffffff" data-original="#ffffff" style="" class="" ></path></svg>
									</a>
								</div>
								<div class="article-item-detail">
									<h3 class="article-item-detail-name"><a href="{{route('blogDetail', [$item->id, Str::slug($item->name)])}}" title="Tại sao màu nâu luôn được ưa chuộng trong thiết kế nội thất?">Tại sao màu nâu luôn được ưa chuộng trong thiết kế nội thất?</a></h3>
									<strong class="article-item-detail-info">{{$item->created_at->format('d')}} Thg {{$item->created_at->format('m Y')}} / {{$item->subname}}</strong>
									<div style="    overflow: hidden;
										display: -webkit-box;
										text-overflow: ellipsis;
										-webkit-box-orient: vertical;
										-webkit-line-clamp: 2;">
										<p class="article-item-detail-des">
											{!!  $item->description  !!}
										</p>  
									</div> 
								</div>
							</div>
						</article>
					@endforeach
				</div>
				<div class="main-blog-right-menu">
					@include('frontend.blog.category_blog')
				</div>
				<div class="main-blog-right-banner">
					<a href="" title="Bạn cần tư vấn?">
						<div class="section-title-all">
							<span>Bạn cần tư vấn?</span>
						</div>
						<picture>
							<source media="(max-width: 767px)" srcset="../../theme.hstatic.net/200000584705/1000969925/14/main_blog_banner_image_mob8eb1.png?v=2483">
							<source media="(min-width: 767px)" srcset="../../theme.hstatic.net/200000584705/1000969925/14/main_blog_banner_image8eb1.png?v=2483">
							<img src="../../theme.hstatic.net/200000584705/1000969925/14/main_blog_banner_image8eb1.png?v=2483" alt="Bạn cần tư vấn?">
						</picture>
					</a>
				</div>
			</div>
		</div>
	</div>
</div>
		</main>
@endsection