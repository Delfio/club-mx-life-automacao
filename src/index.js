require('dotenv/config');
const express = require('express');
const db = require('./database');

const app = express();

// bc_clubmxlife -> escritório
// clubmxlife -> loja open cart


async function main() {
    try {
        
        const {
            dbOpenCart, // planos
            dbPainel // mxlifecountry
        } = db();

        const _dbOpenCart = dbOpenCart();

        const teste = await _dbOpenCart('planos').select('*');

        console.log(teste);
    } catch (err) {
        console.log(err);
    }
    
}

main();

