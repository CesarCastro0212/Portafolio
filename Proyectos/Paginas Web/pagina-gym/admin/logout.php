<?php
// =========================================================
// IRONFORGE | Admin — Cerrar sesión de admin
// =========================================================
require_once __DIR__ . '/config.php';

unset($_SESSION['is_admin']);
header('Location: index.php');
exit;
