const {Router} = require('express')
const router = new Router();

router.get('/', async (req, res, next) => {
  res.status(200).send({
    retcode: 0,
    data:[
      {
        "title":"网站",
        "themes":"api/websites.json"
      },
    
      {
        "title":"移动端单页",
        "themes":"api/h5.json"
      },
    
      {
        "title":"表单",
        "themes":"api/forms.json"
      },
      {
        "title":"样册2",
        "themes":"api/yangce.json"
      }
    ]
  });
});


module.exports = router;

