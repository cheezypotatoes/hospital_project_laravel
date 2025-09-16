<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Foundation\Application;

<<<<<<< HEAD

=======
// TODO: REDIRECT TO DASHBOARD INSTEAD 
>>>>>>> 8da86efbae091f7011babe6f15720dfa57deb4a8
Route::get('/', function () {
    return Inertia::render('IndexLoginPage', [
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/login', function () {
    return Inertia::render('IndexLoginPage', [
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/register', function () {
    return Inertia::render('RegisterPage', [
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});
