<?php

namespace App\Http\Controllers;

use App\Models\Cars;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CarsController extends Controller
{
    // Display a listing of the cars
    public function index()
    {
        $cars = Cars::all();
        return Inertia::render('Cars/Index', [
            'cars' => $cars,
        ]);
    }

    // Show the form for creating a new car
    public function create()
    {
        return Inertia::render('Cars/Create');
    }

    // Store a newly created car in the database
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'marque' => 'required',
            'modèle' => 'required',
            'Anneé' => 'required|year',
            'Transmission' => 'required',
            'Kilométrage' => 'required|integer',
            'Type_carburant' => 'required',
            'Portes' => 'required|integer',
            'Cylinders' => 'required|integer',
            'Description' => 'required',
            'image' => 'nullable|image',
        ]);

        Cars::create($request->all());
        return redirect()->route('cars.index')->with('success', 'Car created successfully.');
    }

    // Display the specified car
    public function show(Cars $car)
    {
        return Inertia::render('Cars/Show', [
            'car' => $car,
        ]);
    }

    // Show the form for editing the specified car
    public function edit(Cars $car)
    {
        return Inertia::render('Cars/Edit', [
            'car' => $car,
        ]);
    }

    // Update the specified car in the database
    public function update(Request $request, Cars $car)
    {
        $request->validate([
            'name' => 'required',
            'marque' => 'required',
            'modèle' => 'required',
            'Anneé' => 'required|year',
            'Transmission' => 'required',
            'Kilométrage' => 'required|integer',
            'Type_carburant' => 'required',
            'Portes' => 'required|integer',
            'Cylinders' => 'required|integer',
            'Description' => 'required',
            'image' => 'nullable|image',
        ]);

        $car->update($request->all());
        return redirect()->route('cars.index')->with('success', 'Car updated successfully.');
    }

    // Remove the specified car from the database
    public function destroy(Cars $car)
    {
        $car->delete();
        return redirect()->route('cars.index')->with('success', 'Car deleted successfully.');
    }
}
