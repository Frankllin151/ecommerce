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
}