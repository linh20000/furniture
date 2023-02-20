@extends('backend.layout_default')

@section('content')
    <div class="app-content content ">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1>{{ $title }}</h1>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right justify-content-end">
                        <li class="breadcrumb-item"><a href="{{ route('admin.home') }}">Trang chủ</a></li>
                        <li class="breadcrumb-item active">{{ $title }}</li>
                    </ol>
                </div>
            </div>
        </div>
        <!-- /.container-fluid -->
        @if (session()->has('mess'))
            <div class="txt pb-2 pt-2 ps-2 alert alert-success h3">
                {{ session()->get('mess') }}
            </div>
        @endif
        @if (session()->has('success'))
            <div class="txt pb-2 pt-2 ps-2 alert alert-success h3">
                {{ session()->get('success') }}
            </div>
        @endif
        <script>
            setTimeout(() => {
                $('.txt').addClass('d-none')
            }, 2000)
        </script>
        <div class="card">
            <div class="card-body border-bottom d-flex justify-content-between align-items-center">
                <h4 class="card-title">Danh sách</h4>
                <a href="{{ route('blog.create') }}"><button type="button" class="btn btn-primary" data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop">
                        Thêm mới
                    </button></a>
            </div>
            <div class="card-datatable table-responsive pt-0">
                <table class="user-list-table table">
                    <thead class="table-light">
                        <tr>
                            <th style="width: 1%">
                                Id
                            </th>
                            <th style="width: 15%">
                                Ảnh
                            </th>
                            <th style="width: 15%">
                                Tên
                            </th>
                            <th style="width: 10%">
                                Phụ đề
                            </th>
                            <th style="width: 15%">
                                Ngày tạo
                            </th>
                            <th style="width: 15%">
                                Ngày cập nhật
                            </th>
                            <th style="width: 15%">
                                Trạng thái
                            </th>
                            <th style="width: 15%" class="text-right">
                                Tác vụ
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    @foreach($blog as $item)
                        <tr id="row" class="text-center">
                            <td>
                                {{$item->id}}
                            </td>
                            <td >
                                <div style="height:70px; overflow:hidden; display:flex; justify-content: center">
                                    <img style="width:85%; object-fit:cover;" src="{{$item->image ? $item->image : asset('upload_thumbnail/empty_img.png')}}" alt="">
                                </div>
                            </td>
                            <td style="max-width:110px;"> 
                                <a style="word-wrap: break-word;white-space: normal;overflow: hidden;display: -webkit-box;text-overflow: ellipsis;-webkit-box-orient: vertical;-webkit-line-clamp: 2; ">
                                    {{$item->name}}
                                </a>
                            </td>
                            <td class=""  style="max-width:150px;">
                                <a style="display:-webkit-box;word-wrap: break-word;white-space: normal;overflow: hidden;display: -webkit-box;text-overflow: ellipsis;-webkit-box-orient: vertical;-webkit-line-clamp: 2; ">
                                    {{$item->subname}}
                                </a>
                            </td>
                            <td style="max-width:110px;"> 
                                <a style="word-wrap: break-word;white-space: normal;overflow: hidden;display: -webkit-box;text-overflow: ellipsis;-webkit-box-orient: vertical;-webkit-line-clamp: 2; ">
                                    {{$item->created_at->format('d / m / Y')}}
                                </a>
                            </td>
                            <td style="max-width:110px;"> 
                                <a style="word-wrap: break-word;white-space: normal;overflow: hidden;display: -webkit-box;text-overflow: ellipsis;-webkit-box-orient: vertical;-webkit-line-clamp: 2; ">
                                    {{$item->updated_at->format('d / m / Y')}}
                                </a>
                            </td>
                            <td class=""  style="max-width:150px;">
                                @if ($item->status == 1)
                                    <a style="color:green;display:-webkit-box;word-wrap: break-word;white-space: normal;overflow: hidden;display: -webkit-box;text-overflow: ellipsis;-webkit-box-orient: vertical;-webkit-line-clamp: 2; ">
                                        Hiện
                                    </a>
                                @else
                                    <a style="color:red;display:-webkit-box;word-wrap: break-word;white-space: normal;overflow: hidden;display: -webkit-box;text-overflow: ellipsis;-webkit-box-orient: vertical;-webkit-line-clamp: 2; ">
                                        Ẩ<n></n>
                                    </a>
                                @endif
                            </td>
                            <td class="project-actions text-right">
                                <a href="{{ route('blog.getUpdate', $item->id) }}" class="btn btn-sm btn-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit font-medium-2 text-body">
                                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                                    </svg>
                                </a>
                                <a type="button" data-bs-toggle="modal" data-bs-target="#deleteModal{{$item->id}}" class="btn btn-sm btn-icon delete-record">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash font-medium-2 text-body">
                                        <polyline points="3 6 5 6 21 6"></polyline>
                                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                    </svg>
                                </a>
                            </td>
                        </tr>
                        <div class="modal fade" id="deleteModal{{$item->id}}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header flex-column">
                                        <div class="icon-box">
                                        </div>						
                                        <h4 class="modal-title w-100">Bạn có chắc không?</h4>	
                                    </div>
                                    <div class="modal-body">
                                        <p>Bạn có thực sự muốn xóa? Quá trình này không thể được hoàn tác.</p>
                                    </div>
                                    <div class="modal-footer justify-content-center">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" aria-label="Close">Quay lại</button>
                                        <a href="{{route('admin.deleteblog',[$item->id])}}"  type="button" class="btn btn-danger">Xóa</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    @endforeach
                </tbody>
                </table>
            </div>
        </div>
    </div>
@endsection
