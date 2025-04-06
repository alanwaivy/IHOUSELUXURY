<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class CarModelFactory extends Factory
{
    public function definition()
    {
        return [
            'brand_id' => \App\Models\Brand::factory(),
            'name' => $this->faker->unique()->word(),
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}