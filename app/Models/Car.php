<?php 


namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Car extends Model
{
    use HasFactory;

    protected $fillable = [
        'car_model_id', 'color', 'kilometrage', 'status', 'quantity'
    ];

    public function carModel()
    {
        return $this->belongsTo(CarModel::class);
    }

    public function rentalHistory()
    {
        return $this->hasMany(RentalHistory::class);
    }
}
