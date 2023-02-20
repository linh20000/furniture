 <section class="home-slider">
    <div class="home-slider-main"> 
        <!-- Dom append in index.js for Lighthouse -->
        @foreach ($banner_slide as $item)
            <div class="home-slider-main-item">
                <a href="" aria-label="Banner slider 1">
                    <picture>
                        <source media="(max-width: 480px)" 
                                        srcset="{{$item->thumbnail}}"
                                        data-srcset="{{$item->thumbnail}}">
                        <source media="(min-width: 481px) and (max-width: 767px)" 
                                        srcset="{{$item->thumbnail}}"
                                        data-srcset="{{$item->thumbnail}}">
                        <source media="(min-width: 768px)" 
                                        srcset="{{$item->thumbnail}}"
                                        data-srcset="{{$item->thumbnail}}">
                        <img class="lazyload w-100" width="1920" height="640" alt="Banner slider 1" 
                                src="{{$item->thumbnail}}"
                                data-src="{{$item->thumbnail}}"/>
                    </picture>
                </a>
            </div>
        @endforeach
    </div>
</section>