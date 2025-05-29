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
                'name' => 'Nieves',
                'description' => 'Helado artesanal de textura suave y sabores tradicionales o exóticos',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'name' => 'Bolis',
                'description' => 'Congelados en bolsitas, perfectos para llevar y disfrutar en cualquier lugar',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'name' => 'Paletas',
                'description' => 'Helados en palito, hechos con frutas naturales, leche o agua',
                'created_at' => now(),
                'updated_at' => now()
            ],
        ]);
    }
}
