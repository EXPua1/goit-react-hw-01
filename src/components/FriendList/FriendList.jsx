import FriendListItem from "./FriendListItem";
import css from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  return (
    <ul className={css.list}>
      {friends.map((item) => (
        <li className={css.item} key={item.id}>
          <FriendListItem
            photo={item.avatar}
            name={item.name}
            status={item.isOnline}
          />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
