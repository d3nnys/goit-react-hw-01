import clsx from 'clsx';
import css from './FriendListItem.module.css';

export default function FriendListItem({
  friends: { avatar, name, isOnline },
}) {
  const chooseYourClass = clsx(
    css.itemText,
    isOnline ? css.online : css.offline
  );

  return (
    <>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p className={chooseYourClass}>{isOnline ? 'Online' : 'Offline'}</p>
    </>
  );
}
