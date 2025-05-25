<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::table('brands', function (Blueprint $table) {
            $table->text('description')->after('name')->nullable();
            $table->string('image_url')->nullable()->change();
        });

        Schema::table('cars', function (Blueprint $table) {
            // Drop existing columns we don't need
            $table->dropColumn([
                'name',
                'status',
                'condition',
                'transmission',
                'kilometrage',
                'color',
                'fuel_type'
            ]);

            // Add new columns
            $table->integer('year')->after('model');
        });
    }

    public function down()
    {
        Schema::table('brands', function (Blueprint $table) {
            $table->dropColumn('description');
            $table->string('image_url')->nullable(false)->change();
        });

        Schema::table('cars', function (Blueprint $table) {
            $table->dropColumn('year');
            
            // Restore original columns
            $table->string('name');
            $table->enum('status', ['available', 'rented', 'maintenance']);
            $table->enum('condition', ['neuf', 'occasion'])->default('occasion');
            $table->string('transmission');
            $table->integer('kilometrage');
            $table->string('color');
            $table->string('fuel_type');
        });
    }
}; 