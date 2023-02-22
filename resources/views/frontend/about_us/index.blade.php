@extends('master')
@section('script')
	<script>
			window.F1GENZ_vars = { 			
				template: "page.contact",
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
    <div class="page-about-new">
        <div class="container">
            <div class="page-about-new-main">
                <div class="page-about-new-main-item">
                    <div class="page-about-new-main-item-left">
                        <img src="//theme.hstatic.net/200000584705/1000969925/14/page-about-new-image-1.png?v=2483"
                            class="img-fluid" alt="image-contact-1">
                    </div>
                    <div class="page-about-new-main-item-right">
                        <div class="section-title-all">
                            <span>Về Chúng Tôi</span>
                            <p>F1GENZ FURNITURE là một thương hiệu chuyên cung cấp các dịch vụ thiết kế đến thi công
                                nội thất trọn gói cho căn hộ. Chúng tôi là một công ty liên doanh giữa Việt Nam và
                                Hong Kong. Với mục tiêu mang lại cho bạn không gian lý tưởng, sản phẩm nội thất sáng
                                tạo, dịch vụ chuyên nghiệp. Chúng tôi luôn xây dựng một mối quan hệ chặt chẽ với
                                khách hàng và tiếp cận trực tiếp với các dự án. Các thiết kế của F1GENZ FURNITURE
                                luôn độc đáo và phù hợp theo không gian của bạn. Chúng tôi luôn phát triển các gói
                                nội thất mang tính đặc trưng, hấp dẫn và luôn đảm bảo chất lượng tốt.</p>
                        </div>
                    </div>
                </div>
                <div class="page-about-new-main-item">
                    <div class="page-about-new-main-item-left">
                        <img src="//theme.hstatic.net/200000584705/1000969925/14/page-about-new-image-2.png?v=2483"
                            class="img-fluid" alt="image-contact-2">
                    </div>
                    <div class="page-about-new-main-item-right">
                        <div class="section-title-all">
                            <span>Liên hệ</span>
                            <p>F1GENZ FURNITURE tự hào cung cấp đến bạn những thiết kế đầy sáng tạo của đội ngũ
                                chuyên nghiệp và đó là chìa khóa thành công của công ty chúng tôi. Luôn lắng nghe
                                những cảm hứng và ý tưởng của khách hàng và giúp những ước mơ của mỗi cá nhân trở
                                thành hiện thực, điều này tạo thêm sự tin tưởng và thân thiện khi khách hàng làm
                                việc với F1GENZ FURNITURE.</p>
                        </div>
                    </div>
                </div>
                <div class="page-about-new-contact">
                    <form accept-charset='UTF-8'  class='contact-form'>
                       @csrf
                        <div class="section-title-all">
                            <span>Kết nối ngay với chúng tôi</span>
                            <h1 hidden>Liên hệ</h1>
                        </div>
                        <input required type="text" id="contactFormName" class="form-control input-lg"
                            name="name" placeholder="Tên của bạn" autocapitalize="words"
                            value="">
                            <p class="error name"></p>
                        <input required type="text" id="contactFormPhone" class="form-control input-lg"
                            name="phoneNumber" placeholder="Số điện thoại" autocapitalize="words" value="">
                            <p class="error phoneNumber"></p>
                        <input required type="text" id="contactFormPhone" class="form-control input-lg"
                        name="address" placeholder="Địa chỉ" autocapitalize="words" value="">
                            <p class="error address"></p>
                        <input required type="email" name="email" placeholder="Email của bạn"
                            id="contactFormEmail" class="form-control input-lg" value="">
                            <p class="error email"></p>
                            <br>
                        <textarea required rows="6" name="content" class="form-control"
                            placeholder="Viết bình luận" id="contactFormMessage"></textarea>
                            <p class="error content"></p>
                        <div  class="btn btn-outline insButton">Gửi thông tin</div>
                        <ul class="shop-social">
                            <li><a href="{{$config->network_fb}}" target="_blank" title="Chia sẻ qua Facebook"><img
                                        width="30" height="30" class="lazyload"
                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                        data-src="https://file.hstatic.net/200000588277/file/facebook__6__53aaa8d352524d3eb025af5203eaa437_icon.png"
                                        alt=" - Facebook"></a></li>


                            <li><a href="{{$config->network_ins}}" target="_blank" title="Chia sẻ qua Pinterest"><img
                                        width="30" height="30" class="lazyload"
                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                        data-src="https://file.hstatic.net/200000588277/file/pinterest_a1a15995132a4275845412deba5f1193_icon.png"
                                        alt=" - Pinterest"></a></li>


                            <li><a href="{{$config->network_titok}}" target="_blank" title="Chia sẻ qua Tiktok"><img
                                        width="30" height="30" class="lazyload"
                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                        data-src="https://file.hstatic.net/200000588277/file/tik-tok_d85bb4e7468c43ac9ed5437649b7405c_icon.png"
                                        alt=" - Twitter"></a></li>


                            <li><a href="{{$config->net_work_ins}}" target="_blank" title="Chia sẻ qua Instagram"><img
                                        width="30" height="30" class="lazyload"
                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                        data-src="https://file.hstatic.net/200000588277/file/instagram__3__7de3ebbce1f24003b516ca6c1d7c24d5_icon.png"
                                        alt=" - Linkedin"></a></li>

                        </ul>
                        <input id='status' name='status' type='hidden' value="0">
                    </form>
                    <div class="page-about-new-contact-map">
                        <iframe src="{{$config->google_map}}"
                          width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>

<script>
    $('.insButton').on('click', function(e) {
        e.preventDefault();
		let _token = $('meta[name="csrf-token"]').attr('content');
        let name = $('input[name=name]').val();
        let phoneNumber = $('input[name=phoneNumber]').val();
        let email = $('input[name=email]').val();
        let address = $('input[name=address]').val();
        let content = $('textarea[name=content]').val();
        let status = $('input[name=status]').val();

        $.ajax({
            type:'post',
            url:`{{route('advisory.ajax')}}`,
            data: {
                _token:_token,
                name:name,
                phoneNumber:phoneNumber,
                email:email,
                address:address,
                content:content,
                status:status,
            },
            success: function(res) {
                $('input[name=name]').val('');
                $('input[name=phoneNumber]').val('');
                $('input[name=email]').val('');
                $('input[name=address]').val('');
                $('textarea[name=content]').val('');
                toastr.success(res.success)
                $('.name').val('');
                $('.phoneNumber').val('')
                $('.email').val('')
                $('.address').val('')
                $('.content').val('')
            },
            error:function(err) {
                err.responseJSON.errors.name ? $('.name').text(err.responseJSON.errors.name) : $('.name').val('')
                err.responseJSON.errors.phoneNumber ? $('.phoneNumber').text(err.responseJSON.errors.phoneNumber) : $('.phoneNumber').val('')
                err.responseJSON.errors.email ? $('.email').text(err.responseJSON.errors.email) : $('.email').val('')
                err.responseJSON.errors.address ? $('.address').text(err.responseJSON.errors.address) : $('.address').val('')
                err.responseJSON.errors.content ? $('.content').text(err.responseJSON.errors.content) : $('.content').val('')
            }
        })
    })
</script>
@endsection