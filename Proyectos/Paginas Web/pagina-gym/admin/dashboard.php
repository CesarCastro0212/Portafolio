<?php
// =========================================================
// IRONFORGE | Panel de Administrador — Dashboard de Pedidos
// =========================================================
require_once __DIR__ . '/config.php';
requireAdmin();

$db = getDB();

// ─── Cambiar estado de pedido ─────────────────────────────
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['accion'])) {
    $pedidoId = (int)($_POST['pedido_id'] ?? 0);
    $estado   = $_POST['estado'] ?? '';
    $estadosValidos = ['pendiente', 'enviado', 'entregado', 'cancelado'];
    if ($pedidoId > 0 && in_array($estado, $estadosValidos, true)) {
        $db->prepare('UPDATE pedidos SET estado = ? WHERE id = ?')->execute([$estado, $pedidoId]);
    }
    header('Location: dashboard.php');
    exit;
}

// ─── Filtros ──────────────────────────────────────────────
$filtroEstado = $_GET['estado'] ?? 'todos';
$busqueda     = trim($_GET['buscar'] ?? '');

$sql = 'SELECT p.id, p.created_at, u.nombre, u.email, p.productos_json, p.total, p.estado
        FROM pedidos p JOIN usuarios u ON u.id = p.usuario_id WHERE 1=1';
$params = [];

if ($filtroEstado !== 'todos') {
    $sql .= ' AND p.estado = ?';
    $params[] = $filtroEstado;
}
if ($busqueda !== '') {
    $sql .= ' AND (u.nombre LIKE ? OR u.email LIKE ?)';
    $params[] = "%$busqueda%";
    $params[] = "%$busqueda%";
}
$sql .= ' ORDER BY p.created_at DESC';

$stmt = $db->prepare($sql);
$stmt->execute($params);
$pedidos = $stmt->fetchAll();

// ─── Estadísticas rápidas ─────────────────────────────────
$stats = $db->query('SELECT
    COUNT(*) AS total,
    SUM(total) AS ingresos,
    SUM(estado="pendiente") AS pendientes,
    SUM(estado="enviado") AS enviados,
    SUM(estado="entregado") AS entregados
  FROM pedidos')->fetch();

$totalUsuarios = $db->query('SELECT COUNT(*) FROM usuarios')->fetchColumn();
?>
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>IRONFORGE | Dashboard Pedidos</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow+Condensed:wght@300;400;600;700&family=Barlow:wght@300;400;500&display=swap" rel="stylesheet">
  <style>
    :root {
      --black: #0a0a0a; --dark: #111; --panel: #161616;
      --border: #2a2a2a; --accent: #e8ff00; --white: #f5f5f0;
      --gray: #888; --red: #ff4500; --green: #00e676;
      --font-display: 'Bebas Neue', sans-serif;
      --font-ui: 'Barlow Condensed', sans-serif;
      --font-body: 'Barlow', sans-serif;
    }
    *, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }
    body { background:var(--black); color:var(--white); font-family:var(--font-body); min-height:100vh; }

    /* TOPBAR */
    .topbar {
      background: rgba(10,10,10,.95); border-bottom:1px solid var(--border);
      backdrop-filter:blur(12px); position:sticky; top:0; z-index:100;
      display:flex; align-items:center; justify-content:space-between;
      padding:0 2rem; height:64px;
    }
    .brand { font-family:var(--font-display); font-size:1.8rem; letter-spacing:4px; color:var(--white); text-decoration:none; }
    .brand span { color:var(--accent); }
    .brand-badge {
      font-family:var(--font-ui); font-size:0.6rem; letter-spacing:3px;
      background:var(--accent); color:var(--black); padding:.2rem .6rem;
      text-transform:uppercase; margin-left:.6rem; vertical-align:middle;
    }
    .topbar-right { display:flex; align-items:center; gap:1rem; }
    .logout-btn {
      font-family:var(--font-ui); font-size:0.72rem; letter-spacing:2px; text-transform:uppercase;
      background:none; border:1px solid var(--border); color:var(--gray);
      padding:.5rem 1.2rem; cursor:pointer; transition:all .2s; text-decoration:none;
    }
    .logout-btn:hover { border-color:var(--red); color:var(--red); }
    .store-btn {
      font-family:var(--font-ui); font-size:0.72rem; letter-spacing:2px; text-transform:uppercase;
      background:none; border:1px solid var(--border); color:var(--gray);
      padding:.5rem 1.2rem; cursor:pointer; transition:all .2s; text-decoration:none; display:inline-block;
    }
    .store-btn:hover { border-color:var(--accent); color:var(--accent); }

    /* LAYOUT */
    .main { max-width:1400px; margin:0 auto; padding:2.5rem 2rem; }

    /* PAGE TITLE */
    .page-head { margin-bottom:2.5rem; }
    .page-label { font-family:var(--font-ui); font-size:.7rem; letter-spacing:4px; text-transform:uppercase; color:var(--accent); margin-bottom:.4rem; display:flex; align-items:center; gap:.6rem; }
    .page-label::before { content:''; width:20px; height:1px; background:var(--accent); }
    .page-title { font-family:var(--font-display); font-size:clamp(2rem,5vw,3.5rem); letter-spacing:1px; }

    /* STATS GRID */
    .stats-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(160px,1fr)); gap:1px; margin-bottom:2.5rem; }
    .stat-card { background:var(--panel); padding:1.5rem; border:1px solid var(--border); }
    .stat-card .stat-val { font-family:var(--font-display); font-size:2.2rem; color:var(--accent); line-height:1; }
    .stat-card .stat-name { font-family:var(--font-ui); font-size:.68rem; letter-spacing:2px; text-transform:uppercase; color:var(--gray); margin-top:.4rem; }
    .stat-card.green .stat-val { color:var(--green); }
    .stat-card.red .stat-val { color:var(--red); }

    /* FILTERS */
    .filters {
      display:flex; gap:1rem; flex-wrap:wrap; align-items:center;
      margin-bottom:1.5rem; padding:1.2rem 1.5rem;
      background:var(--panel); border:1px solid var(--border);
    }
    .filter-label { font-family:var(--font-ui); font-size:.68rem; letter-spacing:2px; text-transform:uppercase; color:var(--gray); }
    .filter-btn {
      font-family:var(--font-ui); font-size:.72rem; letter-spacing:2px; text-transform:uppercase;
      border:1px solid var(--border); background:none; color:var(--gray);
      padding:.4rem 1rem; cursor:pointer; transition:all .2s; text-decoration:none;
    }
    .filter-btn:hover, .filter-btn.active { border-color:var(--accent); color:var(--accent); }
    .search-form { display:flex; gap:.5rem; margin-left:auto; }
    .search-input {
      background:var(--dark); border:1px solid var(--border); color:var(--white);
      font-family:var(--font-ui); font-size:.85rem; padding:.45rem 1rem;
      outline:none; transition:border-color .2s; width:220px;
    }
    .search-input:focus { border-color:var(--accent); }
    .search-btn {
      background:var(--accent); color:var(--black); border:none; font-family:var(--font-ui);
      font-size:.72rem; letter-spacing:2px; font-weight:700; padding:.45rem 1.2rem;
      cursor:pointer; text-transform:uppercase;
    }

    /* TABLE */
    .table-wrap { overflow-x:auto; }
    table { width:100%; border-collapse:collapse; }
    thead tr { background:var(--panel); border-bottom:2px solid var(--accent); }
    thead th {
      font-family:var(--font-ui); font-size:.65rem; letter-spacing:3px; text-transform:uppercase;
      color:var(--accent); padding:.9rem 1rem; text-align:left; white-space:nowrap;
    }
    tbody tr { border-bottom:1px solid var(--border); transition:background .15s; }
    tbody tr:hover { background:var(--panel); }
    td { padding:.85rem 1rem; font-size:.88rem; color:var(--white); vertical-align:top; }
    td.fecha { font-family:var(--font-ui); font-size:.75rem; letter-spacing:1px; color:var(--gray); white-space:nowrap; }
    td.id-col { font-family:var(--font-display); font-size:1.2rem; color:var(--accent); }
    td.cliente strong { display:block; font-size:.95rem; }
    td.cliente span { font-size:.78rem; color:var(--gray); }
    td.total { font-family:var(--font-display); font-size:1.3rem; color:var(--accent); white-space:nowrap; }
    td.productos { max-width:300px; }
    .prod-item { font-size:.78rem; color:var(--gray); margin-bottom:.2rem; display:flex; gap:.3rem; }
    .prod-item strong { color:var(--white); }

    /* STATUS BADGE */
    .badge {
      font-family:var(--font-ui); font-size:.62rem; letter-spacing:2px; text-transform:uppercase;
      padding:.25rem .65rem; display:inline-block; white-space:nowrap;
    }
    .badge.pendiente { background:rgba(255,193,7,.12); color:#ffc107; border:1px solid rgba(255,193,7,.3); }
    .badge.enviado   { background:rgba(33,150,243,.12); color:#64b5f6; border:1px solid rgba(33,150,243,.3); }
    .badge.entregado { background:rgba(0,230,118,.1);  color:var(--green); border:1px solid rgba(0,230,118,.3); }
    .badge.cancelado { background:rgba(255,69,0,.1);   color:#ff7045; border:1px solid rgba(255,69,0,.3); }

    /* STATUS FORM */
    .estado-form { display:flex; gap:.4rem; align-items:center; flex-wrap:wrap; }
    .estado-select {
      background:var(--dark); border:1px solid var(--border); color:var(--white);
      font-family:var(--font-ui); font-size:.72rem; letter-spacing:1px;
      padding:.35rem .6rem; cursor:pointer; outline:none;
    }
    .estado-btn {
      background:var(--accent); color:var(--black); border:none;
      font-family:var(--font-ui); font-size:.65rem; letter-spacing:2px; font-weight:700;
      padding:.35rem .8rem; cursor:pointer; text-transform:uppercase; transition:background .2s;
    }
    .estado-btn:hover { background:var(--white); }

    /* EMPTY */
    .empty { text-align:center; padding:5rem 2rem; }
    .empty-icon { font-size:3rem; margin-bottom:1rem; }
    .empty p { font-family:var(--font-ui); font-size:1rem; letter-spacing:2px; color:var(--gray); }

    /* RESPONSIVE */
    @media(max-width:768px){
      .topbar { padding:0 1rem; }
      .main { padding:1.5rem 1rem; }
      .filters { flex-direction:column; }
      .search-form { width:100%; margin-left:0; }
      .search-input { flex:1; width:auto; }
    }
  </style>
</head>
<body>

<!-- TOPBAR -->
<header class="topbar">
  <div>
    <a href="../index.html" class="brand">IRON<span>FORGE</span></a>
    <span class="brand-badge">Admin</span>
  </div>
  <div class="topbar-right">
    <a href="../index.html" class="store-btn">← Ver Tienda</a>
    <a href="logout.php" class="logout-btn">Cerrar Sesión</a>
  </div>
</header>

<main class="main">
  <!-- PAGE HEAD -->
  <div class="page-head">
    <div class="page-label">Panel de Control</div>
    <h1 class="page-title">PEDIDOS & ÓRDENES</h1>
  </div>

  <!-- STATS -->
  <div class="stats-grid">
    <div class="stat-card">
      <div class="stat-val"><?= number_format((float)$stats['ingresos'], 0, '.', ',') ?></div>
      <div class="stat-name">Ingresos Totales MXN</div>
    </div>
    <div class="stat-card">
      <div class="stat-val"><?= $stats['total'] ?></div>
      <div class="stat-name">Pedidos Totales</div>
    </div>
    <div class="stat-card red">
      <div class="stat-val"><?= $stats['pendientes'] ?></div>
      <div class="stat-name">Pendientes</div>
    </div>
    <div class="stat-card">
      <div class="stat-val"><?= $stats['enviados'] ?></div>
      <div class="stat-name">Enviados</div>
    </div>
    <div class="stat-card green">
      <div class="stat-val"><?= $stats['entregados'] ?></div>
      <div class="stat-name">Entregados</div>
    </div>
    <div class="stat-card">
      <div class="stat-val"><?= $totalUsuarios ?></div>
      <div class="stat-name">Usuarios Registrados</div>
    </div>
  </div>

  <!-- FILTERS -->
  <div class="filters">
    <span class="filter-label">Estado:</span>
    <?php
    $estados_filter = ['todos' => 'Todos', 'pendiente' => 'Pendiente', 'enviado' => 'Enviado', 'entregado' => 'Entregado', 'cancelado' => 'Cancelado'];
    foreach ($estados_filter as $key => $label):
      $active = ($filtroEstado === $key) ? 'active' : '';
      $q = http_build_query(['estado' => $key, 'buscar' => $busqueda]);
    ?>
      <a href="dashboard.php?<?= $q ?>" class="filter-btn <?= $active ?>"><?= $label ?></a>
    <?php endforeach; ?>

    <form class="search-form" method="GET">
      <input type="hidden" name="estado" value="<?= htmlspecialchars($filtroEstado) ?>">
      <input class="search-input" type="text" name="buscar"
             placeholder="Buscar cliente o email..."
             value="<?= htmlspecialchars($busqueda) ?>">
      <button type="submit" class="search-btn">Buscar</button>
    </form>
  </div>

  <!-- TABLE -->
  <div class="table-wrap">
    <?php if (empty($pedidos)): ?>
      <div class="empty">
        <div class="empty-icon">📦</div>
        <p>No se encontraron pedidos<?= $filtroEstado !== 'todos' ? ' con estado "' . htmlspecialchars($filtroEstado) . '"' : '' ?>.</p>
      </div>
    <?php else: ?>
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Fecha</th>
          <th>Cliente</th>
          <th>Productos Solicitados</th>
          <th>Total</th>
          <th>Estado</th>
          <th>Actualizar</th>
        </tr>
      </thead>
      <tbody>
        <?php foreach ($pedidos as $p):
          $prods = json_decode($p['productos_json'], true) ?: [];
        ?>
        <tr>
          <td class="id-col">#<?= $p['id'] ?></td>
          <td class="fecha"><?= date('d/m/Y H:i', strtotime($p['created_at'])) ?></td>
          <td class="cliente">
            <strong><?= htmlspecialchars($p['nombre']) ?></strong>
            <span><?= htmlspecialchars($p['email']) ?></span>
          </td>
          <td class="productos">
            <?php foreach ($prods as $item): ?>
              <div class="prod-item">
                <strong><?= (int)$item['quantity'] ?>×</strong>
                <?= htmlspecialchars($item['name']) ?>
                <span>($ <?= number_format((int)$item['price'], 0, '.', ',') ?>)</span>
              </div>
            <?php endforeach; ?>
          </td>
          <td class="total">$<?= number_format((float)$p['total'], 0, '.', ',') ?></td>
          <td>
            <span class="badge <?= $p['estado'] ?>"><?= ucfirst($p['estado']) ?></span>
          </td>
          <td>
            <form class="estado-form" method="POST">
              <input type="hidden" name="accion" value="cambiar_estado">
              <input type="hidden" name="pedido_id" value="<?= $p['id'] ?>">
              <select class="estado-select" name="estado">
                <?php foreach (['pendiente','enviado','entregado','cancelado'] as $opt): ?>
                  <option value="<?= $opt ?>" <?= $opt === $p['estado'] ? 'selected' : '' ?>>
                    <?= ucfirst($opt) ?>
                  </option>
                <?php endforeach; ?>
              </select>
              <button type="submit" class="estado-btn">OK</button>
            </form>
          </td>
        </tr>
        <?php endforeach; ?>
      </tbody>
    </table>
    <?php endif; ?>
  </div>
</main>

</body>
</html>
