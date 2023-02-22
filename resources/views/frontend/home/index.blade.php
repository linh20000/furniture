@extends('master')
@section('script')
     <script>
        window.F1GENZ_vars = {
            template: "index",
            account: {
                logged: false,
                id: null,
                email: null
            },
            shop: {
                url: "http://127.0.0.1:8000/",
                name: "F1GENZ Furniture 2",
                phone: "0932093794",
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
                data: null,
                gift: false,
                availableOption: true,
                featured: {
                    style_gallery: "style1",
                    contact_0: {
                        text: "Liên hệ ngay 1900.63.60.99",
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
        @include('frontend.home.slide')
        @include('frontend.home.four_banner')
        @include('frontend.home.fsale')
        @include('frontend.home.six_banner')
        @include('frontend.home.product_pos')
        @include('frontend.home.product_grid')
        @include('frontend.home.instar')
        @include('frontend.home.product_tab')
        @include('frontend.home.home_blog')
        @include('frontend.home.home_store')
        @include('frontend.home.newletter')
    </main>
@endsection 