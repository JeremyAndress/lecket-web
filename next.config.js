module.exports = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true
  },
  publicRuntimeConfig: {
    backendUrl: process.env.API_URL,
    awsUrl: process.env.AWS_URL,
    apiKey: process.env.API_KEY
  }
};
