<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run()
    {
        // Create 5 brands
        \App\Models\Brand::factory(5)->create();
        
        // Create fuel types
        \App\Models\Fuel::factory(5)->create();
        
        // Create 10 car models
        \App\Models\CarModel::factory(10)->create();
        
        // Create 20 cars
        \App\Models\Car::factory(20)->create();
        
        // Create 10 users
        \App\Models\User::factory(10)->create();
        
        // Create 30 rental histories
        \App\Models\RentalHistory::factory(30)->create();
    }
}