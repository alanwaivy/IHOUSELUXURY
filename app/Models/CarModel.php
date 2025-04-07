<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CarModel extends Model
{
    protected $table = 'car_models'; 
    use HasFactory;

    protected $fillable = [
        'name', 'brand_id', 'price', 'transmission', 'fuel_id'
    ];

    public function brand()
    {
        return $this->belongsTo(Brand::class);
    }

    public function fuel()
    {
        return $this->belongsTo(Fuel::class, 'fuel_id');
    }

    public function carInstances()
    {
        return $this->hasMany(CarInstance::class);
    }
}
