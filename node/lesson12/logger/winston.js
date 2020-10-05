const winston = require('winston');
const path = require('path');

module.exports = (label) => {

  const consoleOptions = {
    level: 'info',
    format: winston.format.combine(
      winston.format.label({label}),
      winston.format.colorize({colors: {info: 'yellow', error: 'red'}, all: true})
    )
  }
  const fileOptions = {
    level: 'error',
    filename: path.join(process.cwd(), 'logs', 'error.txt'),
    format: winston.format.combine(
      winston.format.label({label}),
      winston.format.json({space: 2}),
      winston.format.timestamp({
        format: 'YYYY-MM-DD HH:mm:ss'
      })
    )
  }

  const logger = winston.createLogger({
    transports: [
      new winston.transports.Console(consoleOptions),
      new winston.transports.File(fileOptions),
    ]
  })

  return {
    info: (error) => {
      return logger.info(error)
    },

    error: (error) => {
      return logger.error(error);
    }
  }
}