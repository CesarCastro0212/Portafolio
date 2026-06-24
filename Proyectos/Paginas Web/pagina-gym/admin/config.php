<?php
// =========================================================
// IRONFORGE | Admin — Configuración
// =========================================================
require_once __DIR__ . '/../api/config.php';

// Credenciales del administrador
define('ADMIN_USER', 'admin');
define('ADMIN_PASS', 'ironforge2025');   // Cambia esto por una contraseña segura

// Si el admin intenta acceder al dashboard sin sesión, redirigir al login
function requireAdmin(): void {
    if (empty($_SESSION['is_admin'])) {
        header('Location: index.php');
        exit;
    }
}
