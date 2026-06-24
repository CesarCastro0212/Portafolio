-- ======================================================
-- IRONFORGE | Base de Datos
-- Versión 1.0 — 2025
-- ======================================================

CREATE DATABASE IF NOT EXISTS ironforge_db
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE ironforge_db;

-- ------------------------------------------------------
-- Tabla: usuarios
-- ------------------------------------------------------
CREATE TABLE IF NOT EXISTS usuarios (
  id            INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  nombre        VARCHAR(120) NOT NULL,
  email         VARCHAR(255) NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  created_at    DATETIME DEFAULT CURRENT_TIMESTAMP,
  UNIQUE KEY uq_email (email)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ------------------------------------------------------
-- Tabla: pedidos
-- ------------------------------------------------------
CREATE TABLE IF NOT EXISTS pedidos (
  id             INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  usuario_id     INT UNSIGNED NOT NULL,
  productos_json LONGTEXT NOT NULL COMMENT 'Array JSON de {name, price, quantity}',
  total          DECIMAL(12,2) NOT NULL DEFAULT 0.00,
  estado         ENUM('pendiente','enviado','entregado','cancelado') NOT NULL DEFAULT 'pendiente',
  created_at     DATETIME DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_pedido_usuario
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
    ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ------------------------------------------------------
-- Vista rápida para el admin
-- ------------------------------------------------------
CREATE OR REPLACE VIEW vista_pedidos AS
SELECT
  p.id            AS pedido_id,
  p.created_at    AS fecha,
  u.nombre        AS cliente,
  u.email         AS email,
  p.productos_json,
  p.total,
  p.estado
FROM pedidos p
JOIN usuarios u ON u.id = p.usuario_id
ORDER BY p.created_at DESC;
