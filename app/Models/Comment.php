<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasFactory;
    use HasFactory;
    protected $table = 'form_comments';
    protected $fillable = [
        'author',
        'comment',
        'email',
        'url',
    ];
}
