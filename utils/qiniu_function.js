const qiniu = require('qiniu');

class qnUpload {
    constructor(accessKey, secretKey, url) {
        this.accessKey = accessKey || 'N6sxy0jgAwwY9pd9vGsIgtBOu-UW3xuakoNQ2NIU';
        this.secretKey = secretKey || '7TKxJLwctpyPBYkCALYByylIqLSdtH5G7RsKbn9V';
        this.imageUrl = url || 'http://img.old-time.top';
        this.options = {
            scope: 'cms-mages',
            returnBody: `{"key":"${this.imageUrl}/$(key)","hash":"$(etag)","fsize":$(fsize),"bucket":"$(bucket)","name":"$(x:name)"}`,
            callbackBodyType: 'application/json'
        };
    }

    static buildDate() {
        let date = new Date();
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        return `${qnUpload.addNum(year)}/${qnUpload.addNum(month)}/${qnUpload.addNum(day)}`;
    }

    static addNum(time) {
        return time < 10 ? '0' + time : time;
    }

    getToken() {
        const mac = new qiniu.auth.digest.Mac(this.accessKey, this.secretKey);
        const putPolicy = new qiniu.rs.PutPolicy(this.options);
        const uploadToken = putPolicy.uploadToken(mac);
        return uploadToken;
    }

    config() {
        let config = new qiniu.conf.Config();
        config.zone = qiniu.zone.Zone_z1;
        return config;
    }

    uploadFile(file) {
        let config = this.config();
        let token = this.getToken();
        let formUploader = new qiniu.form_up.FormUploader(config);
        let putExtra = new qiniu.form_up.PutExtra();
        let index = file.name.lastIndexOf('.');
        let date = qnUpload.buildDate();
        let key = `images/${date}/${new Date().getTime()}${file.name.substr(index)}`;
        let res = new Promise((resolve, reject) => {
            formUploader.putFile(token, key, file.path, putExtra, (err, respBody, respInfo) => {
                    if (err) {
                        reject(err);
                    }
                    if (respBody.statusCode == 200) {
                    } else {
                        resolve(respInfo.data);
                    }
                }
            )
        })
        return res;
    }

}


module.exports = qnUpload;