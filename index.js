const Koa = require('koa');
const bodyParser = require('koa-body');
const cors = require('koa-cors');
const catchError = require('./utils/catchError');
const {verifyToken} = require('./utils/common');
const app = new Koa();
app.use(catchError);
app.use(cors());
const InitManager = require('./utils/init.js');
app.use(bodyParser({multipart: true}));

// app.use(async (ctx, next) => {
//     let url = ctx.request.url;
//     let index = url.indexOf("?");
//     let currentUrl = index > 0 ? url.substr(0, 18) : url;
//     if (currentUrl != '/admin/login' && currentUrl != '/admin/unLogin') {
//         let cookieValue = ctx.cookies.get('SESSION');
//         let token = verifyToken(cookieValue);
//         if (token.exp <= new Date().getTime()) {
//             throw new Error("登录已过期",'10001',200);
//             return;
//         }
//     }
//     await next();
// });

InitManager.initCore(app);
InitManager.initModules();
app.listen(3000);

console.log(`现在监听的是3000端口`);