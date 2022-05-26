import FriendItem from "./friendItem/FriendItem";
import e from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  return (
    <ul className={e.friendList}>
      {friends.map((item) => (
        <FriendItem
          key={item.id}
          isOnline={item.isOnline}
          avatar={item.avatar}
          userName={item.userName}
        />
      ))}
    </ul>
  );
};

export default FriendList;
