module.exports = {
  DB_NAME: process.env.DB_NAME || 'auto_shop',
  DB_USER: process.env.DB_USER || 'user',
  DB_PASS: process.env.DB_PASS || 'user',

  ROOT_EMAIL: process.env.ROOT_EMAIL || 'admin@cars.com',
  ROOT_EMAIL_PASSWORD: process.env.ROOT_EMAIL_PASS || '12345',
  FRONTEND_URL: process.env.FORNTEND_URL || 'https://owu.com.ua/',

  ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET || 'dasdsdasd',
  REFRESH_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET || 'usqweqeqwewqer',

  WHITE_LIST: process.env.WHITE_LIST || 'http://localhost:3000;http://localhost:5000',
  ENV: process.env.ENV || 'DEV',
}
