@extends('backend.layout_default')

@section('content')
<section class=" app-content content">
    <!-- Default box -->
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1>Thêm sản phẩm</h1>
            </div>
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right justify-content-end">
                    <li class="breadcrumb-item"><a href="{{route('admin.home')}}">Trang chủ</a></li>
                    <li class="breadcrumb-item active">{{$breadcrumb}}</li>
                </ol>
            </div>
        </div>
    </div><!-- /.container-fluid -->
    @if(session()->has('success'))
        <div class="txt pb-2 pt-2 ps-2 alert alert-success h3">
        {{ session()->get('success') }}
        </div>
    @endif
    <script>
        setTimeout(()=> {
            $('.txt').addClass('d-none')
        },2000)
    </script>
<div class="row">
    <div class="col-md-9">
        <div class="card">
            <div class="card-header">
            </div>
            <div class="card-body p-0">
                <form id="cerfitication" action="{{route('admin.InterioraddProduct')}}" method="POST" enctype="multipart/form-data">
                    @csrf
                    <div class="row">
                        <div class="col-md-12">
                            <div class="card card-primary">
                                <div class="card-header">
                                    <h3 class="card-title">Thông tin</h3>

                                    <div class="card-tools">
                                        <button type="button" class="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
                                            <i class="fas fa-minus"></i></button>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <div class="form-group mt-1 mb-1">
                                        <label for="inputName" class="form-label mb-1">Tên</label>
                                        <input type="text" id="name" name="name" value="" class="form-control" placeholder="Nhập tên">
                                         @error('name')
                                        <span class="text-danger mt-1 d-block">{{ $message }}</span>
                                        @enderror
                                    </div>
                                    <div class="form-group mt-1 mb-1">
                                        <label for="inputName" class="form-label mb-1">Mã sản phẩm</label>
                                        <input type="text" id="product_code" name="product_code" value="" class="form-control" placeholder="Nhập mã sản phẩm">
                                         @error('product_code')
                                        <span class="text-danger mt-1 d-block">{{ $message }}</span>
                                        @enderror
                                    </div>
                                     <div class="form-group mt-1 mb-1">
                                        <label for="category_id" class="form-label mb-1">Danh mục cha</label>
                                        <select class="form-control custom-select" name="category_id" id="category_id" placeholder="">
                                            @foreach($category_id as $parent_category)
                                            <option value="{{$parent_category->id}}">{{$parent_category->name}}</option>
                                            @endforeach
                                        </select>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group mt-1 mb-1">
                                                <label for="category_id" class="form-label mb-1">Tags</label>
                                                <select class="form-control custom-select" name="tags" id="tags" placeholder="">
                                                    <option value="new">Hàng mới</option>
                                                    <option value="bestSeller">Best seller</option>
                                                    <option value="hot">Bán chạy</option>
                                                    <option value="sale">Giảm giá</option>
                                                    <option value="monopoly">Độc quyền</option>
                                                    <option value="mall">Mua sắm</option>
                                                    <option value="gift">Quà tặng</option>
                                                    <option value="freeship">Miễn phí ship</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group mt-1 mb-1">
                                                <label for="category_id" class="form-label mb-1">Dòng sản phẩm</label>
                                                <select class="form-control custom-select" name="product_line" id="product_line" placeholder="">
                                                    <option value="chairs">Ghế</option>
                                                    <option value="tables">Bàn</option>
                                                    <option value="cabinet">tủ</option>
                                                    <option value="shelf">kệ treo tường</option>
                                                    <option value="lamp">Đèn</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group mt-1 mb-1">
                                                <label for="size" class="form-label mb-1">Kích cỡ</label>
                                                <select class="form-control custom-select" name="size" id="size" placeholder="">
                                                    <option value="30x40">30 x 40 cm</option>
                                                    <option value="40x30">40 x 30 cm</option>
                                                    <option value="100x30">100 x 30 cm</option>
                                                    <option value="50x30">50 x 30 cm</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                             <div class="form-group mt-1 mb-1">
                                                <label for="inputName" class="form-label mb-1">Nhãn hàng</label>
                                                <input type="text" id="trademark" name="trademark" value="" class="form-control" placeholder="Nhập mã sản phẩm">
                                                @error('trademark')
                                                <span class="text-danger mt-1 d-block">{{ $message }}</span>
                                                @enderror
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-group mt-1 mb-1">
                                        <label for="old_price" class="form-label mb-1">Giá gốc</label>
                                        <input type="number" id="old_price" name="old_price" oninput="this.value = this.value.replace(/[^0-9.]/g, '')" value="" class="form-control" placeholder="Nhập giá gốc">
                                         @error('old_price')
                                        <span class="text-danger mt-1 d-block">{{ $message }}</span>
                                        @enderror
                                    </div>
                                    <div class="form-group mt-1 mb-1">
                                        <label for="percent_discount" class="form-label mb-1">Giảm giá %</label>
                                        <input type="number" id="percent_discount" name="percent_discount"  oninput="this.value = this.value.replace(/[^0-9.]/g, '')" min="0" max="100" value="" class="form-control" placeholder="Nhập phần trăm giảm giá ">
                                        @error('percent_discount')
                                        <span class="text-danger mt-1 d-block">{{ $message }}</span>
                                        @enderror
                                    </div>
                                    <div class="form-group mt-1 mb-1">
                                        <label for="sale_price" class="form-label mb-1">Giá hiện tại</label>
                                        <input type="text" id="sale_price" name="sale_price" value=""  oninput="this.value = this.value.replace(/[^0-9.]/g, '')" class="form-control" placeholder="Bạn cũng có thể nhập giá hiện tại tại đây!">
                                         @error('sale_price')
                                        <span class="text-danger mt-1 d-block">{{ $message }}</span>
                                        @enderror
                                    </div>
                                    <div class="form-group">
                                        <label for="status">Trạng thái</label>
                                        <select class="form-control custom-select" name="status" id="status">
                                            <option value="1">Còn hàng</option>
                                            <option value="0">Hết hàng</option>
                                        </select>
                                    </div>
                                    <div class="form-group mt-1 mb-1">
                                        <label for="description" class="form-label mb-1">Mô tả</label>
                                        <textarea class="form-control" id="summary-ckeditor" name="description"></textarea>
                                         @error('description')
                                        <span class="text-danger mt-1 d-block">{{ $message }}</span>
                                        @enderror
                                    </div>
                                    <div class="form-group mt-1 mb-1">
                                        <label for="specifications" class="form-label mb-1">Thông số kĩ thuật</label>
                                        <textarea class="form-control" id="summary-ckeditor-specifications" name="specifications"></textarea>
                                         @error('specifications')
                                        <span class="text-danger mt-1 d-block">{{ $message }}</span>
                                        @enderror
                                    </div>
                                    
                                    <div class="row">
                                        <div class="col-md-2">
                                            <h5 class="mt-2 mb-2">Hình ảnh 1</h5>
                                            <div id="imgList" class="thumbnail_1" 
                                            style="
                                                width: 50px;
                                                height: 50px;
                                                overflow: hidden;
                                                display: flex;
                                                justify-content: center;
                                                align-items: center;
                                                margin: 0 auto;
                                                margin-bottom: 20px;
                                                ">
                                                <input type="hidden" id="" name="thumbnail_list[]" value="" class="form-control" placeholder="Nhập mã sản phẩm">
                                                <img style="width:100%; height:100%; border-radius:50%; object-fit:cover;" id="thumbnail_1" src="{{asset('empty/empty_img.png')}}"  alt="..">
                                            </div>
                                        </div>
                                        <div class="col-md-2">
                                            <h5 class="mt-2 mb-2">Hình ảnh 2</h5>
                                            <div id="imgList" class="thumbnail_2" 
                                            style="
                                                width: 50px;
                                                height: 50px;
                                                overflow: hidden;
                                                display: flex;
                                                justify-content: center;
                                                align-items: center;
                                                margin: 0 auto;
                                                margin-bottom: 20px;
                                                ">
                                                <input type="hidden" id="" name="thumbnail_list[]" value="" class="form-control" placeholder="Nhập mã sản phẩm">
                                                <img style="width:100%; height:100%; border-radius:50%; object-fit:cover;" id="thumbnail_2" src="{{asset('empty/empty_img.png')}}"  alt="..">
                                            </div>
                                        </div>
                                        <div class="col-md-2">
                                            <h5 class="mt-2 mb-2">Hình ảnh 3</h5>
                                            <div id="imgList" class="thumbnail_3" 
                                            style="
                                                width: 50px;
                                                height: 50px;
                                                overflow: hidden;
                                                display: flex;
                                                justify-content: center;
                                                align-items: center;
                                                margin: 0 auto;
                                                margin-bottom: 20px;
                                                ">
                                                <input type="hidden" id="" name="thumbnail_list[]" value="" class="form-control" placeholder="Nhập mã sản phẩm">
                                                <img style="width:100%; height:100%; border-radius:50%; object-fit:cover;" id="thumbnail_3" src="{{asset('empty/empty_img.png')}}"  alt="..">
                                            </div>
                                        </div>
                                        <div class="col-md-2">
                                            <h5 class="mt-2 mb-2">Hình ảnh 4</h5>
                                            <div id="imgList" class="thumbnail_4" 
                                            style="
                                                width: 50px;
                                                height: 50px;
                                                overflow: hidden;
                                                display: flex;
                                                justify-content: center;
                                                align-items: center;
                                                margin: 0 auto;
                                                margin-bottom: 20px;
                                                ">
                                                <input type="hidden" id="" name="thumbnail_list[]" value="" class="form-control" placeholder="Nhập mã sản phẩm">
                                                <img style="width:100%; height:100%; border-radius:50%; object-fit:cover;" id="thumbnail_4" src="{{asset('empty/empty_img.png')}}"  alt="..">
                                            </div>
                                        </div>
                                        <div class="col-md-2">
                                            <h5 class="mt-2 mb-2">Hình ảnh 5</h5>
                                            <div id="imgList" class="thumbnail_5" 
                                            style="
                                                width: 50px;
                                                height: 50px;
                                                overflow: hidden;
                                                display: flex;
                                                justify-content: center;
                                                align-items: center;
                                                margin: 0 auto;
                                                margin-bottom: 20px;
                                                ">
                                                <input type="hidden" id="" name="thumbnail_list[]" value="" class="form-control" placeholder="Nhập mã sản phẩm">
                                                <img style="width:100%; height:100%; border-radius:50%; object-fit:cover;" id="thumbnail_5" src="{{asset('empty/empty_img.png')}}"  alt="..">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mt-3"></div>
                                    <div class="">
                                        <h3 class="card-title">Biến thể</h3>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-2">
                                            <div class="form-group mt-1 mb-1">
                                                <label for="inputName" class="form-label mb-1">màu sắc 1</label>
                                                <input type="text" id="color_1" name="color_1" value="" class="form-control" placeholder="Nhập màu sắc">
                                            </div>
                                            <div id="imgList" class="thumbnail_color_1" 
                                            style="
                                                width: 50px;
                                                height: 50px;
                                                overflow: hidden;
                                                display: flex;
                                                justify-content: center;
                                                align-items: center;
                                                margin: 0 auto;
                                                margin-bottom: 20px;
                                                ">
                                                <input type="hidden" id="" name="thumbnail_color[]" value="" class="form-control" placeholder="">
                                                <img style="width:100%; height:100%; border-radius:50%; object-fit:cover;" id="thumbnail_color_1" src="{{asset('empty/empty_img.png')}}"  alt="..">
                                            </div>
                                             @error('color_1')
                                                <span class="text-danger mt-1 d-block">{{ $message }}</span>
                                            @enderror
                                        </div>
                                        <div class="col-md-2">
                                            <div class="form-group mt-1 mb-1">
                                                <label for="inputName" class="form-label mb-1">màu sắc 2</label>
                                                <input type="text" id="color_2" name="color_2" value="" class="form-control" placeholder="Nhập màu sắc">
                                            </div>
                                            <div id="imgList" class="thumbnail_color_2" 
                                            style="
                                                width: 50px;
                                                height: 50px;
                                                overflow: hidden;
                                                display: flex;
                                                justify-content: center;
                                                align-items: center;
                                                margin: 0 auto;
                                                margin-bottom: 20px;
                                                ">
                                                <input type="hidden" id="" name="thumbnail_color[]" value="" class="form-control" placeholder="">
                                                <img style="width:100%; height:100%; border-radius:50%; object-fit:cover;" id="thumbnail_color_2" src="{{asset('empty/empty_img.png')}}"  alt="..">
                                            </div>
                                            @error('color_2')
                                                <span class="text-danger mt-1 d-block">{{ $message }}</span>
                                            @enderror
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-2">
                                            <div class="form-group mt-1 mb-1">
                                                <label for="inputName" class="form-label mb-1">Kiểu loại 1</label>
                                                <input type="text" id="type_1" name="type_1" value="" class="form-control" placeholder="Nhập kiểu">
                                            </div>
                                            <div id="imgList" class="thumbnail_type_1" 
                                            style="
                                                width: 50px;
                                                height: 50px;
                                                overflow: hidden;
                                                display: flex;
                                                justify-content: center;
                                                align-items: center;
                                                margin: 0 auto;
                                                margin-bottom: 20px;
                                                ">
                                                <input type="hidden" id="" name="thumbnail_type[]" value="" class="form-control" placeholder="Nhập mã sản phẩm">
                                                <img style="width:100%; height:100%; border-radius:50%; object-fit:cover;" id="thumbnail_type_1" src="{{asset('empty/empty_img.png')}}"  alt="..">
                                            </div>
                                            @error('type_1')
                                                <span class="text-danger mt-1 d-block">{{ $message }}</span>
                                            @enderror
                                        </div>
                                        <div class="col-md-2">
                                            <div class="form-group mt-1 mb-1">
                                                <label for="inputName" class="form-label mb-1">Kiểu loại 2</label>
                                                <input type="text" id="type_2" name="type_2" value="" class="form-control" placeholder="Nhập kiểu">
                                            </div>
                                            <div id="imgList" class="thumbnail_type_2" 
                                            style="
                                                width: 50px;
                                                height: 50px;
                                                overflow: hidden;
                                                display: flex;
                                                justify-content: center;
                                                align-items: center;
                                                margin: 0 auto;
                                                margin-bottom: 20px;
                                                ">
                                                <input type="hidden" id="" name="thumbnail_type[]" value="" class="form-control" placeholder="">
                                                <img style="width:100%; height:100%; border-radius:50%; object-fit:cover;" id="thumbnail_type_2" src="{{asset('empty/empty_img.png')}}"  alt="..">
                                            </div>
                                            @error('type_2')
                                                <span class="text-danger mt-1 d-block">{{ $message }}</span>
                                            @enderror
                                        </div>
                                    </div>
                                    <div class="mt-3"></div>
                                    <div class="">
                                        <h3 class="card-title">Thông tin tìm kiếm</h3>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group mt-1 mb-1">
                                                <label for="seo_keyword" class="form-label mb-1">Seo keyword</label>
                                                <input type="text" id="seo_keyword" name="seo_keyword" value="" class="form-control">
                                                @if ($errors->has('seo_keyword'))
                                                    <span class="text-danger d-block mt-1">{{ $errors->first('seo_keyword') }}</span>
                                                @endif
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group mt-1 mb-1">
                                                <label for="seo_description" class="form-label mb-1">Seo description</label>
                                                <input type="text" id="seo_description" name="seo_description" value="" class="form-control">
                                                @if ($errors->has('seo_description'))
                                                    <span class="text-danger d-block mt-1">{{ $errors->first('seo_description') }}</span>
                                                @endif
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group mt-1 mb-1">
                                                <label for="seo_title" class="form-label mb-1">Seo title</label>
                                                <input type="text" id="seo_title" name="seo_title" value="" class="form-control">
                                                @if ($errors->has('seo_title'))
                                                    <span class="text-danger d-block mt-1">{{ $errors->first('seo_title') }}</span>
                                                @endif
                                            </div>
                                        </div>
                                    </div>
                                    <input type="hidden" name="thumbnail"  value="{{asset('empty/empty_img.png')}}">
                                </div>
                                <!-- /.card-body -->
                            </div>
                            <!-- /.card -->
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12  ps-5 mb-2">
                            <a href="{{route('admin.InteriorshowProductList')}}" class="btn btn-secondary">Quay lại</a>
                            <input type="submit" value="Thêm" class="btn btn-success float-right ms-2">
                        </div>
                    </div>
                    <input type="hidden" id="option" name="options" value="" >
                </form>
            </div>
            <!-- /.card-body -->
        </div>
    </div>
    <div class="col-lg-3 col-md-3 col-12">
        <div class="card card-app-design">
            <div class="card-header">
                <h4>Hình ảnh chính</h4>
            </div>
            <div class="card-body">
                <div id="imgList" 
                    style="
                        width: 230px;
                        height: 230px;
                        overflow: hidden;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        margin: 0 auto;
                        margin-bottom: 20px;
                    ">
                    <img style="width:100%; height:100%; border-radius:50%; object-fit:cover;" id="thumbnail_prev" src="{{asset('empty/empty_img.png')}}"  alt="..">
                </div>
                <button class="btn btn-primary btn-toggle-sidebar w-100 waves-effect waves-float waves-light" id="popup-1-button">
                    <span class="align-middle">Chọn ảnh</span>
                </button>
            </div>
        </div>
    </div>
</div>
<!-- /.card -->

</section>
  <script>
    var button = document.getElementById( 'popup-1-button' );
    var thumbnail1 = document.getElementById( 'thumbnail_1' );
    var thumbnail2 = document.getElementById( 'thumbnail_2' );
    var thumbnail3 = document.getElementById( 'thumbnail_3' );
    var thumbnail4 = document.getElementById( 'thumbnail_4' );
    var thumbnail5 = document.getElementById( 'thumbnail_5' );

    // 
    var thumbnail_color_1 = document.getElementById( 'thumbnail_color_1' );
    var thumbnail_color_2 = document.getElementById( 'thumbnail_color_2' );
    // 
    // 
    var thumbnail_type_1 = document.getElementById( 'thumbnail_type_1' );
    var thumbnail_type_2 = document.getElementById( 'thumbnail_type_2' );
    // 

    function selectFileWithCKFinder() {
        CKFinder.modal( {
            chooseFiles: true,
            width: 800,
            height: 600,
            onInit: function( finder ) {
                finder.on( 'files:choose', function( evt ) {
                    var file = evt.data.files.first();
                    var img = document.getElementById('thumbnail_prev')
                    var thumbnail = file.getUrl();
                    $('input[name="thumbnail"]').val(`{{env('APP_URL')}}${thumbnail}`);
                    img.src = `{{env('APP_URL')}}${thumbnail}`;    
                } );
            }
        } );
    }
    function selectFileWithCKFinderthumbnail1() {
        CKFinder.modal( {
            chooseFiles: true,
            width: 800,
            height: 600,
            onInit: function( finder ) {
                finder.on( 'files:choose', function( evt ) {
                    var file = evt.data.files.first();
                    var img = document.getElementById('thumbnail_1')
                    var thumbnail = file.getUrl();
                    $('input[name="thumbnail_list[]"]').val(`{{env('APP_URL')}}${thumbnail}`);
                    img.src = `{{env('APP_URL')}}${thumbnail}`;    
                } );
            }
        } );
    }
    function selectFileWithCKFinderthumbnail2() {
        CKFinder.modal( {
            chooseFiles: true,
            width: 800,
            height: 600,
            onInit: function( finder ) {
                finder.on( 'files:choose', function( evt ) {
                    var file = evt.data.files.first();
                    var img = document.getElementById('thumbnail_2')
                    var thumbnail = file.getUrl();
                    $('input[name="thumbnail_list[]"]').val(`{{env('APP_URL')}}${thumbnail}`);
                    img.src = `{{env('APP_URL')}}${thumbnail}`;    
                } );
            }
        } );
    }
    function selectFileWithCKFinderthumbnail3() {
        CKFinder.modal( {
            chooseFiles: true,
            width: 800,
            height: 600,
            onInit: function( finder ) {
                finder.on( 'files:choose', function( evt ) {
                    var file = evt.data.files.first();
                    var img = document.getElementById('thumbnail_3')
                    var thumbnail = file.getUrl();
                    $('input[name="thumbnail_list[]"]').val(`{{env('APP_URL')}}${thumbnail}`);
                    img.src = `{{env('APP_URL')}}${thumbnail}`;    
                } );
            }
        } );
    }
    function selectFileWithCKFinderthumbnail4() {
        CKFinder.modal( {
            chooseFiles: true,
            width: 800,
            height: 600,
            onInit: function( finder ) {
                finder.on( 'files:choose', function( evt ) {
                    var file = evt.data.files.first();
                    var img = document.getElementById('thumbnail_4')
                    var thumbnail = file.getUrl();
                    $('input[name="thumbnail_list[]"]').val(`{{env('APP_URL')}}${thumbnail}`);
                    img.src = `{{env('APP_URL')}}${thumbnail}`;    
                } );
            }
        } );
    }
    function selectFileWithCKFinderthumbnail5() {
        CKFinder.modal( {
            chooseFiles: true,
            width: 800,
            height: 600,
            onInit: function( finder ) {
                finder.on( 'files:choose', function( evt ) {
                    var file = evt.data.files.first();
                    var img = document.getElementById('thumbnail_5')
                    var thumbnail = file.getUrl();
                    $('input[name="thumbnail_list[]"]').val(`{{env('APP_URL')}}${thumbnail}`);
                    img.src = `{{env('APP_URL')}}${thumbnail}`;    
                } );
            }
        } );
    }

    // 
    function selectFileWithCKFinderthumbnail_color_1() {
        CKFinder.modal( {
            chooseFiles: true,
            width: 800,
            height: 600,
            onInit: function( finder ) {
                finder.on( 'files:choose', function( evt ) {
                    var file = evt.data.files.first();
                    var img = document.getElementById('thumbnail_color_1')
                    var thumbnail = file.getUrl();
                    $('input[name="thumbnail_color[]"]').val(`{{env('APP_URL')}}${thumbnail}`);
                    img.src = `{{env('APP_URL')}}${thumbnail}`;    
                } );
            }
        } );
    }
    function selectFileWithCKFinderthumbnail_color_2() {
        CKFinder.modal( {
            chooseFiles: true,
            width: 800,
            height: 600,
            onInit: function( finder ) {
                finder.on( 'files:choose', function( evt ) {
                    var file = evt.data.files.first();
                    var img = document.getElementById('thumbnail_color_2')
                    var thumbnail = file.getUrl();
                    $('input[name="thumbnail_color[]"]').val(`{{env('APP_URL')}}${thumbnail}`);
                    img.src = `{{env('APP_URL')}}${thumbnail}`;    
                } );
            }
        } );
    }
    // 
    // 
    function selectFileWithCKFinderthumbnail_type_1() {
        CKFinder.modal( {
            chooseFiles: true,
            width: 800,
            height: 600,
            onInit: function( finder ) {
                finder.on( 'files:choose', function( evt ) {
                    var file = evt.data.files.first();
                    var img = document.getElementById('thumbnail_type_1')
                    var thumbnail = file.getUrl();
                    $('input[name="thumbnail_type[]"]').val(`{{env('APP_URL')}}${thumbnail}`);
                    img.src = `{{env('APP_URL')}}${thumbnail}`;    
                } );
            }
        } );
    }
    function selectFileWithCKFinderthumbnail_type_2() {
        CKFinder.modal( {
            chooseFiles: true,
            width: 800,
            height: 600,
            onInit: function( finder ) {
                finder.on( 'files:choose', function( evt ) {
                    var file = evt.data.files.first();
                    var img = document.getElementById('thumbnail_type_2')
                    var thumbnail = file.getUrl();
                    $('input[name="thumbnail_type[]"]').val(`{{env('APP_URL')}}${thumbnail}`);
                    img.src = `{{env('APP_URL')}}${thumbnail}`;    
                } );
            }
        } );
    }
    // 
    button.onclick =() => {
        selectFileWithCKFinder( 'ckfinder-input-1' );
    }
    thumbnail1.onclick =() => {
        selectFileWithCKFinderthumbnail1( 'ckfinder-input-1' );
    }
     thumbnail2.onclick =() => {
        selectFileWithCKFinderthumbnail2( 'ckfinder-input-1' );
    }
     thumbnail3.onclick =() => {
        selectFileWithCKFinderthumbnail3( 'ckfinder-input-1' );
    }
     thumbnail4.onclick =() => {
        selectFileWithCKFinderthumbnail4( 'ckfinder-input-1' );
    }
     thumbnail5.onclick =() => {
        selectFileWithCKFinderthumbnail5( 'ckfinder-input-1' );
    }
    // 
    thumbnail_color_1.onclick =() => {
        selectFileWithCKFinderthumbnail_color_1( 'ckfinder-input-1' );
    }
    thumbnail_color_2.onclick =() => {
        selectFileWithCKFinderthumbnail_color_2( 'ckfinder-input-1' );
    }
    // 
    // 
    thumbnail_type_1.onclick =() => {
        selectFileWithCKFinderthumbnail_type_1( 'ckfinder-input-1' );
    }
    thumbnail_type_2.onclick =() => {
        selectFileWithCKFinderthumbnail_type_2( 'ckfinder-input-1' );
    }
    // 














    
    $('input[name="percent_discount"]').change(function() {
        var value_old_price = parseInt($('input[name="old_price"]').val());
        var value_percent_discount =  parseInt($('input[name="percent_discount"]').val());
        value_current_price = value_old_price * (100 - value_percent_discount) / 100;
        $('input[name="sale_price"]').val(value_current_price)
    })
     $('input[name="sale_price"]').change(function() {
        var value_old_price = parseInt($('input[name="old_price"]').val());
        var value_current_price =  parseInt($('input[name="sale_price"]').val());
        var value_percent_discount = value_current_price * (100 / value_old_price);
        var result = parseFloat( Math.round(100 - value_percent_discount))
        $('input[name="percent_discount"]').val(result)
     })
</script>
<script src="https://cdn.ckeditor.com/4.20.1/full/ckeditor.js"></script>
<script>
CKEDITOR.replace( 'summary-ckeditor' );
CKEDITOR.replace( 'summary-ckeditor-specifications' );
</script>
@endsection

@section('script')
<script src="{{asset('ckfinder/ckfinder.js')}}" ></script>
@endsection