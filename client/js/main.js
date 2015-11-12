import React            from 'react';
import ReactDOM         from 'react-dom';
import App              from './components/App';

require('../sass/main.sass');


ReactDOM.render(
  <div>
    <App />
  </div>,
  document.getElementById('app')
);