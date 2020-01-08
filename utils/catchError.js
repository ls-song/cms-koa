const {HttpException} = require('./http-exception');

const catchError = async (ctx, next)=>{
    try {
        await next();
    } catch (error) {
        // 开发环境
        // 生产环境
        // 开发环境 不是HttpException
        const isHttpException = error instanceof HttpException;

        if(isHttpException){
            ctx.body = {
                retMsg:error.retMsg,
                retCode:error.retCode
            };
            ctx.status = error.code
        }
        else{
            ctx.body = {
                msg: 'we made a mistake O(∩_∩)O~~',
                error_code: 999,
                request:`${ctx.method} ${ctx.path}`
            }
            ctx.status = 500
        }
    }
}

module.exports = catchError