import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent';

function Profile() {
  return (
    <img
      src="https://i.imgur.com/lICfvbD.jpg"
      alt="Aklilu Lemma"
    />
  );
}

export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <h1>Good job!</h1>
      <Profile />
      <Profile />
      <Profile />
      <div>
        <p>This image represents Aklilu Lemma, an Ethiopian scientist known for his work on the use of the endod plant in the fight against schistosomiasis. He made significant contributions to medical science and is celebrated for his efforts in improving public health in Africa.</p>
      </div>
    </section>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <h1>Book Tracker Pro</h1>
      <Gallery />
  <MyComponent />  {MyComponent}
    </div>
  );
}

//export default App;