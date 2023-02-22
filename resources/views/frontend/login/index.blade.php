@extends('master')

@section('script')
    <script>
        window.F1GENZ_vars = {
            template: "customers[login]",
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
                                    Đăng nhập
                                </h1>
                            </div>
                            <div class="auth-form-body">
                                <div class="register-form-body">
                                    <form accept-charset='UTF-8' action="{{route('user.login')}}" method='post'>
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
                                            <button type=submit"" class="btn btn-primary login">
                                                ĐĂNG NHẬP
                                            </button>
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
@endsection