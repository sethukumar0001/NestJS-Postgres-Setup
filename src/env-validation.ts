import * as Joi from 'joi';

export const EnvSchemaValidator = Joi.object({
  NODE_ENV: Joi.string()
    .valid('local', 'development', 'staging', 'production')
    .default('local'),
  PORT: Joi.number().required(),
  JWT_ACCESS_TOKEN_SECRET: Joi.string().required(),
  JWT_ACCESS_TOKEN_EXPIRY: Joi.string().required(),
  RESET_PASSWORD_TOKEN_EXPIRY_DAYS: Joi.number()
    .greater(0)
    .required(),
  // APP_FRONTEND_URL: Joi.string().required(),
  // APP_DEFAULT_CURRENCY: Joi.string().required(),
  // APP_DEFAULT_COUNTRY_CODE: Joi.string().required(),
  // APP_DEFAULT_DIAL_CODE: Joi.string().required(),
  // APP_DEFAULT_TIMEZONE: Joi.string().required(),
  TYPEORM_HOST: Joi.string().required(),
  TYPEORM_PORT: Joi.number().required(),
  TYPEORM_USERNAME: Joi.string().required(),
  TYPEORM_PASSWORD: Joi.string().required(),
  TYPEORM_DATABASE: Joi.string().required(),
  TYPEORM_ENTITIES: Joi.string().required(),
  TYPEORM_SYNCHRONIZE: Joi.boolean().required(),
  TYPEORM_MIGRATIONS: Joi.string().required(),
  TYPEORM_MIGRATIONS_DIR: Joi.string().required(),
  TYPEORM_MIGRATIONS_RUN: Joi.boolean().required(),
  // GOOGLE_APPLICATION_CREDENTIALS: Joi.string().required(),
  TYPEORM_LOGGING: Joi.boolean().required(),
  // AWS_REGION: Joi.string().required(),
  // AWS_ACCESS_KEY_ID: Joi.string().required(),
  // AWS_SECRET_ACCESS_KEY: Joi.string().required(),
  // AWS_PUBLIC_BUCKET_NAME: Joi.string().required(),
  // AWS_PRIVATE_BUCKET_NAME: Joi.string().required(),
  // AWS_SQS_NAME: Joi.string().required(),
  // AWS_SQS_URL: Joi.string().required(),
  // EMAIL_FROM: Joi.string().required(),
  // SMTP_HOST: Joi.string().required(),
  // SMTP_PORT: Joi.number().required(),
  // SMTP_SECURE: Joi.boolean().required(),
  // SMTP_USERNAME: Joi.string().required(),
  // SMTP_PASSWORD: Joi.string().required(),
});
