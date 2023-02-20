@extends('master')

@section('content')
<main class="main-layout">
    <div class="main-article"> 
        <div class="main-article-breadcrumb">
            <div class="container">
                <div class="section-title-all">
                    <h1>{{$blog_detail->name}}</h1>
                </div>
                <div class="breadcrumb-wrap">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="/">Trang chủ</a></li>

                        <li class="breadcrumb-item"><a href="{{route('blogNew')}}">Blog - Tin tức</a></li>

                        <li class="breadcrumb-item active"><span>{{$blog_detail->name}}</span></li>
                    </ol>
                </div>
            </div>
        </div>
        <div class="container"> 
            <div class="main-article-menu sidebar">
                <label>Mục lục bài viết</label>
                <div class="main-article-menu-data"></div>
            </div>
            <div class="main-article-wrap">
                <h2>
                    Đăng vào {{$blog_detail->created_at->format('H:i:s')}} ngày {{$blog_detail->created_at->format('d.m.Y')}}
                </h2>
                <div class="main-article-content" data-size="16" style="--share_font: 16px">
                    {!!  $blog_detail->description !!}
                </div>
                    
            </div>
            <div class="main-article-right">
                <div class="main-article-right-menu">
                    <div class="section-title-all">
                        <span>Danh mục Blog</span>
                    </div>
                    <ul class="main-article-right-menu-data">
                        <li class="hasChild">
                            <a  href="/collections/all" title="Tất cả sản phẩm">Tất cả sản phẩm<span>›</span></a>
                            <ul class="menu1"> 
                                @foreach ($interior as $item)
                                    <li class="hasChild">
                                        <a href="" title="{{$item->name}}">{{$item->name}}<span>›</span></a>
                                        <ul class="menu2">
                                            @foreach ($item->childs as $item)
                                                <li class="">
                                                    <a href="" title="{{$item->name}}">{{$item->name}}</a>
                                                </li>
                                            @endforeach
                                        </ul>
                                    </li>
                                    
                                @endforeach
                            </ul>
                        </li>
                        <li class="hasChild">
                            <a  href="" title="Danh mục sản phẩm">Danh mục sản phẩm<span>›</span></a>
                            <ul class="menu1"> 
                                <li class="">
                                    <a href="https://f1genz-furniture-2.myharavan.com/collections/all?view=vertical" title="Danh mục Style 1">Danh mục Style 1</a>
                                </li>
                                <li class="">
                                    <a href="https://f1genz-furniture-2.myharavan.com/collections/all?view=horizontal" title="Danh mục Style 2">Danh mục Style 2</a>
                                </li>
                            </ul>
                        </li>
                        <li class="hasChild">
                            <a  href="https://f1genz-furniture-2.myharavan.com/products/tu-quan-ao-3-cua-f1genz-cao-cap" title="Chi tiết sản phẩm">Chi tiết sản phẩm<span>›</span></a>
                            <ul class="menu1"> 
                                <li class="">
                                    <a href="https://f1genz-furniture-2.myharavan.com/products/tu-quan-ao-3-cua-f1genz-cao-cap?view=style1" title="Chi tiết Style 1">Chi tiết Style 1</a>
                                </li>
                                <li class="">
                                    <a href="https://f1genz-furniture-2.myharavan.com/products/tu-quan-ao-3-cua-f1genz-cao-cap?view=style2" title="Chi tiết Style 2">Chi tiết Style 2</a>
                                </li>
                                <li class="">
                                    <a href="https://f1genz-furniture-2.myharavan.com/products/tu-quan-ao-3-cua-f1genz-cao-cap?view=style3" title="Chi tiết Style 3">Chi tiết Style 3</a>
                                </li>
                            </ul>
                        </li>
                        <li class="">
                            <a  href="{{route('blogNew')}}" title="Blogs">Blogs</a>
                        </li>
                        <li class="">
                            <a  href="{{route('blogManual')}}" title="Hướng dẫn sử dụng">Hướng dẫn sử dụng</a>
                        </li>
                        <li class="">
                            <a  href="" title="Liên hệ">Liên hệ</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</main>
@endsection