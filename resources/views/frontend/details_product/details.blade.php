 <div class="main-product-wrap">
    <div class="main-product-left main-product-feature" data-style="style1">
        <!-- Style 1 -->
        <div class="main-product-feature-featured has-spin">
            @foreach (array_keys(JSON_decode($product->thumbnail_list)) as $key)
                <a href="{{JSON_decode($product->thumbnail_list)[$key]}}" aria-label="Bàn ăn 4 chân cao cấp" data-index="1">
                    <picture>
                        <source media="(max-width: 480px)" srcset="{{JSON_decode($product->thumbnail_list)[$key]}}"> 
                        <source media="(min-width: 481px)" srcset="{{JSON_decode($product->thumbnail_list)[$key]}}" data-srcset="{{JSON_decode($product->thumbnail_list)[$key]}}">
                        <img class="w-100 lazyload" width="600" height="600" data-fancybox="gallery"
                                src="{{JSON_decode($product->thumbnail_list)[$key]}}"
                                data-src="{{JSON_decode($product->thumbnail_list)[$key]}}" alt="{{$product->name}}">
                    </picture>
                </a>
            @endforeach
        </div>
        <div class="main-product-feature-thumbs">
            @foreach (array_keys(JSON_decode($product->thumbnail_list)) as $key)
                <a href="javascript:void(0);" aria-label="{{$product->name}}" data-index="1" data-id="1285426614">
                    <picture>
                        <source media="(max-width: 480px)" srcset="{{JSON_decode($product->thumbnail_list)[$key]}}"> 
                        <source media="(min-width: 481px)" srcset="{{JSON_decode($product->thumbnail_list)[$key]}}" data-srcset="{{JSON_decode($product->thumbnail_list)[$key]}}">
                        <img class="w-100 lazyload" width="600" height="600"
                                src="{{JSON_decode($product->thumbnail_list)[$key]}}"
                                data-src="{{JSON_decode($product->thumbnail_list)[$key]}}" alt="Bàn ăn 4 chân cao cấp">
                    </picture>
                </a>
            @endforeach
        </div>
        <!-- End Style 1 -->
    </div>
    <div class="main-product-right">
        <div class="main-product-share"> 
            <button type="button" data-type="main-product-share-overplay" class="main-product-share-overplay"></button>
            <button type="button" data-type="main-product-share-open-popup" class="main-product-share-cta" title="Chia sẻ">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="#595959" d="M19 3c-1.652 0-3 1.348-3 3 0 .46.113.895.3 1.285L12.587 11h-4.77A2.999 2.999 0 005 9c-1.652 0-3 1.348-3 3s1.348 3 3 3c1.3 0 2.402-.84 2.816-2h4.77l3.715 3.715c-.188.39-.301.824-.301 1.285 0 1.652 1.348 3 3 3s3-1.348 3-3-1.348-3-3-3c-.46 0-.895.113-1.285.3l-3.3-3.3 3.3-3.3c.39.187.824.3 1.285.3 1.652 0 3-1.348 3-3s-1.348-3-3-3z"></path></svg>
            </button>
            <div class="main-product-share-popup">
                <div class="main-product-share-popup-head">
                    <label>Chia sẻ</label>
                    <a target="_blank" aria-label="Chia sẻ Facebook" href="https://www.facebook.com/sharer.php?url={{route('detail_product', [$product->id, Str::slug($product->name)])}}"><svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M27 0H5a5 5 0 00-5 5v22a5 5 0 005 5h22a5 5 0 005-5V5a5 5 0 00-5-5z" fill="#1778F2"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M20.314 32V19.499h3.255L24 15.19h-3.686l.006-2.156c0-1.123.1-1.725 1.623-1.725h2.034V7h-3.255c-3.91 0-5.285 2.09-5.285 5.604v2.587H13v4.308h2.437V32h4.877z" fill="#fff"></path></svg></a>
                    <a target="_blank" aria-label="Chia sẻ Twitter" href="https://twitter.com/intent/tweet?url={{route('detail_product', [$product->id, Str::slug($product->name)])}}"><svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="32" rx="4" fill="#1FA1F3"></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M15.73 13.235l.04.634-.674-.077c-2.455-.298-4.6-1.308-6.42-3.004l-.89-.841-.23.621c-.485 1.385-.175 2.848.836 3.832.54.544.419.622-.512.298-.324-.104-.607-.181-.634-.143-.094.091.23 1.27.486 1.735.35.648 1.065 1.282 1.847 1.657l.661.298-.782.013c-.755 0-.782.013-.701.285.27.841 1.335 1.735 2.522 2.123l.836.272-.728.414a7.894 7.894 0 01-3.615.958c-.607.013-1.106.065-1.106.104 0 .13 1.646.854 2.603 1.14 2.873.84 6.285.478 8.848-.959 1.82-1.023 3.642-3.055 4.491-5.023.459-1.049.918-2.965.918-3.884 0-.596.04-.673.795-1.385.445-.415.864-.868.945-.997.134-.246.12-.246-.567-.026-1.146.388-1.308.337-.742-.246.418-.414.917-1.165.917-1.385 0-.04-.202.026-.431.142-.243.13-.783.324-1.187.44l-.729.22-.66-.427c-.364-.233-.877-.492-1.147-.57-.688-.18-1.74-.155-2.36.052-1.686.583-2.752 2.085-2.63 3.729z" fill="#fff"></path></svg></a>
                    <a target="_blank" aria-label="Chia sẻ WhatsApp" href="https://wa.me/?text={{route('detail_product', [$product->id, Str::slug($product->name)])}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"><path d="M116.225-.001c-11.264.512-26.112 1.536-32.768 3.072-10.24 2.048-19.968 5.12-27.648 9.216-9.728 4.608-17.92 10.752-25.088 17.92-7.68 7.68-13.824 15.872-18.432 25.6-4.096 7.68-7.168 17.408-9.216 27.648-1.536 6.656-2.56 21.504-2.56 32.768-.512 4.608-.512 10.752-.512 13.824v265.729c.512 11.264 1.536 26.112 3.072 32.768 2.048 10.24 5.12 19.968 9.216 27.648 4.608 9.728 10.752 17.92 17.92 25.088 7.68 7.68 15.872 13.824 25.6 18.432 7.68 4.096 17.408 7.168 27.648 9.216 6.656 1.536 21.504 2.56 32.768 2.56 4.608.512 10.752.512 13.824.512h265.728c11.264-.512 26.112-1.536 32.768-3.072 10.24-2.048 19.968-5.12 27.648-9.216 9.728-4.608 17.92-10.752 25.088-17.92 7.68-7.68 13.824-15.872 18.432-25.6 4.096-7.68 7.168-17.408 9.216-27.648 1.536-6.656 2.56-21.504 2.56-32.768.512-4.608.512-10.752.512-13.824V116.223c-.512-11.264-1.536-26.112-3.072-32.768-2.048-10.24-5.12-19.968-9.216-27.648-4.608-9.728-10.752-17.92-17.92-25.088-7.68-7.68-15.872-13.824-25.6-18.432-7.68-4.096-17.408-7.168-27.648-9.216-6.656-1.536-21.504-2.56-32.768-2.56-4.608-.512-10.752-.512-13.824-.512H116.225z" fill="url(#whatsApp_svg___Linear1)" fill-rule="nonzero"></path><path d="M344.754 289.698c-4.56-2.282-26.98-13.311-31.161-14.832-4.18-1.521-7.219-2.282-10.259 2.282-3.041 4.564-11.78 14.832-14.44 17.875-2.66 3.042-5.32 3.423-9.88 1.14-4.561-2.281-19.254-7.095-36.672-22.627-13.556-12.087-22.709-27.017-25.369-31.581s-.283-7.031 2-9.304c2.051-2.041 4.56-5.324 6.84-7.986 2.28-2.662 3.04-4.564 4.56-7.606 1.52-3.042.76-5.705-.38-7.987-1.14-2.282-10.26-24.72-14.06-33.848-3.701-8.889-7.461-7.686-10.26-7.826-2.657-.132-5.7-.16-8.74-.16-3.041 0-7.98 1.141-12.161 5.704-4.18 4.564-15.96 15.594-15.96 38.032 0 22.438 16.34 44.116 18.62 47.159 2.281 3.043 32.157 49.089 77.902 68.836 10.88 4.697 19.374 7.501 25.997 9.603 10.924 3.469 20.866 2.98 28.723 1.806 8.761-1.309 26.98-11.029 30.781-21.677 3.799-10.649 3.799-19.777 2.659-21.678-1.139-1.902-4.179-3.043-8.74-5.325m-83.207 113.573h-.061c-27.22-.011-53.917-7.32-77.207-21.137l-5.539-3.287-57.413 15.056 15.325-55.959-3.608-5.736c-15.184-24.145-23.203-52.051-23.192-80.704.033-83.611 68.083-151.635 151.756-151.635 40.517.016 78.603 15.811 107.243 44.474 28.64 28.663 44.404 66.764 44.389 107.283-.035 83.617-68.083 151.645-151.693 151.645m129.102-280.709c-34.457-34.486-80.281-53.487-129.103-53.507-100.595 0-182.468 81.841-182.508 182.437-.013 32.156 8.39 63.546 24.361 91.212l-25.892 94.545 96.75-25.37c26.657 14.535 56.67 22.194 87.216 22.207h.075c100.586 0 182.465-81.852 182.506-182.448.019-48.751-18.946-94.59-53.405-129.076" fill="#fff"></path><defs><linearGradient gradientTransform="matrix(0 -512 -512 0 256.001 512)" gradientUnits="userSpaceOnUse" id="whatsApp_svg___Linear1" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="#25cf43"></stop><stop offset="1" stop-color="#61fd7d"></stop></linearGradient></defs></svg></a>
                    <a target="_blank" aria-label="Chia sẻ Linkedin" href="https://www.linkedin.com/sharing/share-offsite/?url={{route('detail_product', [$product->id, Str::slug($product->name)])}}"><svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="32" rx="4" fill="#0077B5"></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M10.857 9.07c-.022-1.094-.744-1.927-1.917-1.927S7 7.976 7 9.07C7 10.142 7.744 11 8.895 11h.022c1.196 0 1.94-.858 1.94-1.93zm0 3.216H7v11.571h3.857V12.286zm9.294 0c2.771 0 4.849 1.616 4.849 5.089v6.482h-4.212V17.81c0-1.52-.609-2.556-2.134-2.556-1.163 0-1.856.698-2.16 1.373-.112.242-.14.58-.14.917v6.314h-4.211s.055-10.244 0-11.305h4.212v1.601c.559-.77 1.56-1.867 3.796-1.867z" fill="#fff"></path></svg></a>
                </div>
                <hr>
                <div class="main-product-share-popup-body">
                    <label>Sao chép đường dẫn</label>
                    <form>
                        <input value="{{route('detail_product', [$product->id, Str::slug($product->name)])}}" readonly id="main-product-share-copy"/>
                        <button type="button" data-type="main-product-share-copy">Sao chép</button>
                    </form>
                </div>
            </div>
        </div>
        <h1 class="main-product-title ">{{$product->name}}</h1>
        <div class="main-product-info">
            <div class="main-product-info-sku">
                <strong>Mã sản phẩm: </strong><span>{{$product->product_code}}</span>
            </div>
            <div class="main-product-info-vendor">
                <strong>Thương hiệu: </strong><span>{{$product->trademark}}</span>
            </div>
            <div class="main-product-info-type">
                <strong>Dòng sản phẩm: </strong><span>{{$product->trademark}}</span>
            </div>
        </div>
        <div class="main-product-price">
            <div class="main-product-price-wrap">
                <del  class="main-product-price-compare">{{number_format($product->old_price)}}₫</del>

                <span class="main-product-price-this">{{number_format($product->sale_price)}}₫</span>


                <span  class="main-product-price-discount">Tiết kiệm {{number_format(($product->old_price - $product->sale_price) / $product->old_price * 100)}}%</span>
            </div>
            <div class="haravan-product-reviews-badge" data-id="1043366353"> <div id="hrv-prv-summary-star" class="hrv-product-reviews-star" data-score="5" data-number="5"></div><span>(1 đánh giá)</span> </div>
        </div>
        <!-- Flash Sale -->

        <div style="display: none;" class="main-product-fsale">
            <img src="https://file.hstatic.net/200000306687/file/ezgif.com-gif-maker_40e5c36d115b4904babbebc78c90c34e.gif" alt=" - Flash Sale"/>
            <label>Bắt đầu sau</label>
            <div class="main-product-fsale-countdown" data-start="22/11/2023 00:00:00" data-end="22/11/2023 07:00:00"></div>
        </div>
        <div class="main-product-swatch">
            
            @foreach (JSON_decode($product->options) as $item)
            <div class="product-sw-line">
                <div class="product-sw-select">
                    <div class="product-sw-title">Màu sắc</div>
                    <span class="product-sw-select-item sw-color ">
                        <span class="colorHover"></span>			
                        <label class="select_1 color" style="padding:5px 10px; box-shadow: 2.5px 2.5px 2.5px rgb(0 0 0 / 15%);cursor: pointer; display:inline-block;" for="" data-value="{{$item->color_1}}" >{{$item->color_1}}</label>
                    </span>
                    <span class="product-sw-select-item sw-color">
                        <span class="colorHover"></span>		
                        <label class="select_2 color" style="padding:5px 10px; box-shadow: 2.5px 2.5px 2.5px rgb(0 0 0 / 15%);cursor: pointer; display:inline-block;" for="" data-value="{{$item->color_2}}">{{$item->color_2}}</label>
                    </span>
                </div>
                <div class="error color_err"></div>
            </div>
            <div class="product-sw-line">
                <div class="product-sw-select">
                    <div class="product-sw-title">Vật liệu</div>
                    <span class="" >
                        <label style="padding:5px 10px; box-shadow: 2.5px 2.5px 2.5px rgb(0 0 0 / 15%);cursor: pointer; display:inline-block;"  data-value="{{$item->type_1}}" class=" type_1 type">{{$item->type_1}}</label>
                    </span>
                    <span class="">
                        <label style="padding:5px 10px; box-shadow: 2.5px 2.5px 2.5px rgb(0 0 0 / 15%);cursor: pointer; display:inline-block;"   data-value="{{$item->type_2}}" class=" type_2 type">{{$item->type_2}}</label>
                    </span>
                </div>
            </div>
            <div class="error type_err"></div>
            @endforeach
            <input type="hidden" name="color" value="">
            <input type="hidden" name="type_product" value="">
            <input type="hidden" id="name" name="name" value="{{$product->name}}">
            <input type="hidden" name="product_code" value="{{$product->prodcut_code}}">
            <input type="hidden" name="price" value="{{$product->sale_price}}">
            <input type="hidden" name="old_price" value="{{$product->old_price}}">
            <input type="hidden" name="thumbnail" value="{{$product->thumbnail}}">
        </div>
        <div class="main-product-quantity shop-quantity-wrap">
            <label>Số lượng</label>
            <div class="shop-quantity">
                <button type="button" data-type="shop-quantity-minus" title="Giảm">-</button>
                <input type="number" name="quantity" value="1" min="1" readonly>
                <button type="button" data-type="shop-quantity-plus" title="Tăng">+</button>
            </div>
        </div>
        <div class="main-product-coupon">
            <div class="shop-coupon" data-fancybox data-src="#shop-coupon-popup">
                <label>Voucher ưu đãi: 
                    <img class="lazyload"
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                            data-src="https://bizweb.dktcdn.net/100/453/837/files/757cf2944edb87314287b95cd98fd731-1.gif?v=1654078396653" alt="coupon"/></label> 
                <ul> 
                    <li class="shop-coupon-modal">
                        <img class="lazyload"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                data-src="//theme.hstatic.net/200000584705/1000969925/14/shop_coupon_item_image_1.png?v=2491" alt="cusPro-coupon-1">
                    </li>
                    <li class="shop-coupon-modal">
                        <img class="lazyload"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                data-src="//theme.hstatic.net/200000584705/1000969925/14/shop_coupon_item_image_2.png?v=2491" alt="cusPro-coupon-2">
                    </li>
                    <li class="shop-coupon-modal">
                        <img class="lazyload"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                data-src="//theme.hstatic.net/200000584705/1000969925/14/shop_coupon_item_image_3.png?v=2491" alt="cusPro-coupon-3">
                    </li>
                </ul>
            </div>
        </div>
        <div class="main-product-cta">
            <button class="add_cart w-100 mb-3">
                <strong>Thêm vào giỏ</strong>
                <span>Chọn ngay sản phẩm bạn yêu thích</span>
            </button>
            <a href="{{route('contact')}}" data-type="main-product-send-info" ">
                <strong>Liên hệ</strong>
                <span>Chúng tôi luôn bên bạn 24/7</span>
            </a>
        </div>
    </div>
</div>

<script>
    $('.select_1').click(function() {
        $('.color').css('outline', 'none')
        $(this).css('outline','1px solid #666')
        $('input[name=color]').val($('.select_1').attr('data-value'))
    })
    $('.select_2').click(function() {
        $('.color').css('outline', 'none')
        $(this).css('outline','1px solid #666')
        $('input[name=color]').val($('.select_2').attr('data-value'))
    })
    $('.type_1').click(function() {
        $('.type').css('outline','none')
        $(this).css('outline','1px solid #666')
        $('input[name=type_product]').val($('.type_1').attr('data-value'))
    })
    $('.type_2').click(function() {
        $('.type').css('outline','none')
        $(this).css('outline','1px solid #666')
        $('input[name=type_product]').val($('.type_2').attr('data-value'))
    })
$('.add_cart').click(function(e) {
    e.preventDefault()
    let _token = $('meta[name="csrf-token"]').attr('content');
    var name = $('#name').val();
    var price =  $('input[name=price]').val();
    var thumbnail = $('input[name=thumbnail]').val();
    var old_price = $('input[name=old_price]').val();
    var color = $('input[name=color]').val();
    var type = $('input[name=type_product]').val();
    var quantity = $('input[name=quantity]').val();
    $.ajax({
        type:"post",
        url:`{{route('addcart.ajax', $product->id)}}`,
        data: {
            _token: _token,
            name:name,
            price:price,
            old_price:old_price,
            thumbnail:thumbnail,
            color:color,
            type:type,
            quantity:quantity
        },
        success:function(res) {
            $('.shop-cart-count').text(res.quantity)
            $('.type').css('outline','none')
            $('.color').css('outline', 'none')
            $('input[name=color]').val('')
            $('input[name=type_product]').val('')
            toastr.success(res.success);
            $('.wrap_sp').text(res.data)
            $('.color_err').text('')
            $('.type_err').text('')
        },
        error:function(er) {
            if(er.responseJSON.errors.color) {
                $('.color_err').text(er.responseJSON.errors.color)
            } else {
                $('.color_err').text('')
            }
            if(er.responseJSON.errors.type) {
                $('.type_err').text(er.responseJSON.errors.type)
            } else {
                $('.type_err').text('')
            }
            toastr.error('Có lỗi gì đó ở đây !!!')
        }
    })

})
</script>

