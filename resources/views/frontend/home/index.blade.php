@extends('master')

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