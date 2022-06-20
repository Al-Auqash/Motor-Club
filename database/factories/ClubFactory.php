<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class ClubFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'email' => 'TCOL@gmail.com',
            'phone' => '082140651182',
            'address' => 'Jl Khairil Anwar 65B',
            'about' => 'The Cycle of Leo was taken from the name of the way of life in a movie "The Circle of Life" that has philosophy about circle that will always continue and has no end. therefore The Cycle of Leo was built with philosophy that the tire of the motorcycle will never stop',
            'profile' => 'Has been developed into biker community, the cycle of leo is the one of the club that will become the best among them because of their dedication on being community superior',
        ];
    }
}
