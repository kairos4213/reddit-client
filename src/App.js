import React from 'react';
import './App.css';
import NavBar from './features/navBar/NavBar'
import PostContainer from './features/posts/postContainer/PostContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <main>
        <PostContainer />
      </main>
    </div>
  );
}

export default App;
