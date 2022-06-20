<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class Vision_and_missionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'vision' => 'vision',
            'mission' => 'mission'
        ];
    }
}
