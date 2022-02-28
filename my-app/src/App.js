import React from 'react';
import Content from './components/Content';
import Header from './components/Header';
import './style.css';

function App() {
  return (
    <div className="App">
      <div class="container">
        {/* <!--   header --> */}
        <Header />
        {/* <!--   /header --> */}

        {/* <!--   content --> */}
        <Content />
        {/* <!--   /content --> */}
      </div>
    </div>
  );
}

export default App;
