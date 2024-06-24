import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.TransactionTable}>
      <thead>
        <tr>
          <th className={css.TableHeader}>Type</th>
          <th className={css.TableHeader}>Amount</th>
          <th className={css.TableHeader}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(items => (
          <tr className={css.TableRow} key={items.id}>
            <td className={css.TableData}>{items.type}</td>
            <td className={css.TableData}>{items.amount}</td>
            <td className={css.TableData}>{items.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
