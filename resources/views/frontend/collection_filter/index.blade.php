@if ($product->isEmpty())
	<div class="d-flex justify-content-center mt-5 mb-5">
		<h2>Không có sản phẩm</h2>
	</div>
@else
	@foreach ($product as $item)
		@include('frontend.components.product_item')
	@endforeach
	<div class="shop-pagination">
		@if ($product->onFirstPage())
		<span class="current">1</span>
			
		@else
		<a href="{{ $product->previousPageUrl() }}">
			<span class="current">1</span>
		</a>
		@endif
		@if ($product->hasMorePages())
			<a href="{{ $product->nextPageUrl() }}" aria-label="Trang 2">2</a>
		@else
			<a href="#" aria-label="Trang 2">2</a>
		@endif
		@if ($product->hasMorePages())
		<a href="{{ $product->nextPageUrl() }}" aria-label="Trang sau">
			<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" x="0" y="0" viewBox="0 0 240.823 240.823" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><path id="Chevron_Right_1_" d="M183.189,111.816L74.892,3.555c-4.752-4.74-12.451-4.74-17.215,0c-4.752,4.74-4.752,12.439,0,17.179l99.707,99.671l-99.695,99.671c-4.752,4.74-4.752,12.439,0,17.191c4.752,4.74,12.463,4.74,17.215,0l108.297-108.261C187.881,124.315,187.881,116.495,183.189,111.816z" fill="#000000" data-original="#000000"></path></svg>
		</a>
		@else
			<a href="#" aria-label="Trang sau">
			<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" x="0" y="0" viewBox="0 0 240.823 240.823" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><path id="Chevron_Right_1_" d="M183.189,111.816L74.892,3.555c-4.752-4.74-12.451-4.74-17.215,0c-4.752,4.74-4.752,12.439,0,17.179l99.707,99.671l-99.695,99.671c-4.752,4.74-4.752,12.439,0,17.191c4.752,4.74,12.463,4.74,17.215,0l108.297-108.261C187.881,124.315,187.881,116.495,183.189,111.816z" fill="#000000" data-original="#000000"></path></svg>
		</a>
		@endif
	</div>
@endif