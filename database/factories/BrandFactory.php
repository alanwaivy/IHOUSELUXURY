<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class BrandFactory extends Factory
{
    public function definition()
    {
        return [
            'name' => $this->faker->unique()->company(),
            'image_url' => $this->faker->imageUrl(640, 480, 'transport', true, 'car brand'), 
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}