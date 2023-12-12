<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth', ['except' => ['login','refresh']]);
    }
    public function dashboard() {
        return Inertia::render('Dashboard', [
            'auth' => Auth::user()
        ]);
    }
}
