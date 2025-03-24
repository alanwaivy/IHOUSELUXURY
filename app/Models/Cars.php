<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cars extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'marque',
        'modèle',
        'Anneé',
        'Transmission',
        'Kilométrage',
        'Type_carburant',
        'Portes',
        'Cylinders',
        'Description',
        'image',
    ];
}
