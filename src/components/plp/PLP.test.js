import React from 'react';
import ReactDOM from 'react-dom';
import Plp from './Plp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Plp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
