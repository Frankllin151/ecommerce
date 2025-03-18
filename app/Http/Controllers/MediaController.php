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
        dd("image");
       case "application/pdf":
        dd("pdf");
       case 'application/vnd.ms-excel':
        case 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':
            dd("vnd ou excel");
        default:
        return response()->json(['error' => 'Tipo de arquivo não suportado.'], 400);
       }
    
    }
}