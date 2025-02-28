<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Categorias;
use Illuminate\Support\Facades\Redis;

class AdicionarProdutoController extends Controller
{
    //
    public function AdicionarProduto()
    {
        $categorias= Categorias::all();
        return Inertia::render("AdicionarProduto",[
            'categorias' =>  $categorias
        ]);
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
    public function excluirProduto($id)
    {
        dd($id);
    }
}