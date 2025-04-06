<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RentalHistory extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id', 'car_instance_id', 'start_date', 'end_date', 'total_price', 'status'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function carInstance()
    {
        return $this->belongsTo(CarInstance::class);
    }
}
