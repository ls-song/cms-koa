const router = require('koa-router')();

const Category = require('../../modules/Category.js');

router.post('/admin/addCategory', async (ctx, next) => {
    let params = ctx.request.body;
    console.log(params);
    let data = await Category.setCategory(params);
    new global.success(ctx, "");
});

module.exports = router;