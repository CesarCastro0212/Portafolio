<?php
// =========================================================
// IRONFORGE | API — Sesión actual
// GET — retorna info del usuario logueado
// =========================================================
require_once __DIR__ . '/config.php';

if (!empty($_SESSION['user_id'])) {
    jsonResponse([
        'loggedIn' => true,
        'user'     => [
            'id'     => $_SESSION['user_id'],
            'nombre' => $_SESSION['user_nombre'],
            'email'  => $_SESSION['user_email'],
        ]
    ]);
} else {
    jsonResponse(['loggedIn' => false]);
}
