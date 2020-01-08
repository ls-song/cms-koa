const Koa = require('koa');
const bodyParser = require('koa-body');
const cors = require('koa-cors');
const catchError = require('./utils/catchError');
const app = new Koa();
app.use(catchError);
app.use(cors());
const InitManager = require('./utils/init.js');
app.use(bodyParser({multipart: true}));
InitManager.initCore(app);
InitManager.initModules();
app.listen(3000);

console.log(`现在监听的是3000端口`);