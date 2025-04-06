<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CarModel extends Model
{
    use HasFactory;

    protected $fillable = [
        'name', 'brand_id', 'price', 'transmission', 'fuel_id'
    ];

    public function brand()
    {
        return $this->belongsTo(Brand::class);
    }

    public function fuelType()
    {
        return $this->belongsTo(FuelType::class);
    }

    public function carInstances()
    {
        return $this->hasMany(CarInstance::class);
    }
}
