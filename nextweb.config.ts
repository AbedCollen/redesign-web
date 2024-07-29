import type { Configuration } from '@nxweb/builder';

export default {
  devtool: 'source-map',
  webFonts: {
    fonts: [
      {
        family: 'DM Sans',
        variants: ['300', '400', '500', '700']
      },
      {
        family: 'Fira Code',
        variants: ['300', '400', '500', '700']
      }
    ]
  },
  devServer: {
    port: 5003
  },
  html: {
    csp: {
      policy: {
        'connect-src': [
          'default',
          'apigateway-dev.tokrum.com:*',
          'apigateway.tokrum.com:*',
          'cdn.cloud.nextplatform.ai'
        ],
        'frame-src': [
          'default',
          'www.youtube.com',
          'www.google.com'
        ],
        'img-src': [
          'default',
          'apigateway.tokrum.com:*',
          'apigateway-dev.tokrum.com:*'
        ],
        'style-src': [
          'default',
          'cdn.cloud.nextplatform.ai'
        ],
        'font-src': [
          'default',
          'cdn.cloud.nextplatform.ai'
        ],
        'script-src': [
          'default', 
          'www.googletagmanager.com',
          'www.google-analytics.com',
          'www.google.com',
          'www.gstatic.com',
          'cdn.cloud.nextplatform.ai'
        ]
      }
    }
  }
} as Configuration;
