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
                'name' => 'Hamburguesa Clásica',
                'description' => 'Carne de res, lechuga, jitomate, cebolla y mayonesa.',
                'price' => 100.00,
                'category_id' => 1, // Hamburguesas
                'created_at' => now(),
                'updated_at' => now()    
            ],
            [
                'name' => 'Hamburguesa BBQ',
                'description' => 'Carne a la parrilla con salsa BBQ, aros de cebolla y queso cheddar.',
                'price' => 120.00,
                'category_id' => 1,
                'created_at' => now(),
                'updated_at' => now()    
            ],
            [
                'name' => 'Hamburguesa Doble',
                'description' => 'Doble carne, doble queso y todos los complementos.',
                'price' => 150.00,
                'category_id' => 1,
                'created_at' => now(),
                'updated_at' => now()    
            ],
            [
                'name' => 'Taco de Pastor',
                'description' => 'Carne de cerdo marinada con especias, piña, cebolla y cilantro.',
                'price' => 30.00,
                'category_id' => 2, // Tacos
                'created_at' => now(),
                'updated_at' => now()    
            ],
            [
                'name' => 'Taco de Asada',
                'description' => 'Bistec jugoso a la parrilla con cebolla y cilantro.',
                'price' => 30.00,
                'category_id' => 2,
                'created_at' => now(),
                'updated_at' => now()    
            ],
            [
                'name' => 'Taco Vegetariano',
                'description' => 'Relleno de champiñones, pimientos y queso fresco.',
                'price' => 30.00,
                'category_id' => 2,
                'created_at' => now(),
                'updated_at' => now()    
            ],
            [
                'name' => 'Agua de Horchata o Jamaica',
                'description' => 'Aguas frescas tradicionales, ideal para refrescarte.',
                'price' => 25.00,
                'category_id' => 3, // Bebidas
                'created_at' => now(),
                'updated_at' => now()    
            ],
            [
                'name' => 'Sodas',
                'description' => 'Variedad de sodas embotelladas en diferentes sabores.',
                'price' => 25.00,
                'category_id' => 3,
                'created_at' => now(),
                'updated_at' => now()    
            ],
            [
                'name' => 'Agua Natural',
                'description' => 'Agua purificada, perfecta para acompañar cualquier platillo.',
                'price' => 15.00,
                'category_id' => 3,
                'created_at' => now(),
                'updated_at' => now()    
            ],
        ]);
    }
}