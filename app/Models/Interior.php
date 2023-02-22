<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Interior extends Model
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
// relation cateogry
    public function parent()
    {
        return $this->belongsTo(Interior::class);
    }

    public function child() {
        return $this->hasMany(Interior::class, 'parent_id');
    }
    // 

    public function childs(){
        return $this->hasMany(ProductInterior::class ,'category_id');
    }
}
