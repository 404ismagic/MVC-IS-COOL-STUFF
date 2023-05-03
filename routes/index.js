const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res, next) => {
  const err = new Error('Wrong Route!');
  err.status = 404;
  next(err);
});

router.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send(`<h1>${err.message}</h1>`);
});

module.exports = router;
