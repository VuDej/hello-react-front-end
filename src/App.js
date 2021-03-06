/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Homepage from './components/Home';
import Greeting from './components/Greeting';
import store from './redux/configureStore';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/greetings" element={<Greeting />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
