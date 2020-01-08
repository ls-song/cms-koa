const requireDirectory = require('require-directory');
const Router = require('koa-router');
const fs = require('fs');

class InitManager {
    static initCore(app) {
        InitManager.app = app;
        InitManager.ReadRouters();
        InitManager.ReadHttpException();
    }

    static ReadRouters() {
        const routePath = `${process.cwd()}/routes`;
        requireDirectory(module, routePath, {
            visit: MatchRouter
        });

        function MatchRouter(obj) {
            if (obj instanceof Router) {
                InitManager.app.use(obj.routes());
            }
        }
    }

    static ReadHttpException() {
        const errs = require('./http-exception.js');
        global.errs = errs;
        global.success = function (ctx, retData) {
            ctx.body = {
                retCode: '0000',
                retData,
                retMsg: 'ok'
            }
        }
    }

    static initModules() {
        const modulePath = `${process.cwd()}/modules`;
        let files = fs.readdirSync(modulePath);
        files.forEach(href => {
            require(modulePath + '/' + href);
        })
    }

}

module.exports = InitManager;