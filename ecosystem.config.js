module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [
    {
      name: process.env.APP_NAME || 'My App',
      instances: 2,
      exec_mode: 'cluster',
      script: './server/dist/server/src/server.js',
      env_production: {
        NODE_ENV: 'production',
        HOST: '0.0.0.0'
      }
    },
  ]
};
