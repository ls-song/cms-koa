const router = require('koa-router')();
const Article = require('../../modules/Articles');

router.get('/admin/articleList', async (ctx, next) => {
    let params = ctx.request.query;
    let data= await Article.getAdminArticles(params);
    console.log(data);
    let retData={
        total: data.count,
        list: data.rows,
        pages: Math.ceil(data.count / parseInt(params.pageSize))
    };
    new global.success(ctx,retData);
});


module.exports = router;