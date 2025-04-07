<?php

namespace Database\Factories;

use App\Models\Car;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class RentalFactory extends Factory
{
    protected $model = \App\Models\Rental::class;

    public function definition()
    {
        // Ensure start date is always before end date
        $startDate = $this->faker->dateTimeBetween('-1 month', '+1 month');
        $endDate = (clone $startDate)->modify('+'.$this->faker->numberBetween(1, 14).' days');

        return [
            'user_id' => User::factory(),
            'car_id' => Car::factory(),
            'start_date' => $startDate,
            'end_date' => $endDate,
            'is_returned' => $this->faker->boolean(70) // 70% chance of being returned
        ];
    }
}