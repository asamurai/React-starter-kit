let configureStoreEnvConfig = null;

switch (process.env.NODE_ENV) {
    case 'production':
        configureStoreEnvConfig = require('./configureStore.prod.js');
        break;
    case 'development':
    case 'test':
    default:
        configureStoreEnvConfig = require('./configureStore.dev.js');
        break;
}
    
module.exports = configureStoreEnvConfig;
