import React from 'react';
import './App.css';
import Contactlist from './components/Contactlist'
import Contact from './components/Contact'


function App() {
  return (
    <div className="App">
      {Contactlist.map((user, i) => {
        return <Contact user {...user} key={i} />
      })}
    </div>
  );
}


export default App;

