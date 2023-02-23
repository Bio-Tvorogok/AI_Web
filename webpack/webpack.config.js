const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const path = require('path');

module.exports = (envVars) => {
    const { env } = envVars;
    const envConfig = require(`./webpack.${env}.js`);
    const config = merge(commonConfig, envConfig);
    config.output.path = path.resolve(__dirname, '..', `dist/${env}`);
    return config;
};
