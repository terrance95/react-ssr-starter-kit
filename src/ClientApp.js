import { React } from 'react';
import { hydrate } from 'react-dom';
import App from './App';

// Any other browser-only components and files

hydrate(<App />, document.getElementById('root'));
