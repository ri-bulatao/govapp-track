<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DefaultUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        if (User::where('email', 'info@iphitech.com')->count() == 0) {
            $user = User::create([
                'name' => 'iPhiTech Admin',
                'email' => 'info@iphitech.com',
                'password' => bcrypt('iphitech-admin'),
                'email_verified_at' => now()
            ]);
            $user->creation_token = null;
            $user->save();
        }
    }
}
