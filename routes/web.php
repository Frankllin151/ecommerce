<?php

use App\Http\Controllers\AdicionarProdutoController;
use App\Http\Controllers\MediaController;
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
        'phpVersion' => PHP_VERSION
    ]);
});
// Routas de controle para Adminstrador
Route::get('/dashboard', [TipoUsuarioController::class, 'tipoUsuario'])->middleware(['admin', 'verified'])->name('dashboard');
Route::get("/todoproduto" , [TipoUsuarioController::class, "todoProduto"])->middleware(["admin" , 'verified'])->name('todoproduto');
Route::get("/todoproduto/adicionarproduto", [AdicionarProdutoController::class , "AdicionarProduto"])->middleware(["admin" , "verified"])->name("adicionarProduto");
Route::post("/todoproduto/adicionarpost", [AdicionarProdutoController::class, "CreateprodutoPost"])->middleware(["admin", "verified"])->name("createprodutopost");
Route::post("/todoproduto/add-post-categoria", [AdicionarProdutoController::class, "addCategoria"])->middleware(["admin" , "verified"])->name("categoria");
Route::delete("/todoproduto/excluir-produto/{id}", [AdicionarProdutoController::class, "excluirProduto"])->middleware(["admin" , "verified"])->name("excluir-produto");
Route::get("/media",[MediaController::class, "todasMedias"])->middleware(["admin", "verified"])->name("media");
Route::post("/media/postarquivo", [MediaController::class, "postArquivo"])->middleware(["admin", "verified"])->name("upload");

// contas dos usuarios (clientes)
Route::get('/minha-conta' , [TipoUsuarioController::class , 'minhaConta'])->middleware(['auth', 'verified'])->name('minha-conta');
Route::middleware('auth')->group(function () {

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';