<?php

use App\Http\Controllers\AdicionarProdutoController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TipoUsuarioController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', [TipoUsuarioController::class, 'tipoUsuario'])->middleware(['admin', 'verified'])->name('dashboard');

Route::get("/todoproduto" , [TipoUsuarioController::class, "todoProduto"])->middleware(["admin" , 'verified'])->name('todoproduto');
Route::get("/todoproduto/adicionarproduto", [AdicionarProdutoController::class , "AdicionarProduto"])->middleware(["admin" , "verified"])->name("adicionarProduto");
Route::post("/todoproduto/add-post-categoria", [AdicionarProdutoController::class, "addCategoria"])->middleware(["admin" , "verified"])->name("categoria");



Route::get('/minha-conta' , [TipoUsuarioController::class , 'minhaConta'])->middleware(['auth', 'verified'])->name('minha-conta');
Route::middleware('auth')->group(function () {

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';