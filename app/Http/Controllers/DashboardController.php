<?php

namespace App\Http\Controllers;

use App\Models\Client;
use App\Models\Club;
use App\Models\Gallery;
use App\Models\Product;
use App\Models\Vision_and_mission;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function profile()
    {
        return view('', [
            'profile' => Club::first()
        ]);
    }

    public function visionAndMission()
    {
        return view('dashboard.vision-and-mission', [
            'vam' => Vision_and_mission::select('*')->get(),
        ]);
    }

    public function product()
    {
        return view('dashboard.product', [
            'product' => Product::first(),
        ]);
    }

    public function contact()
    {
        return view('dashboard.club', [
            'club' => Club::first(),
        ]);
    }

    public function client()
    {
        $client = Client::all();
        return view('dashboard.client', [
            'client' => $client,
        ]);
    }

    public function gallery()
    {
        return view('dashboard.gallery', [
            'gallery' => Gallery::all(),
        ]);
    }

    public function about()
    {
        return view('dashboard.club', [
            'club' => Club::first(),
        ]);
    }
}
