import React from 'react';
import './App.css';
import List from './components/List';

const personal = [
  '29 anos',
  'Casado',
  '1 filho e 1 pet',
  '21 - 98362033',
  'diegomcsilva191@gmail.com',
];

const tecnologies = [
  'html',
  'css',
  'js',
  'react',
  'vtex'
];

function App() {
  return (
    <div className="code">
      <List listItens={personal} from='Diego Marcelo Costa da Silva' />
      <List listItens={tecnologies} from='tecnologies' />
    </div>
  );
}

export default App;
