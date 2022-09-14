import dotenv from 'dotenv'
import Joi from 'joi'
import logger from './logger'
// import path from 'node:path'

dotenv.config({ path: './src/.env' })

const logErrorOnValidation = (message: string) => {
    logger.error(message)
    throw new Error()
}

const envSchema = Joi.object({
    NODE_ENV: Joi.string().case('lower').valid('development', 'production').required().error((error): any => console.log(error)),
    MONGO_URI: Joi.string().uri({
        scheme: [
            'mongodb',
            'mongodb+srv'
        ]
    })
    .description('Mongo DB URI, can be of type mongodb:// or mongodb+srv://')
    .error(error => logErrorOnValidation('error validating MONGO_URI')),
    PORT: Joi.number().default(8000).description('Port on which server is running').error(error => logErrorOnValidation('error validating PORT'))
})
.unknown() // overrrides the handling of unknown keys

const validationResult = envSchema.validate(process.env, { abortEarly: true })

if (validationResult.error)
    throw new Error()

export default validationResult