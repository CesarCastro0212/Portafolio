<?php
// =========================================================
// IRONFORGE | API — Guardar pedido (Checkout)
// POST: { items: [{name, price, quantity}], total }
// Requiere sesión activa
// =========================================================
require_once __DIR__ . '/config.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    jsonResponse(['success' => false, 'message' => 'Método no permitido.'], 405);
}

// ─── Verificar sesión ─────────────────────────────────────
if (empty($_SESSION['user_id'])) {
    jsonResponse(['success' => false, 'message' => 'Debes iniciar sesión para realizar un pedido.', 'requiresAuth' => true], 401);
}

$body  = json_decode(file_get_contents('php://input'), true);
$items = $body['items'] ?? [];
$total = (float)($body['total'] ?? 0);

if (empty($items)) {
    jsonResponse(['success' => false, 'message' => 'El carrito está vacío.']);
}
if ($total <= 0) {
    jsonResponse(['success' => false, 'message' => 'Total inválido.']);
}

// ─── Validar y limpiar items ──────────────────────────────
$cleanItems = array_map(function($item) {
    return [
        'name'     => htmlspecialchars(trim($item['name'] ?? ''), ENT_QUOTES, 'UTF-8'),
        'price'    => (int)($item['price'] ?? 0),
        'quantity' => (int)($item['quantity'] ?? 1),
    ];
}, $items);

$productsJson = json_encode($cleanItems, JSON_UNESCAPED_UNICODE);

// ─── Insertar pedido ──────────────────────────────────────
$db   = getDB();
$stmt = $db->prepare(
    'INSERT INTO pedidos (usuario_id, productos_json, total, estado) VALUES (?, ?, ?, "pendiente")'
);
$stmt->execute([
    $_SESSION['user_id'],
    $productsJson,
    $total,
]);

$orderId = $db->lastInsertId();

jsonResponse([
    'success'  => true,
    'message'  => '¡Pedido realizado con éxito! Te contactaremos pronto.',
    'order_id' => $orderId,
]);
