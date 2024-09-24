import React from "react";
import css from "./Profile.module.css";

export default function Profile({
  username,
  tag,
  location,
  avatar,
  followers,
  views,
  likes,
}) {
  return (
    <div className={css.profile_container}>
      <div className={css.profile_container_inner}>
        <img className={css.profileImg} src={avatar} alt={tag} />
        <p className={css.profileName}>{username}</p>
        <p className={css.profileTag}>@{tag}</p>
        <p className={css.profileLocation}>{location}</p>
      </div>

      <ul className={css.profileList}>
        <li className={css.profileList_item}>
          <span>Followers</span>
          <span className={css.spanData}>{followers}</span>
        </li>
        <li className={css.profileList_item}>
          <span>Views</span>
          <span className={css.spanData}>{views}</span>
        </li>
        <li className={css.profileList_item}>
          <span>Likes</span>
          <span className={css.spanData}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
