<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class RentalHistoryFactory extends Factory
{
    public function definition()
    {
        $startDate = $this->faker->dateTimeBetween('-1 year', 'now');
        $endDate = $this->faker->dateTimeBetween($startDate, '+2 weeks');
        
        return [
            'user_id' => \App\Models\User::factory(),
            'car_id' => \App\Models\Car::factory(),
            'start_date' => $startDate,
            'end_date' => $endDate,
            'total_price' => $this->faker->numberBetween(100, 2000),
            'status' => $this->faker->randomElement(['ongoing', 'completed', 'cancelled']),
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}