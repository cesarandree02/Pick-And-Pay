<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        DB::table('products')->insert([
            [
                'name' => 'Vainilla',
                'description' => 'Nieve de Vainilla',
                'price' => 25.00,
                'category_id' => 1, // Nieves
                'created_at' => now(),
                'updated_at' => now()    
            ],
            [
                'name' => 'Fresa',
                'description' => 'Nieve de Fresa',
                'price' => 25.00,
                'category_id' => 1,
                'created_at' => now(),
                'updated_at' => now()    
            ],
            [
                'name' => 'Chocolate',
                'description' => 'Nieve de Chocolate',
                'price' => 25.00,
                'category_id' => 1, //
                'created_at' => now(),
                'updated_at' => now()    
            ],
            [
                'name' => 'Limon',
                'description' => 'Boli de Limon',
                'price' => 10.00,
                'category_id' => 2, // Bolis
                'created_at' => now(),
                'updated_at' => now()    
            ],
            [
                'name' => 'Rompope',
                'description' => 'Boli de Rompope',
                'price' => 10.00,
                'category_id' => 2,
                'created_at' => now(),
                'updated_at' => now()    
            ],
            [
                'name' => 'Chicle',
                'description' => 'Boli de Chicle',
                'price' => 10.00,
                'category_id' => 2,
                'created_at' => now(),
                'updated_at' => now()    
            ],
            [
                'name' => 'Piña',
                'description' => 'Paleta de Piña',
                'price' => 10.00,
                'category_id' => 3, // Paletas
                'created_at' => now(),
                'updated_at' => now()    
            ],
            [
                'name' => 'Limon',
                'description' => 'Paleta de Limon',
                'price' => 10.00,
                'category_id' => 3,
                'created_at' => now(),
                'updated_at' => now()    
            ],
            [
                'name' => 'Uva',
                'description' => 'Paleta de Uva',
                'price' => 10.00,
                'category_id' => 3,
                'created_at' => now(),
                'updated_at' => now()    
            ],
        ]);
    }
}