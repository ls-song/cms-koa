//文章类别
const {Sequelize, Model} = require('sequelize');
const {sequelize} = require('../utils/db');

class Category extends Model {
    static async setCategory(params) {
        return await Category.create({
            ...params
        })
    }
}

Category.init({
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    parentId: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    },
    sort: {
        type: Sequelize.INTEGER,
        defaultValue: 1
    }
}, {sequelize, tableName: 'cms_category'});

module.exports = Category;