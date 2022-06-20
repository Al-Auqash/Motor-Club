<?php

use App\Http\Controllers\HomeController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/profile', [HomeController::class, 'profile']);
Route::get('/vision-and-mission', [HomeController::class, 'visionAndMission']);
Route::get('/product', [HomeController::class, 'product']);
Route::get('/contact', [HomeController::class, 'contact']);
Route::get('/about', [HomeController::class, 'about']);
Route::get('/article', [HomeController::class, 'article']);
Route::get('/event', [HomeController::class, 'event']);
Route::get('/gallery', [HomeController::class, 'gallery']);
Route::get('/client', [HomeController::class, 'client']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
