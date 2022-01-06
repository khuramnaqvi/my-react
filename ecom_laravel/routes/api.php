<?php

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

use App\Http\Controllers\api_controller;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::post('register', [api_controller::class,'register']);
Route::post('login', [api_controller::class,'login']);
Route::post('add_product', [api_controller::class,'add_product']);
Route::any('get_product', [api_controller::class,'get_product']);
Route::any('del_product/{id}', [api_controller::class,'del_product']);
Route::any('edit_product/{id}', [api_controller::class,'edit_product']);
Route::any('update_product/{id}', [api_controller::class,'update_product']);


