<div class="section-title-all">
    <span>Danh mục Blog</span>
</div>
<ul class="main-blog-right-menu-data">
    <li class="hasChild">
        <a  href="../collections/all.html" title="Tất cả sản phẩm">Tất cả sản phẩm<span>›</span></a>
        <ul class="menu1"> 
             @foreach ($interior as $item)
                <li class="hasChild">
                    <a href="" title="{{$item->name}}">{{$item->name}}<span>›</span></a>
                    <ul class="menu2">
                        @foreach ($item->childs as $item)
                            <li class="">
                                <a href="" title="{{$item->name}}">{{$item->name}}</a>
                            </li>
                        @endforeach
                    </ul>
                </li>
                
            @endforeach
        </ul>
    </li>
    <li class="hasChild">
        <a  href="../collections/all.html" title="Danh mục sản phẩm">Danh mục sản phẩm<span>›</span></a>
        <ul class="menu1"> 
            <li class="">
                <a href="../collections/allfc2c.html?view=vertical" title="Danh mục Style 1">Danh mục Style 1</a>
            </li>
            <li class="">
                <a href="../collections/allc267.html?view=horizontal" title="Danh mục Style 2">Danh mục Style 2</a>
            </li>
        </ul>
    </li>
    <li class="hasChild">
        <a  href="../products/tu-quan-ao-3-cua-f1genz-cao-cap.html" title="Chi tiết sản phẩm">Chi tiết sản phẩm<span>›</span></a>
        <ul class="menu1"> 
            <li class="">
                <a href="../products/tu-quan-ao-3-cua-f1genz-cao-capdda0.html?view=style1" title="Chi tiết Style 1">Chi tiết Style 1</a>
            </li>
            <li class="">
                <a href="../products/tu-quan-ao-3-cua-f1genz-cao-cap1848.html?view=style2" title="Chi tiết Style 2">Chi tiết Style 2</a>
            </li>
            <li class="">
                <a href="../products/tu-quan-ao-3-cua-f1genz-cao-cap089e.html?view=style3" title="Chi tiết Style 3">Chi tiết Style 3</a>
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
        <a  href="" title="Liên hệ">Liên hệ</a>
    </li>
</ul>