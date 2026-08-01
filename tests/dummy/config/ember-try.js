'use strict';

const getChannelURL = require('ember-source-channel-url');
const { embroiderSafe, embroiderOptimized } = require('@embroider/test-setup');

module.exports = async function () {
  return {
    packageManager: 'pnpm',
    scenarios: [
      {
        name: 'ember-lts-3.28-leaflet-0.7.7',
        npm: {
          devDependencies: {
            'ember-cli': '~4.12.0',
            'ember-source': '~3.28',
            'ember-leaflet-marker-cluster': '0.2.0',
            'ember-resolver': '^8.1.0',
            leaflet: '~0.7.7'
          }
        }
      },
      {
        name: 'ember-lts-4.12',
        npm: {
          devDependencies: {
            'ember-source': '~4.12.0'
          }
        }
      },
      {
        name: 'ember-lts-5.12',
        npm: {
          devDependencies: {
            'ember-source': '~5.12.0'
          }
        }
      },
      {
        name: 'ember-lts-6.12',
        npm: {
          devDependencies: {
            'ember-source': '~6.12.0'
          }
        }
      },
      {
        name: 'ember-release',
        npm: {
          devDependencies: {
            'ember-source': await getChannelURL('release')
          }
        }
      },
      {
        name: 'ember-beta',
        npm: {
          devDependencies: {
            'ember-source': await getChannelURL('beta')
          }
        }
      },
      {
        name: 'ember-canary',
        npm: {
          devDependencies: {
            'ember-source': await getChannelURL('canary')
          }
        }
      },
      embroiderSafe(),
      embroiderOptimized()
    ]
  };
};
