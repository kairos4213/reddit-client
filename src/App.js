import React from 'react';
import './App.css';
import NavBar from './features/navBar/NavBar'
import PostsContainer from './features/posts/postsContainer/PostsContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <main>
        <PostsContainer />
      </main>
    </div>
  );
}

export default App;
