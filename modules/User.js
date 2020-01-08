const {Sequelize, Model} = require('sequelize');
const {sequelize} = require('../utils/db');

class User extends Model {
    static async wxUserLogin(openId) {
        let user = User.findOne({
            where: {
                openId
            }
        });
        if (!user) {
            throw new global.errs.NotFound("该用户暂未注册");
        }
        return user;
    }

    static async register(params) {
        let user = User.create({
            ...params
        });
        return user;
    }
   
}

User.init({
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nickName: Sequelize.STRING,
    userName: Sequelize.STRING,
    mobile: Sequelize.STRING,
    password: Sequelize.STRING,
    email: Sequelize.STRING,
    openId: Sequelize.STRING,
    country: Sequelize.STRING,
    province: Sequelize.STRING,
    city: Sequelize.STRING,
    area: Sequelize.STRING,
    avatarUrl: Sequelize.STRING,
    sex: Sequelize.INTEGER,//1代表男，2代表女
    status: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
        comment: '0代表禁用，1表示可用'
    }
}, {sequelize, tableName: 'cms_user'});

module.exports = User;