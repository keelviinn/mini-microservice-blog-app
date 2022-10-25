import React from 'react';
import { PostCreate } from './PostCreate';
import { PostList } from './PostList';

const App = () => {
  return (
    <div className='container'>
      <h1>Create Post</h1>
      <PostCreate />
      <h1>Posts</h1>
      <hr />
      <PostList />
    </div>
  );
};

export default App;