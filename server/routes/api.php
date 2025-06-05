<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/categories', [CategoryController::class, 'index']);
Route::get('/products', [ProductController::class, 'index']);

Route::get('/categories/{categoryId}/products', [ProductController::class, 'getByCategory']);
Route::get('/categories/{categoryId}/products/{productId}', [ProductController::class, 'getProductFromCategory']);

