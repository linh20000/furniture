 <section class="home-four-banner">
    <div class="container">
        <div class="home-four-banner-main">
            @foreach ($banner_four as $item)
                <div class="home-four-banner-main-item has-spin">
                    <a href="{{route('collectionAll')}}" aria-label="">
                        <picture>
                            <source media="(max-width: 360px)" 
                                            srcset="{{$item->thumbnail}}"
                                            data-srcset="{{$item->thumbnail}}">
                            <source media="(max-width: 480px)" 
                                            srcset="{{$item->thumbnail}}"
                                            data-srcset="{{$item->thumbnail}}">
                            <source media="(max-width: 767px)" 
                                            srcset="{{$item->thumbnail}}"
                                            data-srcset="{{$item->thumbnail}}">
                            <source media="(min-width: 767px)" 
                                            srcset="{{$item->thumbnail}}1"
                                            data-srcset="{{$item->thumbnail}}">
                            <img class="lazyload w-100" width="450" height="450" alt="Tặng kèm"
                                    src="{{$item->thumbnail}}"
                                    data-src="{{$item->thumbnail}}"/>
                        </picture>
                    </a>
                </div>
            @endforeach
        </div>
    </div>
</section>