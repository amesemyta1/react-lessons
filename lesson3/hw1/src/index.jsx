import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Profile from './Profile.jsx';

const rootElement = document.querySelector('#root');

// put your code here

const userData = {
  firstName: 'James',
  lastName: 'Bond',
  birthDate: '1991-01-17T11:11:11.819Z',
  birthPlace: 'London',
};

// put your code here

ReactDOM.render(<Profile {...userData} />, rootElement);
