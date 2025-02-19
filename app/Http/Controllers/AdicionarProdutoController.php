<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class AdicionarProdutoController extends Controller
{
    //
    public function AdicionarProduto()
    {
        return Inertia::render("AdicionarProduto");
    }
}