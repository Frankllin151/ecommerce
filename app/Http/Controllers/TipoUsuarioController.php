<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;

class TipoUsuarioController extends Controller
{
    //
    public function tipoUsuario()
    {
        $auth = Auth::user();
        if($auth->tipo_usuario !== 'admin'){
        return redirect()->route('minha-conta');
        } else{
            return Inertia::render('Dashboard');
        }
 
    }
    public function minhaConta()
    {
        return 'minha conta';
    }
}