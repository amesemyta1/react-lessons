import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// <h1 class="title">Todo List</h1>

const rootElement = document.querySelector('#root');

const element = (
<h1 className="title">Todo List</h1> 
);

ReactDOM.createRoot(rootElement).render(element);
