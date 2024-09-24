import React from "react";
import css from "./FriendList.module.css";

const FriendListItem = ({ photo, name, status }) => {
  return (
    <div>
      <img src={photo} alt="Avatar" width="48" />
      <p className={css.itemName}>{name}</p>
      {status ? (
        <p className={css.online}>Online</p>
      ) : (
        <p className={css.offline}>Offline</p>
      )}
    </div>
  );
};
export default FriendListItem;
