<?php

use App\Http\Controllers\CategoryController;
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
Route::middleware('auth:sanctum')->group(function () {
    // Fetch authenticated user
    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    // Categories routes
    Route::get('/categories', [CategoryController::class, 'index']); // Fetch all categories
    Route::post('/categories-store', [CategoryController::class, 'store']); // Store a new category
    Route::put('/categories/{category}', [CategoryController::class, 'update']); // Update an existing category
    Route::delete('/categories-delete/{category}', [CategoryController::class, 'destroy']); // Delete a category
});
