<div class="main-product-relate">
    <div class="section-title-all"><span>Sản phẩm liên quan</span></div>
    <div class="main-product-relate-data">

        {{-- item product --}}
        @foreach ($relation_product as $item)
            @include('frontend.details_product.relation')
        @endforeach

    </div>
</div>
