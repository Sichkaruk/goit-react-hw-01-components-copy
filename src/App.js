import user from "./data/user.json";
import Profile from "./components/profile/Profile";
import data from "./data/data.json";
import Statistics from "./components/statistics/Statistics";
import friends from "./data/friends.json";
import FriendList from "./components/friends/FriendList";

function App() {
  return (
    <div className="container">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
    </div>
  );
}

export default App;
