import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import NavBar from './features/navBar/NavBar'
import PostContainer from './features/posts/postContainer/PostContainer';
import { getPopularPosts } from './features/posts/postsSlice';

function App() {
  const { isLoading } = useSelector((state) => state.posts)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPopularPosts())
  }, [])

  if (isLoading) {
    return <div>
      <h1>Loading...</h1>
    </div>
  }

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
