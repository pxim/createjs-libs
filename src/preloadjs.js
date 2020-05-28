/*
 * @Description:
 * @Author: 彭祥 (Email:245803627@qq.com)
 * @Date: 2020-05-28 16:16
 * @LastEditors: pengxiang
 * @LastEditTime: 2020-05-28 16:16
 */
require(
    'imports-loader?this=>window!' +
    './libs/1.0.0/preloadjs.min.js'
);

// module.exports = window.createjs;
module.exports = require(
    'imports-loader?this=>window!' +
    'exports-loader?window.createjs!'
);
