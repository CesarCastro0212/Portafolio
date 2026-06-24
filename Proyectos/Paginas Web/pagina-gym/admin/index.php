<?php
// =========================================================
// IRONFORGE | Panel de Administrador — Login
// =========================================================
require_once __DIR__ . '/config.php';

$error = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $user = trim($_POST['usuario'] ?? '');
    $pass = $_POST['password'] ?? '';

    if ($user === ADMIN_USER && $pass === ADMIN_PASS) {
        $_SESSION['is_admin'] = true;
        header('Location: dashboard.php');
        exit;
    } else {
        $error = 'Usuario o contraseña incorrectos.';
    }
}

// Si ya está logueado, ir directo
if (!empty($_SESSION['is_admin'])) {
    header('Location: dashboard.php');
    exit;
}
?>
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>IRONFORGE | Admin</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow+Condensed:wght@300;400;600;700&family=Barlow:wght@300;400;500&display=swap" rel="stylesheet">
  <style>
    :root {
      --black: #0a0a0a;
      --dark: #111111;
      --panel: #161616;
      --border: #2a2a2a;
      --accent: #e8ff00;
      --white: #f5f5f0;
      --gray: #888;
      --red: #ff4500;
      --font-display: 'Bebas Neue', sans-serif;
      --font-ui: 'Barlow Condensed', sans-serif;
    }
    *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      background: var(--black);
      color: var(--white);
      font-family: var(--font-ui);
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }
    .bg-grid {
      position: fixed; inset: 0; pointer-events: none;
      background-image:
        linear-gradient(rgba(232,255,0,.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(232,255,0,.03) 1px, transparent 1px);
      background-size: 60px 60px;
    }
    .login-wrap {
      position: relative; z-index: 2;
      width: min(440px, 92vw);
    }
    .brand {
      font-family: var(--font-display);
      font-size: 2.8rem;
      letter-spacing: 6px;
      color: var(--white);
      text-align: center;
      margin-bottom: 0.3rem;
    }
    .brand span { color: var(--accent); }
    .brand-sub {
      font-size: 0.72rem;
      letter-spacing: 5px;
      text-transform: uppercase;
      color: var(--gray);
      text-align: center;
      margin-bottom: 2.5rem;
    }
    .card {
      background: var(--panel);
      border: 1px solid var(--border);
      padding: 2.5rem;
    }
    .card-title {
      font-family: var(--font-display);
      font-size: 1.6rem;
      letter-spacing: 3px;
      margin-bottom: 1.8rem;
      color: var(--accent);
    }
    .form-group { margin-bottom: 1.2rem; }
    label {
      display: block;
      font-size: 0.7rem;
      letter-spacing: 3px;
      text-transform: uppercase;
      color: var(--gray);
      margin-bottom: 0.45rem;
    }
    input[type="text"], input[type="password"] {
      width: 100%;
      background: var(--dark);
      border: 1px solid var(--border);
      color: var(--white);
      font-family: var(--font-ui);
      font-size: 1rem;
      letter-spacing: 1px;
      padding: 0.85rem 1rem;
      outline: none;
      transition: border-color .2s;
    }
    input:focus { border-color: var(--accent); }
    .btn-admin {
      width: 100%;
      background: var(--accent);
      color: var(--black);
      border: none;
      font-family: var(--font-ui);
      font-size: 0.85rem;
      letter-spacing: 3px;
      font-weight: 700;
      text-transform: uppercase;
      padding: 1rem;
      cursor: pointer;
      transition: background .2s;
      margin-top: 0.5rem;
      clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 100%, 10px 100%);
    }
    .btn-admin:hover { background: var(--white); }
    .error-msg {
      background: rgba(255,69,0,.12);
      border: 1px solid rgba(255,69,0,.4);
      color: #ff7045;
      font-size: 0.82rem;
      letter-spacing: 1px;
      padding: 0.75rem 1rem;
      margin-bottom: 1.2rem;
    }
    .back-link {
      display: block;
      text-align: center;
      margin-top: 1.5rem;
      font-size: 0.72rem;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: var(--gray);
      text-decoration: none;
      transition: color .2s;
    }
    .back-link:hover { color: var(--accent); }
  </style>
</head>
<body>
<div class="bg-grid"></div>
<div class="login-wrap">
  <div class="brand">IRON<span>FORGE</span></div>
  <div class="brand-sub">Panel de Administrador</div>

  <div class="card">
    <div class="card-title">ACCESO</div>
    <?php if ($error): ?>
      <div class="error-msg"><?= htmlspecialchars($error) ?></div>
    <?php endif; ?>
    <form method="POST" autocomplete="off">
      <div class="form-group">
        <label for="usuario">Usuario</label>
        <input type="text" id="usuario" name="usuario" placeholder="admin" required autofocus>
      </div>
      <div class="form-group">
        <label for="password">Contraseña</label>
        <input type="password" id="password" name="password" placeholder="••••••••" required>
      </div>
      <button type="submit" class="btn-admin">Entrar →</button>
    </form>
  </div>
  <a href="../index.html" class="back-link">← Volver a la tienda</a>
</div>
</body>
</html>
