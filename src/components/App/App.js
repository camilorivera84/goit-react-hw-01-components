import React from 'react';

import Profile from '../Profile/Profile';
import user from '../json/user.json';
import Statistics from '../Statistics/Statistics';
import statisticsData from '../json/data.json';
import FriendList from '../friendList/FriendList';
import friendsData from '../json/friends.json';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import transactionsData from '../json/transaction.json';

function App() {
  return (
    <div className="App">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics stats={statisticsData} />

      <FriendList friends={friendsData} />

      <TransactionHistory items={transactionsData} />
    </div>
  );
}

export default App;
