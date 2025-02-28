<?php

namespace App\Http\Controllers;

use App\Models\Categorias;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;



class TipoUsuarioController extends Controller
{
    //
   
       public function tipoUsuario()
    {
       
            return Inertia::render('Dashboard');
        
 
    }
    public function minhaConta()
    {
        return 'minha conta';
    }

    public function todoProduto()
    {
      
        return Inertia::render("TodoProduto");
    }
}