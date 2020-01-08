module.exports = {
    database: {
        dbname: 'ls_story',
        username: 'ls',
        host:'localhost',
        port:3306,
        password:'lisong921403852'
    },
    wx:{
        appId:'wx20e897593fcb6c03',
        appSecret: '55a590a19247ba32c10bf57d08d415e4',
        loginUrl:`https://api.weixin.qq.com/sns/jscode2session?appid=%s&secret=%s&js_code=%s&grant_type=authorization_code`
    },
    tokenConfig:{
        secretKey:'old-time.top',
        expiresTime:60*60*24*7
    }
};