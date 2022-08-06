import React from 'react';
import Comment from './Comment.jsx';

const userInfo = {
  name: 'Tom',
  avatarUrl: 'https://avatars3.githubusercontent.com/u10001',
};

const author = {
  user: userInfo, 
  text: "Good job", 
  date: new Date(),
}

const App = () => {
  return <Comment { author } />;
};

export default App;
