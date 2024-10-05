import React from 'react';
import { Provider } from "react-redux"
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { store } from './redux/store';

function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
          <main>
            <Outlet />
          </main>
        <Footer />
      </Provider>
    </>
  );
}

export default App;