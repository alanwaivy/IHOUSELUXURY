<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class CarFactory extends Factory
{
    public function definition()
    {
        $transmissions = ['Automatic', 'Manual', 'CVT', 'DCT'];
        $colors = ['Red', 'Blue', 'Black', 'White', 'Silver', 'Gray'];
        
        return [
            'model_id' => \App\Models\CarModel::factory(),
            'fuel_id' => \App\Models\Fuel::factory(),
            'price' => $this->faker->numberBetween(50, 300),
            'transmission' => $this->faker->randomElement($transmissions),
            'color' => $this->faker->randomElement($colors),
            'kilometrage' => $this->faker->numberBetween(0, 100000),
            'status' => $this->faker->randomElement(['available', 'rented', 'maintenance']),
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}