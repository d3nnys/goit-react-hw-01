import FriendListItem from './FriendListItem';
import css from './FriendList.module.css';

export default function FriendList({ friends }) {
  return (
    <ul className={css.list}>
      {friends.map(friend => (
        <li className={css.listItem} key={friend.id}>
          <FriendListItem friends={friend} />
        </li>
      ))}
    </ul>
  );
}
