<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    //
    public function index(): JsonResponse {
        $products = Product::all();
        return response()->json($products);
    }

    public function getByCategory($categoryId): JsonResponse {
        $products = Product::where('category_id', $categoryId)->get();
        return response()->json($products);
    }

    public function getProductFromCategory($categoryId, $productId): JsonResponse {
        $product = Product::where('category_id', $categoryId)
                            ->where('id', $productId)
                            ->first();
        if (!$product) {
            return response()->json(['message' => 'Producto no encontrado'], 404);
        }

        return response()->json($product);
    }
}
