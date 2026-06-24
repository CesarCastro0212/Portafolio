<?php
// =========================================================
// IRONFORGE | API — Login de usuario
// POST: { email, password }
// =========================================================
require_once __DIR__ . '/config.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    jsonResponse(['success' => false, 'message' => 'Método no permitido.'], 405);
}

$body     = json_decode(file_get_contents('php://input'), true);
$email    = strtolower(trim($body['email']    ?? ''));
$password = $body['password'] ?? '';

if (empty($email) || empty($password)) {
    jsonResponse(['success' => false, 'message' => 'Correo y contraseña son obligatorios.']);
}

$db   = getDB();
$stmt = $db->prepare('SELECT id, nombre, email, password_hash FROM usuarios WHERE email = ?');
$stmt->execute([$email]);
$user = $stmt->fetch();

if (!$user || !password_verify($password, $user['password_hash'])) {
    jsonResponse(['success' => false, 'message' => 'Correo o contraseña incorrectos.']);
}

// ─── Iniciar sesión ───────────────────────────────────────
$_SESSION['user_id']     = $user['id'];
$_SESSION['user_email']  = $user['email'];
$_SESSION['user_nombre'] = $user['nombre'];

jsonResponse([
    'success' => true,
    'message' => '¡Bienvenido, ' . $user['nombre'] . '!',
    'user'    => [
        'id'     => $user['id'],
        'nombre' => $user['nombre'],
        'email'  => $user['email'],
    ]
]);
