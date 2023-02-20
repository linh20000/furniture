@extends('master')


@section('content')

<main class="main-layout">
    <div class="main-product">
        
        <div class="container">
           @include('frontend.details_product.details')

            @include('frontend.details_product.details_description')
            
            @include('frontend.details_product.together')
           
            @include('frontend.details_product.review')
            
            {{-- @include('frontend.details_product.relation') --}}
        </div>
    </div>
    <div class="modal fade" role="dialog" id="preOrder-modal">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-body">
                    <h5>Tư vấn thiết kế giao diện</h5>
                    <div class="preOrder-modal-wrap">
                        <form accept-charset='UTF-8' action='/contact' class='contact-form' method='post'>
                            <input name='form_type' type='hidden' value='contact'>
                            <input name='utf8' type='hidden' value='✓'>
                            <input required type="text" name="contact[name]" value="" placeholder="Họ tên của bạn">
                            <input required type="email" name="contact[email]" value="" placeholder="Email của bạn">
                            <input required type="text" name="contact[phone]" value="" placeholder="Số điện thoại của bạn">
                            <input type="text" readonly value="" id="preOrder-hard">
                            <textarea name="contact[body]" placeholder="Nhập nội dung bạn cần tư vấn"></textarea>
                            <button type="submit">Đăng ký</button>
                            <input id='2f77080c2aa940c9aa4f0bc6179cf463' name='g-recaptcha-response' type='hidden'><noscript data-src='https://www.google.com/recaptcha/api.js?render=6LdD18MUAAAAAHqKl3Avv8W-tREL6LangePxQLM-'></noscript><noscript>grecaptcha.ready(function() {grecaptcha.execute('6LdD18MUAAAAAHqKl3Avv8W-tREL6LangePxQLM-', {action: 'submit'}).then(function(token) {document.getElementById('2f77080c2aa940c9aa4f0bc6179cf463').value = token;});});</noscript>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

</main>


@endsection