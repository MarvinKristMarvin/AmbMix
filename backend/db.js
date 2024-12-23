const { Pool } = require("pg");

// Réutilise les connexions existantes pour économser des ressources
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "froggus_db",
  password: "allo",
  port: 5432,
});

module.exports = pool;
