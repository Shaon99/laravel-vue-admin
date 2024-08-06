<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Services\CategoryService;
use Illuminate\Http\Request;
use Exception;
use Illuminate\Support\Facades\Validator;

class CategoryController extends Controller
{
    protected $categoryService;

    public function __construct(CategoryService $categoryService)
    {
        $this->categoryService = $categoryService;
    }
    /**
     * Fetch and return a list of categories based on the provided request parameters.
     *
     * @param Request $request The incoming request containing filter parameters.
     * @return \Illuminate\Http\JsonResponse A JSON response containing the list of categories.
     * @throws Exception If an error occurs while fetching the categories.
     */
    public function index(Request $request)
    {
        try {
            $categories = $this->categoryService->filter($request); // pass all request to service and filter data
            return response()->json($categories);
        } catch (Exception $e) {
            return response()->json(['error' => 'Failed to fetch categories.'], 500);
        }
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255|unique:categories,name',
        ]);

        $category = Category::create($validated);
        return response()->json([
            'message' => 'Category added successfully.',
            'category' => $category
        ], 201);
    }

    public function show(Category $category)
    {
        return $category;
    }

    public function update(Request $request, Category $category)
    {
        try {
            $validated = $request->validate([
                'name' => 'required|string|max:255|unique:categories,name,' . $category->id,
            ]);

            $category->update($validated);

            return response()->json([
                'message' => 'Category updated successfully.',
                'category' => $category
            ], 200);
        } catch (\Exception $e) {
            // Handle exceptions
            return response()->json(['error' => 'Failed to update category.'], 500);
        }
    }

    public function destroy(Category $category)
    {
        try {
            $category->delete();
            return response()->json([
                'message' => 'Category deleted successfully.',
            ], 200);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Error deleting category'], 500);
        }
    }

    /**
     * Deletes multiple categories based on the provided category IDs.
     *
     * @param Request $request The incoming request containing the category IDs to be deleted.
     * @return \Illuminate\Http\JsonResponse A JSON response indicating the success or failure of the operation.
     * @throws \Exception If an error occurs while deleting the categories.
     */
    public function multipleCategoryDelete(Request $request)
    {
        $categoryIds = $request->category_ids;
        try {
            if (!is_array($categoryIds) || empty($categoryIds)) {
                return response()->json(['error' => 'Invalid category IDs provided.'], 400);
            }
            Category::whereIn('id', $categoryIds)->delete();
            return response()->json(['message' => 'Categories deleted successfully.']);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to delete categories.', 'details' => $e->getMessage()], 500);
        }
    }

    public function statusUpdate(Request $request, $categoryId)
    {
        try {
            $validatedData = Validator::make($request->all(), [
                'status' => 'required|in:1,0',
            ])->validate();

            $category = Category::findOrFail($categoryId);
            $category->status = $validatedData['status'];
            $category->save();
            return response()->json([
                'message' => 'Category status updated successfully.',
                'category' => $category,
            ], 200);
        } catch (\Throwable $e) {
            return response()->json([
                'message' => 'Failed to update category status.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }
}
