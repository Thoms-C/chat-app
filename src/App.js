import React from 'react';
import './App.css';
import Contact from './components/Contact';

const user1 = {
  name: 'Porter Parker',
  avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
  status: true,
}

const user2 = {
  name: 'Dale James',
  avatar: 'https://randomuser.me/api/portraits/men/20.jpg',
  status: true,
}

const user3 = {
  name: 'Alexis Miller',
  avatar: 'https://randomuser.me/api/portraits/women/84.jpg',
  status: false,
}


function App() {
  return (
    <div className="App">
      <Contact user={user1} />
      <Contact user={user2} />
      <Contact user={user3} />
    </div>
  );
}


export default App;
