/*
 * @Description:
 * @Author: 彭祥 (Email:245803627@qq.com)
 * @Date: 2020-05-28 13:47
 * @LastEditors: pengxiang
 * @LastEditTime: 2020-05-28 13:47
 */
const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        // "create": ['./src/create.js'],
        // "easel": ['./src/easel.js'],
        // "tween": ['./src/tween.js'],
        // "sound": ['./src/sound.js'],
        // "preload": ['./src/preload.js']
        "createjs-1.0.0": ['./src/1.0.0/createjs.min.js'],
        "easeljs": ['./src/1.0.0/easeljs.min.js'],
        "tweenjs": ['./src/1.0.0/tweenjs.min.js'],
        "soundjs": ['./src/1.0.0/soundjs.min.js'],
        "preloadjs": ['./src/1.0.0/preloadjs.min.js'],

        "createjs-2015.11.26": ['./src/2015.11.26/createjs-2015.11.26.min.js'],

        "createjs": ['./index.js']
    },
    output: {
        path: path.resolve(__dirname, "build/"),
        filename: "[name].js",
        libraryTarget: 'umd'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ]
};
