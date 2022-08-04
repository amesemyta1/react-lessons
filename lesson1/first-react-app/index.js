const rootElem = document.querySelector('#root');

const greetingElem = React.createElement(
  'div',
  { className: 'greeting' },
  'Hello, React! Its my first programm'
);

ReactDOM.render(greetingElem, rootElem);
