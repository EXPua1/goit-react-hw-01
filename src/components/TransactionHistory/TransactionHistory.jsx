import css from "./TransactionHistory.module.css";
const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transTable}>
      <thead className={css.transThead}>
        <tr className={css.transTr}>
          <th className={css.transTh}>Type</th>
          <th className={css.transTh}>Amount</th>
          <th className={css.transTh}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item) => {
          return (
            <tr className={css.transTr} key={item.id}>
              <td className={css.transTd}>{item.type}</td>
              <td className={css.transTd}>{item.amount}</td>
              <td className={css.transTd}>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default TransactionHistory;
