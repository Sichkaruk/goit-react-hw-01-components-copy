import s from "./FriendItem.module.css";

const FriendItem = ({ isOnline, avatar, userName }) => {
  return (
    <li className={s.item}>
      <span className={isOnline ? s.online : s.offline}></span>
      <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
      <p>{userName}</p>
    </li>
  );
};

export default FriendItem;
