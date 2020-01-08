//菜单

const {Sequelize, Model} = require('sequelize');
const {sequelize} = require('../utils/db');

class Menu extends Model {
}

Menu.init({
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    menuName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    href: Sequelize.STRING,
    icon: Sequelize.STRING,
    parentId: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    }
}, {sequelize, tableName: 'cms_menu'});

module.exports = Menu;