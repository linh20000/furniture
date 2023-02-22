@extends('master')

@section('content')
<main class="main-layout">
    <div id="account-page">
        <div class="container">
            <div class="account-page-wrap">
                <div class="account-page-sidebar">
                    <div class="account-sidebar-header">
                        <div class="account-sidevar-avatar">
                            <img width="32" height="32" src="https://file.hstatic.net/200000306687/file/user__1__5d4e2be8d65346eb8a73967531f46ba4.png" alt="linh ngô quang">
                        </div>
                        <h3>Hi, <b>{{$user->name}}</b></h3>
                    </div>
                    <div class="account-sidebar-menu">
                        <ul>
                            <li><a href="#" class="active">Thông tin tài khoản</a></li>
                            <li><a href="/account?view=orders">Lịch sử mua hàng</a></li>
                            <li><a href="/account/addresses" >Danh sách địa chỉ</a></li>
                            <li><a href="{{route('logout')}}">Đăng xuất</a></li>
                        </ul>
                    </div>
                </div>
			<div class="account-page-content">
				<h1>
					<span>Thông tin tài khoản</span>
				</h1>
				<div class="account-page-detail account-page-info">
                    <div class="table-responsive">
                        <table class="table">
                            <tbody>
                                <tr>
                                    <td>Họ tên</td>
                                    <td>{{$user->name}}</td>
                                </tr>
                                <tr>
                                    <td>Email</td>
                                    <td>{{$user->email}}</td>
                                </tr>
                                <tr>
                                    <td>Giới tính</td>
                                    <td>
                                       @if ($user->gender == 'male')
                                           Nam
                                           @else
                                           Nữ
                                       @endif
                                    </td>
                                </tr>
                                <tr>
                                    <td>Số điện thoại</td>
                                    <td>{{$user->phoneNumber}}</td>
                                </tr>
                                <tr>
                                    <td>Địa chỉ</td>
                                    <td>
                                            
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    <script type="text/javascript" charset="utf-8">
        new Haravan.CountryProvinceSelector('address_country_new', 'address_province_new', {hideElement: 'address_province_container_new'});  
        
        new Haravan.CountryProvinceSelector('address_country_1123126325', 'address_province_1123126325', {hideElement: 'address_province_container_1123126325'});
        
    </script>
    </div>
</main>
@endsection