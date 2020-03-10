import express from 'express';
const router = express.Router();
const controllers = require('../controllers');

router.get('/', (req, res) => res.send('Welcome'))

router.post('/posts', controllers.createPost);
router.get('/posts', controllers.getAllPosts);

export default router;