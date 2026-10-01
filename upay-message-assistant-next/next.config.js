/** @type {import('next').NextConfig} */
module.exports = {
  async rewrites() {
    return [{ source: '/v1/messages', destination: '/api/messages' }];
  },
};
