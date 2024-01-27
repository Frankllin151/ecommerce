<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AuthController extends Controller
{
    //

    public function autenticar(Request $request)
    {
        // Obtenha os dados do request
        $dadosUsuario = $request->all();

        // Lógica de autenticação ou manipulação dos dados
        // ...
   
        // Exemplo de resposta
        return response()->json(['mensagem' => $dadosUsuario]);
    }
}
