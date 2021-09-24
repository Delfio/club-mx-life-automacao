// Dicionário utilizado para quando o comprador não é um vendedor
const dictionary_of_commission_sales = {
  1: 0.08,
  2: 0.04,
  3: 0.03,
  4: 0.02,
  5: 0.01,
  6: 0.01,
  7: 0.01,
};

// Dicionário utilizado para quando o comprador é um vendedor
const dictionary_of_commission = {
  1: 0.5,
  2: 0.08,
  3: 0.04,
  4: 0.03,
  5: 0.02,
  6: 0.01,
  7: 0.01,
  8: 0.01,
};


module.exports = {
    dictionary_of_commission_sales,
    dictionary_of_commission
}