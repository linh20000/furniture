@extends('master')

@section('script')
    <script>
        window.F1GENZ_vars = {
            template: "customers[register]",
            account: {
                logged: true,
                id: 23423,
                email: ""
            },
            shop: {
                url: "https://f1genz-furniture-2.myharavan.com",
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
                        text: "a0987654312",
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
        <div class="my-account-wrap">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-sm-6 col-md-4 offset-sm-3 offset-md-4">
                        <div id="auth-form">
                            <div class="auth-heading">
                                <i class="lar la-user"></i>
                                <h1>
                                    Đăng ký
                                </h1>
                            </div>
                            <div class="auth-form-body">
                                <div class="register-form-body">
                                    <form accept-charset='UTF-8' action='' method='post'>
                                        <div class="form-group">
                                            <label for="register-first-name">Tên của bạn*</label>
                                            <input type="text" id="register-first-name" class="form-control"
                                                name="name" required>
                                        </div>
                                        <div class="form-group">
                                            <label for="register-phone">Số điện thoại</label>
                                            <input type="text" id="register-phone" class="form-control"
                                                name="phoneNumber" pattern='^\+?\d{0,10}'>
                                        </div>
                                        <div class="form-group">
                                            <label>Giới tính</label>
                                            <div class="row">
                                                <div class="col-6">
                                                    <input type="radio" id="register-gender-0" value="female"
                                                        name="gender" checked />
                                                    <label for="register-gender-0">Nữ</label>
                                                </div>
                                                <div class="col-6">
                                                    <input type="radio" id="register-gender-1" value="male"
                                                        name="gender" />
                                                    <label for="register-gender-1">Nam</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="register-email">Email*</label>
                                            <input type="email" id="register-email" class="form-control"
                                                name="email" required>
                                        </div>
                                        <div class="form-group">
                                            <label for="register-password">Mật khẩu*</label>
                                            <input type="password" id="register-password" class="form-control"
                                                name="password" required>
                                        </div>
                                        <input type="hidden" name="role" value="user">
                                        <div class="form-group">
                                            <div class="btn btn-primary register">
                                                ĐĂNG KÝ
                                            </div>
                                        </div>
                                        <div class="auth-back-btn">
                                            <a href="">Đăng nhập</a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>

    <script>
        $('.register').click(function (e) {
            e.preventDefault();
            $.ajax({
                url: "{{route('postRegister')}}",
                method: 'POST',
                data: {
                    _token:$('meta[name="csrf-token"]').attr('content'),
                    name: $('input[name=name]').val(),
                    phoneNumber: $('input[name=phoneNumber]').val(),
                    gender: $('input[name=gender]').val(),
                    email: $('input[name=email]').val(),
                    password: $('input[name=password]').val(),
                },
                success: function (response) {
                    alert('Login successful');
                    // Redirect to home page or do other stuff here
                },
                error: function (xhr) {
                    alert('Invalid login credentials');
                }
            });
        });
    </script>
@endsection