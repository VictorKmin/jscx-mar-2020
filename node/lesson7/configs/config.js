module.exports = {
  DB_NAME: process.env.DB_NAME || 'auto_shop',
  DB_USER: process.env.DB_USER || 'user',
  DB_PASS: process.env.DB_PASS || 'user',
  ROOT_EMAIL: process.env.ROOT_EMAIL || 'admin@cars.com',
  ROOT_EMAIL_PASSWORD: process.env.ROOT_EMAIL_PASSWORD || '12345',
  ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET || 'dasdsdasd',
  REFRESH_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET || 'usqweqeqwewqer',
}
