const { MOCK_CONFIG } = require('./__mocks__/config.mock');
const config = require('./src/services/config');

config.default.setConfig(MOCK_CONFIG);
