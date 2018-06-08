let webpackEnvConfig = null;

switch (process.env.NODE_ENV) {
    case 'production':
        webpackEnvConfig = require('./webpack.config.prod');
        break;
    case 'development':
    case 'test':
    default:
        webpackEnvConfig = require('./webpack.config.dev');
        break;
}
    
module.exports = webpackEnvConfig;
