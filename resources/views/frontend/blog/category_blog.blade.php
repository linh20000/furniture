<div class="section-title-all">
    <span>Danh mục Blog</span>
</div>
<ul class="main-blog-right-menu-data">
    <li class="hasChild">
        <a  title="Tất cả sản phẩm">Tất cả sản phẩm<span>›</span></a>
        <ul class="menu1"> 
             @foreach ($interior as $item)
                <li class="hasChild">
                    <a style="cursor:pointer;" title="{{$item->name}}">{{$item->name}}<span>›</span></a>
                    <ul class="menu2">
                        @foreach ($item->child as $item)
                            <li class="">
                                <a href="{{route('collection', [$item->id, Str::slug($item->name)])}}" title="{{$item->name}}">{{$item->name}}</a>
                            </li>
                        @endforeach
                    </ul>
                </li>
                
            @endforeach
        </ul>
    </li>
    <li class="hasChild">
        <a  href="{{route('collectionAll')}}" title="Danh mục sản phẩm">Danh mục sản phẩm<span>›</span></a>
        <ul class="menu1"> 
            <li class="">
                <a href="{{route('collectionAll')}}" >Danh mục Style 1</a>
            </li>
            <li class="">
                <a href="{{route('collectionAll.hozion')}}" >Danh mục Style 2</a>
            </li>
        </ul>
    </li>
    <li class="">
        <a  href="{{route('blogNew')}}" title="Blogs">Blogs</a>
    </li>
    <li class="">
        <a  href="{{route('blogManual')}}" title="Hướng dẫn sử dụng">Hướng dẫn sử dụng</a>
    </li>
    <li class="">
        <a  href="{{route('contact')}}" title="Liên hệ">Liên hệ</a>
    </li>
</ul>