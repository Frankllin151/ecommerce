<?php

namespace App\Http\Middleware;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Inertia\Middleware;
use Closure;
use Symfony\Component\HttpFoundation\Response;
use App\Models\User;

class AdminMiddleware
{
    public function handle(Request $request, Closure $next): Response
    {
        if(!Auth::check()){
            return "ola";
        }

        $user  = Auth::user(); 

        if($user->tipo_usuario === "admin"){
            return $next($request);
        }

        return redirect()->route('minha-conta');
    }
}