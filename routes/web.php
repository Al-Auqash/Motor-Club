<?php

use Illuminate\Support\Facades\Route;
use SebastianBergmann\CodeCoverage\Report\Html\Dashboard;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/profile', function () {
    return view('welcome');
});

Route::get('/vision-and-mission', function () {
    return view('welcome');
});

Route::get('/product', function () {
    return view('welcome');
});

Route::get('/contact', function () {
    return view('welcome');
});

Route::get('/about', function () {
    return view('welcome');
});

Route::get('/article', function () {
    return view('welcome');
});

Route::get('/event', function () {
    return view('welcome');
});

Route::get('/gallery', function () {
    return view('welcome');
});

Route::get('/client', function () {
    return view('welcome');
});

Route::prefix("dashboard")->middleware(['auth:sanctum', config('jetstream.auth_session'), 'verified'])
    ->group(function () {
        Route::get('/', function () {
            return view('dashboard');
        })->name('dashboard');
        Route::get('/client', [Dashboard::class, 'client'])->name('client');
        Route::get('/club', [Dashboard::class, 'club'])->name('club');
        Route::get('/gallery', [Dashboard::class, 'gallery'])->name('gallery');
        Route::get('/product', [Dashboard::class, 'product'])->name('product');
        Route::get('/vision-and-mission', [Dashboard::class, 'vision-and-mission'])->name('vision-and-mission');
    });
