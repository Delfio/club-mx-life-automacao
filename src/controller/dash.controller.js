const { Knex } = require("knex");
const dictionaryOfCommission = require("../helpers/dictionary-of-commissions");

class dashController {
  /**
   * @type Knex
   */
  #connection;

  #tables = {
    tabela_de_vendas: "extrato",
    tabela_usuarios: "usuarios",
    tabela_rede: "rede",
  };

  constructor(connection) {
    this.#connection = connection;
  }

  async #findUserByEmail(usrEmail) {
    return this.#connection(this.#tables.tabela_usuarios)
      .select("id")
      .where("email", "=", usrEmail)
      .first();
  }

  async #inserExtrato(userId, userPatrocinador, valor) {
    const formatMessage = (usr) => {
      return `Comissão proveniente de um ganho direto do usuário ${usr}`;
    };
    return this.#connection(this.#tables.tabela_de_vendas).insert({
      type: 1,
      id_usuario: userId,
      valor,
      data: new Date(),
      mensagem: formatMessage(userPatrocinador),
    });
  }

  /**
   * 
   * @param {*} usrId 
   * @param {*} arrRede 
   * @param {*} limit 
   * @returns [id] Array de ids seguindo a sequência de relação direta
   */
  async #buscarRedeCompleta(usrId, arrRede = [], limit) {
    if (limit === arrRede.length) return arrRede;

    const rede = await this.#connection(this.#tables.tabela_rede)
      .select(["id_usuario", "id_patrocinador"])
      .where("id_usuario", "=", usrId)
      .first();

    if (
      !Number(rede) ||
      Number(rede.id_patrocinador) === Number(usrId) ||
      !Number(rede.id_patrocinador)
    ) {
      return arrRede;
    }

    arrRede.push(rede.id_patrocinador);

    return this.#buscarRedeCompleta(rede.id_patrocinador, arrRede, limit);
  }

  async insertCommission(userVendedor, userComprador, total) {
      
    // Buscar os níveis relacionados a esse cara
    const [usrVendedor, usrComprador] = await Promise.all([
      this.#findUserByEmail(userVendedor.email),
      this.#findUserByEmail(userComprador.email),
    ]);

    // Validar se o comprador é um colaborador para definir qual regra utilizar
    
    // Regra da distribuição de lucros:
    // usr1
    // usr2, usr3
    //  usr2.1, usr2.2
    //  usr2.3, usr2.4, usr 2.5
    //      usr2.3.1,
    //          usr2.3.1.1, usr2.3.1.2,
    //          usr2.3.1.3,
    //              usr2.3.1.3.1, usr 2.3.1.2
    //              usr2.3.1.3, usr 2.3.1.4, usr2.3.1.5, usr2.3.1.6
    //                              usr2.3.1.4.1
    //                              usr2.3.1.4.2, usr2.3.1.4.3
    //                              usr2.3.1.4.4, usr2.3.1.4.5, usr2.3.1.4.6

    const { dictionary_of_commission, dictionary_of_commission_sales } =
      dictionaryOfCommission;

    const _getLimitOfNetworkDistribution = (direct) => {
      if (direct) {
        // vendedor !== comprador
        return Object.keys(dictionary_of_commission_sales).length;
      }
      // vendedor === comprador
      return Object.keys(dictionary_of_commission).length;
    };

    // usuario comprador == usuario vendedor?
    // ou usuario comprador é um usuário registrado?
    const limit = (() => {
      return _getLimitOfNetworkDistribution(
        usrComprador && usrComprador === usrVendedor
      );
    })();

    const fullNetwork = await this.#buscarRedeCompleta(usrVendedor, [], limit);

    const allOperations = Array.from(fullNetwork).map((_netWork, index) => {
        
    })
    

    // const allComissonCalculate = await this.#calculate_cmmision_function({
    //     total_sales,
    //     level,
    //     is_direct
    // });
  }
}

module.exports = dashController;
