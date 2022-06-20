<?php

namespace Database\Seeders;

use App\Models\Vision_and_mission;
use Illuminate\Database\Seeder;

class VamSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Vision_and_mission::factory()->create([
            'vision' => 'It is the vision of The Cycle of Leo to grow our riding club, promote safe riding, and continue to thrive as one of premier motorcycle riding families.',
            'mission' => 'It is the mission of The Cycle of Leo to promote safe motorcycle riding throughout the world and beyond. We will accomplish this through educating new riders, and the public about the safety, responsibility, and fun of riding motorcycles. We will also accomplish this by being positively involved in our community, and local charity events. Most importantly, it is our mission to have fun!'
        ]);
    }
}
