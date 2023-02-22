<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Category;
use App\Models\Product;
class MiniCategory extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'category_id',
        'status',
        'seo_title',
        'seo_description',
        'seo_keyword',
    ];
    public function parent_category() {
        return $this->belongsTo(Category::class,'parent_id');
    }
    public function childs(){
        return $this->hasMany(Product::class ,'category_id');
    }
}
