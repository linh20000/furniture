	@extends('master')
  @section('content')
      
  <div class="banner">
      <div class="wrap">
          <a href="/" class="logo">
                  <h1 class="logo-text">F1GENZ Furniture 2</h1>
          </a>
      </div>
  </div>
      
  <div class="content">
        <div class="wrap d-flex w-100">
            <div class="main" style="padding-right:0; width:50%;">
                <div class="main-header">
                    <a href="{{route('home')}}" class="logo">
                        <h1 class="logo-text">F1GENZ Furniture 2</h1>   
                    </a>
                    <ul class="breadcrumb">
                        <li class="breadcrumb-item">
                            <a href="/cart">Giỏ hàng</a>
                        </li>
                        <li class="breadcrumb-item breadcrumb-item-current">
                            Thông tin giao hàng
                        </li>
                    </ul>
                </div>
                <div class="main-content">
                    <div id="checkout_order_information_changed_error_message"   class="hidden"  style="margin-bottom:15px"  >
                    <p class="field-message field-message-error alert alert-danger"><svg x="0px" y="0px" viewBox="0 0 286.054 286.054" style="enable-background:new 0 0 286.054 286.054;" xml:space="preserve"> <g> <path style="fill:#E2574C;" d="M143.027,0C64.04,0,0,64.04,0,143.027c0,78.996,64.04,143.027,143.027,143.027 c78.996,0,143.027-64.022,143.027-143.027C286.054,64.04,222.022,0,143.027,0z M143.027,259.236 c-64.183,0-116.209-52.026-116.209-116.209S78.844,26.818,143.027,26.818s116.209,52.026,116.209,116.209 S207.21,259.236,143.027,259.236z M143.036,62.726c-10.244,0-17.995,5.346-17.995,13.981v79.201c0,8.644,7.75,13.972,17.995,13.972 c9.994,0,17.995-5.551,17.995-13.972V76.707C161.03,68.277,153.03,62.726,143.036,62.726z M143.036,187.723 c-9.842,0-17.852,8.01-17.852,17.86c0,9.833,8.01,17.843,17.852,17.843s17.843-8.01,17.843-17.843 C160.878,195.732,152.878,187.723,143.036,187.723z"/> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg> 
                    </p>
                    </div>
                    <script>
                        $("html, body").animate({ scrollTop: 0 }, "slow");
                    </script>
                    <div class="step">
                        <div class="step-sections " step="1">
                            <div class="section">
                                <div class="section-header">
                                    <h2 class="section-title">Thông tin giao hàng</h2>
                                </div>
                                <div class="section-content section-customer-information no-mb">
                                    <input name="utf8" type="hidden" value="✓">
                                    <div class="fieldset">
                                        <div class="field   field-show-floating-label">
                                            <div class="field-input-wrapper">
                                                <label class="field-label" for="billing_address_full_name">Họ và tên</label>
                                                <input placeholder="Họ và tên" autocapitalize="off"  spellcheck="false" class="field-input" size="30" type="text" id="name" name="name" value=""  autocomplete="false"/>
                                            </div>
                                            <div class="error name"></div>
                                        </div>
                                            <div class="field  field-two-thirds  field-show-floating-label">
                                            <div class="field-input-wrapper">
                                                <label class="field-label" for="checkout_user_email">Email</label>
                                                <input autocomplete="false" placeholder="Email" autocapitalize="off" spellcheck="false" class="field-input" size="30" type="email" id="email" name="email" value="" />
                                            </div>
                                            <div class="error email"></div>
                                        </div>
                                        <div class="field field-required field-third  field-show-floating-label">
                                            <div class="field-input-wrapper">
                                                <label class="field-label" for="billing_address_phone">Số điện thoại</label>
                                                <input autocomplete="false" placeholder="Số điện thoại" autocapitalize="off" spellcheck="false" class="field-input" size="30" maxlength="15" type="tel" id="phoneNumber" name="phoneNumber" value="" />
                                            </div>
                                            <div class="error phoneNumber"></div>
                                        </div>
                                        <div class="field   field-show-floating-label">
                                            <div class="field-input-wrapper">
                                                <label class="field-label" for="">Tỉnh / Thành phố</label>
                                                <input placeholder="Tỉnh / Thành phố" autocapitalize="off" spellcheck="false" class="field-input" size="30" type="text" id="province" name="province" value=""  autocomplete="false"/>
                                            </div>
                                            <div class="error province"></div>
                                        </div>
                                        <div class="field   field-show-floating-label">
                                            <div class="field-input-wrapper">
                                                <label class="field-label" for="billing_address_full_name">Quận / Huyện</label>
                                                <input placeholder="Quận / Huyện" autocapitalize="off" spellcheck="false" class="field-input" size="30" type="text" id="district" name="district" value=""  autocomplete="false"/>
                                            </div>
                                            <div class="error district"></div>
                                        </div>
                                        <div class="field   field-show-floating-label">
                                            <div class="field-input-wrapper">
                                                <label class="field-label" for="billing_address_full_name">Phường / Xã</label>
                                                <input placeholder="Phường / Xã" autocapitalize="off" spellcheck="false" class="field-input" size="30" type="text" id="wards" name="wards" value=""  autocomplete="false"/>
                                            </div>
                                            <div class="error wards"></div>
                                        </div>
                                        <div class="field   field-show-floating-label">
                                            <div class="field-input-wrapper">
                                                <label class="field-label" for="billing_address_full_name">Địa chỉ </label>
                                                <input placeholder="Địa chỉ" autocapitalize="off" spellcheck="false" class="field-input" size="30" type="text" id="address" name="address" value=""  autocomplete="false"/>
                                            </div>
                                            <div class="error address"></div>
                                        </div>
                                        <div class="field   field-show-floating-label">
                                            <div class="field-input-wrapper">
                                                <label class="field-label" for="billing_address_full_name">Ghi chú</label>
                                                <textarea placeholder="Ghi chú" autocapitalize="off" spellcheck="false" class="field-input" size="30" type="text" id="note" name="note" value=""  autocomplete="false"/></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <br>
                                    <br>
                                    <div class="section-header">
                                        <h2 class="section-title">Phương thức vận chuyển</h2>
                                    </div>
                                    <div class="section-content">
                                        <div class="content-box">
                                            <div class="content-box-row">
                                                <div class="radio-wrapper">
                                                    <label class="radio-label" for="shipping_rate_id_1000252219">
                                                        <div class="radio-input">
                                                            <input id="shipping_rate_id_1000252219" class="input-radio" type="radio" name="shipping" value="Giao tận nơi" checked="">
                                                        </div>
                                                        <span class="radio-label-primary">Giao hàng tận nơi</span>
                                                        <span class="radio-accessory content-box-emphasis">
                                                                0₫
                                                        </span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
               
                <div class="hrv-coupons-popup-site-overlay"></div>
                <div class="main-footer footer-powered-by">Powered by Ommanisoft</div>
            </div>
            {{--  --}}
            <div class="sidebar" style="width:50%;">
                <div class="sidebar-content">
                    <div class="order-summary order-summary-is-collapsed">
                        <h2 class="visually-hidden">Thông tin đơn hàng</h2>
                        <div class="order-summary-sections">
                            <div class="order-summary-section order-summary-section-product-list" data-order-summary-section="line-items">
                                <table class="product-table">
                                    <thead>
                                        <tr>
                                            <th scope="col"><span >Hình ảnh</span></th>
                                            <th scope="col"><span >Mô tả</span></th>
                                            <th scope="col"><span >Giá</span></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        @if (Cart::count() != 0)
                                            @foreach (Cart::content() as $item)
                                                <tr class="product" data-product-id="{{$item->rowId}}" data-variant-id="{{$item->rowId}}">
                                                    <td style="min-width:100px;" class="product-image" >
                                                        <div class="product-thumbnail" >
                                                            <div class="product-thumbnail-wrapper">
                                                                <img class="product-thumbnail-image" alt="Bàn gỗ cao cấp 4 chân Haynes" src="{{$item->options->thumbnail}}" />
                                                            </div>
                                                            <span class="product-thumbnail-quantity" aria-hidden="true">{{$item->qty}}</span>
                                                        </div>
                                                    </td>
                                                    <td style="min-width:100px;" class="product-description">
                                                        <span class="product-description-name order-summary-emphasis">{{$item->name}}</span>
                                                        
                                                            <span class="product-description-variant order-summary-small-text">
                                                            {{$item->options->color}}  / {{$item->options->type}}
                                                            </span>
                                                    </td>
                                                    <td style="min-width:100px;" class="product-price">
                                                        <span class="order-summary-emphasis">{{number_format($item->price * $item->qty)}}₫</span>
                                                    </td>
                                                </tr>
                                            @endforeach
                                        @else
                                            Không có sản phẩm
                                        @endif
                                    </tbody>
                                </table>
                            </div>
                            <div class="order-summary-section order-summary-section-total-lines payment-lines" data-order-summary-section="payment-lines">
                                <table class="total-line-table">
                                    <thead>
                                        <tr>
                                            <th scope="col"><span class="visually-hidden">Mô tả</span></th>
                                            <th scope="col"><span class="visually-hidden">Giá</span></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="total-line total-line-subtotal">
                                            <td class="total-line-name">Tạm tính</td>
                                            <td class="total-line-price">
                                                <span class="order-summary-emphasis" data-checkout-subtotal-price-target="37142000000">
                                                    {{Cart::subtotal()}}₫
                                                </span>
                                            </td>
                                        </tr>
                                        
                                        
                                        <tr class="total-line total-line-shipping">
                                            <td class="total-line-name">Phí vận chuyển</td>
                                            <td class="total-line-price">
                                                <span class="order-summary-emphasis" data-checkout-total-shipping-target="0">
                                                    
                                                        —
                                                    
                                                </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                    <tfoot class="total-line-table-footer">
                                        <tr class="total-line">
                                            <td class="total-line-name payment-due-label">
                                                <span class="payment-due-label-total">Tổng cộng</span>
                                            </td>
                                            <td class="total-line-name payment-due">
                                                <span class="payment-due-currency">VND</span>
                                                <span class="payment-due-price" data-checkout-payment-due-target="37142000000">
                                                    {{Cart::subtotal()}}₫
                                                </span>
                                                <span class="checkout_version" display:none data_checkout_version="52">
                                                </span>
                                            </td>
                                        </tr>
                                    </tfoot>
                                </table>
                                <div class="error product"></div>
                            </div>
                        </div>
                    </div>
                    <div class="step-footer"  id="step-footer-checkout">
                        <div id="form_next_step" accept-charset="UTF-8" method="post">
                            <input name="utf8" type="hidden" value="✓">
                            <button type="submit" class="step-footer-continue-btn btn payment">
                                <span class="btn-content">Đặt hàng</span>
                                <i class="btn-spinner icon icon-button-spinner"></i>
                            </button>
                        </div>
                        <a class="step-footer-previous-link" href="{{route('showCart')}}">
                            Giỏ hàng
                        </a>
                    </div>
                </div>
            </div>
        </div>
  </div>
<div class="form-row place-order">
    <input type="submit" class="button alt" name="woocommerce_checkout_place_order" id="place_order" value="Đặt hàng" data-value="Đặt hàng">
    <input type="hidden" name="product" value="{{Cart::content()}}">
    <input type="hidden" name="total" value="{{Cart::subtotal()}}">
    <input type="hidden" name="qty" value="{{Cart::count()}}">
    <input type="hidden" name="status" value="1">
</div>

<script>
    $('.payment').click(function(e) {
        e.preventDefault();
        let _token = $('meta[name="csrf-token"]').attr('content');
        let name = $('#name').val();
        let email = $('input[name=email]').val();
        let phoneNumber = $('input[name=phoneNumber]').val();
        let province = $('input[name=province]').val();
        let district = $('input[name=district]').val();
        let wards = $('input[name=wards]').val();
        let address = $('input[name=address]').val();
        let note = $('textarea[name=note]').val();
        let product = $('input[name=product]').val();
        let total = $('input[name=total]').val();
        let qty = $('input[name=qty]').val();
        let status = $('input[name=status]').val();
        let shipping = $('input[name=shipping]').val();
        $.ajax({
            type:"post",
            url:`{{route('payment.ajax')}}`,
            data:{
                _token : _token,
                name : name,
                email : email,
                phoneNumber : phoneNumber,
                province : province,
                district : district,
                wards : wards,
                address : address,
                note : note,
                product : product,
                total : total,
                qty : qty,
                status : status,
                shipping : shipping,
            },
            success:(res)=>{
                toastr.success(res.success)
                $('.name').text('')
                $('.email').text('')
                $('.phoneNumber').text('')
                $('.province').text('')
                $('.district').text('')
                $('.wards').text('')
                $('.address').text('')
                $('input[name=name]').val('');
                $('input[name=email]').val('');
                $('input[name=phoneNumber]').val('');
                $('input[name=province]').val('');
                $('input[name=district]').val('');
                $('input[name=wards]').val('');
                $('input[name=address]').val('');
            },
            error:(er)=>{
                er.responseJSON.errors.name ?  $('.name').text(er.responseJSON.errors.name) : $('.name').text('')
                er.responseJSON.errors.email ?  $('.email').text(er.responseJSON.errors.email) : $('.email').text('')
                er.responseJSON.errors.phoneNumber ?  $('.phoneNumber').text(er.responseJSON.errors.phoneNumber) : $('.phoneNumber').text('')
                er.responseJSON.errors.province ?  $('.province').text(er.responseJSON.errors.province) : $('.province').text('')
                er.responseJSON.errors.district ?  $('.district').text(er.responseJSON.errors.district) : $('.district').text('')
                er.responseJSON.errors.wards ?  $('.wards').text(er.responseJSON.errors.wards) : $('.wards').text('')
                er.responseJSON.errors.address ?  $('.address').text(er.responseJSON.errors.address) : $('.address').text('')
                toastr.error('Vui lòng kiểm tra lại thông tin')
            }
        })
    })
</script>
@endsection      
	

