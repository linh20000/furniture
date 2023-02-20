<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('product_code');
            $table->string('category_id');
            $table->string('tags');
            $table->string('product_line');
            $table->decimal('old_price', 10, 0);
            $table->decimal('sale_price',10,0);
            $table->string('status');
            $table->string('description');
            $table->string('specifications');
            $table->string('thumbnail');
            $table->string('option');
            $table->string('seo_title');
            $table->string('seo_keyword');
            $table->string('seo_description');
            $table->timestamps();
        });
    }
    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
};
