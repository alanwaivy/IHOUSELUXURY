<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CartController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $carts = Cart::with('user', 'car')->get(); // Assuming relationships are defined
        return Inertia::render('Carts/Index', [
            'carts' => $carts,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Carts/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'user_id' => 'required|exists:users,id',
            'car_id' => 'required|exists:cars,id',
        ]);

        Cart::create($request->all());

        return redirect()->route('carts.index')->with('success', 'Cart created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $cart = Cart::with('user', 'car')->findOrFail($id); // Assuming relationships are defined
        return Inertia::render('Carts/Show', [
            'cart' => $cart,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $cart = Cart::findOrFail($id);
        return Inertia::render('Carts/Edit', [
            'cart' => $cart,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $cart = Cart::findOrFail($id);

        $request->validate([
            'user_id' => 'sometimes|exists:users,id',
            'car_id' => 'sometimes|exists:cars,id',
        ]);

        $cart->update($request->all());

        return redirect()->route('carts.index')->with('success', 'Cart updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $cart = Cart::findOrFail($id);
        $cart->delete();

        return redirect()->route('carts.index')->with('success', 'Cart deleted successfully.');
    }
}