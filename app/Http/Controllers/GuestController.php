<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use Inertia\Inertia;

class GuestController extends Controller
{
    public function home() {
        return Inertia::render('Welcome', [
            'page' => "Home",
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
        ]);
    }

    public function about() {
        return Inertia::render('About', [
            'page' => "About",
            'title' => "About Us",
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
        ]);
    }

    public function events() {
        return Inertia::render('Events', [
            'page' => "Events",
            'title' => "All Event",
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
        ]);
    }

    public function courses() {
        return Inertia::render('Courses', [
            'page' => "Courses",
            'title' => "All Course",
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
        ]);
    }

    public function blog() {
        return Inertia::render('Blog', [
            'page' => "Blog",
            'title' => "Blog",
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
        ]);
    }

    public function gallery() {
        return Inertia::render('Gallery', [
            'page' => "Gallery",
            'title' => "Our Memory",
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
        ]);
    }

    public function contact() {
        return Inertia::render('Contact', [
            'page' => "Contact",
            'title' => "Contact Us",
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
        ]);
    }
}
