<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Categorias;

class AdicionarProdutoController extends Controller
{
    //
    public function AdicionarProduto()
    {
        return Inertia::render("AdicionarProduto");
    }
    public function addCategoria(Request $request){
        $data = $request->all(); 
         $existingCategoria = Categorias::where("nome" , $data["categoria"])->first();
         if($existingCategoria){
            return redirect()->route('todoproduto')->with('error', 'Categoria já existe.');
         }
         Categorias::create([
            "nome" => $data["categoria"],
            "descricao" => null
        ]);
        return redirect()->route('todoproduto')->with('success', 'Categoria adicionada com sucesso.');
    }
}