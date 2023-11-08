const fs = require('fs');

const { MOCK_CONFIG } = require('./__mocks__/config.mock');
const config = require('./src/services/config');

config.default.setConfig(MOCK_CONFIG);

(() => {
  const filename = '.remote-config.js';

  if (!fs.existsSync(filename)) {
    fs.writeFileSync(
      filename,
      JSON.stringify({
        apiUrl: 'https://localhost:3000',
        conferenceLayerUrl: 'https://localhost:8080',
      }),
    );
  }
})();
