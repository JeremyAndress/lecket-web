module.exports = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true
  },
  publicRuntimeConfig: {
    backendUrl: process.env.API_URL
  }
};
