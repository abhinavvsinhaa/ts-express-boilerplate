import winston from 'winston';

const logger = winston.createLogger({
    format: winston.format.combine(
        winston.format.align(),
        winston.format.timestamp({
           format: 'DD-MM-YY HH:mm:ss'
       }),
        winston.format.printf((info): any => `[${[info.timestamp]}]: ${info.message}`),
    ),
    transports: [
        new winston.transports.Console({ 
            level: 'debug',
            format: winston.format.combine(
                winston.format.colorize({ all: true }),
                winston.format.splat(),
            )
        }), 
        new winston.transports.File({ filename: './src/logs/errors.log', level: 'error'})
    ],
    exceptionHandlers: [
        new winston.transports.File({ filename: "./src/logs/exception.log" })
    ],
    rejectionHandlers: [
        new winston.transports.File({ filename: './src/logs/rejection.log' })
    ]
})

export default logger;
