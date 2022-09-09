const prod = process.env.NODE_ENV === 'production';

const runtimeCaching = require('next-pwa/cache');
const withPWA = require('next-pwa')({
  dest: 'public',
  runtimeCaching,
  disable: prod ? false : true,
});

module.exports = withPWA({});