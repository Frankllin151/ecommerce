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
        dd($mimeType);
    }
}