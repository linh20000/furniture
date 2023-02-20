<?php

namespace App\Http\Controllers\Backend;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Category;
use App\Models\MiniCategory;
use Illuminate\Support\Str;
class ProductController extends Controller

{
    public function search(Request $request){
        // dd($request->all());
        $product = Product::where('name', 'LIKE', '%'. $request->search .'%')->orWhere('product_code', 'LIKE', '%'. $request->search .'%')->get();
        $productLenght = count($product);
        return view('backend.product.list',['breadcrumb'=>'Danh sách sản phẩm'],compact('product','productLenght'));
    }
    public function showProductList() {
        $product = Product::all();
        // dd($dataProduct);
        $productLenght = count($product);
        return view('backend.product.list',['breadcrumb'=>'Danh sách sản phẩm'],compact('product','productLenght'));
    }
    public function getCreateProduct() {
        // $category_id = Product::where('category_id','=', '1')->where('status','=','0')->get();
        $category_id = MiniCategory::where('category_id' ,'!=' , 0)->where('status', '=', 1)->get();
        return view('backend.product.create',['breadcrumb'=>'Thêm sản phẩm'],compact('category_id'));
    }
    public function addProduct( Request $request) {

        $thumbnail[] = [
            'thumbnail_color' => $request->thumbnail_color,
            'thumbnail_type' => $request->thumbnail_type,
        ];
        $options[] = [
            'thumbnail' => $thumbnail,
            'color_1' => $request->color_1,
            'color_2'=>$request->color_2,
            'type_1'=>$request->type_1,
            'type_2'=>$request->type_2,
        ];
        // dd(JSON_encode($options));
        $data = $request->all();
        $data['options'] = JSON_encode($options);
        $data['thumbnail_list'] = JSON_encode($request->thumbnail_list);
        // dd($data['options']);
        $validate = $request->validate([
            'name'=>'required',
            'product_code'=>'required',
            'old_price'=>'required',
            'sale_price'=>'required',
            'description'=>'required',
            'specifications'=>'required',
            'trademark'=>'required',
            'color_1'=>'required',
            'color_2'=>'required',
            'type_1'=>'required',
            'type_2'=>'required',
            'thumbnail_color_1'=>'required',
            'thumbnail_color_2'=>'required',
            'thumbnail_type_1'=>'required',
            'thumbnail_type_2'=>'required',
            'seo_title'=>'required',
            'seo_keyword'=>'required',
            'seo_description'=>'required',

        ], [
            'name.required'=>'Bạn chưa nhập tên sản phẩm',
            'product_code.required'=>'Bạn chưa nhập mã sản phẩm',
            'old_price.required'=>'Bạn chưa nhập giá gốc sản phẩm',
            'trademark.required'=>'Bạn chưa nhập nhãn hàng',
            'sale_price.required'=>'Vui lòng kiểm tra lại giá sale',
            'color_1.required'=>'Bạn chưa nhập màu sắc',
            'color_2.required'=>'Bạn chưa nhập màu sắc',
            'type_1.required'=>'Bạn chưa nhập biến thể',
            'type_2.required'=>'Bạn chưa nhập biến thể',
            'thumbnail_color_1.required'=>'Bạn chưa nhập ảnh',
            'thumbnail_color_2.required'=>'Bạn chưa nhập ảnh',
            'thumbnail_type_1.required'=>'Bạn chưa nhập ảnh ',
            'thumbnail_type_2.required'=>'Bạn chưa nhập ảnh',
            'description.required'=>'Bạn chưa nhập mô tả',
            'specifications.required'=>'Bạn chưa nhập thông tin chỉ số',
            'seo_title.required'=>'Bạn chưa nhập tiêu đề tìm kiếm',
            'seo_keyword.required'=>'Bạn chưa nhập từ khóa tìm kiếm',
            'seo_description.required'=>'Bạn chưa nhập miêu tả tìm kiếm',


        ]);
        Product::create($data);
        return back()->with('success', 'Thêm thành công sản phẩm !');
    }
    
    public function getUpdateProduct($id) {
        $product = Product::find($id);
        $category_id = Category::where('parent_id' ,'=' , 0) ->get();
        return view('backend.product.update',['breadcrumb'=>'Chỉnh sửa sản phẩm'], compact('product','category_id'));
    }

    public function updateProduct($id, Request $request) {
        $data_update = $request->all();
        // dd($data);
        $product_update = Product::findOrFail($id);
        $product_update -> update($data_update);
        return redirect(route('admin.showProductList'))->with('success', 'Chỉnh sửa thành công'); 
    }
    

    public function deleteProduct($id) {
        $product_delete = Product::find($id) ;
        $product_delete->delete();
        return back()->with('mess', 'Xóa thành công sản phẩm');        
    }
}
