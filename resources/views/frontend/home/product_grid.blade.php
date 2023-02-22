<section class="home-product-grid">
	<div class="container">
		<div class="home-product-grid-head section-title-all">
			<h2>Hot Trend</h2>
			<p>Cập nhật các sản phẩm bán chạy nhất trong tuần</p>
		</div>
		<div class="home-product-grid-body">

            {{-- item --}}
            @foreach ($product_hot as $item)
               @include('frontend.components.product_item')
            @endforeach

            {{-- end item --}}
		</div>
	</div>
</section>