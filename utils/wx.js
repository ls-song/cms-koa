const util = require('util');
const {wx} = require('../config/config');
const axios = require('axios');

const codeToken = async (code) => {
    let url = util.format(wx.loginUrl, wx.appId, wx.appSecret, code);
    const res = await axios.get(url);
    if (!res) {
        throw new global.errs.NotFound("暂未找到资源")
    }
    return res;
};

module.exports = codeToken;