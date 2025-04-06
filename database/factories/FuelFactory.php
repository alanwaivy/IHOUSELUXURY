<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class FuelFactory extends Factory
{
    public function definition()
    {
        $fuelTypes = ['Gasoline', 'Diesel', 'Electric', 'Hybrid', 'LPG'];
        
        return [
            'type' => $this->faker->unique()->randomElement($fuelTypes),
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}