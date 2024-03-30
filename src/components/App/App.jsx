import userData from '../../userData.json';
import friends from '../../friends.json';
import transactions from '../../transactions.json';
import Profile from '../Profile/Profile.jsx';
import FriendList from '../FriendList/FriendList';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import css from './App.module.css';

export default function App() {
  return (
    <div className={css.page}>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}
