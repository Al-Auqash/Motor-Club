<?php

namespace App\Http\Controllers;

use App\Models\Client;
use App\Models\Club;
use App\Models\Gallery;
use App\Models\Product;
use App\Models\Vision_and_mission;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    // public function home()
    // {
    //     return view('welcome');
    // }


    public function profile()
    {
        $profile = Club::first();

        return $profile->toJson();
    }

    public function visionAndMission()
    {
        $vam = Vision_and_mission::select('*')->get();

        return $vam->toJson();
    }

    public function product()
    {
        return Product::first()->toJson();
    }

    public function contact()
    {
        return Club::first()->toJson();
    }

    public function client()
    {
        return Client::all()->toJson();
    }

    public function gallery()
    {
        return Gallery::all()->toJson();
    }

    public function about()
    {
        return Club::first()->toJson();
    }
}
