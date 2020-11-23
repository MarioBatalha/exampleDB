// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      type: 'postgres',
      host: 'localhost',
      port: 3000,
      user: 'postgres',
      password: 'duo69',
      database: 'exemploDB'
    },
    migrations: {
      directory: './migrations'
    },
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './migrations'
    },
  },

  production: {
    client: 'pg',
    connection: {
      type: 'postgres',
      host: 'ec2-107-22-241-205.compute-1.amazonaws.com',
      port: 5432,
      user: 'nktffycamtpbty',
      password: '306b02e6afde4b31c7b5015a0cee94888ba425fb520220e7bee4cbcbe81c7648',
      database: 'df2j4n68b226b5',
      url: process.env.DATABASE_URL
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './migrations'
    },
  }

};
