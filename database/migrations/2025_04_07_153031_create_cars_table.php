<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('cars', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->enum('status', ['available', 'rented', 'maintenance']);
            $table->enum('condition', ['neuf', 'occasion'])
              ->default('occasion');
              
            $table->decimal('price', 10, 2);
            $table->string('transmission');
            $table->integer('kilometrage');
            $table->string('color');
            $table->string('fuel_type');
            $table->string('model');
            $table->foreignId('brand_id')->constrained()->cascadeOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cars');
    }
};
