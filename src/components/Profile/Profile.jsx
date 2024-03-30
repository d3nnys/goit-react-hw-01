import css from './Profile.module.css';

export default function Profile({
  username,
  tag,
  location,
  avatar,
  stats: { followers, likes, views },
}) {
  return (
    <div className={css.cardWrapper}>
      <div className={css.card}>
        <img
          className={css.cardImg}
          src={avatar}
          alt={tag}
          width="80"
          height="80"
        />
        <p className={css.name}>{username}</p>
        <p className={css.text}>{tag}</p>
        <p className={css.text}>{location}</p>
      </div>

      <ul className={css.cardList}>
        <li className={css.cardListItem}>
          <span className={css.itemText}>Followers</span>
          <span className={css.itemTextCount}>{followers}</span>
        </li>
        <li className={css.cardListItem}>
          <span className={css.itemText}>Views</span>
          <span className={css.itemTextCount}>{views}</span>
        </li>
        <li className={css.cardListItem}>
          <span className={css.itemText}>Likes</span>
          <span className={css.itemTextCount}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
