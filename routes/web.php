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
        Route::get('/', [App\Http\Controllers\Backend\MiniCategoryController::class, 'showMiniCategory'])->name('admin.Minicategory');
        // thêm danh mục
        Route::get('create', [App\Http\Controllers\Backend\MiniCategoryController::class, 'createMiniCategory'])->name('admin.createMiniCategory');
        Route::post('create', [App\Http\Controllers\Backend\MiniCategoryController::class, 'postMiniCategory'])->name('admin.postMiniCategory');
        // chỉnh sửa danh mục
        Route::get('update-{id}', [App\Http\Controllers\Backend\MiniCategoryController::class, 'getUpdateMiniCategory'])->name('admin.getUpdateMiniCategory');
        Route::post('update-{id}', [App\Http\Controllers\Backend\MiniCategoryController::class, 'updateMinicategory'])->name('admin.updateMiniCategory');

        // xóa danh mục
        Route::get('delete-{id}', [App\Http\Controllers\Backend\MiniCategoryController::class, 'deleteMiniCategory'])->name('admin.deleteMiniCategory');

        // tìm kiếm danh mục
        Route::get('search', [App\Http\Controllers\Backend\MiniCategoryController::class,'search'])->name('admin.Minicategory.search');
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
});

// trang chủ 
Route::get('/', [App\Http\Controllers\Frontend\HomeController::class, 'home'])->name('home');
