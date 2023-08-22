import React from 'react';
import './App.css';
import Navbar from './features/navBar/NavBar';
import PostsContainer from './features/posts/postsContainer/PostsContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <main>
        <PostsContainer />
      </main>
    </div>
  );
}

export default App;
