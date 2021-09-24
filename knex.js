const openCartDb = ({
  host,
  user,
  password,
  database
}) => ({
  development: {},
  production: {
    client: "mysql",
    connection: {
      host,
      user,
      password,
      charset: "utf8",
      database,
    },
    pool: {
      min: 2,
      max: 10,
    },
  },
});

const painelDb = ({
  host,
  user,
  password,
  database
}) => ({
    development: {},
    production: {
      client: "mysql",
      connection: {
        host,
        user,
        password,
        charset: "utf8",
        database,
      },
      pool: {
        min: 2,
        max: 10,
      },
    },
})

module.exports = { painelDb, openCartDb };
