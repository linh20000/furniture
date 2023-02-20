<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Models\Category;
use App\Models\Interior;
use App\Models\Banner;
use App\Models\User;
class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
         view()->composer('*', function($view) {
            $view->with([
                'categories'=>  Category::where('parent_id', '=', 0)->where('status', '=', 1)->with('childs')->get(),
                'interior'=>  Interior::where('parent_id', '=', 0)->where('status', '=', 1)->with('childs')->get(),
                'banner_slide'=>  Banner::where('type', '=', 'slide')->get(),
                'banner_four'=>  Banner::where('type', '=', 'four')->get(),
                'banner_six'=>  Banner::where('type', '=', 'six')->get(),
                'user'=>  User::first(),
            ]);
        });
    }
}
