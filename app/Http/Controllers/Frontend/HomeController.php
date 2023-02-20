<?php

namespace App\Http\Controllers\Frontend;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Order;
use App\Models\Blog;
use App\Models\MiniCategory;
use Gloudemans\Shoppingcart\Facades\Cart;

class HomeController extends Controller
{
    public function home()
    {
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
        $relation_product = Product::where('tags', '=', $product->tags)->where('status', '=', 1)->get();
        $category_parent = MiniCategory::where('id' ,'=' ,$product->category_id)->first();
        return view('frontend.details_product.index', compact('product','category_parent', 'relation_product'));
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
        return response()->json(['success'=>'Thêm giỏ hàng thành công','quantity'=>Cart::count() ]);
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
        return response()->json(['success'=>'Bạn đã đặt hàng thành công' ]);
    }

    // 

    public function blogNew() {
        $blog = Blog::where('type_blog', '=', 'blog_new')->where('status', '=', '1')->paginate(6);
        $relation = Blog::where('type_blog','=','blog_new')->where('status', '=', '1')->take(3)->get();
        return view('frontend.blog.index',compact('blog', 'relation'));
    }

    public function blogDetail($id, $slug) {
        $blog_detail = Blog::find($id);
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

        $product = Product::orderBy('created_at', 'DESC')->where('category_id', '=', $id )->where('status', '=', 1)->get();
        return view('frontend.collection.index', compact('product'));
    }
    public function collectionAll() {
        $product = Product::paginate(12);
        return view('frontend.collection.index', compact('product'));
    }
}
