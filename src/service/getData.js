import * as login from './tempdata/login';


/**
 * 创建临时数据
 */
const setpromise = data => {
    return new Promise((resolve, reject) => {
        if (data) {
            resolve(data);
        } else {
            reject();
        }
    });
};

var getUser = () => setpromise(login.userInfo);

export {getUser};