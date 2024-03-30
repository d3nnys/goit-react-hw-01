import css from './TransactionHistory.module.css';
import clsx from 'clsx';

export default function TransactionHistory({ items }) {
  const changeColorItem = clsx(
    css.listItemTable,
    items % 2 === 0 ? css.firstChild : css.secondChild
  );
  return (
    <table className={css.list}>
      <thead>
        <tr className={css.firstString}>
          <th className={css.firstStringText}>Type</th>
          <th className={css.firstStringText}>Amount</th>
          <th className={css.firstStringText}>Currency</th>
        </tr>
      </thead>

      <tbody className={css.firstChild}>
        {items.map(item => (
          <tr className={changeColorItem} key={item.id}>
            <td className={css.listItemTable}>{item.type}</td>
            <td className={css.listItemTable}>{item.amount}</td>
            <td className={css.listItemTable}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
