import express from 'express';

const router = express.Router();

router.get('/api/users/currentuser', (req, res) => {
  res.send('Hi there im tchuna!');
});

export { router as currentUserRouter };
