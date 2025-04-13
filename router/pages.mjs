import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import * as authController from '../controllers/auth.mjs';

const router = express.Router();

// Needed to replace __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

router.get('/', authController.isLoggedIn, (req, res) => {
  res.sendFile(path.join(__dirname, '../app/page.js'));
});

router.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, '../app/signup/page.js'));
});

router.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '../app/signin/page.js'));
});

router.get('/profile', authController.isLoggedIn, (req, res) => {
  if (req.user) {
    res.sendFile(path.join(__dirname, '../public/profile.html'));
  } else {
    res.redirect('/login');
  }
});

router.get('/protected', authController.isLoggedIn, (req, res) => {
  if (req.user) {
    res.send('Protected content');
  } else {
    res.redirect('/login');
  }
});


export default router;
