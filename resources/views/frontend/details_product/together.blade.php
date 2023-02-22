<div class="main-product-together">
    <div class="main-product-together-title section-title-all"><span>Thường được mua cùng với  {{$product->name}}</span></div>
    <div class="main-product-together-wrap">
        <div class="main-product-together-left">
            <div class="main-product-together-left-data">
                <!-- Curent Item -->
                <div class="product-item" data-id="{{$product->id}}" data-handle="{{Str::slug($product->name)}}">
                    <div class="product-item-wrap">
                        <div class="product-item-image hasThumbs">
                            <span class="product-item-discount">-{{number_format(($product->old_price - $product->sale_price) / $product->old_price * 100)}}%</span>			
                            <a class="product-item-link" href="/products/ban-an-4-chan-cao-cap" aria-label="Bàn ăn 4 chân cao cấp">			
                                <img class="lazyload w-100" width="480" height="480"
                                        src="{{$product->thumbnail}}"
                                        data-src="{{$product->thumbnail}}"
                                        >
                                <img class="lazyload w-100" width="480" height="480"
                                        src="{{$product->thumbnail}}"
                                        data-src="{{$product->thumbnail}}" >						
                            </a>
                            <ul class="product-item-thumbs">
                                @foreach (array_keys(JSON_decode($product->thumbnail_list)) as $key)
                                    <li>
                                        <a href="{{route('detail_product', [$product->id, STR::slug($product->name)])}}" aria-label="{{$product->name}}">
                                                    <img class="w-100 lazyload" width="50" height="50"
                                                            src="{{JSON_decode($product->thumbnail_list)[$key]}}"
                                                            data-src="{{JSON_decode($product->thumbnail_list)[$key]}}" alt="{{$product->name}}">
                                        </a>
                                    </li>
                                @endforeach
                            </ul>
                        </div>
                        <div class="product-item-detail">
                            <div class="product-item-detail-info">
                                <span class="product-item-detail-info-vendor">
                                    <a title="Show vendor" href="/collections/vendors?q=f1genz">{{$product->tradeMark}}</a>				
                                </span>
                                <span class="product-item-detail-info-tag">{{$product->tags}}</span> 
                            </div>
                            <h3 class="product-item-detail-name">
                                <a href="/products/ban-an-4-chan-cao-cap" aria-label="{{$product->name}}">{{$product->name}}</a>
                            </h3>
                            <div class="product-item-detail-price">
                                <span>{{number_format($product->sale_price)}}₫</span>
                                <del>{{number_format($product->old_price)}}₫</del>
                            </div>
                            <div class="haravan-product-reviews-badge" data-id="1043366353"> <div id="hrv-prv-summary-star" class="hrv-product-reviews-star" data-score="5" data-number="5"></div><span>(1 đánh giá)</span> </div>
                        </div>
                    </div>
                </div>
                <div class="product-item-plus">+</div>
                @foreach ($relation_product as $item)
                    @include('frontend.components.product_item')
                @endforeach
            </div>
        </div>
    </div>
</div>