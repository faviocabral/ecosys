// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host : 'mysql-94780-0.cloudclusters.net',
      port : 17425,
      user : 'admin',	
      password : 'We3zMFT2',
      database : 'ecosys'
    },
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds'
    }

  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'ecosys',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './db/migrations'
    }
  },

  production: {
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
      tableName: 'knex_migrations',
      directory: './db/migrations'

    }
  }

};
