import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import WeatherViewer from './Components/WeatherViewer';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<WeatherViewer />, document.getElementById('root'));


serviceWorker.unregister();
