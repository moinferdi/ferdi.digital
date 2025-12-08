module.exports = {
  apps: [
    {
      name: "ferdi.digital",
      port: "3002",
      script: ".output/server/index.mjs",
      env: {
        NODE_ENV: "production",
        NITRO_PORT: 3002,
      },
      env_file: ".env",
    },
  ],
};
