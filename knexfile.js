module.exports = {
    client: "mysql2",
    conection: {
        database: "apinode",
        user: "root",
        password: ""
    },
    pool: {
        min: 2,
        max: 10
    },
    migrations: {
        tableName: "knex_migrations"
    }
}