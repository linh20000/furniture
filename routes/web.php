<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('admin/login', [App\Http\Controllers\Backend\LoginController::class, 'showLogin'])->name('admin.showlogin');
Route::get('admin', [App\Http\Controllers\Backend\LoginController::class, 'showLogin'])->name('admin.showlogin');
// đăng nhập 
Route::post('admin/login', [App\Http\Controllers\Backend\LoginController::class, 'login'])->name('admin.login');
// Đăng xuất trang quản lí
Route::get('/admin/logout',[App\Http\Controllers\Backend\LoginController::class,'logout'])->name('admin.logout');


// 
Route::prefix('admin')->middleware('auth')->group(function () {
    // Trang chủ admin
    Route::get('/showDashbroad', [App\Http\Controllers\Backend\LoginController::class, 'showHome'])->name('admin.home');

    // Danh mục 
    Route::prefix('category')->group(function() {
        
        // hiển thị danh sách danh mục
        Route::get('/', [App\Http\Controllers\Backend\CategoryController::class, 'showCategory'])->name('admin.category');
        // thêm danh mục
        Route::get('create', [App\Http\Controllers\Backend\CategoryController::class, 'createCategory'])->name('admin.createCategory');
        Route::post('create', [App\Http\Controllers\Backend\CategoryController::class, 'postCategory'])->name('admin.postCategory');
        // chỉnh sửa danh mục
        Route::get('update-{id}', [App\Http\Controllers\Backend\CategoryController::class, 'getUpdateCategory'])->name('admin.getUpdateCategory');
        Route::post('update-{id}', [App\Http\Controllers\Backend\CategoryController::class, 'updatecategory'])->name('admin.updateCategory');

        // xóa danh mục
        Route::get('delete-{id}', [App\Http\Controllers\Backend\CategoryController::class, 'deleteCategory'])->name('admin.deleteCategory');

        // tìm kiếm danh mục
        Route::get('search', [App\Http\Controllers\Backend\CategoryController::class,'search'])->name('admin.category.search');
    });
    Route::prefix('mini-category')->group(function() {
        
        // hiển thị danh sách danh mục
        Route::get('/', [App\Http\Controllers\Backend\MiniCategoryController::class, 'showCategory'])->name('admin.minicategory');
        // thêm danh mục
        Route::get('create', [App\Http\Controllers\Backend\MiniCategoryController::class, 'createCategory'])->name('admin.minicreateCategory');
        Route::post('create', [App\Http\Controllers\Backend\MiniCategoryController::class, 'postCategory'])->name('admin.minipostCategory');
        // chỉnh sửa danh mục
        Route::get('update-{id}', [App\Http\Controllers\Backend\MiniCategoryController::class, 'getUpdateCategory'])->name('admin.minigetUpdateCategory');
        Route::post('update-{id}', [App\Http\Controllers\Backend\MiniCategoryController::class, 'updatecategory'])->name('admin.updateMiniCategory');

        // xóa danh mục
        Route::get('delete-{id}', [App\Http\Controllers\Backend\MiniCategoryController::class, 'deleteCategory'])->name('admin.minideleteCategory');

        // tìm kiếm danh mục
        Route::get('search', [App\Http\Controllers\Backend\MiniCategoryController::class,'search'])->name('admin.minicategory.search');
    });
    Route::prefix('interior')->group(function() {
        
        // hiển thị danh sách danh mục
        Route::get('/', [App\Http\Controllers\Backend\InteriorCategoryController::class, 'showInteriorCategory'])->name('admin.Interiorcategory');
        // thêm danh mục
        Route::get('create', [App\Http\Controllers\Backend\InteriorCategoryController::class, 'createInteriorCategory'])->name('admin.createInteriorCategory');
        Route::post('create', [App\Http\Controllers\Backend\InteriorCategoryController::class, 'postInteriorCategory'])->name('admin.postInteriorCategory');
        // chỉnh sửa danh mục
        Route::get('update-{id}', [App\Http\Controllers\Backend\InteriorCategoryController::class, 'getUpdateInteriorCategory'])->name('admin.getUpdateInteriorCategory');
        Route::post('update-{id}', [App\Http\Controllers\Backend\InteriorCategoryController::class, 'updateInteriorcategory'])->name('admin.updateInteriorCategory');

        // xóa danh mục
        Route::get('delete-{id}', [App\Http\Controllers\Backend\InteriorCategoryController::class, 'deleteInteriorCategory'])->name('admin.deleteInteriorCategory');

        // tìm kiếm danh mục
        Route::get('search', [App\Http\Controllers\Backend\InteriorCategoryController::class,'search'])->name('admin.Interiorcategory.search');
    });

    // banner
    Route::prefix('banner')->group(function() {
        
        // hiện thị danh sách banner
        Route::get('/', [App\Http\Controllers\Backend\BannerController::class, 'showBanner'])->name('admin.banner');

        // thêm banner
        Route::get('/create', [App\Http\Controllers\Backend\BannerController::class, 'createBanner'])->name('admin.createBanner');
        Route::post('/create', [App\Http\Controllers\Backend\BannerController::class, 'postBanner'])->name('admin.postBanner');

        // chỉnh sửa banner
        Route::get('/update-{id}', [App\Http\Controllers\Backend\BannerController::class, 'getUpdateBanner'])->name('admin.getUpdateBanner');
        Route::post('/update-{id}', [App\Http\Controllers\Backend\BannerController::class, 'updateBanner'])->name('admin.updateBanner');

        // xóa banner
        Route::get('delete-{id}', [App\Http\Controllers\Backend\BannerController::class, 'deleteBanner'])->name('admin.deleteBanner');

    });

     // product ???
    Route::prefix('products')->group(function() {
        // get product
        Route::get('list', [App\Http\Controllers\Backend\ProductController::class,'showProductList'])->name('admin.showProductList');
        Route::get('search', [App\Http\Controllers\Backend\ProductController::class,'search'])->name('admin.product.search');
        // post product
        Route::get('create', [App\Http\Controllers\Backend\ProductController::class,'getCreateProduct'])->name('admin.getCreateProduct');
        Route::post('create', [App\Http\Controllers\Backend\ProductController::class,'addProduct'])->name('admin.addProduct');

        // update Product
        Route::get('list/update/{id}', [App\Http\Controllers\Backend\ProductController::class,'getUpdateProduct'])->name('admin.getUpdateProduct');
        Route::post('list/update/{id}', [App\Http\Controllers\Backend\ProductController::class,'updateProduct'])->name('admin.updateProduct');

        // delete product
        Route::get('list/delete/{id}', [App\Http\Controllers\Backend\ProductController::class,'deleteProduct'])->name('admin.deleteProduct');
    });
    Route::prefix('products/interior')->group(function() {
        // get product
        Route::get('list', [App\Http\Controllers\Backend\InteriorProductController::class,'showProductList'])->name('admin.InteriorshowProductList');
        Route::get('search', [App\Http\Controllers\Backend\InteriorProductController::class,'search'])->name('admin.Interiorproduct.search');
        // post product
        Route::get('create', [App\Http\Controllers\Backend\InteriorProductController::class,'getCreateProduct'])->name('admin.InteriorgetCreateProduct');
        Route::post('create', [App\Http\Controllers\Backend\InteriorProductController::class,'addProduct'])->name('admin.InterioraddProduct');

        // update Product
        Route::get('list/update/{id}', [App\Http\Controllers\Backend\InteriorProductController::class,'getUpdateProduct'])->name('admin.InteriorgetUpdateProduct');
        Route::post('list/update/{id}', [App\Http\Controllers\Backend\InteriorProductController::class,'updateProduct'])->name('admin.InteriorupdateProduct');

        // delete product
        Route::get('list/delete/{id}', [App\Http\Controllers\Backend\InteriorProductController::class,'deleteProduct'])->name('admin.InteriordeleteProduct');
    });
    Route::prefix('appointment')->group(function() {
        // get update
        Route::get('list',[App\Http\Controllers\Backend\OrderController::class,'orderAppointment'])->name('get.orderAppointment');
        Route::get('update/{id}',[App\Http\Controllers\Backend\OrderController::class,'updateAppointment'])->name('updateAppointment');
        Route::post('update/{id}',[App\Http\Controllers\Backend\OrderController::class,'updatement'])->name('updatement');
        Route::get('delete-{id}', [App\Http\Controllers\Backend\OrderController::class, 'deleteAppointment'])->name('deleteAppointment');
    }); 
    // 
    //form_comment
    Route::prefix('comment')->group(function(){
        Route::get('list',[App\Http\Controllers\Backend\BlogController::class,'viewComment'])->name('comment.list');
        Route::get('deleteComment/{id}', [App\Http\Controllers\Backend\BlogController::class, 'deleteComment'])->name('comment.delete');
        Route::get('search', [App\Http\Controllers\Backend\BlogController::class,'search'])->name('admin.comment.search');
    });
     // order route
    Route::prefix('order')->group(function() {
        //show list order
        Route::get('/get', [App\Http\Controllers\Backend\OrderController::class, 'showListOrder'])->name('showListOrder');
        
        // show detail order
        Route::get('/details-{id}', [App\Http\Controllers\Backend\OrderController::class, 'showDetailsOrder'])->name('showDetailsOrder');
        Route::post('update-{id}', [App\Http\Controllers\Backend\OrderController::class, 'updateStatus'])->name('updateStatus');

        // delete order
        Route::get('delete-{id}', [App\Http\Controllers\Backend\OrderController::class, 'deleteOrder'])->name('deleteOrder');

    });
     // plugin
    Route::prefix('editing')->group(function () {
        // get
        Route::get('update', [App\Http\Controllers\Backend\EditConfigController::class, 'getEdit'])->name('admin.getEditProfile');
        // post
        Route::post('update', [App\Http\Controllers\Backend\EditConfigController::class, 'updatePlugin'])->name('admin.getEditProfile');
    });


     //blog
    Route::prefix('blog')->group(function() {
        // hiển thị blog
        Route::get('list',[App\Http\Controllers\Backend\BlogController::class,'BlogList'])->name('blog.list');

        // thêm blog
        Route::get('create',[App\Http\Controllers\Backend\BlogController::class,'createBlog'])->name('blog.create');
        Route::post('create',[App\Http\Controllers\Backend\BlogController::class,'storeBlog']);

        // chỉnh sửa blog
        Route::get('update/{id}',[App\Http\Controllers\Backend\BlogController::class,'getUpdateBlog'])->name('blog.getUpdate');
        Route::post('update/{id}',[App\Http\Controllers\Backend\BlogController::class,'updateBlog'])->name('blog.update');

        // xóa blog
        Route::get('deleteblog/{id}', [App\Http\Controllers\Backend\BlogController::class, 'deleteBlog'])->name('admin.deleteblog');
    });
    // policy
    Route::prefix('policy')->group(function(){
        Route::get('list',[App\Http\Controllers\Backend\PolicyController::class,'viewPolicy'])->name('policy.list');
        Route::get('create',[App\Http\Controllers\Backend\PolicyController::class,'createPolicy'])->name('policy.create');
        Route::post('create',[App\Http\Controllers\Backend\PolicyController::class,'storePolicy']);
        Route::get('update/{id}',[App\Http\Controllers\Backend\PolicyController::class,'getUpdatePolicy'])->name('policy.getUpdate');
        Route::post('update/{id}',[App\Http\Controllers\Backend\PolicyController::class,'updatePolicy'])->name('policy.update');
        Route::get('deletePolicy/{id}', [App\Http\Controllers\Backend\PolicyController::class, 'deletePolicy'])->name('policy.delete');
    });

});

// trang chủ 
Route::get('/', [App\Http\Controllers\Frontend\HomeController::class, 'home'])->name('home');



Route::get('san-pham/{id}-{slug}',  [App\Http\Controllers\Frontend\HomeController::class, 'showDetails'])->name('detail_product');
Route::get('gio-hang',  [App\Http\Controllers\Frontend\HomeController::class, 'showCart'])->name('showCart');
Route::get('thanh-toan',  [App\Http\Controllers\Frontend\HomeController::class, 'showPayment'])->name('showPayment');
Route::post('them/{id}',  [App\Http\Controllers\Frontend\HomeController::class, 'addCartAjax'])->name('addcart.ajax');
Route::get('xoa-san-pam/{rowId}',  [App\Http\Controllers\Frontend\HomeController::class, 'deleteCart'])->name('deleteCart');
Route::post('thanh-toan',  [App\Http\Controllers\Frontend\HomeController::class, 'paymentAjax'])->name('payment.ajax');
Route::get('tin-tuc',  [App\Http\Controllers\Frontend\HomeController::class, 'blogNew'])->name('blogNew');
Route::get('tin-tuc/{id}-{slug}',  [App\Http\Controllers\Frontend\HomeController::class, 'blogDetail'])->name('blogDetail');
// Route::get('tat-ca-san-pham',  [App\Http\Controllers\Frontend\HomeController::class, 'showcollection'])->name('showcollection');
Route::get('huong-dan-su-dung',  [App\Http\Controllers\Frontend\HomeController::class, 'blogManual'])->name('blogManual');
Route::get('tat-ca-san-pham',[App\Http\Controllers\Frontend\HomeController::class, 'collectionAll'])->name('collectionAll');
Route::get('tat-ca-san-pham-style-2',[App\Http\Controllers\Frontend\HomeController::class, 'collectionAllhozion'])->name('collectionAll.hozion');

Route::get('danh-sach-san-pham/{id}-{slug}',[App\Http\Controllers\Frontend\HomeController::class, 'collection'])->name('collection');


Route::get('loc-san-pham', [App\Http\Controllers\Frontend\HomeController::class, 'filter'])->name('filter');
Route::get('lien-he', [App\Http\Controllers\Frontend\HomeController::class, 'contact'])->name('contact');
Route::post('/tu-van',[App\Http\Controllers\Frontend\HomeController::class , 'advisory'])->name('advisory.ajax');
Route::get('tim-kiem', [App\Http\Controllers\Frontend\HomeController::class, 'search'])->name('search');

Route::get('chinh-sach/{id}-{slug}',[App\Http\Controllers\Frontend\HomeController::class, 'blogDetailPolicy'])->name('blogDetail_policy');

    Route::get('/dang-ki' ,[App\Http\Controllers\Frontend\AuthController::class , 'register'] )->name('register');
    Route::post('/dang-ki' ,[App\Http\Controllers\Frontend\AuthController::class , 'postRegister'] )->name('postRegister');
    Route::post('/dang-nhap' ,[App\Http\Controllers\Frontend\AuthController::class , 'login'] )->name('user.login');
    Route::get('/thong-tin-tai-khoan' ,[App\Http\Controllers\Frontend\HomeController::class , 'userProfile'] )->name('user.profile');
    Route::get('/dang-xuat' ,[App\Http\Controllers\Frontend\AuthController::class , 'logout'] )->name('logout');


Route::post('add-to-favorites', [App\Http\Controllers\Frontend\HomeController::class, 'addToFavorites'])->name('product.addToFavorites');