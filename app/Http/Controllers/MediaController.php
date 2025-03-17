<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Media;
use Inertia\Inertia;

class MediaController extends Controller
{
    public function todasMedias()
    {
        return Inertia::render("Media");
    }

    public function postArquivo(Request $request)
    {
        $file = $request->file('file');
        $mimeType = $file->getMimeType();
       switch($mimeType){
        case "image/jpeg":
        case "image/png": 
        // logica upload
       case "application/pdf":
       // logica upload
       case 'application/vnd.ms-excel':
        case 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':
        //logica upload
        default:
        return response()->json(['error' => 'Tipo de arquivo não suportado.'], 400);
       }
    
    }
}