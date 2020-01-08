//文章
const {Sequelize, Model} = require('sequelize');
const {sequelize} = require('../utils/db');
const Op=Sequelize.Op;
class Articles extends Model {
    static async getAdminArticles(params) {
        let pageSize =parseInt(params.pageSize);
        let pageNum = parseInt(params.pageNum);
        let articles = await Articles.findAndCountAll({
            where: {
                title: {
                    [Op.like]: `%${params.title}%`
                },
                status:params.status,
                category:params.category
            },
            limit: pageSize,
            offset: (pageNum - 1) * pageSize
        });
        return articles;
    }
}

Articles.init({
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        allowNull: false,
        type: Sequelize.STRING
    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    thumbnail: Sequelize.STRING,
    description: Sequelize.STRING,
    userId: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    },
    author:Sequelize.STRING,
    lookCount: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    },
    category:Sequelize.INTEGER,
    source:{
        type:Sequelize.INTEGER,
        defaultValue:0,
        comment: "0:表示转载，1表示原创"
    },
    status:{
        type:Sequelize.STRING,
        defaultValue:'2',
        comment: "1:已发布,2:未发布,3.已删除，4.违规的文章"
    }
}, {sequelize, tableName: 'cms_articles'});

module.exports = Articles;