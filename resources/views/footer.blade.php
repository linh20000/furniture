<footer class="footer">
    <div class="container">
        <div class="footer-top">
            <div class="footer-top-item">
                <h4>Dịch vụ khách hàng</h4>
                <ul class="footer-top-item-content">
                    @foreach ($policies as $item)
                        <li><a href="{{route('blogDetail_policy', [$item->id, Str::slug($item->name)])}}" title="{{$item->name}}">{{$item->name}}</a></li>
                        
                    @endforeach
                </ul>
            </div>
            <div class="footer-top-item">
                <h4>Thông tin</h4>
                <ul class="footer-top-item-content">
                    <li><a href="{{route('collectionAll')}}" title="Tất cả sản phẩm">Tất cả sản phẩm</a></li>
                    @foreach ($interior as $item)
                    <li><a href={{route('collection' ,[$item->id , Str::slug($item->name)] )}}" title="Nội Thất Phòng Khách">{{$item->name}}</a></li>
                    @endforeach
                </ul>
            </div>

            <div class="footer-top-item">
                <h4>Về chúng tôi</h4>
                 <ul class="footer-top-item-content">
                    @foreach ($policies as $item)
                        <li><a href="{{route('blogDetail_policy', [$item->id, Str::slug($item->name)])}}" title="{{$item->name}}">{{$item->name}}</a></li>
                    @endforeach
                </ul>
            </div>
            <div class="footer-top-item">
                <h4>Liên hệ</h4>
                <div class="footer-top-item-content">
                    Chúng tôi hướng tới sự khác biệt trong từng chi tiết, tạo nên ngôn ngữ riêng cho bày trí nội thất, đem đến một không gian tinh tế trong từng đường nét. Nhưng trên tất cả, sự tin tưởng của khách hàng là điều F1GENZ FURNITURE 2 đề cao nhất, và đây cũng là tôn chỉ hoạt động của công ty. Do đó, đến với chúng tôi, hơn cả một không gian hoàn mỹ, khách...
                </div>
            </div>
        </div>
    </div>
    <div class="footer-bot">
        <div class="container">
            <div class="copyright">
                <div class="row align-items-center">
                    <div class="col-md-3 text-md-left  text-center">
                        <div class="logo-footer">
                            <a href="index.html" class="logo" title="F1GENZ Furniture 2">
                                <img class="lazyload" src="{{$config->logo}}"
                                        width="150" height="40" data-src="{{$config->logo}}" alt="F1GENZ Furniture 2">
                            </a>
                        </div>
                    </div>
                    <div class="col-md-4  text-center"></div>
                    <div class="col-md-5  text-md-right  text-center">
                        <p class="text-copyright mb-0">© 2023 - All rights reserved by <a target="_blank" href="https://Ommanisoft.com/">Ommanisoft TECHNOLOGY CO., LTD.</a> <a target="_blank" href="https://www.Ommanisoft.com/">Powered by Ommanisoft</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>