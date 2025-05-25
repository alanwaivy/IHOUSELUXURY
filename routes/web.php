<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use \App\Models\Brand;
use \App\Models\Car;
use App\Http\Controllers\CarController;
use App\Http\Controllers\BrandController;

Route::get('/', function () {
    return Inertia::render('Home', [
        // 'cars' => Car::with('brand_id')->get(),
        // 'brands' => Brand::all(),
        // 'models' => Car::distinct()->pluck('model'),
        // 'maxPrice' => Car::max('price'),

    ]);
});Route::get('/dashboard', function () {
    return Inertia::render('Dashboard', [
        'cars' => Car::with('brand')->get(),
        'brands' => Brand::all(),
    ]);
})->middleware(['auth', 'verified'])->name('dashboard');


Route::get('/stock', function () {
    return Inertia::render('Stock');
});

Route::get('/contact', function () {
    return Inertia::render('Contact');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// CRUD routes for cars and brands
Route::middleware(['auth'])->group(function () {
    Route::post('/cars', [CarController::class, 'store']);
    Route::delete('/cars/{car}', [CarController::class, 'destroy']);
    
    Route::post('/brands', [BrandController::class, 'store']);
    Route::delete('/brands/{brand}', [BrandController::class, 'destroy']);
});

Route::get('/cars/{slug}', function ($slug) {
    return Inertia::render('CarDetails', [
        'car' => [
            'id' => 1,
            'name' => 'PORSCHE 911 CARRERA',
            'year' => '2025',
            'type' => 'Cabriolet',
            'fuel' => 'Essence',
            'transmission' => 'Automatic',
            'condition' => 'Neuf',
            'mileage' => '0 Km',
            'doors' => '2-door',
            'cylinders' => '6',
            'color' => 'Grey',
            'images' => [
                '/images/cars/luxury/1Untitled.jpg',
                '/images/cars/luxury/2Untitled.jpg',
                '/images/cars/luxury/3Untitled.jpg',
                '/images/cars/luxury/4Untitled.jpg',
                '/images/cars/luxury/5Untitled.jpg',
            ]
        ]
    ]);
})->name('car.details');

require __DIR__.'/auth.php';
