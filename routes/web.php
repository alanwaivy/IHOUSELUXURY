<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
//use \App\Models\Brand;
use \App\Models\Car;

Route::get('/', function () {
    return Inertia::render('Home', [
       
               'carss' => \App\Models\Car::with('brand')->get(),
               'brands' => \App\Models\Brand::with('name')->get(),
               'models' => \App\Models\Car::distinct()->pluck('model'),
               'maxPrice' => Car::max('price') 
       
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified']);


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

require __DIR__.'/auth.php';
