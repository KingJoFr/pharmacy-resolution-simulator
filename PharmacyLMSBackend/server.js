const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const cors = require("cors");
require("dotenv").config();
const saltRounds = 10;
const jwt = require("jsonwebtoken");
const db = require("./db"); // Assuming db.js is in the same directory
const router = express.Router();

db.query("SELECT NOW()", (err, res) => {
    if (err) {
        console.error("Database connection error:", err);
    } else {
        console.log("Database connected successfully:", res.rows[0].now);
    }
    });

    router.post('/register', async (req, res) => {
        const { username, password, role } = req.body;
        const hashed = await bcrypt.hash(password, 10);
      
        const result = await pool.query(
          'INSERT INTO users (username, password, role) VALUES ($1, $2, $3) RETURNING *',
          [username, hashed, role || 'user']
        );
      
        res.json(result.rows[0]);
      });
      
      router.post('/login', async (req, res) => {
        const { username, password } = req.body;
      
        const result = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
        const user = result.rows[0];
        if (!user || !(await bcrypt.compare(password, user.password))) {
          return res.status(401).send('Invalid credentials');
        }
      
        const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
      });
      
      module.exports = router;
      


const PORT = process.env.PORT || 3000;

