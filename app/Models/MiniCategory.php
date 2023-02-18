<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Category;
class MiniCategory extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'parent_id',
        'status',
        'seo_title',
        'seo_description',
        'seo_keyword',
    ];
    public function parent_category() {
        return $this->belongsTo(Category::class);
    }
}
