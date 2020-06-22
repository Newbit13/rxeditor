const {Router} = require('express')
const router = new Router();

router.get('/', async (req, res, next) => {
  res.status(200).send({
    retcode: 0,
  });
});


module.exports = router;

