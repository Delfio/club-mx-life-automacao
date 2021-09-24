module.exports = ({
  dictionary_of_commission_sales,
  dictionary_of_commission,
}) => {
  // Uma compra direta é uma compra que não é feita por um colaborador
  async function calculateCommision({ total_sales, level, is_direct = false }) {
    if (is_direct) {
      const multiply =
        dictionary_of_commission_sales[String(level)] ||
        dictionary_of_commission_sales["7"];
      return Math.round(total_sales * multiply * 100) / 100;
    }

    const multiply =
      dictionary_of_commission[String(level)] || dictionary_of_commission["8"];
    return Math.round(total_sales * multiply * 100) / 100;
  }

  return calculateCommision;
};
