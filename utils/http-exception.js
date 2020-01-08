class HttpException extends Error {
    constructor(retMsg = '服务器异常', retCode = 10000, code = 400) {
        super()
        this.retCode = retCode
        this.code = code
        this.retMsg = retMsg
    }
}

class ParameterException extends HttpException {
    constructor(retMsg, retCode) {
        super()
        this.code = 400
        this.retMsg = retMsg || '参数错误'
        this.retCode = retCode || 10000
    }
}

class Success extends HttpException {
    constructor(retMsg, retCode) {
        super()
        this.code = 201
        this.retMsg = retMsg || 'ok'
        this.retCode = retCode || 0
    }
}

class NotFound extends HttpException {
    constructor(retMsg, retCode) {
        super()
        this.retMsg = retMsg || '资源未找到'
        this.retCode = retCode || 10000
        this.code = 404
    }
}

class AuthFailed extends HttpException {
    constructor(retMsg, retCode) {
        super()
        this.retMsg = retMsg || '授权失败'
        this.retCode = retCode || 10004
        this.code = 401
    }
}

class Forbbiden extends HttpException {
    constructor(retMsg, retCode) {
        super()
        this.retMsg = retMsg || '禁止访问'
        this.retCode = retCode || 10006
        this.code = 403
    }
}

class LikeError extends HttpException {
    constructor(retMsg, retCode) {
        super()
        this.code = 400
        this.retMsg = "你已经点赞过"
        this.retCode = 60001
    }
}

class DataExist extends HttpException {
    constructor(retMsg = '数据已存在', retCode = '20001') {
        super();
        this.code = 400;
        this.retMsg = '数据已存在';
        this.retCode = '20001';
    }
}

module.exports = {
    HttpException,
    ParameterException,
    Success,
    NotFound,
    AuthFailed,
    Forbbiden,
    LikeError,
    DataExist
}