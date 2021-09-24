const db = require('../database');


// Identificar as vendas e relação entre o vendedor
class StorageController {
    
    #connection;
    #tabela_de_vendas = "tbl_vendas";

    constructor(db) {
        this.#connection = db;
    }

    async getUltimasVendas() {
        this.#connection(this.#tabela_de_vendas)
            .select('')
    }

}