@foreach ($product as $item)
    <div class="product-item product-item-small mt-2 slick-current slick-active" data-id="{{$item->id}}" data-handle="{{$item->name}}" tabindex="0" role="tabpanel" id="slick-slide60" aria-describedby="slick-slide-control60" style="width: 454px;" data-slick-index="0" aria-hidden="false">
	<div class="product-item-small-wrap">
		<div class="product-item-small-image">
			<a href="{{route('detail_product', [$item->id, Str::slug($item->name)])}}" aria-label="Đèn bàn cao cấp F1GENZ" class="product-item-small-image-link" tabindex="0">			
				<img class=" lazyloaded" src="{{$item->thumbnail}}" data-src="{{$item->thumbnail}}" alt="{{$item->name}}">
			</a>
		</div>
		<div class="product-item-small-info">
			<h3 class="product-item-small-info-title">
				<a href="/products/den-ban-cao-cap-f1genz" aria-label="Đèn bàn cao cấp F1GENZ" tabindex="0">{{$item->name}}</a>
			</h3>
			<p class="product-item-small-info-price">
				<strong>{{number_format($item->sale_price)}}₫</strong>
				<del>{{number_format($item->old_price)}}₫</del>
				<span>(-{{($item->old_price - $item->sale_price) / $item->old_price * 100}}%)</span>
			</p>
            <a href="{{route('detail_product', [$item->id, Str::slug($item->name)])}}">Xem chi tiết</a>
		</div>
	</div>
</div>
@endforeach