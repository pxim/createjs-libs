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
        "createjs": ['./src/createjs'],
        "easeljs": ['./src/easeljs'],
        "tweenjs": ['./src/tweenjs'],
        "soundjs": ['./src/soundjs'],
        "preloadjs": ['./src/preloadjs'],

        "createjs-2015.11.26": ['./src/createjs-2015.11.26'],
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
