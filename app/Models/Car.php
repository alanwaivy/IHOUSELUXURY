<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Car extends Model
{
    use HasFactory;

    protected $fillable = [
        'name', 'status', 'price', 'transmission', 
        'kilometrage', 'color', 'fuel_type', 'model', 'brand_id'
    ];

    public function brand()
    {
        return $this->belongsTo(Brand::class);
    }

    public function rentals()
    {
        return $this->hasMany(Rental::class);
    }
}
