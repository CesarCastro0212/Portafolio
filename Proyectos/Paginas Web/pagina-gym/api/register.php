<?php
// =========================================================
// IRONFORGE | API — Registro de usuario
// POST: { nombre, email, password }
// =========================================================
require_once __DIR__ . '/config.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    jsonResponse(['success' => false, 'message' => 'Método no permitido.'], 405);
}

$body = json_decode(file_get_contents('php://input'), true);

$nombre   = trim($body['nombre']   ?? '');
$email    = strtolower(trim($body['email']    ?? ''));
$password = $body['password'] ?? '';

// ─── Validaciones ─────────────────────────────────────────
if (empty($nombre) || strlen($nombre) < 2) {
    jsonResponse(['success' => false, 'message' => 'El nombre debe tener al menos 2 caracteres.']);
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    jsonResponse(['success' => false, 'message' => 'El correo electrónico no es válido.']);
}
if (strlen($password) < 6) {
    jsonResponse(['success' => false, 'message' => 'La contraseña debe tener mínimo 6 caracteres.']);
}

$db = getDB();

// ─── Verificar email único ────────────────────────────────
$stmt = $db->prepare('SELECT id FROM usuarios WHERE email = ?');
$stmt->execute([$email]);
if ($stmt->fetch()) {
    jsonResponse(['success' => false, 'message' => 'Ya existe una cuenta con ese correo electrónico.']);
}

// ─── Insertar usuario ─────────────────────────────────────
$hash = password_hash($password, PASSWORD_BCRYPT);
$stmt = $db->prepare('INSERT INTO usuarios (nombre, email, password_hash) VALUES (?, ?, ?)');
$stmt->execute([$nombre, $email, $hash]);

$userId = $db->lastInsertId();

// ─── Iniciar sesión ───────────────────────────────────────
$_SESSION['user_id']    = $userId;
$_SESSION['user_email'] = $email;
$_SESSION['user_nombre']= $nombre;

jsonResponse([
    'success' => true,
    'message' => '¡Cuenta creada exitosamente!',
    'user'    => [
        'id'     => $userId,
        'nombre' => $nombre,
        'email'  => $email,
    ]
]);
