<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        DB::table('categories')->insert([
            [
                'name' => 'Hamburguesas',
                'description' => 'Deliciosa combinación de pan suave, carne o ingredientes al gusto y acompañamientos variados.',
                'created_at' => now(),
                'updated_at' => now(),
                'image_url' => '/images/categories/hamburguesas.png',
            ],
            [
                'name' => 'Tacos',
                'description' => 'Tortillas suaves o crujientes con rellenos tradicionales y salsas caseras.',
                'created_at' => now(),
                'updated_at' => now(),
                'image_url' => '/images/categories/tacos.png',

            ],
            [
                'name' => 'Bebidas',
                'description' => 'Refrescos, aguas frescas y jugos naturales para acompañar tu comida.',
                'created_at' => now(),
                'updated_at' => now(),
                'image_url' => '/images/categories/bebidas.png',
            ],
        ]);
    }
}
