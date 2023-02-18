<?php

namespace App\Http\Controllers\Backend;
use App\Http\Controllers\Controller;
use App\Models\Interior;
use Illuminate\Http\Request;

class InteriorCategoryController extends Controller
{
      // Danh sách danh mục
    public function showInteriorCategory() {
        $categories_list = Interior::all();
        $dataLenght = count($categories_list);
        return view('backend.interior.list',compact('categories_list','dataLenght'),['breadcrumb'=>'Danh sách danh mục']);
    }   
    // Thêm danh mục
    public function createInteriorCategory() {
        $category_parent = Interior::where('parent_id' , '=', 0)->get();
        // dd($category_parent);
        return view('backend.interior.create',['breadcrumb'=>'Thêm danh mục'],compact('category_parent'));
    }

    public function postInteriorCategory(Request $request) {
        $dataCategory = $request->all();
        $requi = [
            'name'        => 'required|max:255',
            'seo_title'     => 'required|max:255',
            'seo_keyword' => 'required|max:255',
            'seo_description'        => 'required|max:255',
        ];
        $messages = [
            'name.required'    => 'Chưa nhập tên',
            'title.required'=>'Chưa nhập tiêu đề',
            'description.required'=>'Chưa nhập miêu tả',
            'thumbnail.required'    => 'Chưa nhập ảnh',
            'seo_title.required' => 'Chưa nhập tiêu đề tìm kiếm',
            'seo_keyword.required' => 'Chưa nhập từ khóa tìm kiếm',
            'seo_description.required'=>'Chưa nhập miêu tả tìm kiếm',
        ];
        $request->validate($requi, $messages);
        Interior::create($dataCategory);
        return back()->with('success','Thêm danh mục thành công');
    }

    // Chỉnh sửa danh mục
    public function getUpdateInteriorCategory($id) {
        $category = Interior::find($id);
        $category_parent = Interior::where('parent_id' , '=', 0)->get();
        return view('backend.interior.update',['breadcrumb'=>'Chỉnh sửa danh mục'], compact('category','category_parent'));
    } 

     public function updateInteriorcategory (Request $request, $id) {
        $data_update = $request->all();
        $category_update = Interior::find($id);
        $requi = [
            'name'        => 'required|max:255',
            'seo_title'     => 'required|max:255',
            'seo_keyword' => 'required|max:255',
            'seo_description'        => 'required|max:255',
        ];
        $messages = [
            'name.required'    => 'Chưa nhập tên',
            'seo_title.required' => 'Chưa nhập tiêu đề tìm kiếm',
            'seo_keyword.required' => 'Chưa nhập từ khóa tìm kiếm',
            'seo_description.required'=>'Chưa nhập miêu tả tìm kiếm',
        ];
        $request->validate($requi, $messages);
        $category_update->update($data_update);
        return redirect(route('admin.Interiorcategory'))->with('success', 'Chỉnh sửa thành công');
    }
        // xóa danh mục
    public function deleteInteriorCategory($id) {
        $category_delete = Interior::find($id);

        $category_delete->delete();
        return back()->with('success', 'Xóa danh mục thành công');
    }

    // tìm kiếm danh mục
    public function search(Request $request){
        $categories = Interior::where('name', 'LIKE', '%'. $request->name .'%')->orWhere('title', 'LIKE', '%'. $request->name .'%')->where('status','=', '1')->get();
        $dataLenght = count($categories);
        return view('backend.interior.list', [
            'breadcrumb'=>'Quản lý danh mục'
        ],compact('categories','dataLenght'));
    }
}
