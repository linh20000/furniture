 <div class="product-item" data-id="1095039898" data-handle="{{Str::slug($item->name)}}">
    <div class="product-item-wrap">
        <div class="product-item-image hasThumbs">
            <span class="product-item-discount">-{{number_format(($item->old_price - $item->sale_price) / $item->old_price * 100)}}%</span>			
            <a class="product-item-link" href="{{route('detail_product', [$item->id, Str::slug($item->name)])}}" aria-label="Bàn ăn 4 chân cao cấp">			
                <img class="lazyload w-100" width="480" height="480"
                        src="{{$item->thumbnail}}"
                        data-src="{{$item->thumbnail}}"
                        alt="{{$item->name}}">
                <img class="lazyload w-100" width="480" height="480"
                        src="{{$item->thumbnail}}"
                        data-src="{{$item->thumbnail}}" alt="{{$item->name}}">						
            </a>
            <ul class="product-item-thumbs">
                @foreach (array_keys(JSON_decode($item->thumbnail_list)) as $key)
                    <li>
                        <a href="{{route('detail_product', [$item->id, STR::slug($item->name)])}}" aria-label="{{$item->name}}">
                                    <img class="w-100 lazyload" width="50" height="50"
                                            src="{{JSON_decode($item->thumbnail_list)[$key]}}"
                                            data-src="{{JSON_decode($item->thumbnail_list)[$key]}}" alt="{{$item->name}}">
                        </a>
                    </li>
                @endforeach
            </ul>
        </div>
        <div class="product-item-action">
            <button type="button" title="Yêu thích" class="shop-wishlist-button-add" data-type="shop-wishlist-button-add"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="128" height="128" x="0" y="0" viewBox="0 0 512 512" style="enable-background: new 0 0 512 512" xml:space="preserve" class=""> <path d="M359.511,37.984c-38.907,0-75.282,14.653-103.511,41.478c-28.229-26.825-64.605-41.478-103.511-41.478 C68.406,37.984,0,108.033,0,194.135c0,49.918,42.543,112.126,126.449,184.895c61.346,53.204,123.555,93.023,124.176,93.419 c1.639,1.045,3.507,1.567,5.375,1.567c1.868,0,3.736-0.523,5.376-1.568c0.621-0.396,62.83-40.215,124.176-93.419 C469.457,306.26,512,244.052,512,194.135C512,108.033,443.594,37.984,359.511,37.984z M372.62,363.771 c-49.885,43.284-100.379,77.567-116.62,88.301c-16.216-10.715-66.578-44.903-116.448-88.153C61.34,296.089,20,237.378,20,194.135 C20,119.06,79.435,57.984,152.489,57.984c36.726,0,70.877,15.094,96.161,42.501c1.893,2.052,4.558,3.219,7.35,3.219 s5.457-1.167,7.35-3.219c25.285-27.406,59.435-42.5,96.161-42.5C432.565,57.984,492,119.06,492,194.135 C492,237.344,450.719,296.003,372.62,363.771z" fill="#000000" data-original="#000000"></path> <path d="M347.379,93.307l-0.376,0.065c-5.438,0.966-9.063,6.157-8.097,11.595c0.861,4.846,5.078,8.252,9.834,8.252 c0.581,0,1.17-0.051,1.76-0.156l0.199-0.034c5.446-0.917,9.118-6.075,8.201-11.521C357.983,96.06,352.82,92.393,347.379,93.307z" fill="#000000" data-original="#000000"></path> <path d="M439.056,131.382c-12.278-16.867-29.718-29.43-49.106-35.375c-5.281-1.621-10.873,1.349-12.492,6.629 c-1.619,5.28,1.349,10.873,6.629,12.492c31.959,9.8,54.279,41.078,54.279,76.063c0,5.523,4.477,10,10,10s10-4.477,9.999-10.001 C458.365,169.416,451.688,148.735,439.056,131.382z" fill="#000000" data-original="#000000"></path></svg></button>
            <button type="button" title="Xem nhanh" class="shop-quickview-button" data-type="shop-quickview-button"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="512" height="512" x="0" y="0" viewBox="0 0 612.01 612.01" style="enable-background: new 0 0 512 512" xml:space="preserve" class=""> <path d="M606.209,578.714L448.198,423.228C489.576,378.272,515,318.817,515,253.393C514.98,113.439,399.704,0,257.493,0 C115.282,0,0.006,113.439,0.006,253.393s115.276,253.393,257.487,253.393c61.445,0,117.801-21.253,162.068-56.586 l158.624,156.099c7.729,7.614,20.277,7.614,28.006,0C613.938,598.686,613.938,586.328,606.209,578.714z M257.493,467.8 c-120.326,0-217.869-95.993-217.869-214.407S137.167,38.986,257.493,38.986c120.327,0,217.869,95.993,217.869,214.407 S377.82,467.8,257.493,467.8z" fill="#000000" data-original="#000000" class=""></path></svg></button>
            <button type="button" title="Thêm vào giỏ" class="shop-addLoop-button" data-type="shop-addLoop-button"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="128" height="128" x="0" y="0" viewBox="0 0 459.361 459.361" style="enable-background: new 0 0 512 512" xml:space="preserve" class=""> <path d="M371.2,325.731c19.1-0.2,35.8-13.1,40.7-31.6l47.1-175.4c1.5-5.7-1.8-11.5-7.5-13.1c-0.9-0.2-1.8-0.4-2.7-0.4H94.5 l-24.1-89c-1.2-4.6-5.4-7.9-10.2-7.9H0v21.3h51.8l23.3,87c-0.1,0.7-0.1,1.4,0,2.1l48,176c0.3,1.4,0.8,2.9,1.3,4.3l16.2,59 c-15.6,8.3-26.2,24.7-26.2,43.6c0,27.3,22.1,49.4,49.4,49.4c27.3,0,49.4-22.1,49.4-49.4c0-8.5-2.2-16.6-6-23.6 c-0.9-1.6-1.8-3.2-2.9-4.8H330c-5.6,8-9,17.8-9,28.4c0,27.3,22.1,49.4,49.4,49.4s49.4-22.1,49.4-49.4c0-12.9-4.9-24.6-13-33.4 c-8.7-9.9-21.5-16.2-35.8-16.3H161.9l-7.5-27.5c3.2,0.8,6.5,1.3,9.8,1.3H371.2z M370.5,373.231c15.7,0,28.4,12.7,28.4,28.4 s-12.7,28.4-28.4,28.4c-15.7,0-28.4-12.7-28.4-28.4S354.8,373.231,370.5,373.231z M163.8,373.231c15.7,0,28.3,12.8,28.3,28.4 c0,15.7-12.7,28.4-28.4,28.4c-15.7,0-28.3-12.7-28.3-28.4S148.1,373.231,163.8,373.231z M144.8,290.931l-23.9-87.4l-21.3-76.8 h334.9l-43.3,162.6c-2.4,9.3-10.7,15.8-20.3,16H164C155.3,304.831,147.7,299.231,144.8,290.931z" fill="#000000" data-original="#000000"></path></svg></button>
        </div>
        <div class="product-item-detail">
            <div class="product-item-detail-info">
                <span class="product-item-detail-info-vendor">
                    <a title="Show vendor" href="{{route('detail_product', [$item->id, STR::slug($item->name)])}}">F1GENZ</a>				
                </span>
                <span class="product-item-detail-info-tag">{{$item->tags}}</span> 
            </div>
            <h3 class="product-item-detail-name">
                <a href="{{route('detail_product', [$item->id, STR::slug($item->name)])}}" aria-label="{{Str::slug($item->name)}}">{{$item->name}}</a>
            </h3>
            <div class="product-item-detail-price">
                <span>{{number_format($item->sale_price)}}₫</span>
                <del>{{number_format($item->old_price)}}₫</del>
            </div>
            <div class="haravan-product-reviews-badge" data-id="1043366353"> <div id="hrv-prv-summary-star" class="hrv-product-reviews-star" data-score="5" data-number="5"></div><span>(1 đánh giá)</span> </div>
        </div>
    </div>
</div>
