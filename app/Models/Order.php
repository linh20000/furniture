<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
class Order extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'phoneNumber',
        'province',
        'district',
        'wards',
        'address',
        'note',
        'product',
        'total',
        'qty',
        'status',
        'shipping',
    ];
    
}
