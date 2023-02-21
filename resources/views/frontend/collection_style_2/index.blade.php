@extends('master')

@section('script')
	<script>
			window.F1GENZ_vars = { 			
				template: "collection.horizontal",
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
    <script>window.F1GENZ_vars.collection.featured = "horizontal"</script>
	<div class="main-collection " data-id="0">
		<div class="main-collection-breadcrumb lazyload" data-bg="../../theme.hstatic.net/200000584705/1000969925/14/main_collection_breadcrumb_bg8eb1.png?v=2483">
			<div class="container">
				<div class="section-title-all">
					<h1>Tất cả sản phẩm</h1>
				</div>
				<div class="breadcrumb-wrap">
					<ol class="breadcrumb">
						<li class="breadcrumb-item"><a href="{{route('home')}}">Trang chủ</a></li>

						<li class="breadcrumb-item active"><span>Tất cả sản phẩm</span></li>
					</ol>
				</div>
			</div>
		</div>
		<div class="container">
			<div class="main-collection-wrap horizontal">
				@include('frontend.collection.filter')
				@include('frontend.collection.product_list')
			</div>
		</div>
	</div>
</main>
<script>
	$('.filter').on('click', function(e) {
		e.preventDefault();
		let _token = $('meta[name="csrf-token"]').attr('content');
		var brands = [];
		var types = [];
		var sizes = [];
		var prices = [];
		$('input[name="brand"]:checked').each(function() {
			brands.push($(this).val());
		});
		$('input[name="size"]:checked').each(function() {
			sizes.push($(this).val());
		});
		$('input[name="type"]:checked').each(function() {
			types.push($(this).val());
		});
		$('input[name="price"]:checked').each(function() {
			prices.push($(this).val());
		});
		$.ajax({
			type: "get",
			url: "{{route('filter')}}",
			data: { 
				_token:_token,
				brands: brands,
				types: types,
				sizes: sizes,
				prices: prices
			},
			success: function(response) {
                $('.main-collection-data').html(response.data);
            }
		});
	})
	
</script>
@endsection