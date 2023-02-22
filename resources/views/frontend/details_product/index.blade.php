@extends('master')
@section('script')
	<script>
        window.F1GENZ_vars = { 			
            template: "product.style2",
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
    <div class="main-product">
        
        @include('frontend.details_product.detail_breadcrumb')
        <div class="container">
           @include('frontend.details_product.details')

            @include('frontend.details_product.details_description')
            
            @include('frontend.details_product.together')
           
            {{-- @include('frontend.details_product.review') --}}
            
            {{-- @include('frontend.details_product.relation') --}}
        </div>
    </div>
</main>


@endsection