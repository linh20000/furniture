<?php

namespace App\Http\Controllers\Frontend;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Order;
use App\Models\ProductInterior;
use App\Models\Blog;
use App\Models\Appointment;
use App\Models\Config;
use App\Models\Favorite;
use App\Models\Policy;
use App\Models\Coupon;
use App\Models\Interior;
use App\Models\MiniCategory;
use Gloudemans\Shoppingcart\Facades\Cart;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Artesaos\SEOTools\Facades\SEOTools;
use Artesaos\SEOTools\Facades\SEOMeta;
use Artesaos\SEOTools\Facades\OpenGraph;
use Artesaos\SEOTools\Facades\TwitterCard;
use Artesaos\SEOTools\Facades\JsonLd;
class HomeController extends Controller
{
    public function home()
    {
        $config = Config::first();
        SEOTools::setTitle($config->seo_title);
        SEOTools::setDescription($config->seo_description);
        SEOTools::opengraph()->setUrl('http://127.0.0.1:8000/');
        SEOTools::setCanonical('https://codecasts.com.br/lesson');
        SEOTools::opengraph()->addProperty('type', 'articles');
        SEOTools::twitter()->setSite($config->seo_title);
        SEOTools::jsonLd()->addImage($config->logo);
        $product_hot = Product::orderBy('created_at','DESC')->where('status', '=', 1)->where('tags','=', 'hot')->get();
        $product_sale = Product::orderBy('created_at','DESC')->where('status', '=', 1)->where('tags','=', 'sale')->get();
        $product_tables = Product::orderBy('created_at','DESC')->where('status', '=', 1)->where('product_line','=', 'tables')->get();
        $product_chairs = Product::orderBy('created_at','DESC')->where('status', '=', 1)->where('product_line','=', 'chairs')->get();
        $product_cabinet = Product::orderBy('created_at','DESC')->where('status', '=', 1)->where('product_line','=', 'cabinet')->get();
        $product_shelf = Product::orderBy('created_at','DESC')->where('status', '=', 1)->where('product_line','=', 'shelf')->get();
        $product_lamp = Product::orderBy('created_at','DESC')->where('status', '=', 1)->where('product_line','=', 'lamp')->get();
        $blog_ichi = Blog::orderBy('created_at', 'DESC')->where('type_blog', '=', 'blog_new')->where('status', '=', 1)->first();
        $blog = Blog::orderBy('created_at', 'DESC')->where('type_blog', '=', 'blog_new')->where('status', '=', 1)->get();
        return view('frontend.home.index',compact('product_hot','product_tables','product_chairs', 'product_cabinet', 'product_shelf','product_lamp','blog_ichi','blog','product_sale'));
    }

    public function showDetails($id, $slug) {
        $product = Product::find($id);
        $config = Config::first();
         SEOTools::setTitle( $product->seo_title);
        SEOTools::setDescription( $product->seo_description);
        SEOTools::opengraph()->setUrl('http://127.0.0.1:8000/');
        SEOTools::setCanonical('https://codecasts.com.br/lesson');
        SEOTools::opengraph()->addProperty('type', 'articles');
        SEOTools::twitter()->setSite($product->seo_title);
        SEOTools::jsonLd()->addImage($product->thumbnail);
        $relation_product = Product::where('tags', '=', $product->tags)->where('product_line', '!=', $product->product_line)->where('status', '=', 1)->take(2)->get();
        $relation = Product::where('tags', '=', $product->tags)->where('product_line', '=', $product->product_line)->where('status', '=', 1)->get();
        $category_parent = MiniCategory::where('id' ,'=' ,$product->category_id)->first();
        return view('frontend.details_product.index', compact('product','category_parent', 'relation_product', 'relation'));
    }
    public function showPayment() {
        return view('frontend.payment.index');
    }
    public function addCartAjax($id, Request $request) {
        // dd($request->all());
        $product = Product::FindOrFail($id);
        $request->validate([
            'color'=>'required',
            'type'=>'required',
        ],
        [
            'color.required'=>'Chưa chọn màu sắc',
            'type.required'=>'Chưa chọn kiểu loại',
        ]);
        Cart::add([
            'id' => $product->id,
            'name'=>$request['name'],
            'price'=>(int)($request['price']),
            'qty'=> (int)$request['quantity'],
            'weight' => $product-> status,
            'options' => ['thumbnail'=>$request['thumbnail'],
                        'product_code'=>$product->product_code,
                        'old_price'=>(int)($request['old_price']),
                        'color'=>$request['color'],
                        'type'=>$request['type'],
            ]
            
        ]);
        return response()->json(['success'=>'Thêm giỏ hàng thành công','quantity'=>Cart::count(), 'content' => Cart::content() ]);
    }
    public function addCart(Request $request) {
        $product = Product::FindOrFail($request->productId);
        // $request->validate([
        //     'color'=>'required',
        //     'type'=>'required',
        // ],
        // [
        //     'color.required'=>'Chưa chọn màu sắc',
        //     'type.required'=>'Chưa chọn kiểu loại',
        // ]);
        Cart::add([
            'id' => $product->id,
            'name'=>$product->name,
            'price'=>(int)($product->sale_price),
            'qty'=> 1,
            'weight' => $product-> status,
            'options' => ['thumbnail'=>$product->thumbnail,
                        'product_code'=>$product->product_code,
                        'old_price'=>(int)($product->old_price),
                        'color'=>$request['color'],
                        'type'=>$request['type'],
            ]
            
        ]);
        return response()->json(['success'=>'Thêm giỏ hàng thành công','quantity'=>Cart::count(), 'content' => Cart::content() ]);
    }
    public function showCart() {
        return view('frontend.shopping_cart.index');
    }
    public function deleteCart($rowId) {
        Cart::remove($rowId);
        return back();
    }
    public function paymentAjax(Request $request) {
        $request->validate([
            'name'=>'required',
            'email'=>'required|email',
            'phoneNumber'=>'required',
            'province'=>'required',
            'district'=>'required',
            'wards'=>'required',
            'address'=>'required',
        ],[
            'name.required'=>'Vui lòng kiểm tra lại họ và tên',
            'email.required'=>'Vui lòng nhập email',
            'email.email'=>'Vui lòng kiểm tra email',
            'phoneNumber.required'=>'Vui lòng nhập số điện thoại',
            'province.required'=>'Vui lòng nhập tên Tỉnh / Thành phố',
            'district.required'=>'Vui lòng nhập tên Quận / Huyện',
            'wards.required'=>'Vui lòng nhập tên Phường / Xã',
            'address.required'=>'Vui lòng nhập địa chỉ',
        ]);
        $data = $request->all();
        // dd($data);
        Order::create($data);
        Cart::destroy();
        return response()->json(['success'=>'Bạn đã đặt hàng thành công']);
    }
    public function blogNew() {
        $blog = Blog::where('type_blog', '=', 'blog_new')->where('status', '=', '1')->paginate(6);
        $relation = Blog::where('type_blog','=','blog_new')->where('status', '=', '1')->take(3)->get();
        return view('frontend.blog.index',compact('blog', 'relation'));
    }
    public function blogDetail($id, $slug) {
        $blog_detail = Blog::find($id);
        $config = Config::first();
        SEOTools::setTitle($blog_detail->seo_title);
        SEOTools::setDescription($blog_detail->seo_description);
        SEOTools::opengraph()->setUrl('http://127.0.0.1:8000/');
        SEOTools::setCanonical('https://codecasts.com.br/lesson');
        SEOTools::opengraph()->addProperty('type', 'articles');
        SEOTools::twitter()->setSite(  $blog_detail->seo_title);
        SEOTools::jsonLd()->addImage( $blog_detail->thumbnail) ;
        return view('frontend.blog.detail_blog',compact('blog_detail'));
    }
    public function BlogDetailPolicy($id, $slug) {

        $blog_detail = Policy::find($id);
        // dd($blog_detail);
         $config = Config::first();
        SEOTools::setTitle($blog_detail->seo_title);
        SEOTools::setDescription($blog_detail->seo_description  );
        SEOTools::opengraph()->setUrl('http://127.0.0.1:8000/');
        SEOTools::setCanonical('https://codecasts.com.br/lesson');
        SEOTools::opengraph()->addProperty('type', 'articles');
        SEOTools::twitter()->setSite($blog_detail->seo_title );
        SEOTools::jsonLd()->addImage($blog_detail->thumbnail );
        return view('frontend.blog.detail_blog',compact('blog_detail'));

    } 
     public function showCollection() {
        return view('frontend.collection.index');
    }
    public function blogManual() {
        $blog = Blog::where('type_blog','=', 'user_manual')->where('status', '=', '1')->paginate(6);
        $relation = Blog::where('type_blog','=', 'user_manual')->where('status', '=', '1')->take(3)->get();
        return view('frontend.blog.index', compact('blog', 'relation'));
    }
    public function collection($id, $slug) {

        $product = Product::orderBy('created_at', 'DESC')->where('category_id', '=', $id )->where('status', '=', 1)->paginate(12);
        return view('frontend.collection.index', compact('product'));
    }
    public function collectionAll() {
        $product = Product::paginate(12);
        return view('frontend.collection.index', compact('product'));
    }
    public function collectionAllhozion() {
        $product = Product::paginate(12);
        return view('frontend.collection_style_2.index', compact('product'));
    }

    public function filter(Request $request) {
        $brands = $request->brands;
        $types = $request->types;
        $sizes = $request->sizes;
        $prices = $request->prices;
        // dd(Product::whereIn('trademark', $brands)->get());
        $product = Product::orderBy('created_at', 'DESC')->where('status', '=', 1);

        if ($brands) $product = $product->whereIn('tradeMark', $brands);
        if ($types) $product = $product->whereIn('product_line', $types);
        if ($sizes) $product = $product->whereIn('size', $sizes);
        if ($prices)  $product = $product->whereIn('sale_price', $prices);
    // brands
        if ($brands && $types) $product = $product->whereIn('tradeMark', $brands)->whereIn('product_line', $types);
        if ($brands && $sizes) $product = $product->whereIn('tradeMark', $brands)->whereIn('size', $sizes);
        if ($brands && $prices) $product = $product->whereIn('tradeMark', $brands)->whereIn('sale_price', $prices);
        if ($brands && $types && $sizes) $product = $product->whereIn('tradeMark', $brands)->whereIn('product_line', $types)->whereIn('size', $sizes);
        if ($brands && $prices && $sizes) $product = $product->whereIn('tradeMark', $brands)->whereIn('sale_price', $prices)->whereIn('size', $sizes);
        if ($brands && $prices && $types) $product = $product->whereIn('tradeMark', $brands)->whereIn('sale_price', $prices)->whereIn('product_line', $types);
        if ($brands && $types && $sizes && $prices) $product = $product->whereIn('tradeMark', $brands)->whereIn('product_line', $types)->whereIn('size', $sizes)->whereIn('sale_price', $prices);
        if ($types && $prices) $product = $product->whereIn('sale_price', $prices)->whereIn('product_line', $types);
        if ($types && $prices && $sizes) $product = $product->whereIn('sale_price', $prices)->whereIn('product_line', $types)->whereIn('size', $sizes);
        if ($sizes && $prices) $product = $product->whereIn('sale_price', $prices)->whereIn('size', $sizes);
        if ($sizes && $types) $product = $product->whereIn('product_line', $types)->whereIn('size', $sizes);
        $product = $product->paginate(12);
        return response()->json([
            'data' => view('frontend.collection_filter.index', compact('product'))->render(),
        ]);
    }


    public function contact() {
        return view('frontend.about_us.index');
    }
    

    public function advisory(Request $request) {
        $data = $request->all();

        $request->validate([
            'name'=>'required',
            'phoneNumber'=>'required',
            'email'=>'required|email',
            'address'=>'required',
            'content'=>'required'
        ],[
            'name.required'=>'Vui lòng nhập tên của bạn',
            'phoneNumber.required'=>'Vui lòng nhập số điện thoại',
            'email.required'=>'Vui lòng nhập email',
            'email.email'=>'Email không đúng',
            'address.required'=>'Vui lòng nhập địa chỉ',
            'content.required'=>'Vui lòng nhập nội dung cần tư vấn',
        ]);

        Appointment::create($data);

        return response()->json(['success'=>'Cảm ơn bạn đã kết nối với FURNITURE']);
    }

    public function userProfile() {
        if (Auth::check()) {
           $user =  auth()->user();
           return view('frontend.user_profile.index',compact('user'));
        }
        return view('frontend.login.index');
    }

    public function search(Request $request){
        $product = Product::where('name', 'LIKE', '%'. $request->name .'%')
                            ->orWhere('product_code', 'LIKE', '%'. $request->name .'%')
                            ->orWhere('sale_price', 'LIKE', '%'. $request->name .'%')
                            ->orWhere('trademark', 'LIKE', '%'. $request->name .'%')
                            ->orWhere('seo_title', 'LIKE', '%'. $request->name .'%')->paginate(12);
        return view('frontend.collection.index', compact('product'));
    }
    public function addToFavorites(Request $request)
    {
        if (Auth()->check() == false) {
            return view('frontend.login.index');
        }
        $favorite = new Favorite;
        $favorite->user_id = Auth::user()->id;
        $favorite->product_id = $request->productId;
        $product = Product::where('id', '=', $request->productId)->get();
        // dd($product);
        $count = count($product);
        return response()->json([
            'data' => view('frontend.favorites', compact('product'))->render(),
            'count'=> $count,
        ]);
    }   
    public function registercoupon(Request $request) {
                Coupon::create($request->all());
         return response()->json([
            'success' => true,
        ]);
    }
}   