<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::table('cars', function (Blueprint $table) {
            $table->string('transmission')->after('price');
            $table->string('condition')->after('transmission');
            $table->integer('kilometrage')->after('condition');
            $table->string('fuel_type')->after('kilometrage');
            $table->string('doors')->after('fuel_type');
            $table->string('type')->after('doors');
            $table->string('color')->after('type')->nullable();
            $table->string('image_url')->after('color')->nullable();
        });
    }

    public function down()
    {
        Schema::table('cars', function (Blueprint $table) {
            $table->dropColumn([
                'transmission',
                'condition',
                'kilometrage',
                'fuel_type',
                'doors',
                'type',
                'color',
                'image_url'
            ]);
        });
    }
}; 