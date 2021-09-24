const {knex} = require('knex');

const {
    openCartDb,
    painelDb
} = require('../../knex');

function factory() {

    const connection_config_open_cart = openCartDb({
        database: process.env.DB_NAME_STORAGE,
        host: process.env.DB_HOST_STORAGE,
        password: process.env.DB_PASSWORD,
        user: process.env.DB_USER,
    });

    const connection_config_dash = painelDb({
        database: process.env.DB_NAME_PAINEL,
        host: process.env.DB_NAME_PAINEL,
        password: process.env.DB_HOST_PAINEL,
        user: process.env.DB_USER,
    });

    const dbOpenCart = () => knex(connection_config_open_cart.production);
    const dbPainel = () => knex(connection_config_dash.production);

    return {
        dbOpenCart,
        dbPainel
    }
}

module.exports = factory;