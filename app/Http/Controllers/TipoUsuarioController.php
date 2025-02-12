<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;
use App\Http\Middleware\AdminMiddleware;


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