import React from 'react';
import ReactDOM from 'react-dom';

import 'sass/app.scss';

const app = (
  <div>
    <h1>Hello from React</h1>
    <p className="sass">Sass should have colored this orange</p>
  </div>
);

ReactDOM.render(
  app,
  document.getElementById('app')
);
