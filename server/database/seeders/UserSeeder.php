<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        // Crea un usuario normales con rol user (por defecto en la fábrica)
        // User::factory()->count(1)->create();

        // Crea un usuario admin con rol admin y contraseña personalizada
        User::factory()->create([
            'name' => 'Admin',
            'email' => 'admin@test.com',
            'role' => 'admin',
            'password' => bcrypt('1234'),
        ]);

        // Crea un usuario user con rol user y contrasena personalizada
        User::factory()->create([
            'name' => 'User1',
            'email' => 'user1@test.com',
            'role' => 'user',
            'password' => bcrypt('1234'),
        ]);
    }
}
