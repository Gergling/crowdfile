module.exports = {
  production: (process.env.NODE_ENV === 'production'),

  ports: {
    frontendServer: 3000,
    backendServer: 3001
  }
}
