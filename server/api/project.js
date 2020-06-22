const {Router} = require('express')
const fs = require('fs')
const path = require('path');
const getJsonFiles = require('../utils/getJsonFiles');
const router = new Router();


//todo,暂时写死
router.get('/getProject', async (req, res, next) => {
  const {query} = req;
  const projectName = query.projectName;
  //todo,打算存数据库
  const mockDb = {
    actPrimeiraLiga:{
      title:'专家榜单',
      theme:'api/theme/vular',
      path:'./themes/tongxing/actPrimeiraLiga'
    }
  }
  const projectInfo = mockDb[projectName];

  let retcode;
  let data = {};
  if(projectInfo){
    retcode = 0;

    const projectPath = projectInfo.path;
    const dirPath = path.resolve(__dirname,'../static_file',projectPath)
    let list = getJsonFiles(dirPath);
    data.title = projectInfo.title;
    data.theme = projectInfo.theme;
    
    let pagesList = [];
    let stylesList = [];
    let javascriptList = [];

    let static_Path = path.resolve(__dirname,'../static_file');
    list.forEach((item)=>{
      let baseName = path.basename(item);
      let ext = path.extname(item);
      let filePath = item.replace(static_Path,'');
      switch (ext){
        case '.html':
          pagesList.push({
            name:baseName,
            path:filePath,
            fileType:'page',
            locked:false
          });
          break;
        case '.js':
          javascriptList.push({
            name:baseName,
            path:filePath,
            fileType:'javascript',
            locked:false
          });
          break;
        case '.css':
          stylesList.push({
            name:baseName,
            path:filePath,
            fileType:'style',
            locked:false
          });
          break;
      }
    })
    data.pages = pagesList;
    data.styles = stylesList;
    data.javascript = javascriptList;
    // data = {
    //   "title":"专家榜单",
    //   "pages":[
    //     {
    //       "name" : "index_gb.html",
    //       "path" : "themes/tongxing/actPrimeiraLiga/index_gb.html",
    //       "fileType" : "page",
    //       "locked" : false
    //     },
    //     {
    //       "name" : "index_big.html",
    //       "path" : "themes/tongxing/actPrimeiraLiga/index_big.html",
    //       "fileType" : "page",
    //       "locked" : false
    //     }
    //   ],
    //   "styles":[    {
    //       "name" : "base.css",
    //       "path" : "themes/base/css/base.css",
    //       "fileType" : "style",
    //       "locked" : true
    //     },
    //     {
    //       "name" : "theme.css",
    //       "path" : "themes/tongxing/actPrimeiraLiga/css/base.css",
    //       "fileType" : "style",
    //       "locked" : false
    //     }
    //   ],
    //   "javascript":[
    //     {
    //       "name" : "base.js",
    //       "path" : "themes/base/js/base.js",
    //       "fileType": "javascript",
    //       "locked" : true
    //     },
    //     {
    //       "name" : "theme.js",
    //       "path" : "themes/tongxing/actPrimeiraLiga/js/base.js",
    //       "fileType": "javascript",
    //       "locked" : false
    //     }
    //   ],
    //   "theme":"api/theme/vular"
    // }
  }else{
    retcode = 1;
  }
  res.status(200).send({
    retcode: retcode,
    data
  });
});

router.get('/getFileCode', async (req, res, next) => {
  const {query} = req;
  console.log(__dirname);
  
  const filePath = path.resolve(__dirname,'../static_file','.'+query.path)
  
  res.sendFile(filePath)

  // fs.readFile(filePath,(err,data)=>{
  //   let retcode;
  //   err?retcode= 1:0
  //   // res.set('Content-Type', 'text/html');
  //   // res.status(200).send({
  //   //   retcode: retcode,
  //   //   data:data.toString()
  //   // });
  // })
});

module.exports = router;

