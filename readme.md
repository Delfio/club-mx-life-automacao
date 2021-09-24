# Descrição do projeto

O projeto deve buscar as vendas na loja e inserir elas no painel.
Ao inserir no painel, um cálculo tem que ser feito, distribuindo os lucros

## Regra de lucros

- 3. SISTEMA DE BONIFICAÇÃO DE REDE
    TODO INFLUENCIADOR TERÁ UM PERCENTUAL DE ACORDO COM A MOVIMENTAÇÃO DO SEU INDICADO (NAS COMPRAS E NAS VENDAS).
    Ex: na compra do Pedro de 100 reais, o João tem direito a 8% sobre o valor pago na plataforma. 
    Ex: na compra de Maria de 100 reais, Pedro tem direito a 8% e João tem direito a 4% sobre o valor pago na plataforma e assim sucessivamente. 

    1 nível 8% 
    2 nível 4%
    3 nível 3% 
    4 nível 2%
    5 nível 1% 
    6 nível 1% 
    7 nível 1% 

    Sendo 20% no total distribuído na rede.

- 4. SISTEMA DE BONIFICAÇÃO ESCRITÓRIO VIRTUAL 
    O influenciador cadastrado tem direito a 50% de desconto na compra dentro do escritório virtual.

- 5. SISTEMA DE BONIFICAÇÃO E-COMMERCE
    O influenciador tem direito a 50% de comissão sobre todos os produtos vendidos através do seu e-commerce.
    Ex: na compra do Pedro de 100 reais, o João tem direito a 8% sobre o valor pago na plataforma. 
    Ex: na compra de Maria de 100 reais, Pedro tem direito a 50% de comissao e João tem direito a 8% sobre o valor pago na plataforma e assim sucessivamente. 
    1 nivel 50%
    2 nível 8% 
    3 nível 4%
    4 nível 3% 
    5 nível 2%
    6 nível 1% 
    7 nível 1% 
    8 nível 1%

## Regra na aplicação

- 1. Buscar as vendas feitas
    - Com a venda em mãos, identificar se o comprador esta cadastrado na plataforma (painel administrativo), ou seja se o comprador é um colaborador e esta comprando itens pessoais.
        - caso sim - aplicar a distribuição do lucro no painel?
        - caso não - o vendedor nv1 ganha 50% de comissão direta da venda, mas e os demais ganham em cima disso?
