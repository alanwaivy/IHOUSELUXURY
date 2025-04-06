<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('carModels', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->unsignedBigInteger('brand_id');
            $table->decimal('price', 10, 2);
            $table->string('transmission');
            $table->unsignedBigInteger('fuel_id');
            $table->timestamps();

            // Foreign keys
            $table->foreign('brand_id')->references('id')->on('brands')->onDelete('cascade');
            $table->foreign('fuel_id')->references('id')->on('fuel')->onDelete('cascade');
        }); 
    }


    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('carModels');
    }
};
