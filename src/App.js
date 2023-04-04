import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';
import Header from './components/Header/Header';
import Slider from './components/Slider/Slider';

function App() {
  return (
    <Fragment className="App">
      <Header />
      <Slider />
    </Fragment>
  );
}

export default App;
