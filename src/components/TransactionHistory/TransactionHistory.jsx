import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';


export const TransactionHistory = ({ items }) => { return (
    <table className={css.transactionHistory}>
  <thead className={css.hederRow}>
    <tr className={css.valuesRow}>
      <th className={css.columnHeader}>Type</th>
      <th className={css.columnHeader}>Amount</th>
      <th className={css.columnHeader}>Currency</th>
    </tr>
  </thead>

    <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id} className={css.valuesRow}>
            <td className={css.transactionData}>{type}</td>
            <td className={css.transactionData}>{amount}</td>
            <td className={css.transactionData}>{currency}</td>
          </tr>
        )
      )}
  </tbody>
</table>

)
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
