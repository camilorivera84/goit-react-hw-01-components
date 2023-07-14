import React from 'react';

import Profile from './Profile';
import user from '../json/user.json';
import Statistics from './Statistics';
import statisticsData from '../json/data.json';
import FriendList from './FriendList';
import friendsData from '../json/friends.json';
import TransactionHistory from './TransactionHistory';
import transactionsData from '../json/transaction.json';

/*const products = [
  {
    id: 1,
    ProductName: 'user',
    ProductDescription: 'this is a default user',
    style: { color: 'green' },
  },
  {
    id: 2,
    image:
      'https://mariohernandez.vtexassets.com/arquivos/ids/213954-800-auto?v=637920274644600000&width=800&height=auto&aspect=true',
    ProductName: 'zapatos Mario Hernandez',
    ProductDescription: 'Color Negro',
    style: {
      backgroundColor: 'blue',
    },
  },
  {
    id: 3,
    image:
      'https://motomall.com.co/wp-content/uploads/2022/09/bicicleta-fratelli-forza-azul-lado1.jpg',
    ProductName: 'Bicicleta',
    ProductDescription: 'Color Azul',
  },
];
function App() {
  return (
    <div className="App">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          imageSrc={product.image}
          name={product.ProductName}
          description={product.ProductDescription}
          style={product.style}
        />
      ))}
      <Header color={'primary'}>Este es un titulo h1</Header>
      <Header variant={'h2'}>Este es un titulo h2</Header>
      <Header variant={'h3'}>Este es un titulo h3</Header>
    </div>
  );
}*/

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
      <div className="statistics">
        <Statistics title="UPLOAD STATS" stats={statisticsData} />
      </div>
      <div className="friends">
        <FriendList friends={friendsData} />
      </div>
      <div className="transaction">
        <TransactionHistory items={transactionsData} />
      </div>
    </div>
  );
}

export default App;
