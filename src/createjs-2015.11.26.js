/*
 * @Description:
 * @Author: 彭祥 (Email:245803627@qq.com)
 * @Date: 2020-05-28 16:19
 * @LastEditors: pengxiang
 * @LastEditTime: 2020-05-28 16:19
 */
require(
    'imports-loader?this=>window!' +
    './libs/2015.11.26/createjs-2015.11.26.min.js'
);

// module.exports = window.createjs;
module.exports = require(
    'imports-loader?this=>window!' +
    'exports-loader?window.createjs!'
);
