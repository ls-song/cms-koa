//后台用户
const {Sequelize, Model} = require('sequelize');
const {sequelize} = require('../utils/db');

class Admin extends Model {
    static async login(params) {
        let user = await Admin.findOne({
            where: {
                mobile: params.mobile
            }
        });
        if (!user) {
            throw new global.errs.NotFound("用户不存在");
            return;
        }
        if (params.password !== user.password) {
            throw new global.errs.ParameterException("密码不正确");
            return;
        }
        return user;
    }
}

Admin.init({
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userName: Sequelize.STRING,
    mobile: Sequelize.STRING,
    password: Sequelize.STRING,
    email: Sequelize.STRING,
    avatarUrl: Sequelize.STRING,
    birthday: Sequelize.STRING,
    sex: Sequelize.INTEGER,//1代表男，2代表女
    status: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
        comment: '0代表禁用，1表示可用'
    }
}, {sequelize, tableName: 'cms_admin'});

module.exports = Admin;