const router = require('koa-router')();
const {signToken} = require('../../utils/common.js');
const Admin = require('../../modules/Admin.js');
router.post('/admin/login', async (ctx, next) => {
    let params = ctx.request.body;
    let user = await Admin.login(params);
    let token = signToken(user.id);
    ctx.cookies.set('SESSION', token, {maxAge: 60 * 60 * 24 * 7,httpOnly:false});
    new global.success(ctx,user);
});

module.exports = router;