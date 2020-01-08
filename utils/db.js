const Sequelize = require('sequelize');
const {database} = require('../config/config');
const sequelize = new Sequelize(database.dbname, database.username, database.password, {
    dialect: 'mysql',
    host: database.host,
    port: database.port,
    logging: true,//显示操作数据库命令
    timezone: '+08:00',//北京时间为准
    define: {}
});
sequelize.sync({
    force:false
});

module.exports = {
    sequelize
};