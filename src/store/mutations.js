import {
    GET_USERINFO,
    OUT_LOGIN,
} from './mutation-types.js';

export default {
    //获取用户信息存入vuex
    [GET_USERINFO](state, info) {
        if (state.userInfo && (state.userInfo.username !== info.username)) {
            return;
        }
        if (!state.login) {
            return;
        }
        if (!info.message) {
            state.userInfo = {...info};
        } else {
            state.userInfo = null;
        }
    },
    //退出登录
    [OUT_LOGIN](state) {
        state.userInfo = null;
        state.login = false;
    },
};