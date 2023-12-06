<?php

use App\Http\Controllers\GuestController;
use App\Http\Controllers\ProfileController;

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', [GuestController::class, 'home']);
Route::get('/about-us', [GuestController::class, 'about'])->name('about');
Route::get('/events', [GuestController::class, 'events'])->name('events');
Route::get('/courses', [GuestController::class, 'courses'])->name('courses');
Route::get('/blog', [GuestController::class, 'blog'])->name('blog');
Route::get('/gallery', [GuestController::class, 'gallery'])->name('gallery');
Route::get('/contact', [GuestController::class, 'contact'])->name('contact');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
