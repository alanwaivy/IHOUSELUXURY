<?php

namespace Database\Factories;

use App\Models\Brand;
use Illuminate\Database\Eloquent\Factories\Factory;

class CarFactory extends Factory
{
    protected $model = \App\Models\Car::class;

    public function definition()
    {
        $carMarkes = ['Toyota', 'Honda', 'Ford', 'BMW', 'Mercedes', 'Audi', 'Tesla'];
        $carModels = ['Camry', 'Civic', 'F-150', 'X5', 'C-Class', 'A4', 'Model 3'];
        
        return [
            'name' => $this->faker->randomElement($carMarkes).' '.$this->faker->randomElement($carModels),
            'status' => $this->faker->randomElement(['available', 'rented', 'maintenance']),
            'condition' => $this->faker->randomElement(['neuf', 'occasion']),
            'price' => $this->faker->numberBetween(50, 300),
            'transmission' => $this->faker->randomElement(['automatic', 'manual']),
            'kilometrage' => $this->faker->numberBetween(0, 100000),
            'color' => $this->faker->colorName(),
            'fuel_type' => $this->faker->randomElement(['gasoline', 'diesel', 'electric']),
            'model' => $this->faker->randomElement($carModels),
            'brand_id' => Brand::factory()
        ];
    }
}