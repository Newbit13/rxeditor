const {Router} = require('express')
const router = new Router();

router.get('/', async (req, res, next) => {
  res.status(200).send({
    retcode: 0,
    data:[
      {
        "title":"专家榜单",
        "pages":[
          {
            "name" : "index_gb.html",
            "path" : "themes/tongxing/actPrimeiraLiga/index_gb.html",
            "fileType" : "page",
            "locked" : false
          },
          {
            "name" : "index_big.html",
            "path" : "themes/tongxing/actPrimeiraLiga/index_big.html",
            "fileType" : "page",
            "locked" : false
          }
        ],
        "styles":[    {
            "name" : "base.css",
            "path" : "themes/base/css/base.css",
            "fileType" : "style",
            "locked" : true
          },
          {
            "name" : "theme.css",
            "path" : "themes/tongxing/actPrimeiraLiga/css/base.css",
            "fileType" : "style",
            "locked" : false
          }
        ],
        "javascript":[
          {
            "name" : "base.js",
            "path" : "themes/base/js/base.js",
            "fileType": "javascript",
            "locked" : true
          },
          {
            "name" : "theme.js",
            "path" : "themes/tongxing/actPrimeiraLiga/js/base.js",
            "fileType": "javascript",
            "locked" : false
          }
        ],
        "theme":"api/theme/vular"
      },
      {
        "title":"Vular·秀",
        "pages":[
          {
            "name" : "index.html",
            "path" : "themes/vular/index.html",
            "fileType" : "page",
            "locked" : false
          },
          {
            "name" : "blog.html",
            "path" : "themes/vular/blog.html",
            "fileType" : "page",
            "locked" : false
          },
          {
            "name" : "contact.html",
            "path" : "themes/vular/contact.html",
            "fileType" : "page",
            "locked" : false
          }
        ],
        "styles":[    {
            "name" : "base.css",
            "path" : "themes/base/css/base.css",
            "fileType" : "style",
            "locked" : true
          },
          {
            "name" : "theme.css",
            "path" : "themes/vular/css/theme.css",
            "fileType" : "style",
            "locked" : false
          }
        ],
        "javascript":[
          {
            "name" : "base.js",
            "path" : "themes/base/js/base.js",
            "fileType": "javascript",
            "locked" : true
          },
          {
            "name" : "theme.js",
            "path" : "themes/vular/js/theme.js",
            "fileType": "javascript",
            "locked" : false
          }
        ],
        "theme":"api/theme/vular"
      }
    ]
  });
});




module.exports = router;

