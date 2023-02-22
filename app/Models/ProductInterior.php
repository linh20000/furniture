<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\MiniCategory;
class ProductInterior extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'thumbnail',
        'thumbnail_list',
        'product_code',
        'trademark',
        'status',
        'size',
        'tags',
        'product_line',
        'category_id',
        'old_price',
        'sale_price',
        'description',
        'specifications',
        'options',
        'seo_keyword',  
        'seo_description',
        'seo_title',
    ];
    public function parent(){
       return $this->belongsTo(Interior::class);
    }
}
