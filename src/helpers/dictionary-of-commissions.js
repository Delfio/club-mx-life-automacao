// Dicionário utilizado para quando o comprador não é um vendedor
const dictionary_of_commission_sales = {
  0: 0.08,
  1: 0.04,
  2: 0.03,
  3: 0.02,
  4: 0.01,
  5: 0.01,
  6: 0.01,
};

// Dicionário utilizado para quando o comprador é um vendedor
const dictionary_of_commission = {
  0: 0.5,
  1: 0.08,
  2: 0.04,
  3: 0.03,
  4: 0.02,
  5: 0.01,
  6: 0.01,
  7: 0.01,
};


module.exports = {
    dictionary_of_commission_sales,
    dictionary_of_commission
}